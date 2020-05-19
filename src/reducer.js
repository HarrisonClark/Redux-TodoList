const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO": {
      return [
        ...state,
        { message: action.message, completed: false, pk: state.length },
      ];
    }
    case "TOGGLE_TODO": {
      let copyArr = [...state];
      copyArr[action.pk] = {
        ...copyArr[action.pk],
        completed: !copyArr[action.pk].completed,
      };
      return copyArr;
    }
    case "DELETE_TODO": {
      let copyArr = [...state];
      copyArr.splice(action.pk, 1, "");
      return copyArr;
    }
    case "CLEAR_ALL": {
      return [];
    }
    default: {
      return state;
    }
  }
}
