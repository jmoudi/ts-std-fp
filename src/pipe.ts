export {
  pipe,
  chain,
  into,
  traverse
} from 'ramda';
export {
  chain as chainL
} from 'lodash';


export function pipe1(...fns) {
  return (arg) => fns.reduce((prev, fn) => fn(prev), arg);
}
export function pipeWith(arg, ...fns) {
  return pipe1(...fns)(arg);
}
