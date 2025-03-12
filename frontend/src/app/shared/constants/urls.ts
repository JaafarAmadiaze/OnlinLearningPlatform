const BASE_URL='http://localhost:5000';

export const COURSES_URL = `${BASE_URL}/api/courses`;
export const COURSE_TAG_URL = `${COURSES_URL}/tags`;
export const COURSE_SEARCH_URL = `${COURSES_URL}/search/`;
export const COURSE_TAG_SEARCH_URL = `${COURSES_URL}/tag/`;
export const COURSE_BY_ID_URL = `${COURSES_URL}/`;


export const LOGIN_URL = `${BASE_URL}/api/users/login`;