import { instance } from '@/services/instance';
import { storySchema } from '@/types/schemas/story';

export const fetchNewStories = async (): Promise<number[]> => {
	const response = await instance.get('newstories.json?print=pretty');
	if (!response.ok) {
		throw new Error('Network response was not ok');
	}
	return response.json();
};

export const fetchBestStories = async (): Promise<number[]> => {
	const response = await instance.get('beststories.json?print=pretty');
	if (!response.ok) {
		throw new Error('Network response was not ok');
	}
	return response.json();
};

export const fetchTopStories = async (): Promise<number[]> => {
	const response = await instance.get('topstories.json?print=pretty');
	if (!response.ok) {
		throw new Error('Network response was not ok');
	}
	return response.json();
};

export const fetchStoryDetails = async (storyId: number) => {
	const response = await instance.get(`item/${storyId}.json`).json();
	return storySchema.parse(response);
};

export const fetchCommentDetails = async (commentId: number) => {
	const response = await instance.get(`item/${commentId}.json`).json();
	return storySchema.parse(response);
};
