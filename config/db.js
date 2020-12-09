const mongoose = require('mongoose');
const password = 'root'
const dbname = 'User'


mongoose.connect(`mongodb+srv://System:${password}@cluster0.9ndqs.mongodb.net/${dbname}?retryWrites=true&w=majority`,
{
    useNewUrlParser : true,
    useUnifiedTopology : true , 
    useFindAndModify : false
})
.then(ok=>console.log("Connected to mongodb"))
.catch(err=>console.log("Error found ", err))

module.exports = mongoose