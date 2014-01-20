var app = app || {}

app.Router = Backbone.Router.extend({
  
  routes: {
    '': 'index',   
    'comments/:slug': 'show'   
  },

  // routes: {
  //   route: action,   
  // },

  initialize: function(options) {
    this.options = options;
  },

  // index action
  index: function() {
    app.comments = new app.CommentList();
    app.comments.fetch({
      success: function(){
        app.appView = new app.AppView({collection: app.comments});
        app.appView.render();
      }
    });
  },

  // show action
  show: function(slug) {
    var comment = app.comments.get(slug);
    var commentView = new app.CommentView({model: comment});
    commentView.render();
  }

});
