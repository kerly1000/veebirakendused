import sql from "mssql"


export const dbConfig: sql.config = {
    server: "localhost",
    port : 4000,
    database: "ReactData",
    options: {
        encrypt: false //peab olema false, et ära laeks
        },
    authentication: {
        type: "ntlm",
        options: {
            domain: "DESKTOP-8KMFQ1G",
            userName: "USER",
            password: ""
            
        }
    }
            
};

export const poolPromise = new sql.ConnectionPool(dbConfig)
    .connect()
    .then(pool => pool);