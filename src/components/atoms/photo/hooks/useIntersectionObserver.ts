import { RefObject, useEffect, useReducer } from 'react'

export const useIntersectionObserver = (ref: RefObject<HTMLElement>) => {
    let [isIntersected, setIntersect] = useReducer(() => true, false)

    useEffect(() => {
        if (!ref.current) return

        let observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return

                    setIntersect()
                    observer.disconnect()
                })
            },
            {
                rootMargin: '-20px',
                threshold: 0
            }
        )

        observer.observe(ref.current)

        return () => {
            observer.disconnect()
        }
    }, [ref.current])

    return isIntersected
}