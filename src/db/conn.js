const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/students-api',
// {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }
).then( () => {
    console.log('Connection Successfull...')
})
.catch( (err) => {
    console.log(err)
})