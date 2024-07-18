import { useTheme } from '@/theme';
import { FC } from 'react';
import { LayoutChangeEvent, Pressable } from 'react-native';
import Animated, {
	measure,
	MeasuredDimensions,
	runOnJS,
	runOnUI,
	useAnimatedRef,
	useAnimatedStyle,
	withTiming,
} from 'react-native-reanimated';

type Props = {
	isActive: boolean;
	title: string;
	onLayout: (event: LayoutChangeEvent) => void;
	onPress: (measurement: MeasuredDimensions | null) => void;
	testID: string;
};
export const TabBarButton: FC<Props> = ({
	onPress,
	title,
	onLayout,
	isActive,
	testID,
}) => {
	const { components } = useTheme();
	const animatedRef = useAnimatedRef<Animated.View>();
	const handlePress = () => {
		runOnUI(() => {
			const measurement = measure(animatedRef);
			runOnJS(onPress)(measurement);
		})();
	};
	const textAStyle = useAnimatedStyle(() => {
		return {
			color: withTiming(isActive ? 'black' : '#6c7589', { duration: 350 }),
		};
	});
	return (
		<Pressable
			testID={testID}
			onLayout={onLayout}
			ref={animatedRef}
			onPress={handlePress}
		>
			<Animated.Text style={[components.tabTitle, textAStyle]}>
				{title}
			</Animated.Text>
		</Pressable>
	);
};
