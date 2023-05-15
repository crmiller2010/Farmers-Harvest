const db = require('../config/connections');
const { Produce } = require('../models');
const produceSeeds = require('./produceSeeds.json')

db.once('open', async () => {
    await Produce.deleteMany({});
    await Produce.create(produceSeeds);

    console.log('all done!');
    process.exit(0);
});