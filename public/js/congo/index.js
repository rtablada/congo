
define(['backbone', 'congo/nav', 'congo/views/databaseList', 'congo/collections/databases'], function(Backbone, NavigationView, DatabaseListView, DatabaseCollection) {
  var Congo;
  Congo = {
    init: function() {
      var crumbView;
      Congo.database = new Congo.DatabaseCollection();
      crumbView = new Congo.NavigationView({
        el: "#breadcrumbs"
      });
      Congo.databaseList = new Congo.DatabaseListView({
        collection: Congo.database
      });
      return Congo.start();
    },
    start: function() {
      return Congo.database.fetch();
    }
  };
  Congo.NavigationView = NavigationView;
  Congo.DatabaseListView = DatabaseListView;
  Congo.DatabaseCollection = DatabaseCollection;
  return Congo;
});
