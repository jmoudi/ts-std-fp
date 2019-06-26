//import {missingArgs} from '@lib/common/src/functional';
import {existsSync as exists} from 'fs';
import {write,writeFile} from 'fs-extra';
export {write,writeFile
} from 'fs-extra';

export async function writeTask(dest: string, data: any, options?) {
    const result = { err: null, success: null };
/*     if (missingArgs(dest, data)) {
        throw new Error(`ERR.INVALID_ARG`);
    } */
    if (exists(dest)) {
        throw new Error(`existsSync`);
    }
    try {
        await writeFile(dest, data);
    }
    catch (err) {
        console.log(err);
        result.err = err;
        //result.success = false;
        return;
    }
    //result.success = true;
    return result;
}