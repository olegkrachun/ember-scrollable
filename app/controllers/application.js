import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['currentUser'],
  currentUser: Ember.computed.oneWay('controllers.currentUser'),
  preferences: Ember.computed.oneWay('currentUser.preferences'),

  navigationItems: [{
    id: 'dashboard', name: 'Dashboard', routeName: 'dashboard'
  }, {
    id: 'projects', name: 'Projects', routeName: 'projects'
  }, {
    id: 'team', name: 'Teams', routeName: 'teams'
  }, {
    id: 'performance', name: 'Performance', routeName: 'performance'
  }],

  actions: {
    onSidebarToggle: function() {
      this.get('preferences').save();
    }
  }
});
