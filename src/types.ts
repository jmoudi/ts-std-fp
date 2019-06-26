import * as fs from 'fs';
import * as klaw from 'klaw';

export namespace Walk {
  export type Item = klaw.Item;
}

export interface CSV {
    generate: (...args: any[]) => any,
    parse:  (...args: any[]) => any
    transform:  (...args: any[]) => any
    stringify:  (...args: any[]) => any
  }

/*   export interface ReaddirpOptions {
    root?: string;
    fileFilter?: (entry: EntryInfo) => boolean,
    directoryFilter?: (entry: EntryInfo) => boolean,
    type?: 'files' | 'directories' | 'files_directories' | 'all'
    lstat?: boolean,
    depth?: number
    alwaysStat?: boolean
  } */