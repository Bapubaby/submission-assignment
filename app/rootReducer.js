import { combineReducers } from 'redux';
import { favouritesContainerReducer as favourites } from '@scenes/FavouritesScreen/reducer';
import { rootContainerReducer as root } from '@scenes/RootScreen/reducer';
import configureStore from 'app/utils/createStore';
import rootSaga from 'app/rootSaga';

export default () => {
  const rootReducer = combineReducers({
    root,
    favourites
  });

  return configureStore(rootReducer, rootSaga);
};
