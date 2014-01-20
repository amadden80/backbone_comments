var app = app || {}

app.CommentListView = Backbone.View.extend({
  tagName: 'li',

  events:{
    'click': 'view'
  },

  initialize: function() {
  },

  render: function() {

    var template = Handlebars.compile(app.templates.commentList);
    this.$el.html(template(this.model.toJSON()));
    return this;
  },

  view: function() {
    app.router.navigate('comments/' + this.model.get('slug'), true);
  }

});
