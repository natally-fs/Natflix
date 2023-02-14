import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  AnimatedTabBarNavigator,
  TabElementDisplayOptions,
} from 'react-native-animated-nav-tab-bar';
import Filmes from '../screens/Filmes';
import EmBreve from '../screens/EmBreve';
import Series from '../screens/Series';
import Buscar from '../screens/Buscar';
import Film from '../assets/film.svg';
import Tv from '../assets/tv.svg';
import Search from '../assets/search.svg';
import Calendar from '../assets/calendar.svg';

const Tabs = AnimatedTabBarNavigator();

export function Routes(): JSX.Element {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        tabBarOptions={{
          activeTintColor: '#f6f7f7f5',
          inactiveTintColor: '#f6f7f7f5',
          activeBackgroundColor: '#DE1A3A',
        }}
        appearance={{
          tabBarBackground: '#241E31',
          whenInactiveShow: TabElementDisplayOptions.ICON_ONLY,
        }}>
        <Tabs.Screen
          name="Filmes"
          component={Filmes}
          options={{
            tabBarIcon: ({color}: {color: string}) => <Film stroke={color} />,
          }}
        />
        <Tabs.Screen
          name="Series"
          component={Series}
          options={{
            tabBarIcon: ({color}: {color: string}) => <Tv stroke={color} />,
          }}
        />
        <Tabs.Screen
          name="Buscar"
          component={Buscar}
          options={{
            tabBarIcon: ({color}: {color: string}) => <Search stroke={color} />,
          }}
        />
        <Tabs.Screen
          name="Em breve"
          component={EmBreve}
          options={{
            tabBarIcon: ({color}: {color: string}) => (
              <Calendar stroke={color} />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
