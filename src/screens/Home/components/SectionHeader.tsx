import { useTheme } from '@/theme';
import { LucideIcon } from 'lucide-react-native';
import React from 'react';
import { Text, View } from 'react-native';

type SectionHeaderProps = {
	title: string;
	Icon?: LucideIcon;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({
	title,
	Icon = undefined,
}) => {
	const { gutters, layout, fonts } = useTheme();
	return (
		<View
			style={[
				layout.row,
				layout.itemsCenter,
				gutters.paddingHorizontal_16,
				gutters.paddingVertical_10,
			]}
		>
			<Text style={[fonts.bold, fonts.size_24]}>{title}</Text>
			{Icon && <Icon color="black" />}
		</View>
	);
};

export default SectionHeader;
