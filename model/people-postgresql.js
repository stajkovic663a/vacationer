const { query, nonQuery } = require("./../config/postgresql-common");


async function getAll() {
    try {
        let result = await query(
            "SELECT * FROM public.user");
        return result;  

    } catch (error) {
        console.error(error)
    }
}

async function findUser(name) {
    try {
        let result = await query(
            "SELECT * FROM public.user WHERE vorname LIKE $1", [`%${name}%`]);
        return console.log(result);

    } catch (error) {
        console.error(error)
    }
}

async function addUser(vorname,nachname) {
    try {
        let result = await nonQuery(
            "SELECT * FROM add_user($1,$2)",[vorname, nachname]);
        return console.log("User added!");

    } catch (error) {
        console.error(error)
    }
}

async function delUser(id) {
    try {
        await nonQuery(
            "DELETE FROM public.user WHERE u_id=$1", [`${id}`]);
        return console.log("User deleted!");

    } catch (error) {
        console.error(error)
    }
}

async function checkAccount(benutzername,passwort) {
    try {
        let result = await query(
            "SELECT * FROM check_account($1,$2)",[benutzername, passwort]);
        return result;

    } catch (error) {
        console.error(error)
    }
}


module.exports = {
    findUser,
    delUser,
    addUser,
    checkAccount,
    getAll
}