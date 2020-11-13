export const BASE_URL = "http://13.235.243.69:3333/api/"; // Staging url

export const MOBILE_REGEX = new RegExp(/^[0]{0,1}[9876][0-9]{9}$/);
export const ONLY_INT_REGEX = new RegExp(/^\d+$/);
export const EMAIL_REGEX = new RegExp(
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
  );