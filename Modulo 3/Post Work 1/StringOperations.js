const castPascalCaseToSnakeCase = (pascalCaseString) => {
    return pascalCaseString.split(/(?=[A-Z])/).join('_').toLowerCase();
}

const castSnakeCaseToPascalCase = (snakeCaseString) => {
    const words = snakeCaseString.split('_');
    return words.map(word => word[0].toUpperCase() + word.substr(1)).join('');
}

const castPascalCaseToCamelCase = (camelCaseString) =>
{
    return camelCaseString[0].toLowerCase() + camelCaseString.slice(1);
}

const castSnakeCaseToCamelCase = (snakeCaseString) =>
{
    const words = snakeCaseString.split('_');
    return words[0].toLowerCase() + words.slice(1).join('');
}
module.exports = {castPascalCaseToSnakeCase, castSnakeCaseToPascalCase, castPascalCaseToCamelCase, castSnakeCaseToCamelCase};