import pool from '../DB';

async function getCourseDB() {
  const client = await pool.connect();
  const sql = 'SELECT * FROM courses';
  const result = (await client.query(sql)).rows;
  return result;
}

async function getCourseByIdDB(id) {
  const client = await pool.connect();
  const sql = 'SELECT * FROM courses where id=$1';
  const result = (await client.query(sql, [id])).rows;
  return result;
}

async function createCourseDB(title) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const sql = 'INSERT INTO courses (title) VALUES ($1) RETURNING *';
    const result = (await client.query(sql, [title])).rows;
    await client.query('COMMIT');
    return result;
  } catch (error) {
    await client.query('ROLLBACK');
    console.log(`createCourseDB: error`);
    return [];
  }
}

async function updateCourseDB(id, title) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const sql = 'UPDATE courses SET title=$1 WHERE id=$2 RETURNING *';
    const result = (await client.query(sql, [title, id])).rows;
    await client.query('COMMIT');
    return result;
  } catch (error) {
    await client.query('ROLLBACK');
    console.log(`createCourseDB: error`);
    return [];
  }
}

async function deleteCourseDB(id) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const sql = 'DELETE FROM courses WHERE id=$1 RETURNING*';
    const result = (await client.query(sql, [id])).rows;
    await client.query('COMMIT');
    return result;
  } catch (error) {
    await client.query('ROLLBACK');
    console.log(`deleteUserDB: error`);
    return [];
  }
}

export { getCourseDB, getCourseByIdDB, createCourseDB, updateCourseDB, deleteCourseDB };
