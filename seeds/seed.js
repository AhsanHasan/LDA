const { PropertySeeder } = require('./propertySeeder')
const { CrimeSeeder } = require('./crimeSeeder')
const mongoose = require('./../schema/mongoose')

class Seed {
    /**
     * Seed data
     */
    async seed () {
        await mongoose.connect()
        console.log('connected')
        // await PropertySeeder.seed()
        // await CrimeSeeder.seed()
        await CrimeSeeder.getPostcodes()
        await PropertySeeder.getBorough()
        await CrimeSeeder.getBorough()
        console.log('Database seed completed')
        process.exit()
    }
}

const seed = new Seed()
seed.seed()
