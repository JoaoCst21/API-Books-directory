import mysql from "mysql2/promise.js";

// mysql://b8bfa4a33cc0da:22fb4b2b@us-cdbr-east-06.cleardb.net/heroku_9a3b3cb0ffdbe76?reconnect=true
export const pool = await mysql.createPool({
  host: "us-cdbr-east-06.cleardb.net",
  user: "b8bfa4a33cc0da",
  password: "22fb4b2b",
  database: "heroku_9a3b3cb0ffdbe76",
});
