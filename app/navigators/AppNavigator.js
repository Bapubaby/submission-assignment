/* eslint-disable react/react-in-jsx-scope */
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from 'react-navigation';
import RootScreen from '../scenes/RootScreen';
import FavouritesScreen from '../scenes/FavouritesScreen';
import DetailsScreen from '../scenes/DetailsScreen';

const StackNavigator = createStackNavigator(
  {
    FavouritesScreen,
    MainScreen: DetailsScreen
  },
  {
    initialRouteName: 'FavouritesScreen',
    headerMode: 'none'
  }
);

const AppTabs = createBottomTabNavigator(
  {
    CurrentList: {
      screen: RootScreen,
      navigationOptions: {
        title: 'Search'
      }
    },
    OthersList: {
      screen: StackNavigator,
      navigationOptions: {
        title: 'Favourites'
      }
    }
  },
  {
    tabBarOptions: {
      activeBackgroundColor: '#000',
      inactiveBackgroundColor: '#FFFFFF',
      showLabel: true,
      showIcon: true
    }
  }
);

export default createAppContainer(AppTabs);
