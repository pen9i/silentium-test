import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { HomeScreen, StoryDetailScreen } from '@/screens';
import { useTheme } from '@/theme';

import { ApplicationStackParamList, RouteName } from './route';

const Stack = createStackNavigator<ApplicationStackParamList>();

function ApplicationNavigator() {
	const { variant, navigationTheme } = useTheme();

	return (
		<SafeAreaProvider>
			<NavigationContainer theme={navigationTheme}>
				<Stack.Navigator key={variant} screenOptions={{ headerShown: false }}>
					<Stack.Screen name={RouteName.Home} component={HomeScreen} />
					<Stack.Screen
						name={RouteName.StoryDetail}
						component={StoryDetailScreen}
						options={{ headerShown: true }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</SafeAreaProvider>
	);
}

export default ApplicationNavigator;
