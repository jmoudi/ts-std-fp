/* import {readdirp} from '../src/readdir';
import {EntryInfo} from './types';
import {readdir} from 'fs-extra'; */

/* import * as klaw from 'klaw';
import {default as walk2} from 'klaw';
export const walk1 = walk2
export {default as walkSync} from 'klaw-sync';
*/
//export {default as walk} from 'klaw';

import {default as walk2} from 'klaw';
export {walk2}
/* import {pEvent} from '@Modules/promise';
 */
 
 
/* 
function createReaddirpStrefam(testdir: string){
    const status = { a: null };
    const onWarn = (err: Error) => console.error('non-fatal error', err);
    const onError = (err: Error) => console.error('fatal error', err);
    const onEnd = () => console.log('done', status);

    const stream = readdirp(testdir, {
        fileFilter: (e) => isntMd(e.basename),
        directoryFilter: (e) => isntExcludedDir(e.basename)
    })
    .on('warn', onWarn)
    .on('error', onError)
    .on('end', onEnd)
    .on('data', handleData);  
    return stream;
}

export function www(testdir){
    const status = { a: null }
    return new Promise((resolve, reject) => {
        const str = createReaddirpStream(testdir);
        str.on('end', )
    });
}
 */