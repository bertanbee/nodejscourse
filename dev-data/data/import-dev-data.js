const fs = require('fs')
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('./../../models/TourModel')

dotenv.config({ path: '../.././config.env' });

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)

mongoose.connect(DB, {
  useNewUrlParser: true, 

}).then(con => {
})

const tours = JSON.parse(fs.readFileSync('./tours-simple.json', 'utf-8'))

const importData = async () => {
    try {
        await Tour.create(tours)
        console.log('Data successfully written.')
        process.exit()
    } catch (err) {
        console.log(err)
        process.exit()
    }
}

const deleteData = async () => {
    try {
        await Tour.deleteMany()
        console.log('Data successfully deleted.')
        process.exit()
    } catch (err) {
        console.log(err)
        process.exit()
    }
}

if (process.argv[2] === "--import") {
    importData()
}

if (process.argv[2] === "--delete") {
    deleteData()
}
