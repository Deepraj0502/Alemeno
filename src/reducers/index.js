const initialState = {
  courseModel: [],
  loading: false,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_OBJECTS_REQUEST":
      return { ...state, loading: true };
    case "FETCH_OBJECTS_SUCCESS":
      return { ...state, courseModel: action.payload, loading: false };
    case "FETCH_OBJECTS_FAILURE":
      return { ...state, loading: false };
    case "UPDATE_OBJECT_REQUEST":
      return { ...state, loading: false };
    case "UPDATE_OBJECT_SUCCESS":
      return { ...state, updating: false, updateError: null };
    case "UPDATE_OBJECT_FAILURE":
      return { ...state, updating: false, updateError: action.payload };
    default:
      return state;
  }
};

export default counterReducer;
