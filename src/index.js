import { decode as base64Decode } from 'base-64';
import jwtDecode from 'jwt-decode';

global.atob = base64Decode;

export function decode(token) {
  return jwtDecode(token);
}