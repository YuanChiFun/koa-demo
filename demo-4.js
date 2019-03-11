const Koa = require('Koa');
const app = new Koa();
const fs = require('fs');

async function main(ctx) {
    if (ctx.request.path != '/') {
        ctx.response.type = 'html';
        ctx.response.body = fs.createReadStream('./template/demo-3.html');
    } else {
        ctx.response.body = '<h1>index</h1>';
    }
}

app.use(main);
console.log('http://192.168.1.118:2333');
app.listen(2333);