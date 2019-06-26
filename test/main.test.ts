//import {walk,walkSync,readdirp} from '../src';
//import { log } from '../dist/index';
import {Watcher,walk} from '../src/index';

const teststr = `
FIRST LINE
{{attr1}}: valA
{{attr2}}: valB
{{attr3}}: valC
LAST LINE
`;

describe('dependencies', () => {
    const testdir = `/home/jm/Templates/AppTemplate/`
    test(`walk`, async () => {
        console.log(`walk`,walk);
        expect(walk).toBeTruthy();
    })
    test(`Watcher`, async () => {
        console.log(`Watcher`,Watcher);
        expect(Watcher).toBeTruthy();
    })
})

describe('fs', () => {
    const testdir = `/home/jm/Public/test/`
    test(`walk`, async () => {
        const w = walk(testdir);
        w.on(`data`, console.log);
        console.log(`w`,w);
        expect(w).toBeTruthy();
    })
})

/* 

describe('readdirp', () => {
    const testdir = `/home/jm/Templates/AppTemplate/`
    test(`1`, async () => {
        const outp = readdirp(testdir, {
            fileFilter: (e) => isntMd(e.basename),
            directoryFilter: (e) => isntExcludedDir(e.basename)
        })
        .on('warn', error => console.error('non-fatal error', error))
        .on('error', error => console.error('fatal error', error))
        .on('end', () => console.log('done'))
        .on('data', handleData);
        const res = await outp;

    }); 

})

describe('walk', () => {
    const testdir = `/home/jm/Templates/AppTemplate/`
    test(`1`, async () => {
        const outp = walkSync(testdir,  );
        console.log("outp", outp)
    }); 

})
 */