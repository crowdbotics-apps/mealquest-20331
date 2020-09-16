import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings102047Navigator from '../features/Settings102047/navigator';
import Settings102032Navigator from '../features/Settings102032/navigator';
import NotificationList102031Navigator from '../features/NotificationList102031/navigator';
import Maps102030Navigator from '../features/Maps102030/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings102047: { screen: Settings102047Navigator },
Settings102032: { screen: Settings102032Navigator },
NotificationList102031: { screen: NotificationList102031Navigator },
Maps102030: { screen: Maps102030Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
