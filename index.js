const app = require('./server');
const port = 3002;

app.listen(port, () => {
    console.log(`Connection has established successfully in port: ${port}`);
})
