define ['backbone', 'congo/models/database'], (Backbone, DatabaseModel) ->
	DatabaseOptionsView = Backbone.View.extend
		initialize: () ->
			@.render()

		events:
			"submit form": "addDatabase"

		addDatabase: (event) ->
			event.preventDefault()
			newDatabaseName = $('#newDatabase').val()
			newDatabase = new DatabaseModel
				name: newDatabaseName
			newDatabase.save()
			Congo.databases.add(newDatabase)

		render: () ->
			source = $("#new-database-template").html()
			compiled = _.template source
			this.$el.html compiled
			@

	return DatabaseOptionsView