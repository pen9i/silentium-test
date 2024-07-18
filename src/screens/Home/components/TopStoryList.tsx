import { fetchTopStories } from '@/services/stories';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import LargeList from './LargeList';
import SectionHeader from './SectionHeader';

const TopStoryList: React.FC = () => {
	const { isSuccess, data } = useQuery<number[]>({
		queryKey: ['top-stories'],
		queryFn: () => {
			return fetchTopStories();
		},
	});

	return (
		<>
			<SectionHeader title="Top Reads" />
			{isSuccess && <LargeList items={data} type="top-story" />}
		</>
	);
};

export default TopStoryList;
