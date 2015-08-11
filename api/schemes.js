var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

module.exports = {
    
    Comment: new Schema({
        text: String
    })
    
}