import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI);

mongoose.connection.on("connected", ()=>{
    console.log("Database is connected");
})

mongoose.connection.on("error", (err)=>{
    console.log("Database is not connected" + err)
})
export default mongoose;









/* import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () =>{
    try{
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        
        console.log("Initial connection successful")
    }catch(err){
        console.log("Initial connection error" + err);
    }

    mongoose.connection.on("connected", ()=>{
            console.log("Database is connected");
    })

    mongoose.connection.on("error", (err)=>{
            console.error("Database is not connected" + err);
    })

    mongoose.connection.on("disconnected", ()=>{
        console.warn("Database is disconnected")
    })
}

export default connectDB;

 */