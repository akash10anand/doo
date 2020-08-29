/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  TextInput,
  CheckBox,
  TouchableOpacity,
} from 'react-native';
import TimePicker from 'react-native-simple-time-picker';

const AddTimer = ({ navigation, saveTimerData, route }) => {
  const [title, setTitle] = useState('');
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(1);
  const [reusableTimer, setReusableTimer] = useState(true);
  const [singleUseTimer, setSingleUseTimer] = useState(false);
  const [editData, setEditData] = useState({ toEdit: false, id: null });

  const editTimer = (timerDetails) => {
    setTitle(timerDetails.title);
    setHours(timerDetails.hours);
    setMinutes(timerDetails.minutes);
    setSeconds(timerDetails.seconds);
    setReusableTimer(timerDetails.reusableTimer);
    setSingleUseTimer(timerDetails.singleUseTimer);
  };
  const resetTimer = () => {
    setTitle('');
    setHours('');
    setMinutes('');
    setSeconds('');
    setReusableTimer(true);
    setSingleUseTimer(false);
    setEditData({ toEdit: false, id: null });
  };

  useEffect(() => {
    if (route.params !== undefined) {
      const { edit, timerDetails, id } = route.params;
      if (edit) {
        setEditData({
          toEdit: true,
          id: id,
        });
        editTimer(timerDetails);
      }else{
        resetTimer();
      }
    }
  }, [route.params]);

  // useEffect(() => {
  //   if (!editData.toEdit) {
  //     setTitle('');
  //     setHours(0);
  //     setMinutes(0);
  //     setSeconds(0);
  //     setReusableTimer(true);
  //     setSingleUseTimer(false);
  //     setEditData({ toEdit: false, id: null });
  //   }
  // }, []);

  return (
    <View style={{ flex: 1, marginHorizontal: 16 }}>
      <View style={{ paddingTop: 16 }}>
        <Text style={{ fontWeight: '600', fontSize: 20 }}>Add new Timer</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          alignItems: 'center',
        }}>
        <Text style={{ fontWeight: '600', fontSize: 16 }}>Title</Text>
        <TextInput
          style={{
            flex: 1,
            marginLeft: 38,
            borderBottomWidth: 1,
          }}
          value={title}
          onChangeText={(value) => setTitle(value)}></TextInput>
      </View>
      <View style={{ marginTop: 16 }}>
        <Text style={{ fontWeight: '600', fontSize: 16 }}>Timers</Text>
        <View style={{ flexDirection: 'row', marginStart: 38 }}>
          <TextInput
            style={{
              marginLeft: 38,
              borderBottomWidth: 1,
              flex: 1,
            }}
            placeholder={'Minutes'}
            keyboardType={'numeric'}
            value={String(minutes)}
            onChangeText={(value) => setMinutes(Number(value))}></TextInput>
          <TextInput
            style={{
              marginLeft: 38,
              borderBottomWidth: 1,
              flex: 1,
            }}
            placeholder={'Seconds'}
            keyboardType={'numeric'}
            value={String(seconds)}
            onChangeText={(value) => setSeconds(Number(value))}></TextInput>
        </View>
      </View>
      <View style={{ marginTop: 16 }}>
        <Text style={{ fontWeight: '600', fontSize: 16 }}>
          Save Timer or save Single user Timer
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <CheckBox
            value={reusableTimer}
            onValueChange={() => {
              setSingleUseTimer(false);
              setReusableTimer(true);
            }}
          />
          <Text style={{ marginLeft: 8 }}>Save</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <CheckBox
            value={singleUseTimer}
            onValueChange={() => {
              setSingleUseTimer(true);
              setReusableTimer(false);
            }}
          />
          <Text style={{ marginLeft: 8 }}>One time</Text>
        </View>
      </View>
      <TouchableOpacity
        style={{ backgroundColor: 'green', marginTop: 16, borderRadius: 4 }}
        onPress={() => {
          saveTimerData(
            title,
            Number(hours),
            Number(minutes),
            Number(seconds),
            reusableTimer,
            singleUseTimer,
            editData,
          );
          resetTimer();
          navigation.navigate('Timers');
        }}>
        <View style={{ marginVertical: 16, alignItems: 'center' }}>
          <Text style={{ fontWeight: '600', fontSize: 18, color: 'white' }}>
            Save
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

AddTimer.propTypes = {
  saveTimerData: PropTypes.func,
  saveTimer: PropTypes.func,
};

export default AddTimer;
