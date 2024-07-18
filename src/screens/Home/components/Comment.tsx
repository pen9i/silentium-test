/* eslint-disable import/no-cycle */
import { fetchCommentDetails } from '@/services/stories';
import { useQuery } from '@tanstack/react-query';
import { Text, View } from 'react-native';
import HTMLView from 'react-native-htmlview';
import Avatar from '@/components/atoms/Avatar/Avatar';
import { useTheme } from '@/theme';
import moment from 'moment';
import { memo } from 'react';
import Comments from './Comments';

type Props = {
	commentId: number;
};

const Comment = (props: Props) => {
	const { commentId } = props;
	const { layout, fonts, gutters, components } = useTheme();
	const { data: comment } = useQuery({
		queryKey: ['comment', commentId],
		queryFn: () => {
			return fetchCommentDetails(commentId || 0);
		},
	});
	if (!comment && !comment?.deleted) return null;
	return (
		<View style={gutters.gap_8}>
			<View style={[layout.row]}>
				<Avatar />
				<View style={layout.flex_1}>
					<Text style={[fonts.bold, fonts.size_16]}>
						{comment?.by}{' '}
						<Text style={[fonts.size_12, fonts.gray200]}>
							{moment(comment?.time).fromNow()}
						</Text>
					</Text>
					{comment?.text && (
						<View style={components.comment}>
							<HTMLView value={comment.text} />
						</View>
					)}
					{comment.kids ? <Comments commentIds={comment.kids} /> : null}
				</View>
			</View>
		</View>
	);
};

export default memo(Comment);
