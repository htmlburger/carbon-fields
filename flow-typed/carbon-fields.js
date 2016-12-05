export type ReduxAction = {
	type: string,
	payload: any,
	meta?: any,
	error?: boolean
};
