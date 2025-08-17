import Dexie from "dexie";

const dbName = 'DigitalPowerStock_IndexedDB'
let db = null;

export function init () {
    db = new Dexie(dbName);
    db.version(1).stores({
        productos: "++id,data"
    })
}

export async function save (table, data = []) {
    await db[table].clear();
    await db[table].add({data: JSON.stringify(data)})
}

export async function read (table) {
    let data = await db[table].toArray();

    data = data?.[0]?.data;
    if (!data) return [];

    return JSON.parse(data)
}