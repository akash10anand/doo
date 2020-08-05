import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Timers from '../components/Timers';
import AddTimer from '../components/AddTimer';
import Settings from '../components/Settings';
import { saveData } from '../utils/DbHelper';

const Tab = createBottomTabNavigator();

const generateId = () => Date.now().toString();

const DATA = [
  {
    title: 'Boil eggs',
    hours: '10',
    minutes: '00',
    reusableTimer: true,
    singleUseTimer: false,
    id: generateId(),
  },
  {
    title: 'tea',
    hours: '10',
    minutes: '00',
    reusableTimer: true,
    singleUseTimer: false,
    id: generateId(),
  },
  {
    title: 'khichdi',
    hours: '10',
    minutes: '00',
    reusableTimer: true,
    singleUseTimer: false,
    id: generateId(),
  },
];

const DATA2 = {
  1: {
    title: 'Boil eggs',
    hours: '10',
    minutes: '00',
    reusableTimer: true,
    singleUseTimer: false,
  },
  2: {
    title: 'tea',
    hours: '10',
    minutes: '00',
    reusableTimer: true,
    singleUseTimer: false,
  },
  3: {
    title: 'khichdi',
    hours: '10',
    minutes: '00',
    reusableTimer: true,
    singleUseTimer: false,
  },
};

const Home = () => {
  const [data, setData] = useState(DATA);

  const saveTimerData = (
    title,
    hours,
    minutes,
    reusableTimer,
    singleUseTimer,
  ) => {
    console.log(title, hours, minutes, reusableTimer, singleUseTimer);
    setData([
      ...data,
      { title, hours, minutes, reusableTimer, singleUseTimer },
    ]);
  };

  const deleteTimer = (timerId) => {
    let index = data.findIndex((obj) => obj.id === timerId);
    if (index > -1) {
      data.splice(index, 1);
    }
    setData([...data]);
    saveData(data);
  };

  const saveTimers = () => {
    saveData(data);
  };

  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#4b5d67',
        }}>
        <Tab.Screen
          name="Timers"
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons name="timer" color="#4b5d67" size={20} />
            ),
          }}>
          {() => <Timers data={data} deleteTimer={deleteTimer} />}
        </Tab.Screen>
        <Tab.Screen
          name="AddTimers"
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="plus-circle"
                color="#4b5d67"
                size={20}
              />
            ),
          }}>
          {() => (
            <AddTimer saveTimerData={saveTimerData} saveTimers={saveTimers} />
          )}
        </Tab.Screen>
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: () => (
              <MaterialIcons name="settings" color="#4b5d67" size={20} />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
