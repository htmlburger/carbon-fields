/* @flow */

export const getContainers = (state: Object): Array<Object> => state.containers;
export const getContainerById = (state: Object, containerId: string): Object => state.containers[containerId];
