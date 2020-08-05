import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';

import {
  View,
  Text,
  TextInput,
  CheckBox,
  TouchableOpacity,
} from 'react-native';
import TimePicker from 'react-native-simple-time-picker';

const AddTimer = (props) => {
  const [title, setTitle] = useState('');
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [saveTimer, setSaveTimer] = useState(true);
  const [singleUseTimer, setSingleUseTimer] = useState(false);

  const navigation = useNavigation();

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
        <TimePicker
          selectedHours={hours}
          //initial Hourse value
          selectedMinutes={minutes}
          //initial Minutes value
          onChange={(hours, minutes) => {
            setHours(hours);
            setMinutes(minutes);
          }}
        />
      </View>
      <View style={{ marginTop: 16 }}>
        <Text style={{ fontWeight: '600', fontSize: 16 }}>
          Save Timer or save Single user Timer
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <CheckBox
            value={saveTimer}
            onValueChange={() => {
              setSingleUseTimer(false);
              setSaveTimer(true);
            }}
          />
          <Text style={{ marginLeft: 8 }}>Save</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <CheckBox
            value={singleUseTimer}
            onValueChange={() => {
              setSingleUseTimer(true);
              setSaveTimer(false);
            }}
          />
          <Text style={{ marginLeft: 8 }}>One time</Text>
        </View>
      </View>
      <TouchableOpacity
        style={{ backgroundColor: 'green', marginTop: 16, borderRadius: 4 }}
        onPress={() => {
          props.saveTimerData(title, hours, minutes, saveTimer, singleUseTimer);
          props.saveTimer();
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
  saveTimers: PropTypes.func,
};

export default AddTimer;
