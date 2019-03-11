const Koa = require('koa');
const route = require('koa-route');
const app = new Koa();

const redirect = ctx => {
    ctx.response.redirect('/');
};
const home = ctx => {
    ctx.response.body = 'Redirect';
}
app.use(route.get('/redirect', redirect));
app.use(route.get('/', home));
console.log('http://192.168.1.118:2333');
app.listen(2333);