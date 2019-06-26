
import {FSWatcher as _FSWatcher} from 'chokidar';
import {default as _chokidar} from 'chokidar';
export const chokidar = {
    ..._chokidar
    }
//const watcher = new chokidar.FSWatcher();

export class Watcher extends _FSWatcher {

}