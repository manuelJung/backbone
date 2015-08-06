var template = require("./templates").get('main');

(function ($) {
window.AppView = Backbone.View.extend({
  
  initialize: function(){
      
  },
  
  render: function(){
      this.$el.html(template);
      this.abc();
  }
  
});
var appview = new AppView({
    el: $('#app')
});
appview.render();
})(jQuery);