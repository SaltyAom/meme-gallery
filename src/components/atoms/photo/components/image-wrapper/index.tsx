import tw, { combine } from '@tailwind'

import { isInStandaloneMode, isIos } from '@services/validation'
import { extract } from '@services/search'

import { ImageWrapperComponent } from './types'

import styles from '../image.module.sass'

export const ImageWrapper: ImageWrapperComponent = ({
    children,
    observeRoot,
    showImageComponent,
    file
}) => {
    let source = `/meme/${file}`

    let layout = (
        <div
            className={combine(
                tw`relative w-full aspect-w-1 aspect-h-1 bg-gray-50 dark:bg-gray-700 cursor-pointer`,
                styles.wrapper
            )}
            ref={observeRoot}
        >
            {showImageComponent ? children : null}
        </div>
    )

    if (isInStandaloneMode() && isIos())
        return (
            <a
                className={tw`flex flex-col no-underline`}
                href={source}
                target="_blank"
                rel="noreferrer"
            >
                {layout}
            </a>
        )

    let { detail, extension } = extract(file)

    return (
        <a
            className={tw`flex flex-col no-underline`}
            href={source}
            download={`${detail}.${extension}`}
        >
            {layout}
        </a>
    )
}
