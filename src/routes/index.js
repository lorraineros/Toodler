import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Main from '../views/MainView'
import BoardDetail from '../views/BoardView'
const Stack = createStackNavigator()

const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="BoardDetail" component={BoardDetail} />
        </Stack.Navigator>
    </NavigationContainer>
)

export default Routes
