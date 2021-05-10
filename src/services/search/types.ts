import type IFuse from 'fuse.js'

export interface Photo {
    character: string
    detail: string
    extension: string
    file: string
}

export type Photos = Photo[]

export type Engine = IFuse<Photo>