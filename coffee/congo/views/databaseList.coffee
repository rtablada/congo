define ['backbone', 'congo/views/database'], (Backbone, DatabaseView) ->
	DatabaseListView = Backbone.View.extend
		tagName: "table"

		className: "table table-striped"

		render: () ->
			items = []

			for i in [0...5]
				itemView = new DatabaseView();
				items.push itemView.render().el

			@.$el.html items

			$("#database-list").html @.el

			@

	return DatabaseListView