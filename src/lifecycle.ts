//import {default as throttle_1} from 'lodash/throttle';
import throttle = require('lodash/throttle');
import debounce = require('lodash/debounce');
import delay = require('lodash/delay');
import defer = require('lodash/defer');
import matches = require('lodash/matches');
import isMatchWith = require('lodash/isMatchWith');

export {
    throttle, debounce, delay, defer
}
export {
    matches, isMatchWith
}

export const _delay = <T>(ms: number, value?: T): Promise<T> => new Promise<T>(resolve => setTimeout(() => resolve(value), ms));

export function isNullOrWhiteSpace(str: string | null): boolean {
    return (!str || str.length === 0 || /^\s*$/.test(str))
}
export function replace<T>(xs: T[], updatedX: T, getId: (x: T) => object | number | string): T[] {
    const index = xs.findIndex(x => getId(x) === getId(updatedX))
    if (index < 0) {
        throw new Error(`You attempted to replace item in list with id: ${getId(updatedX)} but no item could be found.  Perhaps you meant to add the item to the list or it was already removed.`)
    }

    return [...xs.slice(0, index), updatedX, ...xs.slice(index + 1)]
}
