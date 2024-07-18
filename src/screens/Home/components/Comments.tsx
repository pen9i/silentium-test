/* eslint-disable import/no-cycle */
import { useTheme } from '@/theme';
import { memo, useState } from 'react';
import { Text, View } from 'react-native';
import Comment from './Comment';

type Props = {
	commentIds: number[];
	root?: boolean;
};

const Comments = ({ commentIds, root = false }: Props) => {
	const { gutters } = useTheme();
	const [shownCommentIds, setShownCommentIds] = useState(
		commentIds.slice(0, 3),
	);
	const [showMore, setShowMore] = useState(commentIds.length > 3);

	const handleShowMore = () => {
		const nextStartIndex = shownCommentIds.length;
		const nextEndIndex = nextStartIndex + 3;
		setShownCommentIds(commentIds.slice(0, nextEndIndex));
		setShowMore(nextEndIndex < commentIds.length);
	};
	const remainingComments = commentIds.length - shownCommentIds.length;

	return (
		<View style={[gutters.gap_12]}>
			{shownCommentIds.map(
				id =>
					id && (
						<View key={id} style={!root && gutters.marginLeft_8}>
							<Comment commentId={id} />
						</View>
					),
			)}
			{showMore && (
				<Text style={[gutters.marginLeft_8]} onPress={handleShowMore}>
					{remainingComments} more comments
				</Text>
			)}
		</View>
	);
};

export default memo(Comments);
