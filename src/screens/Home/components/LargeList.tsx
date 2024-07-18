/* eslint-disable @typescript-eslint/no-unused-vars */
import { useTheme } from '@/theme';
import { FlashList } from '@shopify/flash-list';
import { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppNavigation } from '@/navigators/route';
import { Story as IStory } from '@/types/schemas/story';
import Story from './Story';

type LargeListProps = {
	items: number[];
	type: 'news-story' | 'best-story' | 'top-story';
};
const itemsPerPage = 10;

const LargeList = ({ items, type }: LargeListProps) => {
	const [data, setData] = useState<number[]>([]);
	const [page, setPage] = useState(1);
	const [isLoading, setIsLoading] = useState(false);
	const { layout } = useTheme();
	const insets = useSafeAreaInsets();
	const navigation = useAppNavigation();

	useEffect(() => {
		loadMoreData();
	}, []);

	const loadMoreData = useCallback(() => {
		if (isLoading) return;

		setIsLoading(true);

		setTimeout(() => {
			const start = (page - 1) * itemsPerPage;
			const end = page * itemsPerPage;
			const newItems = items.slice(start, end);

			setData(prevData => [...prevData, ...newItems]);
			setPage(prevPage => prevPage + 1);
			setIsLoading(false);
		}, 1000);
	}, [isLoading, page, items]);

	const onPressStory = (story: IStory) =>
		navigation.navigate('StoryDetailScreen', { story });

	const renderItem = ({ item }: { item: number }) => (
		<Story storyId={item} onPress={onPressStory} />
	);

	const renderFooter = useCallback(() => {
		return isLoading ? (
			<View style={[layout.itemsCenter]}>
				<ActivityIndicator />
			</View>
		) : null;
	}, [isLoading]);

	return (
		<FlashList
			testID="large-list"
			data={data}
			keyExtractor={(item: number, index: number) => `${item}_${index}`}
			renderItem={renderItem}
			estimatedItemSize={344}
			onEndReached={loadMoreData}
			onEndReachedThreshold={0.7}
			ListFooterComponent={renderFooter}
			contentContainerStyle={{ paddingBottom: insets.bottom }}
		/>
	);
};

export default LargeList;
