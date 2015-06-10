import Ember from 'ember';
import SidePanelRouteMixin from 'ember-cli-paint/mixins/side-panel-route';

export default Ember.Route.extend(SidePanelRouteMixin, {
  titleToken: function(model) {
    let advisorName = model.get('advisor.name');

    return `Interaction: ${advisorName}`;
  },

  model: function(params) {
    return this.store.find('interaction', params.interaction_id);
  }
});
