define ['backbone', 'congo/nav', 'congo/views/databaseList', 'congo/collections/databases'], (Backbone, NavigationView, DatabaseListView, DatabaseCollection) ->
	Congo =
		init: () ->
			# Data
			Congo.database = new Congo.DatabaseCollection()

			# Views
			crumbView = new Congo.NavigationView
				el: "#breadcrumbs"
			Congo.databaseList = new Congo.DatabaseListView
				collection: Congo.database

			# Let's get it started
			Congo.start()

		start: () ->
			Congo.database.fetch()

	Congo.NavigationView = NavigationView
	Congo.DatabaseListView = DatabaseListView
	Congo.DatabaseCollection = DatabaseCollection

	return Congo