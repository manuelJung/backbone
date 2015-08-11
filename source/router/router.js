var homeRoute = require("./routes/home"),
    defaultRoute = require("./routes/default");


(function ($) {

var AppRouter = Backbone.Router.extend({
    routes: {
        "home": "getHome",
        "*actions": "defaultRoute"
    }
});
// Instantiate the router
var app_router = new AppRouter;

app_router.on('route:getHome', function () { homeRoute() });
app_router.on('route:defaultRoute', function (actions) { defaultRoute(actions)});
// Start Backbone history a necessary step for bookmarkable URL's
Backbone.history.start();

})(jQuery);