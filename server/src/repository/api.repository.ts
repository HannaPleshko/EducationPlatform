import  pool  from "../DB";
import { iUser } from "../interfaces/interfaces";

async function getUserByEmailDB(email: string): Promise<iUser[]> {
  const client = await pool.connect();
  const sql = `SELECT * FROM users WHERE email=$1`;
  return (await client.query(sql, [email])).rows;
}

async function registrationUserDB(
  name: string,
  surname: string,
  email: string,
  pwd: string,
  role: number
): Promise<iUser[]> {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    const sql = `INSERT INTO users( name, surname, email, pwd, role) 
        VALUES($1,$2,$3,$4,$5)`;
    const data: iUser[] = (
      await client.query(sql, [name, surname, email, pwd, role])
    ).rows;
    await client.query("COMMIT");
    return data;
  } catch (error) {
    await client.query("ROLLBACK");
    return [];
  }
}

export { getUserByEmailDB, registrationUserDB };
