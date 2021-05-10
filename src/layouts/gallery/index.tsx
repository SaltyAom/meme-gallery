import { FunctionComponent } from 'react'

import tw, { combine } from '@tailwind'

import styles from './gallery.module.sass'

export const GalleryLayout: FunctionComponent = ({ children }) => (
    <ul className={combine(styles.gallery, tw`list-none p-0 m-0 mt-1`)}>{children}</ul>
)
