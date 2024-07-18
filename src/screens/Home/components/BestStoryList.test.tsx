import { useQuery } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react-native';
import { ThemeProvider } from '@/theme';
import { MMKV } from 'react-native-mmkv';
import { NavigationContainer } from '@react-navigation/native';
import BestStoryList from './BestStoryList';
import SectionHeader from './SectionHeader';

jest.mock('@/services/stories', () => ({
	fetchBestStories: jest.fn().mockResolvedValue([1, 2, 3]),
}));

jest.mock('@tanstack/react-query', () => ({
	useQuery: jest.fn(),
}));

describe('BestStoryList', () => {
	let storage: MMKV;

	beforeAll(() => {
		storage = new MMKV();
	});
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('should render the title prop correctly', () => {
		const title = 'Recent Stories';
		const component = (
			<ThemeProvider storage={storage}>
				<SectionHeader title={title} />
			</ThemeProvider>
		);

		render(component);
		expect(screen.getByText(title)).toBeTruthy();
	});

	it('should render LargeList when the query is successful', () => {
		(useQuery as jest.Mock).mockReturnValue({
			isSuccess: true,
			data: [1, 2, 3],
		});

		const component = (
			<NavigationContainer>
				<ThemeProvider storage={storage}>
					<BestStoryList />
				</ThemeProvider>
			</NavigationContainer>
		);

		render(component);

		expect(screen.getByText('Recent Stories')).toBeTruthy();
		expect(screen.getByTestId('large-list')).toBeTruthy();
	});
});
