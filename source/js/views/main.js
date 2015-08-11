var template = require("../../templates").get('main');

module.exports = Backbone.View.extend({
  
  initialize: function(){
      
  },
  
  render: function(){
      this.$el.html(template());
  }
  
});