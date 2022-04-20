const {castPascalCaseToSnakeCase, castSnakeCaseToPascalCase, castPascalCaseToCamelCase, castSnakeCaseToCamelCase} = require("./StringOperations");

const testCastPascalCaseToSnakeCase = () => {
    executeTest("EstoEsUnEjemplo", "esto_es_un_ejemplo", castPascalCaseToSnakeCase);
    executeTest("otroEjemplo", "otro_ejemplo", castPascalCaseToSnakeCase);
    executeTest("otroejemplo", "otroejemplo", castPascalCaseToSnakeCase);
}
const testCastSnakeCaseToPascalCase = () => {
    executeTest("esto_es_un_ejemplo", "EstoEsUnEjemplo", castSnakeCaseToPascalCase);
    executeTest("otro_ejemplo", "OtroEjemplo", castSnakeCaseToPascalCase);
    // Caso de prueba que falla
    executeTest("otroejemplo", "Otroejemplo", castSnakeCaseToPascalCase);
}

const testCastPascalCaseToCamelCase = () => {
    executeTest("EstoEsUnEjemplo", "estoEsUnEjemplo", castPascalCaseToCamelCase);
    executeTest("OtroEjemplo", "otroEjemplo", castPascalCaseToCamelCase);
    executeTest("HolaMundo", "holaMundo", castPascalCaseToCamelCase);
}

const testCastSnakeCaseToCamelCase = () => {
    executeTest("Esto_Es_Un_ejemplo_Abracadabra", "estoEsUnejemploAbracadabra", castSnakeCaseToCamelCase);
    executeTest("Otro_Ejemplo_AbCdE", "otroEjemploAbCdE", castSnakeCaseToCamelCase);
    executeTest("Hola_Mundo_@0897", "holaMundo@0897", castSnakeCaseToCamelCase);
}

const executeTest = (input, expectedOutput, functionToExecute) => {
    const actualOutput = functionToExecute(input)
    if (actualOutput !== expectedOutput) {
        console.log(`\nTest fail. Expected output: ${expectedOutput}  actual output: ${actualOutput}`)
    } else {
        console.log("Test pass")
        console.log(actualOutput)
        console.log("------------")

    }
}
testCastSnakeCaseToCamelCase();
testCastPascalCaseToCamelCase();
testCastPascalCaseToSnakeCase();
testCastSnakeCaseToPascalCase();
