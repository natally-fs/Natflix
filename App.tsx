import React from 'react';
import {Text, SafeAreaView, StatusBar} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#0066CC"
        translucent={false}
        networkActivityIndicatorVisible={true}
      />
      <Text>Natflix</Text>
    </SafeAreaView>
  );
}

export default App;
