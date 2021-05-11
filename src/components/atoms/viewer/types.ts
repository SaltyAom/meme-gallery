import { FunctionComponent } from 'react'

import { Photo } from '@services/search'

export interface ViewerProps {
    photo: Photo
}

export type ViewerComponent = FunctionComponent<ViewerProps>
