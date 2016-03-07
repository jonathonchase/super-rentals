import Ember from 'ember';

//TODO: Determine what the idiomatic method of turning the below action implementations into a single DRY function
//Currently, these implementations are identical other than their target, which is pretty eh.
export default Ember.Controller.extend({
  filteredList: null,
  actions: {
    autoComplete(param) {
      if(param !== "") {
        this.store.query('rental', {city: param}).then((result) => {
          this.set('filteredList',result);
        });
      } else {
        this.set('filteredList').clear();
      }
    },
    search(param) {
      if(param !== "") {
        this.store.query('rental', {city: param}).then((result) => {
          this.model.set('model',result);
        });
      } else {
        this.set('model').clear();
      }
    }
  }
});
