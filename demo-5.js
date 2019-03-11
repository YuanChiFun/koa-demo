const Koa = require('Koa');
const app = new Koa();
const fs = require('fs');
const router = require('koa-router')();

async function home(ctx) {
    ctx.response.type = 'html'
    ctx.response.body = '<h1>home</h1>'
}
async function blog(ctx) {
    ctx.response.body = '<h1>blog</h1>'
}

router.get('/home', home);
router.get('/blog', blog);
app.use(router.routes());
console.log('http://192.168.1.118:2333');
app.listen(2333);