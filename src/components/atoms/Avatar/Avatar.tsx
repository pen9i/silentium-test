/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useTheme } from '@/theme';
import { Image } from 'react-native';

const Avatar = () => {
	const { components } = useTheme();
	return (
		<Image
			source={require('@/assets/images.png')}
			style={components.avatarStory}
			resizeMode="cover"
		/>
	);
};

export default Avatar;
