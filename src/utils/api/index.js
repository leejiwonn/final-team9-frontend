import axios from './axios';
import {AUTH_TOKEN_STORAGE_KEY} from "../../constants";

export async function getWeatherAPI(latitude, longitude) {
  const token = localStorage.getItem(AUTH_TOKEN_STORAGE_KEY);
  const { data } = await axios.get('/api/weathers', {
    headers: {
      "Authorization": `Bearer ${token}`,
    },
    params: {
      latitude,
      longitude,
    }
  });
  return data;
}

export async function getAuthAPI(tokenStr) {
  const { data } = await axios.get('/api/members/me', {
    headers: {
      "Authorization": `Bearer ${tokenStr}`
    }
  });
  return data.data.member;
}

export async function postLoginAPI(accessToken) {
  const { data } = await axios.post('/api/members/login', { accessToken });
  return data.data;
}

export async function putProfileAPI(accessToken, nickname) {
  const { data } = await axios.put('/api/members/me', { "name": nickname }, {
    headers: {
      "Authorization": `Bearer ${accessToken}`,
    }
  });
  return data.data;
}

export function postLogoutAPI() {
  return axios.post('/api/members/logout').then(r => r.json())
}


export async function getRoomsAPI(token) {
  const { data } = await axios.get('/api/rooms', {
    headers: {
      "Authorization": `Bearer ${token}`,
    }
  });
  return data;
}

export async function getTasksAPI(token) {
  const { data } = await axios.get(`/api/tasks`, {
    headers: {
      "Authorization": `Bearer ${token}`,
    }
  });
  return data;
}

export async function getTasksCountsAPI(token){
  const { data } = await axios.get(`/api/tasks/counts`, {
    headers: {
      "Authorization": `Bearer ${token}`,
    }
  });
  return data;
}

export async function getRoomTasksAPI(token, roomId) {
  const { data } = await axios.get(`/api/rooms/${roomId}/tasks`, {
    headers: {
      "Authorization": `Bearer ${token}`,
    }
  });
  return data;
}

export async function postTaskCompleteAPI(token, taskId){
  const { data } = await axios.post(`/api/tasks/${taskId}/complete`, null, {
    headers: {
      "Authorization": `Bearer ${token}`,
    }
  });
  return data;
}

export async function postTaskIncompleteAPI(token, taskId){
  const { data } = await axios.post(`/api/tasks/${taskId}/incomplete`, null, {
    headers: {
      "Authorization": `Bearer ${token}`,
    }
  });
  return data;
}

export async function getFurnituresAPI(token, roomId){
  const { data } = await axios.get(`/api/rooms/${roomId}/furnitures`, {
    headers: {
      "Authorization": `Bearer ${token}`,
    }
  });
  return data;
}

export async function postFurnitureTaskAPI(token, furnitureId, contents){
  const { data } = await axios.post(`/api/furnitures/${furnitureId}/task`, { "contents" : contents }, {
    headers: {
      "Authorization": `Bearer ${token}`,
    }
  });
  return data;
}
