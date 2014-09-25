// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td><td><%= playCount %><td><button class="up icon ion-arrow-up-a"></button></td><td><button class="down icon ion-arrow-down-a"></button></td></td><td><%= votes %></td>'),

  events: {
    'click': function() {
      this.model.dequeue();
    },
    'click button.up': function(event) {
      event.stopPropagation();
      this.model.upvote();
    },
    'click button.down': function(event) {
      event.stopPropagation();
      this.model.downvote();
    },
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
