import { useRef } from 'react'

import tw from '@tailwind'

import { Image, ImageWrapper } from './components'
import { useIntersectionObserver, useNearObserver } from './hooks'

import type { PhotoComponent } from './types'

export const Photo: PhotoComponent = ({ file, name }) => {
    let image = useRef<HTMLImageElement>(null)

    let isNear = useNearObserver(image)
    let isIntersected = useIntersectionObserver(image)

    return (
        <li className={tw`flex flex-col no-underline select-none`}>
            <ImageWrapper
                name={name}
                observeRoot={image}
                showImageComponent={isNear}
            >
                <Image name={name} file={file} isIntersect={isIntersected} />
            </ImageWrapper>
        </li>
    )
}
