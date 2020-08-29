import AsyncStorage from '@react-native-community/async-storage';

export const saveData = async (data) => {
  try {
    await AsyncStorage.setItem('data', JSON.stringify(data));
  } catch (error) {
    // Error saving data
    console.log(error.message);
  }
  // console.log('Data saved !!', data);
};

export const getData = async () => {
  let dataString = '';
  try {
    dataString = await AsyncStorage.getItem('data');
    if (dataString !== null) {
      return JSON.parse(dataString);
    } else {
      return {};
    }
  } catch (error) {
    // Error getting data
    console.log(error.message);
  }
  // console.log('Fetched data !');
};
