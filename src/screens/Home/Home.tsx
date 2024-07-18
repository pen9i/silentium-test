import { SafeScreen } from '@/components/template';
import TabView from './components/TabView';
import Headers from './components/Header';

function Home() {
	return (
		<SafeScreen>
			<Headers />
			<TabView />
		</SafeScreen>
	);
}

export default Home;
