Template.page.events({

  'click .__alert': function(e, t) {
    AntiModals.alert('Echo');
  },

  'click .__confirm': function(e, t) {
    AntiModals.confirm('Echo?');
  },

  'click .__another': function(e, t) {
    AntiModals.confirm({
      title:    'Another',
      message:  'Echo?',
      ok:       'Indeed',
      cancel:   'Nope',
      closer:   true,
    });
  },

  'click .__prompt': function(e, t) {
    AntiModals.prompt({
      title:    'Another',
      message:  'Echo?',
      ok:       'Indeed',
      cancel:   'Nope',
      closer:   true,
    });
  },

  'click .__custom': function(e, t) {
    AntiModals.overlay('modal');
  },

  'click .__yellow': function(e, t) {
    AntiModals.overlay('modal', {
      overlayClass: 'yellow',
    });
  },

});