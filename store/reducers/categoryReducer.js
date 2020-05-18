const initialState = {
  categories: [],
  showSubCategory: null,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'All_CATEGORIES':
      return {
        ...state,
        categories: action.payload,
      };
    case 'VIEW_SUB_CATEGORY':
      return {
        ...state,
        showSubCategory: action.payload,
      };
    default:
      return state;
  }
};

export default categoryReducer;
