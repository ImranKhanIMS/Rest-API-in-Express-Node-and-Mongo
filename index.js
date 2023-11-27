const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/ims', )
.then( () => { console.log('Connection Successfull...')})
.catch( (err) => { console.log(err)})


// Defining a Schema
const userData = new mongoose.Schema({
    name: String,
    age: Number,
    address: String,
    date: {
        type: Date,
        default: Date.now
    }
})


// Create a Collection
const User = new mongoose.model("User", userData)


//  **************************** create document or Insert Data (one record at a time) ****************************
// const createDocument = async () => {
//     try{
//         const imran = new User({
//             name: "Rehan Khan",
//             age: 23,
//             address: "Mathra Peshawar"
//         })
        
//         const result = await imran.save()
//         console.log(result)
//     } catch(err) {
//         console.log(err)
//     }
// }

// createDocument()



//   **************************** Insert Many Example ****************************
// const createDocument = async () => {
//     try{
//         const umair = new User({
//             name: "Umair",
//             age: 22,
//             address: "Mathra Peshawar"
//         })

//         const basit = new User({
//             name: "Basit",
//             age: 25,
//             address: "FATA"
//         })

//         const uzair = new User({
//             name: "Uzair",
//             age: 24,
//             address: "Bajaur, KPK"
//         })

//         const yahya = new User({
//             name: "Yahya",
//             age: 24,
//             address: "Sawabi, KPK"
//         })
        
//         const result = await User.insertMany([umair, basit, uzair, yahya])
//         console.log(result)
//     } catch(err) {
//         console.log(err)
//     }
// }

// createDocument()





//   **************************** Read all data from Database **************************** 
// const getDocument = async () => {
//     const result = await User.find()
//     console.log(result)
// }

// getDocument()



//   **************************** Read data based on criteria from Database **************************** 
// const getDocument = async () => {
//     const result = await User.find({age: 24})
//     .select({_id: 0, name: 1})
//     .limit(1)
//     console.log(result)
// }

// getDocument()




//   **************************** Read data based on conditions from Database **************************** 

// *************************************
// $eq => Equal
// $gt => Greather Then
// $gte => Greather Than and Equal
// $in => In the List (Array)
// $lt => Less Then
// $lte => Less Then and Equal
// $ne => Not Equal To
// $nin => Not in the List (Array)
// *************************************

// const getDocument = async () => {
//     const result = await User
//     // .find({age: {$gt: 23}})
//     .find({address: {$in: ['Bajaur, KPK', 'FATA']}})

//     console.log(result)
// }

// getDocument()


//   **************************** Count Document **************************** 
// const getDocument = async () => {
//     const result = await User
//     .find()
//     // .count()
//     .countDocuments()

//     console.log(result)
// }

// getDocument()


//   **************************** Sort Document **************************** 
// const getDocument = async () => {
//     const result = await User
//     .find()
//     .select({_id: 0, name:1})
//     .sort({name: -1})

//     console.log(result)
// }
// 1 for asc
// -1 for dsc

// getDocument()




//   **************************** Update Record ****************************
// const updateDocument = async (_id) => {
//     try{
//         const result = await User.updateOne({_id}, {
//             $set : {
//                 name : "Imran"
//             }
//         })
//         console.log(result)

//     }catch(err){
//         console.log(err)
//     }
// }


//   **************************** Updte Record and see the changes in the terminal **************************** 
// const updateDocument = async (_id) => {
//     try{
//         const result = await User.findByIdAndUpdate({_id}, {
//             $set : {
//                 address : "FATA"
//             }
//         }, {
//             new: true,
//             userFindAndModify: false
//         })
//         console.log(result)

//     }catch(err){
//         console.log(err)
//     }
// }

// updateDocument('65681b4b2b87cace96529933')




//   **************************** Delete a Record **************************** 
// const deleteDocument = async (_id) => {
//     try{
//         const result = await User.findByIdAndDelete({_id}, {
//             $set : {
//                 address : "FATA"
//             }
//         }, {
//             new: true
//         })
//         console.log(result)

//     }catch(err){
//         console.log(err)
//     }
// }
// deleteDocument('65681b4b2b87cace96529933')




