
define(['backbone', 'congo/views/database', 'congo/views/databaseOptions'], function(Backbone, DatabaseView, DatabaseOptionsView) {
  var DatabaseListView;
  DatabaseListView = Backbone.View.extend({
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
        return _this.$el.append(itemView.render().el);
      });
      $("#database-list").html(this.el);
      return this;
    }
  });
  return DatabaseListView;
});
