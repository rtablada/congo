define ['backbone', 'congo/models/database'], (Backbone, DatabaseModel) ->
	DatabaseCollection = Backbone.Collection.extend
		model: DatabaseModel
		url: "/mongo-api/dbs"

	return DatabaseCollection