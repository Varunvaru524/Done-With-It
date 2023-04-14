import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import PageLayout from './Components/PageLayout';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'


function Tweet(props) {
    return (
        <View>
            <Text>Tweets</Text>
        </View>
    );
}

function TweetDetails({navigation}) {
    return (
        <View>
            <Text>TweetsDetails</Text>
            <Button title='Click Me' onPress={()=>navigation.navigate('Tweets')}/>
        </View>
    );
}

const Stack = createStackNavigator();




// let TheNavigetor = (props) => {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen name='Tweets' component={Tweet} />
//         </Stack.Navigator>
//     )
// }



class Experimental extends Component {

    render() {
        return (
            <PageLayout>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName='TweetDetails'>
                        <Stack.Screen name='Tweets' component={Tweet} />
                        <Stack.Screen name='TweetDetails' component={TweetDetails} />
                    </Stack.Navigator>
                </NavigationContainer>
            </PageLayout>
        );
    }
}

export default Experimental;