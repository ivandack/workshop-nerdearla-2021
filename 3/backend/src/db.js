const mongoose = require('mongoose');

module.exports = async (server, db) => {
  try {
    const connectionParams = {
      useNewUrlParser: false,
      useCreateIndex: false,
      useUnifiedTopology: true,
    };
    const url = `mongodb://${server}/${db}`;
    console.log(`Connecting to database "${url}"...`);
    await mongoose.connect(url);
    console.log(`Connected to database "${url}"`);
  } catch (error) {
    console.log(`Could not connect to database ${db} (${server}).`, error);
  }
};
