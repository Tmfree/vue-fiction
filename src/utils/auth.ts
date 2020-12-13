import Cookies from 'js-cookie'

export function getToken(key: string) {
  return Cookies.get(key)
}

export function setToken(key: string, val: string) {
  return Cookies.set(key, val)
}

export function removeToken(key:string) {
  return Cookies.remove(key)
}