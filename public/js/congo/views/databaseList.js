
define(['backbone', 'congo/views/database', 'congo/views/databaseOptions'], function(Backbone, DatabaseView, DatabaseOptionsView) {
  var DatabaseListView;
  DatabaseListView = Backbone.View.extend({
    el: "#database-list",
    initialize: function() {
      this.collection.bind('reset', this.render, this);
      this.collection.bind('add', this.render, this);
      this.collection.bind('remove', this.render, this);
      return this.renderOptionsView();
    },
    tagName: "table",
    className: "table table-striped",
    renderOptionsView: function() {
      var optionsView;
      return optionsView = new DatabaseOptionsView({
        el: "#database-options"
      });
    },
    render: function() {
      var items,
        _this = this;
      items = [];
      this.collection.each(function(item) {
        var itemView;
        itemView = new DatabaseView({
          model: item
        });
        return items.push(itemView.render().el);
      });
      this.$el.html(items);
      return this;
    }
  });
  return DatabaseListView;
});
