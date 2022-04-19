import ACTION_TYPES from './actionsType';

export const createUser = (data) => {
  return {
    type: ACTION_TYPES.AUTH_LOGIN,
    data: data,
  };
};

export const authClear = (id) => {
  return {
    type: ACTION_TYPES.AUTH_CLEAR,
    id: id,
  };
};