import app from './src/app';
import { createTables } from './src/queries/createTable';
import { dropTables } from './src/queries/dropTable';

createTables();

const port = 3000;
app.listen(port, () => console.log(`server is running on port ${port}`));
