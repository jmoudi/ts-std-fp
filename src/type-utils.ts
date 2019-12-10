import 'reflect-metadata';
import {toLower,upperFirst} from 'lodash';
import {type} from 'ramda';
import { isFunction } from 'util';
export { type };
 

export const getType = <T = object>(target: T): string => {
	const proto = Object.getPrototypeOf(target);
	if (proto["constructor"]){
		return upperFirst(proto.constructor.name);
	} else return typeof proto		
} 
 
 
export function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
    return o[name]; // o[name] is of type T[K]
}
export function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
    return names.map(n => o[n]);
}
export function methods(o: object) {
    const entries = Object.entries(o).filter((v, k) => !isFunction(v));
    return entries
}
 

export function typeOf<T = any>(target: T){
    type UU = T extends string ? T : string;
    let targetType = "";
    const proto = Object.getPrototypeOf(target);
    if (proto && proto.constructor){
        targetType = proto.constructor.name;
    } else {
        targetType = typeof target;
    }

    return targetType as UU;
  } 

  export function typeOf2<T = any>(target: T): string|null {
    if (target){
        const proto = Object.getPrototypeOf(target);
        if (proto && proto.constructor){
          return proto.constructor.name;
    } else {
        return typeof proto
    }	
    } else return null	
  } 
  

  export function optsToArray(item) {
    if (!item) return [];
    if (Array.isArray(item)) {
      return item;
    } else {
      return [item];
    }
  }
  
  export function stripLastSlash(str) {
    return str.slice(-1) === '/' ? str.slice(0, -1) : str;
  }
   
   


/* function isFish(pet: Fish | Bird): pet is Fish {
    return (<Fish>pet).swim !== undefined;
} */
export const isOfType = <T>(inp: T, prop: string): inp is T => inp[prop] !== undefined





   
//iots.type()

 //const typeNameAsString = Object.prototype.toString.call(VALUE).slice(8, -1); 

/*
export function sumReportData<T>(reports: ReadonlyArray<T>, key: keyof T) {

    let sum = 0;
    reports.forEach((report: T) => {
        sum += report[key];
    });
    
}
 */