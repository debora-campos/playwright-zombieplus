const { database, password } = require("pg/lib/defaults");

const { Pool } = require("pg");

const DbConfig = {
  user: "postgres",
  host: "db.dffdbigyxnbrjwzelgoq.supabase.co",
  database: "postgres",
  password: "ZombiePlus2026!",
  port: 5432
};

export async function executeSQL(sqlScript) {
  try {
    const pool = new Pool(DbConfig);
    const client = await pool.connect();
    const result = await client.query(sqlScript);
    console.log(result.rows);
  } catch (error) {
    console.log("Erro ao executar o SQL" + error);
  }
}
