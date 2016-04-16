import { Dispatcher } from 'flux';

class DispatcherClass extends Dispatcher {

  handleViewAction(action) {

    var payload = {
      source: 'VIEW_ACTION',
      action: action
    }

    this.dispatch(payload);
  }

  // handleServerAction(action) {
  //   this.dispatch({
  //     source: 'SERVER_ACTION',
  //     action: action,
  //   });
  // }
}

const AppDispatcher = new DispatcherClass();

export default AppDispatcher;
