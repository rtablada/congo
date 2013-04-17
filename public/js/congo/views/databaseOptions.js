
define(['backbone', 'congo/models/database'], function(Backbone, DatabaseModel) {
  var DatabaseOptionsView;
  DatabaseOptionsView = Backbone.View.extend({
    initialize: function() {
      return this.render();
    },
    events: {
      "submit form": "addDatabase"
    },
    addDatabase: function(event) {
      var newDatabase, newDatabaseName;
      event.preventDefault();
      newDatabaseName = $('#newDatabase').val();
      newDatabase = new DatabaseModel({
        name: newDatabaseName
      });
      newDatabase.save();
      return Congo.databases.add(newDatabase);
    },
    render: function() {
      var compiled, source;
      source = $("#new-database-template").html();
      compiled = _.template(source);
      this.$el.html(compiled);
      return this;
    }
  });
  return DatabaseOptionsView;
});
