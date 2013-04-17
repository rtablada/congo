define ['backbone', 'congo/models/database'], (Backbone, DatabaseModel) ->
	DatabaseView = Backbone.View.extend
		model: DatabaseModel

		tagName: "tr"

		events:
			"click button": "removeDatabase"


		removeDatabase: () ->
			confirmed = confirm("Delete this database? That's a bit looney...")
			if confirmed
				@.model.destroy()
				Congo.databases.remove @.model

		render: () ->
			template = $("#database-list-template").html()
			compiled = _.template template, @.model.toJSON()
			@.$el.html compiled
			@

	return DatabaseView