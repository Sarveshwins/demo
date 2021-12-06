import AsyncStorage from '@react-native-async-storage/async-storage';

const key = {
  TOKEN_SAVE: 'TOKEN_SAVE',
  SAVE_CLIENT_ID: ' SAVE_CLIENT_ID',
};

const AppStorage = {
  async saveKey(keyName, value) {
    try {
      await AsyncStorage.setItem(keyName, value);
    } catch (e) {
      console.log('errree', e);
    }
  },
  async removeItemKey(keyName) {
    try {
      await AsyncStorage.removeItem(keyName);
      return true;
    } catch (e) {
      return false;
    }
  },
  async clearAsyncStorage() {
    try {
      await AsyncStorage.clear();
    } catch (error) {}
  },

  async getToken() {
    try {
      let response = await AsyncStorage.getItem(key.TOKEN_SAVE);
      return response;
    } catch (error) {}
  },

  async getClientId() {
    try {
      let response = await AsyncStorage.getItem(key.SAVE_CLIENT_ID);
      let responseParsed = JSON.parse(response);
      return responseParsed;
    } catch (error) {}
  },
};

export {AppStorage, key};
