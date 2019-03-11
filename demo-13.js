const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    const n = Number(ctx.cookies.get('view') || 0) + 1;
    ctx.cookies.set('view', n);
    ctx.response.body = n + 'views';
})

console.log('http://192.168.1.118:2333');
app.listen(2333);