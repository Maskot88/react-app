import queryString from "query-string";
import { configRandomUser } from "../configs";

/**
 *
 * @param {object} options
 * @param {number} options.page
 * @param {string} options.format
 * @param {number} options.result
 * @param {string} options.nat
 * @param {string} options.seed
 * @returns
 */
export const getRandomUsers = (options = {}) => {
  const defaultOptions = {
    page: 1,
    format: configRandomUser.FORMAT,
    nat: "gb",
    results: configRandomUser.AMOUNT,
    seed: configRandomUser.API_KEY,
    inc: "gender,name,nat,login,email",
  };
  const resOptions = {
    ...defaultOptions,
    ...options,
  };
  return fetch(
    `${configRandomUser.BASE_URL}?${queryString.stringify(resOptions)}`
  ).then((response) => response.json());
};
