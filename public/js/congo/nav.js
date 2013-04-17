
define(['backbone'], function(Backbone) {
  var BreadcrumbView;
  BreadcrumbView = Backbone.View.extend({
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
  return BreadcrumbView;
});
