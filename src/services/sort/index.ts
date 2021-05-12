const english = /^[A-Za-z0-9]*$/

const englishFirst = (a: string, b: string) => {
    if (english.test(a[0]) && !english.test(b[0])) return -1
    if (!english.test(a[0]) && english.test(b[0])) return 1

    return null
}

export const ascending = (a: string, b: string) => {
    let languageSort = englishFirst(a, b)

    if (languageSort) return languageSort

    return a.localeCompare(b, 'th')
}
