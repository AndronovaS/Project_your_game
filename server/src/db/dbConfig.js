const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
  poolSize: 10,
  bufferMaxEntries: 0,
};




const dbConnectionUrl = 'mongodb+srv://admin:admin@myclaster.juvuz.mongodb.net/myGame?retryWrites=true&w=majority';

module.exports = {
  options,
  dbConnectionUrl,
}
