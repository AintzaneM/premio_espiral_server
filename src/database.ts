// import mongoose from "mongoose";
import config from "./config"
const mongoose = require("mongoose")

(async () => {
  try {
    const mongooseOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      authSource: "admin",
      user: config.MONGO_USER,
      pass: config.MONGO_PASSWORD,
    };

    console.log(mongooseOptions)

    const db = await mongoose.connect(
        
      `mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`,
      mongooseOptions
     
    );
    console.log(db)

    console.log(`Databse is connected to: ", ${db.connections[0].name}`);
  } catch (error) {
    console.error(error);
  }
})();