var app = app || {};

$(function() {

  app.templates = {
    appView: $('#appView-template').html(),
    commentList: $('#commentList-template').html(),
    commentView: $('#commentView-template').html(),
  }

  app.router = new app.Router();
  Backbone.history.start();

});