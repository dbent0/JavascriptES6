

/**
 * Soma
 *
 * @export
 * @param {*} params
 * @returns
 */
export function soma(...params) {
    return params.reduce((total, next) => total + next);
}

/**
 * Subtração
 *
 * @export
 * @param {*} params
 * @returns
 */
export function subt(...params) {
    return params.reduce((total, next) => total - next);
}

/**
 * Multiplicação
 *
 * @export
 * @param {*} params
 * @returns
 */
export function mult(...params) {
    return params.reduce((total, next) => total * next);
}
