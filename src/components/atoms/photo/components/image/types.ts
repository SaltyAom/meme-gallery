import type { FunctionComponent } from 'react'
import type { StaticImageData } from 'src/types'

export interface ImageProps {
    file: StaticImageData
    name: string
    isIntersect: boolean
}

export type ImageComponent = FunctionComponent<ImageProps>
