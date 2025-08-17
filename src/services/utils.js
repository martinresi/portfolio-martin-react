import CryptoJS from "crypto-js";
import * as XLSX from "xlsx";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import moment from "moment-timezone";

export function limit(text, length) {
    if (text?.length > length) {
        return text.substring(0, length) + "...";
    }
    return text;
}

export const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
};

export function defaultImageProduct(e) {
    e.target.src =
        "https://files.digitalpower.ar/download/papelera.db/default-product.png";
}

export function openWindow(url, width = 800, height = 600, closeAction) {
    const strWindowFeatures = `location=no,height=${height},width=${width},scrollbars=yes,status=yes`;
    const win = window.open(url, "_blank", strWindowFeatures);

    const interval = setInterval(async () => {
        if (win.closed) {
            clearInterval(interval);
            if (closeAction) await closeAction();
        }
    }, 500);
}

export function isAdmin(_role) {
    const role = _role.trim().toLowerCase();
    return ["admin", "mod-admin", "super-admin"].includes(role);
}

export function isSuperAdmin(_role) {
    return _role.trim().toLowerCase() === "super-admin";
}

export async function isAllowed(view, user) {
    if (isAdmin(user?.role)) return true;

    let permisos = localStorage.getItem("permisos");
    permisos = decrypt(permisos);
    permisos = JSON.parse(permisos);

    const permiso = permisos.filter(x => x?.name?.toLowerCase() === view?.toLowerCase());

    if (!permiso || permiso.length <= 0) {
        window.close();
        return false;
    }

    return true;
}

export function generarIdNumerico() {
    let id = "";
    for (let i = 0; i < 10; i++) {
        id += Math.floor(Math.random() * 10);
    }
    return id;
}

export function generarToken(longitud = 32) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
    for (let i = 0; i < longitud; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        token += caracteres[indice];
    }
    return token;
}

export function genID(id) {
    let min = 4;
    let diff = min - id?.toString()?.length;
    let serial = '';
    if (diff > 0) {
        console.log("HERE")
        for (let i = 0; i < diff; i++) {
            serial += '0';
        }
        serial += id;
        console.log("SERIAL", serial)
        return serial;
    }
    console.log("DIFF", diff)
    return id;
}

export function upNum(_numero) {
    const numero = Number(_numero);

    if (numero <= 100) return 100;

    const base = Math.floor(numero / 100) * 100;
    const diferencia = numero - base;
    return diferencia < 50 ? base : base + 100;
}

const SECRET_KEY = "VIVAN_LAS_TETAS";
export function encrypt(data) {
    return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
}

export function decrypt(ciphertext) {
    const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
    try {
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    } catch (error) {
        console.log(error)
        return null;
    }
}

export function toExcel(json, name) {
    const worksheet = XLSX.utils.json_to_sheet(json);
    const workbook = XLSX.utils.book_new();
    const rowCount = Object.keys(worksheet).filter(key => key.startsWith('A')).length;

    const columnWidth = 25;
    worksheet['!cols'] = new Array(Object.keys(json[0]).length).fill({ wch: columnWidth });

    const rowHeight = 25; // Altura en píxeles
    worksheet['!rows'] = new Array(rowCount).fill({ hpx: rowHeight });

    XLSX.utils.book_append_sheet(workbook, worksheet, "Productos");
    XLSX.writeFile(workbook, `${name}.xlsx`);
}

export function toPDF(htmlString, name) {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = htmlString;
    document.body.appendChild(tempElement);

    html2canvas(tempElement).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        pdf.addImage(imgData, "PNG", 10, 10);
        pdf.save(`${name}.pdf`);
        document.body.removeChild(tempElement); // Limpia el DOM
    });
}

export function setLoader(state) {
    const $elem = document.getElementById("loader-container");
    if (!$elem) return;

    $elem.style.display = state ? "flex" : "none";
}

export function isValidDate(date) {
    return date instanceof Date && !isNaN(date);
}

export function numToLocale (num) {
    return Number(num)?.toLocaleString('es-AR');
}

export function capitalizeFirstLetter(str) {
    if (!str) {
        return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function getNickname (user) {
    let string = `#${user.id}_${user.name}`;
    if (user.surname) string += `_${user.surname}`;

    return string;
}

export function getDate () {
    return moment().format('DD-MM-YYYY HH:mm:ss')
}
