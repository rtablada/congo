define ['backbone', 'congo/views/database'], (Backbone, DatabaseView) ->
	DatabaseListView = Backbone.View.extend
		initialize: () ->
			@.collection.bind 'reset', @.render, this
			@.collection.bind 'add', @.render, this
			@.collection.bind 'remove', @.render, this

		tagName: "table"

		className: "table table-striped"

		render: () ->
			items = []

			@.collection.each (item) ->
				itemView = new DatabaseView
					model: item

				items.push itemView.render().el

			@.$el.html items

			$("#database-list").html @.el

			@

	return DatabaseListView