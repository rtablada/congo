define ['backbone'], (Backbone) ->
	NavigationView = Backbone.View.extend
		initialize: () ->
			@.render()

		render: () ->
			@.$el.html('<li><h3><a href="#">DATABASES</a></h3></li>')
			@

		events:
			"click a": "sayHello"

		sayHello: (event) ->
			event.preventDefault
			alert 'hello!'

	NavigationView