import AsyncStorage from '@react-native-community/async-storage';

export const saveData = async (data) => {
  try {
    await AsyncStorage.setItem('goals', JSON.stringify(data));
  } catch (error) {
    // Error saving data
    console.log(error.message);
  }
  console.log('Data saved !!');
};

export const getGoals = async () => {
  let dataString = '';
  try {
    dataString = await AsyncStorage.getItem('data');
    if (dataString !== null) {
      return JSON.parse(dataString);
    } else {
      return [];
    }
  } catch (error) {
    // Error getting data
    console.log(error.message);
  }
  console.log('Fetched data !');
};
