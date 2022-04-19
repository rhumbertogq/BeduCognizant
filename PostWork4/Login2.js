const users = [{email: "myemail@mail.com", password: "securePassword"}]

const intentos = 0;

const login = (userCredentials) => {
    for (let i = 0; i < users.length; i++) {
        if (userCredentials.email === users[i].email && userCredentials.password === users[i].password) {
            
            return "Bienvenido al sistema";

        }else if (userCredentials.email === users[i].email && userCredentials.password != users[i].password) {
            
            return "Contraseña incorrecta";

        }else if (userCredentials.email != users[i].email && userCredentials.password === users[i].password) {
            
            return "Usuario no registrado";
        }

    }
    
}

const getToken = (userCredentials) => {
    for (let i = 0; i < users.length; i++) {
        if (userCredentials.email === users[i].email && userCredentials.password === users[i].password) {

            var emailBeforeEncode = users[i].email;

            var buff = new Buffer(emailBeforeEncode);
            var encodedEmail = buff.toString('base64');

            return encodedEmail;

        }

    }
    
}



module.exports = {login, getToken};