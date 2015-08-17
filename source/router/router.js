var homeRoute = require("./routes/home"),
    signUpRoute = require("./routes/signUp"),
    defaultRoute = require("./routes/default");


(function ($) {

var AppRouter = Backbone.Router.extend({
    routes: {
        "home": "getHome",
        "signup": "getSignUp",
        "*actions": "defaultRoute"
    }
});
// Instantiate the router
window.app_router = new AppRouter;



window.app_router.on('route:getHome', function () { homeRoute() });
window.app_router.on('route:getSignUp', function () { signUpRoute() });
window.app_router.on('route:defaultRoute', function () { defaultRoute()});



// Start Backbone history a necessary step for bookmarkable URL's
Backbone.history.start();

})(jQuery);