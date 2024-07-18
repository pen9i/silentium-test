import { fetchBestStories } from '@/services/stories';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import LargeList from './LargeList';
import SectionHeader from './SectionHeader';

const BestStoryList: React.FC = () => {
	const { isSuccess, data } = useQuery<number[]>({
		queryKey: ['best-stories'],
		queryFn: () => {
			return fetchBestStories();
		},
	});

	return (
		<>
			<SectionHeader title="Recent Stories" />
			{isSuccess && <LargeList items={data} type="best-story" />}
		</>
	);
};

export default BestStoryList;
