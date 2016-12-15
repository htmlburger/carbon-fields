export type ReduxAction = {
	type: string,
	payload: any,
	meta?: any,
	error?: boolean
};

export type FieldProps = {
	id: string,
	type: string,
	field: Object,
	children?: React$Element<*>,
	updateField: Function,
	setUI: Function
};

export type FileFieldProps = FieldProps & {
	setupMediaBrowser: Function,
	openMediaBrowser: Function
};

export type ColorFieldProps = FieldProps & {
	pickerVisible: boolean,
	setPickerVisibility: Function,
};
