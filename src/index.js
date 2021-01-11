const app = require ('./app');
const {createConnection} = require('./database');
const path = require ('path');
createConnection();
app.listen(3002);
console.log('servid' , 3002);

 //Settings

app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs');