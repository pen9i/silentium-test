import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import type { ComponentTheme } from '@/types/theme/theme';
import { SCREEN_WIDTH } from '@/constants/window';

interface AllStyle
	extends Record<string, AllStyle | ImageStyle | TextStyle | ViewStyle> {}

const TAB_BAR_WIDTH = SCREEN_WIDTH * 0.95;

export default ({ layout, backgrounds, fonts }: ComponentTheme) => {
	return {
		buttonCircle: {
			...layout.justifyCenter,
			...layout.itemsCenter,
			...backgrounds.purple100,
			...fonts.gray400,
			height: 70,
			width: 70,
			borderRadius: 35,
		},
		circle250: {
			borderRadius: 140,
			height: 250,
			width: 250,
		},
		card: {
			alignItems: 'stretch',
			padding: 10,
			borderColor: '#ececec',
			backgroundColor: '#fff',
			borderRadius: 8,
			shadowColor: '#000',
			shadowOpacity: 0.1,
			shadowRadius: 4,
			shadowOffset: { width: 0, height: 2 },
			elevation: 2,
		},
		avatarStory: {
			width: 42,
			height: 42,
			borderRadius: 9999,
		},
		image: {
			width: '100%',
			height: 200,
			borderRadius: 10,
		},
		imageDetail: {
			width: '100%',
			height: 344,
		},
		tabParentContainer: {
			width: '100%',
			alignItems: 'center',
		},
		tabBarContainer: {
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
			paddingHorizontal: 12,
			paddingVertical: 12,
			borderRadius: 20,
			width: TAB_BAR_WIDTH,
			backgroundColor: '#e6e8eb',
		},
		tabIndicator: {
			position: 'absolute',
			backgroundColor: 'white',
			height: 30,
			borderRadius: 20,
			zIndex: -1,
		},
		tabTitle: {
			fontWeight: '500',
			fontSize: 14,
		},
		comment: {
			...backgrounds.gray50,
			borderRadius: 8,
			padding: 10,
			marginVertical: 8,
		},
	} as const satisfies AllStyle;
};
