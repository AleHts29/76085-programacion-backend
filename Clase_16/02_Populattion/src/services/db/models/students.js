import mongoose from 'mongoose';

const collectionName = 'students';

const stringTypeSchemaUniqueRequired = {
    type: String,
    unique: true,
    required: true
};

const stringTypeSchemaNonUniqueRequired = {
    type: String,
    required: true
};


const studentSchema = new mongoose.Schema({
    name: stringTypeSchemaNonUniqueRequired,
    lastName: stringTypeSchemaNonUniqueRequired,
    age: stringTypeSchemaNonUniqueRequired,
    courses: {
        type: [
            {
                course: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "courses"
                }
            }
        ],
        default: []
    }

});

/**
 * Middleware para agregar dentro del método 'find' un llamado a una función, en este 
 * caso llamamos al metodo populate.
 */
studentSchema.pre('find', function () {
    this.populate("courses.course");
});


const studentsModel = mongoose.model(collectionName, studentSchema);
export default studentsModel;



// EJEMPLO CON CARRITOS
// // Sin Populate
// const cart = {
//     idCar: 1,
//     Productos: [
//         {
//             idProducto: 1,
//             catidad: 12,
//         }
//     ]
// }


// // Con Populate
// const cart2 = {
//     idCar: 1,
//     Productos: [
//         {
//             idProducto: 1,
//             name: "Vino",
//             precio: 6000,
//             catidad: 12,
//         }
//     ]
// }