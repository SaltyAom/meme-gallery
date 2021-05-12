import { RefObject, useEffect, useReducer } from 'react'

export const useNearObserver = (ref: RefObject<HTMLElement>) => {
    let [isNear, setNear] = useReducer(() => true, false)

    useEffect(() => {
        if (!ref.current) return

        let isNearObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return

                    setNear()
                    isNearObserver.disconnect()
                })
            },
            {
                rootMargin: `${window.innerHeight * 0.5}px`,
                threshold: 0
            }
        )

        isNearObserver.observe(ref.current)

        return () => {
            isNearObserver.disconnect()
        }
    }, [ref.current])

    return isNear
}
