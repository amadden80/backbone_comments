var app = app || {}

app.Comment = Backbone.Model.extend({
  idAttribute: 'slug',
  defaults:{
    title: 'New post',
    slug: 'new-post',
    message: '...message'
  }
});
