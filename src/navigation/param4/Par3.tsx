import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ route, navigation }) {
    const { itemId } = route.params;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Text>itemId: {JSON.stringify(itemId)}</Text>
            <Button
                title="Update param"
                onPress={() =>
                    navigation.setParams({
                        itemId: Math.floor(Math.random() * 100),
                    })
                }
            />
        </View>
    );
}

const Stack = createNativeStackNavigator();

export default function Par3() {
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
