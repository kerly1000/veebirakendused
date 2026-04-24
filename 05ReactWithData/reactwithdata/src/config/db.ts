import sql from "mssql"


export const dbConfig: sql.config = {
    user: "DESKTOP-8KMFQ1G\User",
    password: "",
    server: "localhost\SQLEXPRESS",
    database: "ReactData",
    options: {
        encrypt: false //peab olema false, et ära laeks
        }
            
};

export const poolPromise = new sql.ConnectionPool(dbConfig)
    .connect()
    .then(pool => pool);