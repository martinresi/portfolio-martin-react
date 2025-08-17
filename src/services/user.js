import { defineStore } from "pinia";
import { authUrl, DBService, post, site_name } from "@/services/apiReq";
import axios from "axios";
import { clear, getObject, saveObject } from "@/services/storage";
import { show } from "@/services/notification";
import moment from "moment-timezone";

export const useUserStore = defineStore("user", {
    state: () => ({
        user: null,
    }),
    getters: {},
    actions: {
        async login(email, password) {
            const local_site_name = localStorage.getItem("sitename");
            clear();
            try {
                const response = await axios.post(`${authUrl}/login`, {
                    email,
                    password,
                    site_name: local_site_name ?? site_name,
                    panel: 0
                });
                const { User, message } = response.data;

                if (message) {
                    show(message);
                }

                if (User) {
                    this.user = User;
                    saveObject("user", User);
                    // await this.checkLicense();
                    return true;
                }
            } catch (error) {
                console.error("Login error:", error);
            }
            return false;
        },
        logout() {
            clear();
            location.reload();
        },
        async get() {
            let _user = getObject("user");
            if (!_user) return;

            try {
                const response = await axios.post(`${authUrl}/user`, _user);
                _user = response.data?.user;

                if (_user) {
                    this.user = _user;
                    saveObject("user", _user);
                }
            } catch (error) {
                console.error("Get user error:", error);
            }
        },
        async getUser() {
            if (!this.user) {
                await this.get();
            }

            if (location.pathname !== "/licencia") {
                // await this.checkLicense();
            }

            return this.user;
        },
        async checkLicense() {
            if (!this.user) return;
            let response = await post("/read", {
                table: "licencias",
                site_name: "digitalpower_license_manager.db",
                schema: "digitalpower_license_manager.db",
                where: [
                    { condition: { sitename: site_name }, strict: true },
                    { condition: { user_id: this.user?.id }, strict: true },
                    { condition: { status: "Activa" } },
                ],
            }, DBService);

            if (response.data.rows.length <= 0) {
                location.href = "/licencia";
            }

            const today = moment().tz("America/Argentina/Buenos_Aires");
            const vencimiento = moment(response.data.rows?.[0]?.fecha_inicio)
                .add(response.data.rows?.[0]?.duracion_en_dias, "days")
                .tz("America/Argentina/Buenos_Aires");

            if (today.isSameOrAfter(vencimiento)) {
                location.href = "/licencia";
            }
        }
    }
});