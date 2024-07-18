import { useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import PagerView from 'react-native-pager-view';
import {
	useSharedValue,
	withSequence,
	withTiming,
} from 'react-native-reanimated';
import BestStoryList from './BestStoryList';
import NewStoryList from './NewStoryList';
import TopStoryList from './TopStoryList';
import { TabBar } from './TabBar';

export const SPRING_CONFIG = {
	damping: 20,
	mass: 1,
	overshootClamping: false,
	restDisplacementThreshold: 0.1,
	restSpeedThreshold: 0.01,
	stiffness: 150,
};

const renderScene = (index: number) => {
	switch (index) {
		case 0:
			return <NewStoryList />;
		case 1:
			return <BestStoryList />;
		case 2:
			return <TopStoryList />;
		default:
			return null;
	}
};

function TabView() {
	const [page, setPage] = useState<number>(0);

	const ref = useRef<PagerView>(null);
	const translateX = useSharedValue(0);

	const handleTabPress = (index: number) => {
		if (page !== index) {
			// Animate translation for shake effect
			translateX.value = withSequence(
				withTiming(page > index ? 20 : -20, { duration: 300 }),
				withTiming(0, { duration: 300 }),
			);

			// Set the current page index
			setPage(index);

			// Change the current page in the PagerView
			ref.current?.setPage(index);
		}
	};

	return (
		<View style={{ flex: 1 }}>
			<TabBar onPress={index => handleTabPress(index)} activeIndex={page} />
			<PagerView
				ref={ref}
				scrollEnabled={false}
				testID="pager-view"
				style={styles.pagerView}
				initialPage={0}
				useNext={false}
			>
				{Array.from({ length: 3 }).map((_, index) => (
					<View key={index.toString()} style={styles.pageContainer}>
						{renderScene(index)}
					</View>
				))}
			</PagerView>
		</View>
	);
}

const styles = StyleSheet.create({
	pagerView: {
		flex: 1,
	},
	springContainer: {
		flex: 1,
		justifyContent: 'center',
	},

	blurView: {
		...StyleSheet.absoluteFillObject,
		zIndex: 1,
	},
	text: {
		fontSize: 24,
		fontWeight: '600',
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: 'bold',
	},
	sectionHeader: {
		paddingHorizontal: 20,
		marginTop: 16,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	pageContainer: {
		flex: 1,
	},
});

export default TabView;
