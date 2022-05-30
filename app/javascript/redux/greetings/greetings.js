const GET_GREETINGS = 'HELLO_RAILS_REACT/GREETINGS/GET_GREETINGS';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETINGS:
      return action.payload;
    default:
      return state;
  }
};

const getGreetings = (payload) => ({
  type: GET_GREETINGS,
  payload,
});

const getGreetingsFromAPI = async () => {
  const API_URL = 'v1/greeting';
  const RESPONSE = await fetch(API_URL);
  if (await RESPONSE.ok) {
    const GREETING = await RESPONSE.json();
    return GREETING;
  }
  return [];
};

export default reducer;
export {
  getGreetings, getGreetingsFromAPI,
};
