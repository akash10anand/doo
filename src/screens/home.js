import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Timers from '../components/Timers';
import AddTimer from '../components/AddTimer';
import Settings from '../components/Settings';
import { saveData, getData } from '../utils/DbHelper';

const Tab = createBottomTabNavigator();

const generateId = () => Date.now().toString();

const Home = () => {
  const [data, setData] = useState({});
  const [editData, setEditData] = useState({});

  useEffect(() => {
    getData().then((result) => setData(result || {}));
  }, []);

  const saveTimerData = (
    title,
    hours,
    minutes,
    seconds,
    reusableTimer,
    singleUseTimer,
    editData,
  ) => {
    let newTimer = {};
    if (editData.toEdit) {
      newTimer[editData.id] = {
        title: title,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        reusableTimer: reusableTimer,
        singleUseTimer: singleUseTimer,
        editCounter: data[editData.id].editCounter + 1,
      };
      setEditData(editData);
    } else {
      newTimer[generateId()] = {
        title: title,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        reusableTimer: reusableTimer,
        singleUseTimer: singleUseTimer,
        editCounter: 1,
      };
    }
    setData({ ...data, ...newTimer });
  };

  useEffect(() => {
    if (data !== {}) {
      saveData(data);
    }
  }, [data]);

  const deleteTimer = (timerId) => {
    delete data[timerId];
    setData({ ...data });
  };

  return (
    // <View style={{ flex: 1 }}>
    <NavigationContainer>
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
          {(props) => (
            <Timers
              {...props}
              data={data}
              deleteTimer={deleteTimer}
              editData={editData}
            />
          )}
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
          {(props) => <AddTimer {...props} saveTimerData={saveTimerData} />}
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
    </NavigationContainer>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
