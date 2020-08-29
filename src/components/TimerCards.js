import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BackgroundTimer from 'react-native-background-timer';

import { getTotalSeconds, getTime, getTimer } from '../utils/TimeUtill';

const TimerCard = (props) => {
  const [hours, setHours] = useState(props.data.hours);
  const [minutes, setMinutes] = useState(props.data.minutes);
  const [seconds, setSeconds] = useState(props.data.seconds);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [editCount, setEditCount] = useState(props.data.editCounter);

  let totalSecs = useRef(getTotalSeconds(hours, minutes, seconds));
  let _totalSecs = totalSecs.current;

  const editTimer = () => {
    props.navigation.navigate('AddTimers', {
      edit: true,
      timerDetails: props.data,
      id: props.id,
    });
  };

  const onPlay = () => {
    setIsActive(true);
    console.log('Timer started.');
    setIsPaused(false);
  };

  const onPause = () => {
    console.log('Timer paused.');
    setIsPaused(true);
  };

  const onReset = () => {
    setIsActive(false);
    setIsPaused(false);
    setSeconds(props.data.seconds);
    setMinutes(props.data.minutes);
    setHours(props.data.hours);
    totalSecs.current = getTotalSeconds(
      props.data.hours,
      props.data.minutes,
      props.data.seconds,
    );
  };

  const stopTimer = (timerId) => {
    BackgroundTimer.setTimeout(() => {
      BackgroundTimer.clearInterval(timerId);
      onReset();
      console.log('stoping timer');
      console.log(totalSecs.current);
    }, (_totalSecs + 1) * 1000);
  };

  useEffect(() => {
    if (isActive && !isPaused) {
      let timerId = getTimer(() => {
        totalSecs.current -= 1;
        let [h, m, s] = getTime(totalSecs.current);
        setHours(h);
        setMinutes(m);
        setSeconds(s);
        // console.log(new Date().getSeconds());
        console.log(h, m, s);
      });
      stopTimer(timerId);
    }
  }, [isActive]);

  useEffect(() => {
    setHours(props.data.hours);
    setMinutes(props.data.minutes);
    setSeconds(props.data.seconds);
    console.log(_totalSecs);
    console.log(hours, minutes, seconds);
  }, []);

  useEffect(() => {
    if(editCount !== props.data.editCounter){
      setHours(props.data.hours);
      setMinutes(props.data.minutes);
      setSeconds(props.data.seconds);
      setEditCount(props.data.editCount);
    }
  })

  useEffect(() => {
    if (isPaused) {
      console.log('Started. So icon changed.');
    } else {
      console.log('Paused. So icon change');
    }
    console.log(isActive, isPaused);
  }, [isPaused]);

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
          <Text style={{ fontSize: 22 }}>{props.data.title}</Text>
        </View>
        <View>
          <Text style={{ fontSize: 22 }}>
            {hours}:{minutes}:{seconds}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginBottom: 13,
        }}>
        <TouchableOpacity activeOpacity={0.8}>
          {isActive && !isPaused ? (
            <MaterialCommunityIcons
              onPress={() => onPause()}
              name="pause-circle"
              color="#4b5d67"
              size={22}
            />
          ) : (
            <MaterialCommunityIcons
              onPress={() => onPlay()}
              name="play-circle"
              color="#4b5d67"
              size={22}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} onPress={() => onReset()}>
          <MaterialCommunityIcons
            name="refresh-circle"
            color="#4b5d67"
            size={22}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            editTimer(props.id);
          }}>
          <MaterialCommunityIcons
            name="pencil-circle"
            color="#4b5d67"
            size={22}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            props.deleteTimer(props.id);
          }}>
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
