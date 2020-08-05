import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const TimerCard = (props) => {
  return (
    <View
      style={{
        marginTop: 20,
        backgroundColor: '#bbe1fa',
        borderRadius: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 8,
          justifyContent: 'space-between',
          marginTop: 4,
          marginBottom: 16,
        }}>
        <View>
          <Text style={{ fontSize: 22 }}>{props.title}</Text>
        </View>
        <View>
          <Text style={{ fontSize: 22 }}>
            {props.hours}:{props.minutes}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginBottom: 13,
        }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => console.log('tapped')}>
          <MaterialCommunityIcons
            name="play-circle"
            color="#4b5d67"
            size={22}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => console.log('tapped')}>
          <MaterialCommunityIcons
            name="refresh-circle"
            color="#4b5d67"
            size={22}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => console.log('tapped')}>
          <MaterialCommunityIcons
            name="pencil-circle"
            color="#4b5d67"
            size={22}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => console.log('tapped')}>
          <MaterialCommunityIcons
            name="delete-circle"
            color="#4b5d67"
            size={22}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// TimerCard.propTypes = {
//   title: PropTypes.string,
//   hours: PropTypes.string,
//   minutes: PropTypes.string,
// };

export default TimerCard;
