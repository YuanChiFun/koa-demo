const Koa = require('koa');
const app = new Koa();

app.use(async(ctx, next) => {
    try {
        await next();
    } catch (err) {
        ctx.response.status = err.statusCode || err.status || 500;
        ctx.response.body = {
            message: err.message
        }
    }
})

app.use(async ctx => {
    ctx.throw(404);
})

console.log('http://192.168.1.118:2333');
app.listen(2333);