define ['backbone'], (Backbone) ->
	DatabaseModel = Backbone.Model.extend
		url: () ->
			return "/mongo-api/dbs/" + @.id
		
		idAttribute: "name"

	return DatabaseModel