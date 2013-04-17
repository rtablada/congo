
define(['backbone', 'congo/models/database'], function(Backbone, DatabaseModel) {
  var DatabaseView;
  DatabaseView = Backbone.View.extend({
    model: DatabaseModel,
    tagName: "tr",
    events: {
      "click a": "sayHello",
      "click button": "sayHello"
    },
    sayHello: function() {
      return alert("hello again");
    },
    render: function() {
      var compiled, template;
      template = $("#database-list-template").html();
      compiled = _.template(template, {
        name: "Templated Name"
      });
      this.$el.html(compiled);
      return this;
    }
  });
  return DatabaseView;
});
