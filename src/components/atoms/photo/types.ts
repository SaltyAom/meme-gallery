import type { FunctionComponent } from 'react'

import type { StaticImageData } from 'src/types'

export interface PhotoProps {
    file: StaticImageData
    name: string
    showPlaceholder?: boolean
}

export type PhotoComponent = FunctionComponent<PhotoProps>
