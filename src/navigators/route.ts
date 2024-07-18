import { Story } from '@/types/schemas/story';
import {
	NavigationProp,
	RouteProp,
	useNavigation,
	useRoute,
} from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';

export type ApplicationStackParamList = {
	HomeScreen: undefined;
	WebviewScreen: { url: string };
	StoryDetailScreen: { story: Story };
};

export type ApplicationScreenProps =
	StackScreenProps<ApplicationStackParamList>;

export enum RouteName {
	Home = 'HomeScreen',
	Webview = 'WebviewScreen',
	StoryDetail = 'StoryDetailScreen',
}

export const useAppNavigation = () => {
	return useNavigation<NavigationProp<ApplicationStackParamList>>();
};

export function useAppRouteParam<T extends RouteName>() {
	const route = useRoute<RouteProp<ApplicationStackParamList, T>>();
	return route.params;
}
