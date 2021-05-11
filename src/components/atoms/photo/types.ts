import { FunctionComponent } from 'react'

import { Blurhash } from '@plaiceholder/blurhash'

export interface PhotoProps {
    file: string
    blurhash: Blurhash
}

export type PhotoComponent = FunctionComponent<PhotoProps>
