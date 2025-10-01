type RolUsuario = "ADMINISTRADOR" | "EDITOR" | "VISUALIZADOR";

interface DatosUsuario {
  nombre: string;
  email: string;
  edad: number;
  activo: boolean;
  rol: RolUsuario;
}

interface Usuario {
  id: number;
  nombre: string;
  email: string;
  edad: number;
  activo: boolean;
  fechaCreacion: Date;
  rol: RolUsuario
}

function crearUsuario(datos: DatosUsuario): Usuario {
  return {
    id: Date.now(),
    nombre: datos.nombre,
    email: datos.email,
    edad: datos.edad,
    activo: datos.activo,
    rol: datos.rol, 
    fechaCreacion: new Date(),
  };
}

const datosEntrada = {
  nombre: "Salva Garcia",
  email: "salva@email.com",
  edad: 70,
  activo: true,
  rol: "ADMINISTRADOR" as RolUsuario, 
};


const nuevoUsuario = crearUsuario(datosEntrada);
console.log("Usuario creado: ");
console.log(nuevoUsuario);
console.log(`ID: ${nuevoUsuario.id}`);
console.log(`Nombre: ${nuevoUsuario.nombre}`);
console.log(`Email: ${nuevoUsuario.email}`);
console.log(`Fecha de creación: ${nuevoUsuario.fechaCreacion}`)
console.log(nuevoUsuario.rol); 