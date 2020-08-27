import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as bodyParser from 'koa-bodyparser';
import * as cors from 'koa2-cors';
import AppRoutes from './routes';
import 'reflect-metadata';
import { dbInt } from './service/database/connect'


const app = new Koa();
const router = new Router();
const port = process.env.PORT || 3000;

app.use(cors());
//路由
AppRoutes.forEach(route => router[route.method](route.path, route.action));
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());
dbInt(app);
app.listen(port);

console.log(`localhost:${port}`);
