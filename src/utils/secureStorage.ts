import EncryptedStorage from 'react-native-encrypted-storage';

class SecureStorage {
  async setItem(key: string, value: string): Promise<void> {
    try {
      await EncryptedStorage.setItem(key, value);
    } catch (error) {
      console.log('SecureStorage setItem Error:', error);
      throw error;
    }
  }

  async getItem(key: string): Promise<string | null> {
    try {
      return await EncryptedStorage.getItem(key);
    } catch (error) {
      console.log('SecureStorage getItem Error:', error);
      return null;
    }
  }

  async removeItem(key: string): Promise<void> {
    try {
      await EncryptedStorage.removeItem(key);
    } catch (error) {
      console.log('SecureStorage removeItem Error:', error);
      throw error;
    }
  }

  async clear(): Promise<void> {
    try {
      await EncryptedStorage.clear();
    } catch (error) {
      console.log('SecureStorage clear Error:', error);
      throw error;
    }
  }
}

export const secureStorage = new SecureStorage();
