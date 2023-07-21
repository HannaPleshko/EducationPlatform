import { Pool } from "pg";

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'EducationPlatform',
  password:'Ap3442628',
  port:'5432'
});

export default pool ;
