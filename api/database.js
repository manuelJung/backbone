var mongoose = require('mongoose'),
    schemes = require("./schemes");

module.exports = {
    
    connect: function(output){
        var self = this;
        
        mongoose.connect('mongodb://localhost/local');
        output.log("test");
        
        mongoose.connection.on('open', function(){
          output.log("Database connection open");
          self.createSchemes();
          self.insert(output);
        });
        
    },
    
    createSchemes: function(){
        var Comment = mongoose.model('Comment', schemes.Comment);
    },
    
    insert: function(output){
        var MyModel = mongoose.model('Comment');
        var instance = new MyModel();
          instance.text = 'hello';
          instance.save(function (err) {
            output.log(err);
        });
        
        MyModel.find({}, function (err, docs) {
          // docs.forEach
          output.log("Error: ", err);
          docs.forEach(function(doc){
              output.log(doc)
          })
        });
    }
    
}