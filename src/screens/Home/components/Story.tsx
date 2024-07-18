import { fetchStoryDetails } from '@/services/stories';
import { useQuery } from '@tanstack/react-query';
import { Story as IStory } from '@/types/schemas/story';
import Card from './Card';

type Props = {
	storyId: number;
	onPress: (story: IStory) => void;
};

const Story = (props: Props) => {
	const { storyId, onPress } = props;
	const { data } = useQuery({
		queryKey: ['story', storyId],
		queryFn: () => {
			return fetchStoryDetails(storyId || 0);
		},
	});
	if (!data && !data?.url) return null;
	return <Card story={data} onPress={() => onPress(data)} />;
};

export default Story;
