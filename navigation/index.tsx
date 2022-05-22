/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/BankAccount';
import NewsDetails from '../screens/NewsDetails';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/Account';
import Map from '../screens/Map';
import NewsFeed from '../screens/NewsFeed';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import MedicalCard from '../screens/MedicalCard';
import LinkingConfiguration from './LinkingConfiguration';
import MarkActivities from '../screens/MarkActivities';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'card' }}>
        <Stack.Screen name="Modal" options={{ title: "Банковский счет" }} component={ModalScreen} />
        <Stack.Screen name="NewsDetails" options={{ title: "Описание мероприятия" }} component={NewsDetails} />
        <Stack.Screen name="MedicalCard" options={{ title: "Медицинская карта" }} component={MedicalCard} />
        <Stack.Screen name="MarkActivities" options={{ title: "Оценивание событий" }} component={MarkActivities} />
        <Stack.Screen name="Map" options={{ title: "Карта" }} component={Map} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="TabTwo"
        component={NewsFeed}
        options={{
          title: 'Мероприятия',
          tabBarIcon: ({ color }) => <TabBarIcon name="newspaper-o" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: 'Личный кабинет',
          tabBarIcon: ({ color }) => <TabBarIcon name="user-o" color={color} />
        })}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
