import mongoose from "mongoose";

const userCollection = 'usuarios'

// Definimos el esquema de nuestra colección
const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    age: Number
})


// Exportamos el modelo de la colección
export const userModel = mongoose.model(userCollection, userSchema);