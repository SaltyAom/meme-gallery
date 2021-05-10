import tw from '@tailwind'

import { extract } from '@services/search'

import { PhotoComponent } from './types'

export const Photo: PhotoComponent = ({ file }) => {
    let { detail, extension } = extract(file)
    let source = `/meme/${file}`

    return (
        <li>
            <a
                className={tw`flex flex-col no-underline`}
                href={source}
                download={`${detail}.${extension}`}
            >
                <div className={tw`w-full aspect-w-1 aspect-h-1 bg-gray-50`}>
                    <img
                        className={tw`w-full object-cover object-center`}
                        key={file}
                        src={source}
                        alt={file}
                    />
                </div>
            </a>
        </li>
    )
}
