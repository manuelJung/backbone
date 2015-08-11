var AppView = require("../../js/views/main");

module.exports = function(action){
    var mainView = new AppView({
      el: $('#app')
    });
    mainView.render();
    alert(action);
}