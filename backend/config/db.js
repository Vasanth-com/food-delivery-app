import mongoose from "mongoose";

export const connectDb = async () =>{
    await mongoose.connect('mongodb+srv://vasanth:vasanth2519@cluster0.zkxkka3.mongodb.net/food-del').then(()=>console.log("DB connected."))
}
