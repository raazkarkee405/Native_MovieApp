import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Home, Search, Ticket, UserAccount} from '../screens';
import {COLORS, FONTSIZE, SPACING} from '../theme/theme';
import CustomIcon from '../components/CustomIcon';

interface TabBarIconProps {
  focused: boolean;
  icon: string;
}

const TabBarIcon: React.FC<TabBarIconProps> = ({focused, icon}) => {
  return (
    <View
      style={[
        styles.activeTabBackground,
        focused ? {backgroundColor: COLORS.Orange} : {},
      ]}>
      <CustomIcon name={icon} color={COLORS.White} size={FONTSIZE.size_30} />
    </View>
  );
};

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.Black,
          borderTopWidth: 0,
          height: SPACING.space_10 * 10,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <TabBarIcon focused={focused} icon="video" />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <TabBarIcon focused={focused} icon="search" />
          ),
        }}
      />
      <Tab.Screen
        name="Ticket"
        component={Ticket}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <TabBarIcon focused={focused} icon="ticket" />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={UserAccount}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <TabBarIcon focused={focused} icon="user" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  activeTabBackground: {
    backgroundColor: COLORS.Black,
    padding: SPACING.space_18,
    borderRadius: SPACING.space_18 * 10,
  },
});

export default TabNavigator;
