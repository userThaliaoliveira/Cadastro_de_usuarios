import mysql from "mysql";

export const db = mysql.createConnection({
    host: "locashost",
    user: "root",
    password: "290696Th@",
    database: "crud"
});