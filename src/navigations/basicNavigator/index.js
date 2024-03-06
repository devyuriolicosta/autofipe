import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BasicNavigator } from '_scenes';

const Stack = createNativeStackNavigator();
const NavigatorStack = props => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="home"
                options={{ title: 'Pesquisar' }}
                component={BasicNavigator.HomeScreen} />
            <Stack.Screen
                name="result"
                options={{ title: 'Resultado' }}
                component={BasicNavigator.ResultScreen} />
        </Stack.Navigator>
    );
};

export default NavigatorStack;