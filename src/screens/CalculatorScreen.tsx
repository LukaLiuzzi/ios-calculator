import { View, Text } from 'react-native';
import CalcBtn from '../components/CalcBtn';
import useCalculator from '../hooks/useCalculator';
import { globalStyles } from '../theme/appTheme';

export default function CalculatorScreen() {
	const {
		number,
		previousNumber,
		clean,
		buildNumber,
		positiveNegative,
		btnDelete,
		btnDivide,
		btnMultiply,
		btnSubtract,
		btnAdd,
		calculate,
	} = useCalculator();

	return (
		<View style={globalStyles.calculatorContainer}>
			{previousNumber !== '0' && (
				<Text
					style={globalStyles.smallResult}
					numberOfLines={2}
					adjustsFontSizeToFit
				>
					{previousNumber}
				</Text>
			)}
			<Text style={globalStyles.result} numberOfLines={1} adjustsFontSizeToFit>
				{number}
			</Text>

			{/* Buttons row */}
			<View style={globalStyles.row}>
				<CalcBtn text='C' color='#9B9B9B' action={clean} />
				<CalcBtn text='+/-' color='#9B9B9B' action={positiveNegative} />
				<CalcBtn text='del' color='#9B9B9B' action={btnDelete} />
				<CalcBtn text='/' color='#FF9427' action={btnDivide} />
			</View>

			<View style={globalStyles.row}>
				<CalcBtn text='7' action={buildNumber} />
				<CalcBtn text='8' action={buildNumber} />
				<CalcBtn text='9' action={buildNumber} />
				<CalcBtn text='X' color='#FF9427' action={btnMultiply} />
			</View>

			<View style={globalStyles.row}>
				<CalcBtn text='4' action={buildNumber} />
				<CalcBtn text='5' action={buildNumber} />
				<CalcBtn text='6' action={buildNumber} />
				<CalcBtn text='-' color='#FF9427' action={btnSubtract} />
			</View>

			<View style={globalStyles.row}>
				<CalcBtn text='1' action={buildNumber} />
				<CalcBtn text='2' action={buildNumber} />
				<CalcBtn text='3' action={buildNumber} />
				<CalcBtn text='+' color='#FF9427' action={btnAdd} />
			</View>

			<View style={globalStyles.row}>
				<CalcBtn text='0' width action={buildNumber} />
				<CalcBtn text=',' action={buildNumber} />
				<CalcBtn text='=' color='#FF9427' action={calculate} />
			</View>
		</View>
	);
}
