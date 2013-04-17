define ['backbone', 'congo/views/database', 'congo/views/databaseOptions'], (Backbone, DatabaseView, DatabaseOptionsView) ->
	DatabaseListView = Backbone.View.extend
		el: "#database-list"

		initialize: () ->
			@.collection.bind 'reset', @.render, @
			@.collection.bind 'add', @.render, @
			@.collection.bind 'remove', @.render, @
			@.renderOptionsView()

		tagName: "table"

		className: "table table-striped"

		renderOptionsView: () ->
			optionsView = new DatabaseOptionsView
				el: "#database-options"

		render: () ->
			items = []

			@.collection.each (item) =>
				itemView = new DatabaseView
					model: item
				items.push itemView.render().el
			
			@.$el.html items
			
			@

	return DatabaseListView