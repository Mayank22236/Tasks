const app = require('./express/app');
const port = 3000;

app.listen(port, () => {
    console.log(`${port} listening`);
})