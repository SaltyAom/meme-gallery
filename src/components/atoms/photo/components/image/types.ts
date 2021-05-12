import { FunctionComponent } from 'react'

import { Blurhash } from '@plaiceholder/blurhash'

export interface ImageProps {
    file: string
    blurhash: Blurhash
    isIntersect: boolean
}

export type ImageComponent = FunctionComponent<ImageProps>
