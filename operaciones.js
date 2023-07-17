const fs = require('fs');

const registrar = (nombre, edad, tipo, color, enfermedad) => {
  const registro = JSON.parse(fs.readFileSync('citas.json', 'UTF-8'));
  registro.push({
    fecha: new Date().toLocaleDateString(),
    nombre: nombre,
    edad: edad,
    tipo: tipo,
    color: color,
    enfermedad: enfermedad,
  });
  fs.writeFileSync('citas.json', JSON.stringify(registro));

  console.log(`
        Se ha registrado una cita para su mascota ${nombre} 
        por los síntomas: "${enfermedad}"
        `);
};

const leer = () => {
  const registro = JSON.parse(fs.readFileSync('citas.json', 'UTF-8'));
  console.log(`
  Estas son las citas registradas:
        `);
  registro.forEach((cita) => {
    console.log(`📆 ${cita.fecha} cita para:
    📌 Nombre: ${cita.nombre} 📌 Edad: ${cita.edad} 📌 Tipo: ${cita.tipo} 📌 Color: ${cita.color} 📌 Enfermedad: ${cita.enfermedad}`);
  });
  console.log(``);
};

module.exports = { registrar, leer };
