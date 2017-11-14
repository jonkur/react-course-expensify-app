import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
  const action = { type: 'LOGIN', uid: 'asdewq123' };
  const state = authReducer({}, action);
  expect(state).toEqual({
    uid: 'asdewq123'
  });
});

test('should clear uid for login', () => {
  const action = { type: 'LOGOUT' };
  const state = authReducer({ uid: 'dummyUserId' }, action);
  expect(state).toEqual({});
});