import type { FunctionComponent, RefObject } from 'react'

export interface ImageWrapperProps {
    name: string
    observeRoot: RefObject<HTMLImageElement>
    showImageComponent: boolean
}

export type ImageWrapperComponent = FunctionComponent<ImageWrapperProps>
