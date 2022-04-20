const axios = require('axios');
const {login} = require("./Login2");
const {getToken} = require("./Login2");


const executeTest = async (input, expectedOutput, functionToExecute) => {
    const actualOutput = await functionToExecute(input)
    
    if (actualOutput !== expectedOutput) {
        console.log(`Test fail. Expected output: ${expectedOutput}  actual output: ${actualOutput}`)
    } else {
        console.log("Test pass " + expectedOutput)
    }

}

const makePostApiCall = async (userCredentials) => {
    const response = await axios.post('http://localhost:3000/login', userCredentials)
    return response.data
}

const makePostApiCall2 = async (userCredentials) => {
    const response = await axios.post('http://localhost:3000/authentication', userCredentials)
    return response.data
}

//const prueba = makePostApiCall2;


const testReturnsSuccessMessageWhenUserLogsInWithValidEmailAndPassword = () => {
    const userCredentials = {email: "myemail@mail.com", password: "securePassword"}
    const successMessage = "Bienvenido al sistema"
    executeTest(userCredentials, successMessage, makePostApiCall)
}

const testReturnsInvalidPasswordMessageWhenUserLogsInWithValidEmailAndPassword = () => {
    const userCredentials = {email: "myemail@mail.com", password: "differentPassword"}
    const successMessage = "Contraseña incorrecta"
    executeTest(userCredentials, successMessage, makePostApiCall)
}

const testReturnsUserNotFoundMessageWhenUserLogsInWithValidEmailAndPassword = () => {
    const userCredentials = {email: "unregistered_email@mail.com", password: "securePassword"}
    const successMessage = "Usuario no registrado"
    executeTest(userCredentials, successMessage, makePostApiCall)
}

const encodingEmailF = () => {
    const userCredentials = {email: "myemail@mail.com", password: "securePassword"}
    //console.log(encrypted);
    //const successMessage = ;
    const successMessage = "Bienvenido al sistema";
    executeTest(userCredentials, successMessage, makePostApiCall2)
}



testReturnsSuccessMessageWhenUserLogsInWithValidEmailAndPassword()
testReturnsInvalidPasswordMessageWhenUserLogsInWithValidEmailAndPassword()
testReturnsUserNotFoundMessageWhenUserLogsInWithValidEmailAndPassword()
encodingEmailF()
