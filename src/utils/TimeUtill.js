import BackgroundTimer from 'react-native-background-timer';

export const getTotalSeconds = (hours, minutes, seconds) => {
  return hours * 3600 + minutes * 60 + seconds;
};

export const getTime = (secs) => {
  console.log(secs);
  let h = Math.floor(secs / 3600);
  let mts = secs % 3600;
  let m = Math.floor(mts / 60);
  let s = mts % 60;
  return [h, m, s];
};

export const getTimer = (func) => {
  let timerId = BackgroundTimer.setInterval(() => {
    func();
  }, 1000);
  return timerId;
};
