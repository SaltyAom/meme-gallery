import { FunctionComponent } from 'react'

export interface ImageProps {
    file: string
    isIntersect: boolean
}

export type ImageComponent = FunctionComponent<ImageProps>
