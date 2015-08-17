var template = require("../../templates").get('home');

module.exports = Backbone.View.extend({
  
  
  initialize: function(){
      
  },
  
  render: function(){
      this.$el.html(template());
      
      return this;
  }
  
});