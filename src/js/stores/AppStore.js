import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import { EventEmitter } from 'events';
import AppAPI from '../utils/appAPI';

const CHANGE_EVENT = 'change';
//example of an empty array
// let _movies = [];
let _selected = '';



class AppStore extends EventEmitter{


  emitChange(){
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback){

    this.on('change', callback);

  }

  removeChangeListener(callback){
    this.removeListener('change', callback);
  }

}

AppDispatcher.register((payload) => {
  const action = payload.action;

  switch (action.actionType){

    //case

  }
  return true

});



export default AppStore;
