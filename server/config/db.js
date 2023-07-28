import mongoose from "mongoose";

const connectionDB = async () =>{

    try {
        const connect = await mongoose.connect(process.env.mongo_url);
        console.log(`connected to database sucessfully 
         ${connect.connection.host}`);
    } catch (error) {
        console.log(`error in mongoDb ${error}`);
    }
}

export default connectionDB;