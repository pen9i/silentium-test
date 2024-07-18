import { Meta } from '@/components/molecules';
import { RouteName, useAppRouteParam } from '@/navigators/route';
import { useTheme } from '@/theme';
import { Story } from '@/types/schemas/story';
import { CommandIcon, HeartIcon, Share2Icon } from 'lucide-react-native';
import { Image, ScrollView, Text, View } from 'react-native';
import Comments from '../Home/components/Comments';

const StoryDetail = () => {
	const route = useAppRouteParam<RouteName.StoryDetail>();
	const story = route?.story as Story;
	const { components, gutters, layout, fonts, colors } = useTheme();
	return (
		<ScrollView style={[layout.flex_1]}>
			<View style={gutters.padding_10}>
				<Meta article={story} />
				<Text style={[fonts.size_16, fonts.bold]}>{story?.title}</Text>
			</View>
			<Image
				source={{
					uri: 'https://picsum.photos/400',
				}}
				resizeMode="cover"
				style={[components.imageDetail]}
			/>
			{story && Object.keys(story).length > 0 && (
				<>
					<View
						style={[
							layout.flex_1,
							layout.row,
							layout.itemsCenter,
							layout.justifyBetween,
							gutters.padding_10,
						]}
					>
						<View style={[layout.row, layout.itemsCenter, gutters.gap_4]}>
							<HeartIcon size={18} color={colors.red500} />
							<Text>{story?.score}</Text>
						</View>
						<View style={[layout.row, layout.itemsCenter, gutters.gap_4]}>
							<CommandIcon size={18} color={colors.purple500} />
							{story.kids && story.kids.length > 0 ? (
								<Text>{story.kids.length}</Text>
							) : (
								<Text>0</Text>
							)}
						</View>
						<Share2Icon size={18} />
					</View>
					{story.kids ? (
						<View style={gutters.paddingHorizontal_10}>
							<Comments commentIds={story.kids} root />
						</View>
					) : null}
				</>
			)}
		</ScrollView>
	);
};

export default StoryDetail;
