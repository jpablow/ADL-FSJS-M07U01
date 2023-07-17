const { registrar, leer } = require('./operaciones');
const arg = process.argv.slice(2);
const opp = arg[0];
const nombre = arg[1];
const edad = arg[2];
const tipo = arg[3];
const color = arg[4];
const enfermedad = arg[5];

if (arg.length === 0) {
  console.log(`
        🏥 Bienvenido a Clínica AleMona 🐵`);
}

switch (opp) {
  case 'leer':
    leer();
    break;

  case 'registrar':
    registrar(nombre, edad, tipo, color, enfermedad);
    break;

  default:
    console.log(`
        🟡  Para reservar una cita con el veterinario escriba
            "registrar" seguido de los siguientes datos de su mascota:

                🔸 Nombre del animal
                🔹 Edad
                🔸 Tipo de animal
                🔹 Color del animal
                🔸 Enfermedad
        
        🟡  Para ver las citas registradas escriba "leer"
        `);
    break;
}
