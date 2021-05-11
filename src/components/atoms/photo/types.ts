import { FunctionComponent } from 'react'

export interface PhotoProps {
    file: string
    blurhash: string
}

export type PhotoComponent = FunctionComponent<PhotoProps>
