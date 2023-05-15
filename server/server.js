const express = require ('express');
const cors = require ('cors');

const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const port =  5000;
const connectDB = require('./config/connections');

const app = express();

//connect to database
connectDB();
    app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    
}))

app.listen(port, console.log(`Server running on port ${port}`));
