const users = [{email: "myemail@mail.com", password: "securePassword", counter: 0}]


const login = (userCredentials) => {
    for (let i = 0; i < users.length; i++) {
        
        if (userCredentials.email === users[i].email && userCredentials.password === users[i].password) {
            
            users.counter = 0;
            getToken(users);
            return "Bienvenido al sistema";


        }else if (userCredentials.email === users[i].email && userCredentials.password != users[i].password) {
            users.counter += 1;
            return "Contraseña incorrecta";

        }else if (userCredentials.email != users[i].email && userCredentials.password === users[i].password) {
           
            users.counter += 1;            
            return "Usuario no registrado";
        }

    }

    /*if(counter < 3){
        for (let i = 0; i < users.length; i++) {
            if (userCredentials.email === users[0].email){
                if(userCredentials.password === users[0].password) {
                    console.log(getToken(users))
                    return "Bienvenido al sistema";
                }
                if(userCredentials.password != users[0].password){
                    users.counter += 1;
                    return "Contraseña incorrecta";
                }
            }else{
                users.counter += 1;
                return "Usuario inválido"
            }
        }
    }
    else{
        setTimeout("Limite de intentos excedidos", 500000);
    }




}*/

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
