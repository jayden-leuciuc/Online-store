import HardwareActionTypes from './hardware.types';

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined,
};

const hardwareReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HardwareActionTypes.FETCH_HARDWARE_START:
      return {
        ...state,
        isFetching: true,
      };
    case HardwareActionTypes.FETCH_HARDWARE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };

    case HardwareActionTypes.FETCH_HARDWARE_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default hardwareReducer;
