import React from 'react';
import { Text, View, Platform } from 'react-native';
import { Header, Title } from 'native-base'; 

export default class App extends React.Component {

    //////////////////////////////////////////////

    ////////////////    STATE    ///////////////

    /////////////////////////////////////////////

    state = {
        currentScreen: ''
    }

   //////////////////////////////////////////////

    ////////////////  FUCNTIONS   ///////////////

    /////////////////////////////////////////////

    switchScreen = () => {

    }

    //////////////////////////////////////////////

    ////////////////  RENDERING   ///////////////

    /////////////////////////////////////////////

    render() {
        return (
            <View style={styles.container}>
                <Header>
                    <Title>OneArc</Title>
                </Header>
                <Text style = {styles.viewStyle}>
                    This is placeholder text. I NEED TO FIX THIS. Not sure what's wrong.
                </Text>
            </View>
        );
    }
}

    //////////////////////////////////////////////

    ////////////////  STYLES   ///////////////

    /////////////////////////////////////////////

const styles = {
  container : {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 24 : 0
  },
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
}
