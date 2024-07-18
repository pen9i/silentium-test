import { Meta } from '@/components/molecules';
import { useTheme } from '@/theme';
import { Story } from '@/types/schemas/story';
import { CommandIcon, HeartIcon, Share2Icon } from 'lucide-react-native';
import React, { memo } from 'react';
import { Image, Pressable, Text, View } from 'react-native';

type CardProps = {
	story: Story;
	onPress: () => void;
};

const Card: React.FC<CardProps> = ({ story, onPress }) => {
	const { layout, gutters, fonts, components, colors } = useTheme();

	const handlePress = () => {
		onPress();
	};

	return (
		<Pressable
			onPress={handlePress}
			style={[
				components.card,
				gutters.marginHorizontal_12,
				gutters.marginBottom_8,
				gutters.gap_10,
			]}
		>
			<Meta article={story} />
			<Image
				source={{
					uri: 'https://picsum.photos/400',
				}}
				resizeMode="cover"
				style={[components.image]}
			/>
			<Text style={[fonts.size_16, fonts.bold]}>{story.title}</Text>
			{Object.keys(story).length > 0 && (
				<View
					style={[
						layout.flex_1,
						layout.row,
						layout.itemsCenter,
						layout.justifyBetween,
					]}
				>
					<View style={[layout.row, layout.itemsCenter, gutters.gap_4]}>
						<HeartIcon size={18} color={colors.red500} />
						<Text>{story.score}</Text>
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
			)}
		</Pressable>
	);
};

export default memo(Card);
