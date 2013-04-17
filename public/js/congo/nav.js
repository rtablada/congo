
define(['backbone'], function(Backbone) {
  var NavigationView;
  NavigationView = Backbone.View.extend({
    initialize: function() {
      return this.render();
    },
    render: function() {
      this.$el.html('<li><h3><a href="#">DATABASES</a></h3></li>');
      return this;
    },
    events: {
      "click a": "sayHello"
    },
    sayHello: function(event) {
      event.preventDefault;
      return alert('hello!');
    }
  });
  return NavigationView;
});
