const mongoose = require('mongoose')


const ConnectMongo = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // avoid console warrings
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

module.exports = ConnectMongo