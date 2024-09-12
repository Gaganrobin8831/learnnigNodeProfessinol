const mongoose = require('mongoose')

const connectDB = async ()=> {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`)
        console.log(`\n Mongo DB connected !! DB HOST:  ${connectionInstance.connection.host}`);
        
        
    } catch (error) {
        console.log("Mongo connection ERROR:  ",error);
        process.emit(1);
        
    }
}

module.exports = connectDB