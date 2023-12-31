import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ route }) {
    const { itemId } = route.params;

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Text>Initial param: itemId - {itemId}</Text>
        </View>
    );
}

const Stack = createNativeStackNavigator();

export default function Par2() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    initialParams={{ itemId: 42 }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
