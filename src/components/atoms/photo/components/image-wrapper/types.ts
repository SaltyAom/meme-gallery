import { FunctionComponent, RefObject } from 'react'

export interface ImageWrapperProps {
    file: string
    observeRoot: RefObject<HTMLImageElement>
    showImageComponent: boolean
}

export type ImageWrapperComponent = FunctionComponent<ImageWrapperProps>
