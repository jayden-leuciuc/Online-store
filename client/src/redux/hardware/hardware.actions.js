import HardwareActionTypes from './hardware.types';

export const fetchHardwareCollectionsStart = (hardwareCollectionsMap) => ({
  type: HardwareActionTypes.FETCH_HARDWARE_START,
});

export const fetchHardwareCollectionsSuccess = (hardwareCollectionsMap) => ({
  type: HardwareActionTypes.FETCH_HARDWARE_SUCCESS,
  payload: hardwareCollectionsMap,
});

export const fetchHardwareCollectionsFailure = (errorMessage) => ({
  type: HardwareActionTypes.FETCH_HARDWARE_FAILURE,
  payload: errorMessage,
});
