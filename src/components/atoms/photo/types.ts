import { FunctionComponent } from 'react'

export interface PhotoProps {
    file: string
}

export type PhotoComponent = FunctionComponent<PhotoProps>
