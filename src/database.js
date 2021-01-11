const low = require('lowdb');
const fileAsync = require('lowdb/adapters/FileAsync');

let dates;


async function createConnection(){
    const adapter =new fileAsync('dates.json');
   dates =  await low(adapter);
   dates.defaults({ cliente : [], operacion: []}).write();
}


const getConnection= () => dates;

module.exports = {
    createConnection,
    getConnection
}