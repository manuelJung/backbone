var AppView = require("../../js/views/main");

module.exports = function(){
    var mainView = new AppView({
      el: $('#app')
    }).render();
    
    mainView.renderSignUp();
}