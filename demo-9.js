const Koa = require('koa');
const app = new Koa();

app.use(async(ctx, next) => {
    console.log(1);
    await next();
    console.log(1);
})

app.use(async(ctx, next) => {
    console.log(2);
    console.log(2);
})

app.use(async(ctx, next) => {
    console.log(3);
    await next();
    console.log(3);
})

console.log('http://192.168.1.118:2333');
app.listen(2333);