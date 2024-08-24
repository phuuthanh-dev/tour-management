import express, { Express } from "express";
import env from "dotenv";
env.config();
import clientRoutes from "./routes/client/index.route";
import adminRoutes from "./routes/admin/index.route";
import moment from "moment";
import bodyParser from "body-parser";
import { systemConfig } from "./config/system";

const app: Express = express();
const port: (number | string) = `${process.env.PORT}` || 3000;

app.use(express.static(`${__dirname}/public`));

app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');

app.use(bodyParser.json());

app.locals.moment = moment;
app.locals.prefixAdmin = systemConfig.prefixAdmin;

clientRoutes(app);
adminRoutes(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

