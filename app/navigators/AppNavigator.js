/* eslint-disable react/react-in-jsx-scope */
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from 'react-navigation';
import RootScreen from '../scenes/RootScreen';
import FavouritesScreen from '../scenes/FavouritesScreen';
import DetailsScreen from '../scenes/DetailsScreen';

// const DetailsStack = createStackNavigator({
//   Favourites: {
//     screen: ExampleScreen
//   },
//   {

//   }
// });
const StackNavigator = createStackNavigator(
  {
    // Create the application routes here (the key is the route name, the value is the target screen)
    // See https://reactnavigation.org/docs/en/stack-navigator.html#routeconfigs
    FavouritesScreen,
    // The main application screen is our "ExampleScreen". Feel free to replace it with your
    // own screen and remove the example.
    MainScreen: DetailsScreen
  },
  {
    // By default the application will show the splash screen
    initialRouteName: 'FavouritesScreen',
    // See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
    headerMode: 'none'
  }
);
// const DetailsStackScreen = () => (
//   <DetailsStack.Navigator>
//     <DetailsStack.Screen
//       name="Favourites"
//       component={ExampleScreen}
//       options={{
//         headerTitle: 'Favourites'
//       }}
//     />
//     <DetailsStack.Screen
//       name="BankDetails"
//       component={DetailsScreen}
//       options={({ route }) => ({
//         title: `${route.params.data.ifsc}`
//       })}
//     />
//   </DetailsStack.Navigator>
// );

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
