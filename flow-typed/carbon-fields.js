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
	setValue: Function
};

export type FileFieldProps = FieldProps & {
	setupMediaBrowser: Function,
	openMediaBrowser: Function
};
