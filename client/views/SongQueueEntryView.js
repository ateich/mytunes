// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td><td><%= playCount %></td>'),

  //This is an event listener that listens for a click
  //anywhere on the library entry template showed above
  //We probably need to break this down and make it more
  //specific (clicking on the artist or title, for example)
  events: {
    'click': function() {
      //when a queued song is clicked, remove it from queue
      this.model.dequeue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
