const argv = require ('yargs')
.options('b', { 
alias: 'base',
type: 'number',
demandOption: true,
describe: 'Es la base de la tabla de multiplicar'
})
.options('l', { 
    alias: 'listar',
    type: 'boolean',
    demandOption: true,
    default: false,
    describe: ' Muestra la tabla en consola'
    })
    .options('h', { 
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: ' Pone limite de tabla'
        })
.check((argv, options) => {

    console.log('yargs', argv)
    if(isNaN( argv.b)){

        throw 'la base debe ser un numero'
    }
    return true;
})

.argv;


module.exports = argv;