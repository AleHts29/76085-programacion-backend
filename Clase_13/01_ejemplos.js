//use baseCRUD

db.createCollection("mascotas")

db.mascotas.insertMany([
    { nombre: "Buddy", especie: "Perro", edad: 5 },
    { nombre: "Max", especie: "Gato", edad: 2 },
    { nombre: "Lucy", especie: "Perro", edad: 3 }
])

db.mascotas.find() // returna todos los documentos

db.mascotas.find({ especie: 'Perro' })

db.mascotas.countDocuments() // returna el numero de documentos



/*
Sobre una base de datos llamada “colegio”, crear una colección “estudiantes” donde se agregarán documentos con los siguientes datos:
nombre
apellido
curso
edad
correo
sexo 
Crear 5 estudiantes (Insert Many) con los campos mencionados arriba. Además, crear un estudiante sólo con nombre, apellido y curso. ¿Es posible?

*/

db.estudiantes.insertMany([
    { nombre: "Juan", apellido: "Perez", curso: "Backend", edad: 18, correo: "juan@example.com", sexo: "M" },
    { nombre: "Maria", apellido: "Garcia", curso: "Frontend", edad: 19, correo: "maria@example.com", sexo: "F" },
    { nombre: "Pedro", apellido: "Lopez", curso: "JavaScript", edad: 20, correo: "pedro@example.com", sexo: "M" },
    { nombre: "Ana", apellido: "Lopez", curso: "Golang", edad: 20, correo: "ana@example.com", sexo: "F" },
    { nombre: "Nahuel", apellido: "Torres", curso: "Backend", edad: 20, correo: "ana@example.com", sexo: "F" },
])

db.estudiantes.insertMany([
    { nombre: "Martin", apellido: "Cicco", curso: "JavaScript", edad: 33, correo: "martin@example.com", sexo: "M" },
    { nombre: "Ana", apellido: "Lopez", curso: "Golang", edad: 25, correo: "ana@example.com", sexo: "F" },
    { nombre: "Nahuel", apellido: "Torres", curso: "Backend", edad: 27, correo: "ana@example.com", sexo: "M" },
])


db.estudiantes.insertMany([
    { nombre: "Carla", apellido: "Dutra", curso: "Backend" },
    { nombre: "Elias", apellido: "Cafiero", curso: "React" }
])

db.estudiantes.find() // Realizar una búsqueda para obtener a todos los estudiantes.

db.estudiantes.find({ sexo: "M" }) // Realizar una búsqueda para obtener a todos los estudiantes de sexo H (hombre)

db.estudiantes.countDocuments({ sexo: "F" }) // Realizar un conteo para obtener el número de documentos totales que cumplan con el criterio: “Es mujer”


// #FILTROS
// $lt significa "Less Than"
// $gt significa "greater than"
db.estudiantes.find({ nombre: 'Juan' })
db.estudiantes.find({ curso: "Backend", sexo: "M" })


db.estudiantes.find({ $or: [{ curso: "Backend" }, { curso: "React" }] })

db.estudiantes.find({ $and: [{ edad: 20 }, { sexo: "F" }] })

db.estudiantes.find({ edad: { $gt: 19 } })
db.estudiantes.find({ edad: { $gte: 19 } })

db.estudiantes.find({ edad: { $lt: 20 } })
db.estudiantes.find({ edad: { $lte: 20 } })


colegio_c76085 > db.estudiantes.distinct('curso')
['Backend', 'Frontend', 'Golang', 'JavaScript', 'React']

// filtro $in --> devuelve coincidencias que se encuentran en el array
db.estudiantes.find({ edad: { $in: [19, 20] } })

// Proyecciones
db.estudiantes.find({}, { nombre: 1, apellido: 1 })

// Ordenamientos
db.estudiantes.find().sort({ edad: 1 }) // asc
db.estudiantes.find().sort({ edad: -1 }) // desc



/*----------------------------------------------------------------

5
4
3
2
1
0 
-1
-2<--Punto inicial::: offset = -2
-3
-4
-5



----------------------------------------------------------------*/
db.estudiantes.find().skip(2)

db.estudiantes.find().skip(2).limit(3)



db.estudiantes.updateOne({ _id: ObjectId('6748f1b2a7072f919be268d1') }, { $set: { sexo: "M", apellido: "Montenegro" } })


colegio_c76085 > db.estudiantes.deleteOne({ _id: ObjectId('6748fcf3a7072f919be268d6') })

colegio_c76085 > db.estudiantes.find({ nombre: "Nahuel" })
[
    {
        _id: ObjectId('6748f1b2a7072f919be268d1'),
        nombre: 'Nahuel',
        apellido: 'Montenegro',
        curso: 'Backend',
        edad: 20,
        correo: 'ana@example.com',
        sexo: 'M'
    }
]


colegio_c76085 > db.estudiantes.find({ _id: ObjectId('6748f1b2a7072f919be268d1') })
[
    {
        _id: ObjectId('6748f1b2a7072f919be268d1'),
        nombre: 'Nahuel',
        apellido: 'Montenegro',
        curso: 'Backend',
        edad: 20,
        correo: 'ana@example.com',
        sexo: 'M'
    }
]

