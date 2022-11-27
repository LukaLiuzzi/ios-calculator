import { SafeAreaView, StatusBar } from 'react-native';
import CalculatorScreen from './src/screens/CalculatorScreen';
import { globalStyles } from './src/theme/appTheme';

export default function App() {
	return (
		<SafeAreaView style={globalStyles.background}>
			<StatusBar backgroundColor='black' barStyle='light-content' />
			<CalculatorScreen />
		</SafeAreaView>
	);
}
