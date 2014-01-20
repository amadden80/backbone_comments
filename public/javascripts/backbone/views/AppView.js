var app = app || {}

app.AppView = Backbone.View.extend({

  el: $('#main'),

  initialize: function() {
    this.$el.html(app.templates.appView);
    this.list = $('#comments');
    // this.collection.fetch(  ,this.render);
  },

  render: function() {
    
    this.collection.each(function(comment) {
      var view = new app.CommentListView({ model: comment });
      this.list.append(view.render().el);
    }, this);  

    return this;
  }

});
