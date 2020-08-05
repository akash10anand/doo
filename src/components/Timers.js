import React from 'react';
import { View, Text, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import TimerCard from '../components/TimerCards';

const renderItem = ({ item }) => {
  return <TimerCard {...item} />;
};

const Timers = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ paddingTop: 16, marginHorizontal: 16 }}>
        <Text style={{ fontWeight: '600', fontSize: 20 }}>Timers</Text>
        <FlatList
          data={props.data}
          renderItem={renderItem}
          // keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

Timers.propTypes = {
  data: PropTypes.array,
};

export default Timers;
