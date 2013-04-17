define ['backbone', 'congo/nav', 'congo/views/databaseList', 'congo/collections/databases'], (Backbone, BreadcrumbView, DatabaseListView, DatabaseCollection) ->
	Congo =
		init: () ->
			crumbView = new Congo.BreadcrumbView
				el: "#breadcrumbs"
			crumbView.render()

			listView = new Congo.DatabaseListView
			listView.render()

	Congo.BreadcrumbView = BreadcrumbView
	Congo.DatabaseListView = DatabaseListView
	Congo.DatabaseCollection = DatabaseCollection

	return Congo