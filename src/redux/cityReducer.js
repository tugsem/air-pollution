import { v4 as uuidv4 } from 'uuid';
import locations from '../utils/locations';
import getDetail from '../utils/fetchApi';

export const ADD_CITIES = 'air-pollution/src/redux/ADD_CITIES';
export const FILTER_CITIES = 'air-pollution/src/redux/FILTER_CITIES';

export const addCities = (payload) => ({
  type: ADD_CITIES,
  payload,
});

export const filterAction = (payload) => ({
  type: FILTER_CITIES,
  payload,
});

export const displayCitiesAtHomepage = () => async (dispatch) => {
  const arr = [];
  const promises = locations.map(async (item) => {
    const data = await getDetail(item.lat, item.lon);
    arr.push({
      ...data.list,
      name: item.name,
      id: uuidv4(),
    });
  });
  await Promise.all(promises);
  dispatch(addCities(arr));
};

export const filterCities = (key) => async (dispatch) => {
  const arr = [];
  const promises = locations.map(async (item) => {
    const data = await getDetail(item.lat, item.lon);
    arr.push({
      ...data.list,
      name: item.name,
      id: uuidv4(),
    });
  });
  await Promise.all(promises);
  const filteredArr = arr.filter((city) => city[0].main.aqi === key);
  dispatch(filterAction(filteredArr));
};

const cityReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CITIES:
      return [...action.payload];
    case FILTER_CITIES:
      return [...action.payload];
    default:
      return state;
  }
};

export default cityReducer;
