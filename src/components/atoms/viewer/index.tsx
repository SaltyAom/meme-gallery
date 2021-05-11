import { useReducer } from 'react'

import tw, { combine } from '@tailwind'

import { ViewerComponent } from './types'

import styles from './viewer.module.sass'

export const Viewer: ViewerComponent = ({
    children,
    photo: { detail, file, character }
}) => {
    let [isViewerOpen, toggleViewer] = useReducer((v) => !v, false)

    let title = `Click to view ${detail}`

    return (
        <>
            {isViewerOpen ? (
                <div
                    className={combine(
                        tw(
                            `${
                                isViewerOpen
                                    ? 'flex flex-col justify-center items-center'
                                    : 'none'
                            } z-50 fixed top-0 left-0 w-full h-screen`
                        ),
                        styles.viewer
                    )}
                >
                    <button
                        type="button"
                        className={tw`appearance-none z-40 absolute t-0 l-0 w-full h-screen p-0 bg-transparent border-0`}
                        aria-label={`Hide ${detail}`}
                        onClick={toggleViewer}
                    />
                    <img
                        className={combine(
                            tw`z-50 max-w-full object-center object-contain`,
                            styles['viewer-image']
                        )}
                        src={`/meme/${file}`}
                        alt={detail}
                    />
                    <h4
                        className={tw`text-white text-xl font-medium capitalize m-0 mt-5 mb-2`}
                    >
                        {detail}
                    </h4>
                    <h4
                        className={tw`text-gray-300 text-sm font-medium capitalize m-0`}
                    >
                        {character}
                    </h4>
                </div>
            ) : null}
            <button
                type="button"
                title={title}
                aria-label={title}
                className={tw`appearance-none bg-transparent border-0 m-0 p-0`}
                onClick={toggleViewer}
            >
                {children}
            </button>
        </>
    )
}
