import { Alert, Platform, ToastAndroid } from 'react-native';

function useCatchError() {
  const errorMessage = (error: any) => {
    if (error) {
      if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        console.log('error.response.data', error.response.data);

        const message = Array.isArray(error.response.data?.message)
          ? error.response.data?.message[0]
          : error.response.data?.message;

        let messageFormatted = message;

        if (Platform.OS == 'ios') {
          Alert.alert(messageFormatted);
        } else {
          ToastAndroid.show(messageFormatted, 9000);
        }
      } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        console.log(error.request);

        if (Platform.OS == 'ios') {
          Alert.alert(error.message);
        } else {
          ToastAndroid.show(error.message, 9000);
        }
      } else {
        if (Platform.OS == 'ios') {
          Alert.alert(error.message);
        } else {
          ToastAndroid.show(error.message, 9000);
        }
      }
    }
  };

  return errorMessage;
}

export default useCatchError;
