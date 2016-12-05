/* @flow */

export const getContainers = (state: Object): Array<Object> => state.containers;
export const getContainerById = (state: Object, containerId: string): Object => state.containers[containerId];
export const canProcessAction = (state: Object, containerId: string, containerType: string): boolean => getContainerById(state, containerId).type === containerType;
