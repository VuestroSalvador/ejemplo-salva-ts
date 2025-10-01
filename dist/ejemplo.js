"use strict";
function CrearUsuario(datos) {
    return {
        id: Date.now(),
        nombre: datos.nombre,
        email: datos.email,
        edad: datos.edad,
        activo: datos.activo,
        fechaCreacion: new Date()
    };
}
//ejemplo
const DatosEntrada = {
    nombre: "Salva Garcia",
    email: "Salva@gmail.com",
    edad: 70,
    activo: true,
};
const nuevoUsuario = CrearUsuario(DatosEntrada);
console.log("Usuario Creado:");
console.log(nuevoUsuario);
console.log(`ID: ${nuevoUsuario.id}`);
console.log(`nombre: ${nuevoUsuario.nombre}`);
console.log(`email: ${nuevoUsuario.email}`);
console.log(`Fecha De Creacion: ${nuevoUsuario.fechaCreacion}`);
