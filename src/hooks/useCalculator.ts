import { useRef, useState } from 'react';

enum Operators {
	add,
	subtract,
	multiply,
	divide,
}

export default function useCalculator() {
	const [previousNumber, setPreviousNumber] = useState<string>('0');
	const [number, setNumber] = useState<string>('0');
	const lastOperation = useRef<Operators>();

	const clean = () => {
		setNumber('0');
	};

	const buildNumber = (textNumber: string) => {
		// Do not accept double dots
		if (number.includes(',') && textNumber === ',') return;

		if (number.startsWith('0') || number.startsWith('-0')) {
			// Decimal point
			if (textNumber === ',') {
				setNumber(number + textNumber);

				// Zero and other numbers
			} else if (textNumber === '0' && number.includes(',')) {
				setNumber(number + textNumber);
			} else if (textNumber !== '0' && !number.includes(',')) {
				setNumber(textNumber);
			} else if (textNumber === '0' && !number.includes(',')) {
				setNumber(number);
			} else {
				setNumber(number + textNumber);
			}
		} else {
			setNumber(number + textNumber);
		}
	};

	const positiveNegative = () => {
		if (number.includes('-')) {
			setNumber(number.replace('-', ''));
		} else {
			setNumber('-' + number);
		}
	};

	const btnDelete = () => {
		let negative = '';
		let tempNumber = number;

		if (number.includes('-')) {
			negative = '-';
			tempNumber = number.replace('-', '');
		}

		if (tempNumber.length > 1) {
			setNumber(negative + tempNumber.slice(0, -1));
		} else {
			setNumber('0');
		}
	};

	const changeNumberToPrevious = () => {
		if (number.endsWith(',')) {
			setPreviousNumber(number.slice(0, -1));
		} else {
			setPreviousNumber(number);
		}
		setNumber('0');
	};

	const btnDivide = () => {
		changeNumberToPrevious();
		lastOperation.current = Operators.divide;
	};

	const btnMultiply = () => {
		changeNumberToPrevious();
		lastOperation.current = Operators.multiply;
	};

	const btnSubtract = () => {
		changeNumberToPrevious();
		lastOperation.current = Operators.subtract;
	};

	const btnAdd = () => {
		changeNumberToPrevious();
		lastOperation.current = Operators.add;
	};

	const calculate = () => {
		const num1 = Number(number);
		const num2 = Number(previousNumber);

		if (isNaN(num1) || isNaN(num2)) return;
		if (num2 === 0 && lastOperation.current === Operators.divide) return;

		switch (lastOperation.current) {
			case Operators.add:
				setNumber(`${num1 + num2}`);
				break;
			case Operators.subtract:
				setNumber(`${num2 - num1}`);
				break;
			case Operators.multiply:
				setNumber(`${num1 * num2}`);
				break;
			case Operators.divide:
				setNumber(`${num2 / num1}`);
				break;
		}

		setPreviousNumber('0');
	};

	return {
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
	};
}
