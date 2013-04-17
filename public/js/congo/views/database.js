
define(['backbone', 'congo/models/database'], function(Backbone) {
  var DatabaseView;
  DatabaseView = Backbone.View.extend({
    tagName: "tr",
    events: {
      "click button": "removeDatabase"
    },
    removeDatabase: function() {
      var confirmed;
      confirmed = confirm("Delete this database? That's a bit looney...");
      if (confirmed) {
        this.model.destroy();
        return Congo.databases.remove(this.model);
      }
    },
    render: function() {
      var compiled, template;
      template = $("#database-list-template").html();
      compiled = _.template(template, this.model.toJSON());
      this.$el.html(compiled);
      return this;
    }
  });
  return DatabaseView;
});
