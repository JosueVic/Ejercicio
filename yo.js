const alumno = {
    nombre : "Josue Gerardo",
    edad : 22,
    desarrollador: true,
    fecha_nacimiento: new Date("january 18 2001"),
    libro_fav :{
        titulo: "Pero querias ser chef",
        autor: "Luis Jimenez de Santiago",
        fecha: new Date("2016")
    }
}
document.write(alumno.libro_fav.titulo)