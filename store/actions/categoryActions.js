import { categories } from '../../data';

export const viewSubCategory = (id) => {
  return {
    type: 'VIEW_SUB_CATEGORY',
    payload: id,
  };
};

export const allCategories = (categories) => {
  return {
    type: 'All_CATEGORIES',
    payload: categories,
  };
};

export const getAllCategories = () => {
  return (dispatch) => {
    setTimeout(() => {
      return dispatch(allCategories(categories));
    }, 3000);
  };
};
