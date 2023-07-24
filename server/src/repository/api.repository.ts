import pool from '../DB';
import { iRole, iUser } from '../interfaces/interfaces';

async function getUserByEmailDB(email): Promise<iUser> {
  const client = await pool.connect();
  const sql = `SELECT * FROM USERS WHERE email = $1`;
  return (await client.query(sql, [email])).rows[0];
}

async function registrationUserDB(user: iUser): Promise<iUser[]> {
  const client = await pool.connect();
  try {
    const { name, surname, email, pwd, role } = user;
    await client.query('BEGIN');
    const sql = `INSERT INTO USERS (name, surname, email, pwd, role) VALUES ($1, $2, $3, $4, $5) RETURNING *`;
    const data: iUser[] = (await client.query(sql, [name, surname, email, pwd, role])).rows;
    await client.query('COMMIT');
    return data;
  } catch (error: any) {
    await client.query('ROLLBACK');
    console.log(error.message);

    return []
  }
}

export { getUserByEmailDB, registrationUserDB }
