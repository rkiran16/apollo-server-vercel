import app from './api/index.js';
import consola from 'consola';
import dotenv from 'dotenv';
dotenv.config();
const port = 3000;
app.listen(port, () => consola.info(`Server started ${port}`));
