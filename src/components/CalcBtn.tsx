import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
	text: string;
	color?: string;
	width?: boolean;
	action: (textNumber: string) => void;
}

export default function CalcBtn({
	text,
	color = '#2D2D2D',
	width = false,
	action,
}: Props) {
	return (
		<TouchableOpacity onPress={() => action(text)}>
			<View
				style={{
					...styles.button,
					backgroundColor: color,
					width: width ? 140 : 60,
				}}
			>
				<Text
					style={{
						...styles.buttonText,
						color: color === '#9B9B9B' ? 'black' : 'white',
					}}
				>
					{text}
				</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		height: 60,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 100,
		marginHorizontal: 10,
	},
	buttonText: {
		textAlign: 'center',
		fontSize: 30,
		color: 'black',
		fontWeight: '500',
	},
});
