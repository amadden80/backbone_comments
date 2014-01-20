var app = app || {}

app.CommentList = Backbone.Collection.extend({
  	model: app.Comment,
  	url: "comments",
  	parse:function(comments) {

  		var collected = [];
  		for (var i=0; i<comments.length; i++){
  			collected.push(new app.Comment(comments[i]))
  		}
    	return collected
    },
    onChange: function(e){
    	app.appView.render();
    }

});