var app = app || {}

app.CommentView = Backbone.View.extend({
  el: $('#main'),

  initialize: function() {
  	this.collection = app.comments
  },

  render: function() {
    var template = Handlebars.compile(app.templates.commentView);
    this.$el.html(template(this.model.toJSON()));
    return this;
  }

});
