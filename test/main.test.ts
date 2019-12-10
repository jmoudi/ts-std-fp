//import {walk,walkSync,readdirp} from '../src';
//import { log } from '../dist/index';
//import {FSWatcher,createWatcher} from '..';
import {mergeDeep, cloneDeepWith} from '..';

const log = console.log

describe('glob', () => {
/*     test('FSWatcher,createWatcher', () => {
        log('FSWatcher,createWatcher', FSWatcher,createWatcher);
        expect(FSWatcher).toBeDefined();
    }); */

    const cfg = {
        input: './src/index.ts',
        output: './dist/aaa.js',
        name: '@std/path',
        plugins: [
            1,2,3
        ],
        aaa: 111,
        firstArr: ['j', 'o', 'n'],
        secondArr: ['j', 'o', 'n']

    }
    const oo = {
        input: './TEST/index.ts',
        output: {
            format: 'umd',
            sourcemap: true,
            //name: cfg.name,
            exports: 'named'
        },
        plugins: [
            4,5,6
        ],
        bbb: 222,
        secondArr: ['m', 'o', 'u']

    };
    test('111', () => {
        const res = mergeDeep.all([oo, cfg], {
            clone: true,
        });
        log('res',res);
        expect(res).toBeDefined();
    });

    test('2222222', () => {
        
        const customMerger = {
            'input': (a, b) => a + b + 'dfdgd',
            'output': (a, b) => {
                return {
                    ...b,
                    file: a
                }
            }
        }
        const aaa = (a, b) => a + b + 'dfdgd';
        //const combiner = (a, b) => typeof a === 'string' 
        const res = mergeDeep.all([oo, cfg], {
            clone: false,
            customMerge: (key) => aaa//customMerger[key]
        });
        log('2222222',res);
        expect(res).toBeDefined();
    });
    test('2222222', () => {

        const prepareConfig = (conf) => {
            const customMerger = {
                'input': (a, b) => a + b + 'dfdgd',
                'output': (a) => ({
                        file: a
                    })
                }
                return cloneDeepWith(conf, (v, k) => {
                    const handler = customMerger[k];
                    if (handler){ return handler(v)}
                })
           }
        

        //const combiner = (a, b) => typeof a === 'string' 
        const prepared = prepareConfig(cfg);
        log('3333',prepared);
        const res = mergeDeep.all([oo, prepared], {
            //clone: true,
        });
        log('resdd',res);
        expect(res).toBeDefined();
    });
})

/* 

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