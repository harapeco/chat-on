var MessageModel = Backbone.Model.extend({
	initialize: function(){
		this.set({});
	}
});
var MessageCollection = Backbone.Collection.exntend({
	model: MessageModel
});
var MessageView = Backbone.View.extend({
	
});