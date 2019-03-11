const Koa = require('koa');
const compose = require('koa-compose');
const app = new Koa();

const logger = async(ctx, next) => {
    console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.path}`);
    await next();
}
const main = ctx => {
    ctx.response.body = 'Hello Koa';
}

const middleWares = compose([logger, main]);
app.use(middleWares);

console.log('http://192.168.1.118:2333');
app.listen(2333);