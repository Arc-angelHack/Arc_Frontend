import React from 'react';
import { Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <Text>The Arc App</Text>
      </View>
    );
  }
}

const styles = {
  viewStyle : {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
}
