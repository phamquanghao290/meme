/**
 * Access token key
 */
const ACCESS_TOKEN_KEY = "Auth";

/**
 * Get access token
 *
 * @return Access token
 */
export const getAccessToken = () => {
    return window.localStorage.getItem(ACCESS_TOKEN_KEY);
};

/**
 * Set access token
 *
 * @param value - Access token
 */
export const setAccessToken = (value) => {
    window.localStorage.setItem(ACCESS_TOKEN_KEY, value);
};

/**
 * Remove access token
 */
export const removeAccessToken = () => {
    window.localStorage.removeItem(ACCESS_TOKEN_KEY);
};