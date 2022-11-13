const ValidationTypes = {
    string: (str) =>  typeof str === 'string',
    number: (num) =>  typeof num === 'number', 
    any: () =>  true
}


module.exports = ValidationTypes

