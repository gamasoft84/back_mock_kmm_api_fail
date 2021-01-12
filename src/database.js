const mongoose = require('mongoose');

const {MONGO_USER, MONGO_PASS, MONGO_DB, MONGO_HOST } = process.env;
const URI = `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}/${MONGO_DB}?retryWrites=true&w=majority`;

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Database is connected:',URI);
});
