import { FunctionComponent } from 'react'

export interface PhotoProps {
    file: string
    showPlaceholder?: boolean
}

export type PhotoComponent = FunctionComponent<PhotoProps>
