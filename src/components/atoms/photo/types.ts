import { FunctionComponent } from 'react'

import { Blurhash } from '@plaiceholder/blurhash'

export interface PhotoProps {
    file: string
    blurhash: Blurhash
    showPlaceholder?: boolean
}

export type PhotoComponent = FunctionComponent<PhotoProps>
