/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useTheme } from '@/theme';
import { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';

export default function Headers() {
	const [greeting, setGreet] = useState('');
	const { layout, gutters, fonts } = useTheme();
	const setGreeting = () => {
		const myDate = new Date();
		const hrs = myDate.getHours();

		if (hrs < 12) {
			setGreet('Good Morning');
		} else if (hrs >= 12 && hrs <= 17) {
			setGreet('Good Afternoon');
		} else if (hrs >= 17 && hrs <= 24) {
			setGreet('Good Evening');
		}
	};
	useEffect(() => {
		setGreeting();
	});
	return (
		<View>
			<View
				style={[
					layout.row,
					layout.itemsCenter,
					layout.justifyBetween,
					gutters.marginTop_16,
					gutters.marginHorizontal_12,
					gutters.marginBottom_8,
				]}
			>
				<Text style={[fonts.bold, fonts.size_24]}>
					Hello <Text style={fonts.red500}>{greeting},</Text>
					{'\n'}
					<Text>Best News for today</Text>
				</Text>
				<Image
					source={require('@/assets/images.png')}
					style={{ width: 60, height: 60 }}
				/>
			</View>
		</View>
	);
}
