import axios from "axios";
import { show } from "./notification";

// export const site_url = "http://localhost:8080";
export const site_url = "https://cmanagment.digitalpower.ar";
export const site_name = "fortaleza.db";
export const backendUrl = "https://backend.digitalpower.ar";
export const imagesUrl = "https://backend.digitalpower.ar/files/2/";
export const paymentUrl = "https://payment.digitalpower.ar";
export const databaseUrl = "https://database.digitalpower.ar";
export const authUrl = "https://auth.digitalpower.ar";

let user = { token: null, id: null, site_name: null };
const storedUser = localStorage.getItem("user");
if (storedUser && storedUser !== "undefined") {
  user = JSON.parse(storedUser);
}

const config = {
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjY3LCJuYW1lIjoiTWFydGluIiwic3VybmFtZSI6IkNhdGFsYW5vIFJlc28iLCJlbWFpbCI6ImNhdGFsYW5vcmVzaW1hcnRpbkBnbWFpbC5jb20iLCJwaG9uZSI6IjExNTE1OTkyMzEiLCJkbmkiOiI0NDk2MzMwMSIsInBhc3N3b3JkIjoiJDJiJDEwJFhyT09KQlhmRXNzUmguV0lUWTlBUS54am42VEx2YVgwQUZBVUcybnFocDFIWTUxVFZ1bDRlIiwicm9sZSI6InN1cGVyLWFkbWluIiwic2l0ZV9uYW1lIjoiZGlnaXRhbHBvd2VycGFuZWwiLCJwYW5lbF9hZG1pbiI6MSwic2l0ZV9uYW1lX21hbmFnbWVudCI6bnVsbCwiaWF0IjoxNzU1NDUwNzE4fQ.Ctr6r_rN9-nuvHETY-V3L9wjk3FeSzXdrcEF0W3Mg78`,
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

const Service = axios.create({
  baseURL: `${backendUrl}/api`,
});

export const DBService = axios.create({
  baseURL: `${databaseUrl}/api`,
});

export const AuthService = axios.create({
  baseURL: `${authUrl}/`,
});

export const PaymentService = axios.create({
  baseURL: `${paymentUrl}/`,
});

export const post = (path, body = {}, service = DBService) => {
  if (!user) {
    const storedUser = localStorage.getItem("user");
    if (storedUser) user = JSON.parse(storedUser);
    config.headers.Authorization = `Bearer ${user?.token}`;
  }

  const local_site_name = localStorage.getItem("sitename");

  body.site_name = body?.site_name ?? local_site_name ?? site_name ?? user?.site_name;
  body.schema = body?.schema ?? local_site_name ?? site_name ?? user?.site_name;
  if (user?.id) body.user_id = user?.id;

  return new Promise(async (resolve) => {
    service
        .post(path, body, config)
        .then((response) => {
          const message = response?.data?.message;
          const status = response?.status ?? response?.data?.status;

          if (message) show(message);

          setTimeout(() => {
            if (response?.data?.redirect) {
              location.href = response?.data?.redirect;
            }
          }, 1000);

          if (status === 401) {
            location.href = "/admin";
          }
          resolve(response);
        })
        .catch((err) => {
          console.error(err);
          if (err?.response?.status === 401) {
            // localStorage.removeItem("dp_user");
            // location.href = "/#/login";
          }
          show(
              err?.response?.data?.message ||
              "Ha ocurrido un error, intente más tarde"
          );
        });
  });
};