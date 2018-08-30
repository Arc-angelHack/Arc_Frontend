import React from 'react';
import { Text, View, Platform } from 'react-native';
import { Header, Left, Icon, Body, Title, Right, Button, Footer, FooterTab, Content } from 'native-base'; 

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


            <View style = {styles.container}>


{/* //////////////////////////////////////////////

    ///////////////////  HEADER   /////////////////

     ///////////////////////////////////////////// */}

                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>

                    <Body>
                        <Title>OneArc</Title>
                    </Body>
                    
                    <Right />
                </Header>

{/* //////////////////////////////////////////////

    ///////////////////  CONTENT   /////////////////

     ///////////////////////////////////////////// */}

                <View style = {styles.viewStyle}>
                    <Text style = {styles.textStyle}>
                        Currently Working text which is placeholder! Testing.
                    </Text>
                </View>

                <Content />

{/* //////////////////////////////////////////////

    ///////////////////  FOOTER   /////////////////

     ///////////////////////////////////////////// */}

                <Footer>
                    <FooterTab>

                        <Button 
                        full primary>
                            <Text 
                            style = {styles.buttonTextStyle}>
                                Map
                            </Text>
                        </Button>

                        <Button 
                        full primary>
                            <Text 
                            style = {styles.buttonTextStyle}>
                                Board
                            </Text>
                        </Button>

                        <Button 
                        full primary>
                            <Text 
                            style = {styles.buttonTextStyle}>
                                Resource
                            </Text>
                        </Button>

                        <Button 
                        full primary>
                            <Text 
                            style = {styles.buttonTextStyle}>
                                Request
                            </Text>
                        </Button>

                    </FooterTab>
                </Footer>
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
    backgroundColor: 'red',
    marginTop: Platform.OS === 'android' ? 24 : 0,
  },
  viewStyle: {
    backgroundColor: '#a3ddff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: 'blue',
    textAlign: 'center',
  },
  buttonTextStyle: {
    color: 'white',
  }
}
