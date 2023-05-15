const db = require('../config/connections');
const { Produce } = require('../models');
const produceSeeds = require('./produceSeeds.json')
const userSeeds = require('./userSeeds.json')

db.once('open', async () => {
    await Produce.deleteMany({});
    await Produce.create(produceSeeds);
    await Produce.create(userSeeds);

    console.log('all done!');
    process.exit(0);
});