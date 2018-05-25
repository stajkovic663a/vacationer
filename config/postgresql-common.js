const {postgreSQL} = require('./keys');
const {Client} = require('pg');

const client = new Client(postgreSQL);

async function connect(){
    try{
        await client.connect();
    }
    catch(error){
        console.error(error);
    }
}


connect();

// SELECT * FROM table WHERE x = $1
async function query(queryString,param) {
    try {
        let result = await client.query(queryString,param);
        let resultArray = [];
        for (let row of result.rows)
            resultArray.push(row);
        return resultArray;
    } catch (error) {
        console.log(error)
    }
}

async function nonQuery(queryString,param) {
    try {
        await client.query(queryString,param);
    } catch (error) {
        console.error(error)
    }
}

module.exports= {query, nonQuery};