// @flow

import Images from './Images';

export default {
  LOGIN_SCREEN: {
    screen : 'app.LoginScreen',
    title  : 'Login',
  },
  PUSHED_SCREEN: {
    screen : 'app.PushedScreen',
    title  : 'Top up',
  },
  DRAWER: {
    screen : 'app.DrawerScreen',
  },

  FIRST_TAB: {
    screen       : 'app.FirstTabScreen',
    title        : 'Gas',
    label        : 'Gas',
    icon         : Images.TAB_1,
    selectedIcon : Images.TAB_1_selected,
  },
  SECOND_TAB: {
    screen       : 'app.SecondTabScreen',
    title        : 'Elec',
    label        : 'Elec',
    icon         : Images.TAB_1,
    selectedIcon : Images.TAB_1_selected,
  },
}
