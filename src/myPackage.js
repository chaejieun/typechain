// @ts-check
/**
 *
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns {void}
 */
export function init(config) {
  return true;
}
/**
 *
 * @param {number} code
 * @returns number
 */
export function exit(code) {
  return code + 1;
}
