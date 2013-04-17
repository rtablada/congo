define ['backbone', 'congo/models/database'], (Backbone, DatabaseModel) ->
	DatabaseView = Backbone.View.extend
		model: DatabaseModel

		tagName: "tr"

		events:
			"click a": "sayHello"
			"click button": "sayHello"

		sayHello: ->
			alert "hello again"

		render: () ->
			template = $("#database-list-template").html()
			compiled = _.template template, @.model.toJSON()
			@.$el.html(compiled)
			@

	return DatabaseView