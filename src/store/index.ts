import { createStore, Store } from 'redux';
import rootReducer from './reducers';

import { RepositoriesState } from './reducers/repository/types';

export interface ApplicationState {
  repositories: RepositoriesState;
}

const store: Store<ApplicationState> = createStore(rootReducer);

export default store;
