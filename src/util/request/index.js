import axios from 'axios';
import { BASE_URL } from './api';
import {showMessage} from 'react-native-flash-message';

export const POST_METHOD = 'POST';
export const GET_METHOD = 'GET';
export const DELETE_METHOD = 'DELETE';
export const PUT_METHOD = 'PUT';

export async function request(url, method, data) {
    try {
      const resp = await axios({
        method,
        url: `${BASE_URL}${url}`,
        data,
      });
        return resp.data;
    } catch (e) {
      console.log(JSON.stringify(e));
      showMessage({
        message: 'Error making request',
        type: 'danger',
      });
      return null;
    }
}