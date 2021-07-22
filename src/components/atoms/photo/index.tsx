import { useRef } from 'react'

import tw from '@tailwind'

import { Image, ImageWrapper } from './components'
import { useIntersectionObserver, useNearObserver } from './hooks'

import { PhotoComponent } from './types'

export const Photo: PhotoComponent = ({ file }) => {
    let image = useRef<HTMLImageElement>(null)

    let isNear = useNearObserver(image)
    let isIntersected = useIntersectionObserver(image)

    return (
        <li className={tw`flex flex-col no-underline select-none`}>
            <ImageWrapper
                file={file}
                observeRoot={image}
                showImageComponent={isNear}
            >
                <Image
                    file={file}
                    isIntersect={isIntersected}
                />
            </ImageWrapper>
        </li>
    )
}
