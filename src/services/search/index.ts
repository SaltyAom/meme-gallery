import { Engine, Photo, Photos } from './types'

export const createEngine = async (photos: Photos) => {
    // eslint-disable-next-line global-require
    let { default: Fuse } = await require('fuse.js')

    let engine: Engine = new Fuse(photos, {
        keys: ['character', 'detail']
    })

    return engine
}

export const extract = (file: string): Photo => {
    let [character, description] = file.split(' - ')
    let [detail, extension] = description.split('.')

    return {
        character,
        detail,
        extension,
        file
    }
}

export type { Engine, Photo, Photos } from './types'
