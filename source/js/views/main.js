var template = require("../../templates").get('main'),
    HomeView = require("./home"),
    SignUpView = require("./signUp"),
    BlogPageView = require("./blogPage");

module.exports = Backbone.View.extend({
  
  events:{
    'click #home'  : 'renderHome',
    'click #home2' : 'renderHome',
    'click #signUp': 'renderSignUp',
    'click #logIn' : 'renderLogIn',
    'click #blog'  : 'renderBlogPage',
    'click #pageB' : 'renderPageB',
    'click #pageC' : 'renderPageC'
  },
  
  initialize: function(){
      
  },
  
  render: function(){
      this.$el.html(template());
      
      return this;
  },
  
  toggleActive: function($li){
    var $navpoints = this.$el.find('#myNavbar > ul > li');
    
    $navpoints.removeClass('active');
    $li.addClass('active');
  },
  
  renderHome: function(){
    window.app_router.navigate('home');
    this.toggleActive(this.$el.find('#home'));
    
    var homeView = new HomeView({
      el: this.$el.find('div.container')
    }).render();
    
    return homeView;
  },
  
  renderSignUp: function(){
    window.app_router.navigate('signup');
    this.toggleActive(this.$el.find('#signUp'));
    
    var signUpView = new SignUpView({
      el: this.$el.find('div.container')
    }).render();
    
    return signUpView;
  },
  
  renderLogIn: function(){
    this.toggleActive(this.$el.find('#logIn'));
  },
  
  renderBlogPage: function(){
    window.app_router.navigate('blog');
    this.toggleActive(this.$el.find('#blog'));
    
    var blogPageView = new BlogPageView({
      el: this.$el.find('div.container')
    }).render();
    
    return blogPageView;
  },
  
  renderPageB: function(){
    this.toggleActive(this.$el.find('#pageB'));
  },
  
  renderPageC: function(){
    this.toggleActive(this.$el.find('#pageC'));
  }
  
});