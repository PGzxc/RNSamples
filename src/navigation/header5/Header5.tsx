import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
}

const Stack = createNativeStackNavigator();

export default function Header5() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                }}
            >
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'My home' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


