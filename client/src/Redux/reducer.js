import * as types from "./actionType";

const initialState = {
  usersList:null,
  isLoading: false,
  errorText: null,
  authStatus:false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.REGISTER_REQUEST: {
      return {
        ...state,
        isLoading:true,
      };
    }

    case types.REGISTER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        errorText: null,
      };
    }
    case types.REGISTER_FAILURE: {
      return {
        ...state,
        isLoading: false,
        errorText: "something went Wrong",
      };
    }
    case types.LOGIN_REQUEST: {
      return {
        ...state,
        isLoading:true,
      };
    }

    case types.LOGIN_SUCCESS: {
      return {
        ...state,
       authStatus:true,
        isLoading: false,
        errorText: null,
      };
    }
    case types.LOGIN_FAILURE: {
      return {
        ...state,
        isLoading: false,
        errorText: "something went Wrong",
      };
    }
    case types.GET_USERS_REQUEST: {
      return {
        ...state,
        isLoading:true,
      };
    }

    case types.GET_USERS_SUCCESS: {
      return {
        ...state,
        usersList:payload,
        isLoading: false,
        errorText: null,
      };
    }
    case types.GET_USERS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        errorText: "something went Wrong",
      };
    }
    case types.UPDATE_USERS_REQUEST: {
      return {
        ...state,
        isLoading:true,
      };
    }

    case types.UPDATE_USERS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        errorText: null,
      };
    }
    case types.UPDATE_USERS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        errorText: "something went Wrong",
      };
    }
    case types.DELETE_USERS_REQUEST: {
      return {
        ...state,
        isLoading:true,
      };
    }

    case types.DELETE_USERS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        errorText: null,
      };
    }
    case types.DELETE_USERS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        errorText: "something went Wrong",
      };
    }

    case types.LOGOUT: {
      return {
        ...state,
       authStatus:false,
      };
    }
    default:
      return state;
  }
};
