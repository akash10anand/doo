import React from 'react';
import { View, Text, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import TimerCard from '../components/TimerCards';

const Timers = ({ navigation, data, deleteTimer, editData }) => {
  const renderItem = ({ item }) => {
    return (
      <TimerCard
        deleteTimer={deleteTimer}
        id={item}
        navigation={navigation}
        data={data[item]}
        editData={editData}
      />
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ paddingTop: 16, marginHorizontal: 16 }}>
        <Text style={{ fontWeight: '600', fontSize: 20 }}>Timers</Text>
        <FlatList
          data={Object.keys(data)}
          renderItem={renderItem}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

// Timers.propTypes = {
//   data: PropTypes.object,
// };

export default Timers;
