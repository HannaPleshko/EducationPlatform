import app from './src/app';
import { createTables } from './src/queries/createTable';

createTables()

const port = 3000;
app.listen(port, () => console.log(`server is running on port ${port}`));