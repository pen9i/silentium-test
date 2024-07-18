import Avatar from '@/components/atoms/Avatar/Avatar';
import { useTheme } from '@/theme';
import { Story } from '@/types/schemas/story';
import moment from 'moment';
import { Text, View } from 'react-native';

type Props = {
	article: Story;
};

const Meta = ({ article }: Props) => {
	const { layout, fonts } = useTheme();
	const { by, time } = article;
	return (
		<View style={[layout.row]}>
			<Avatar />
			<View>
				<Text style={fonts.bold}>{by}</Text>
				<Text>{moment(time).format('HH:mm DD/MM/YYYY')}</Text>
			</View>
		</View>
	);
};

export default Meta;
