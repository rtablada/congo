
define(['backbone', 'congo/models/database'], function(Backbone, DatabaseModel) {
  var DatabaseCollection;
  DatabaseCollection = Backbone.Collection.extend({
    model: DatabaseModel,
    url: "/mongo-api/dbs"
  });
  return DatabaseCollection;
});
