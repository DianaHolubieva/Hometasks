import ACTION_TYPES from '../actions/actionsType';

const initialState = {
  users: [
    {
      id: Date.now(),
      nameUser: 'John',
      emailUser: 'john@test.cpm',
      isAuth: false,
    },
  ],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.AUTH_LOGIN: {
      const { users } = state;
      const { data } = action;
      const newUser = {
        ...data,
        id: Date.now(),
        isFetching: false,
      };
      const newUsers = [...users, newUser];
      return { users: newUsers };
    }
    case ACTION_TYPES.AUTH_CLEAR: {
      const { users } = state;
      const { id } = action;
      const newUsers = [...users];
      newUsers.splice(
        newUsers.findIndex((u) => id === u.id),
        1
      );
    }
    default:
      return state;
  }
};

export default userReducer;