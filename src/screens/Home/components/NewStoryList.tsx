import { fetchNewStories } from '@/services/stories';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import LargeList from './LargeList';
import SectionHeader from './SectionHeader';

const NewStoryList: React.FC = () => {
	const { isSuccess, data } = useQuery<number[]>({
		queryKey: ['new-stories'],
		queryFn: () => {
			return fetchNewStories();
		},
	});

	return (
		<>
			<SectionHeader title="Latest Articles" />
			{isSuccess && <LargeList items={data} type="news-story" />}
		</>
	);
};

export default NewStoryList;
