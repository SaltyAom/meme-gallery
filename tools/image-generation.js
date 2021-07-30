const english = /^[A-Za-z0-9]*$/

const englishFirst = (a, b) => {
    if (english.test(a[0]) && !english.test(b[0])) return -1
    if (!english.test(a[0]) && english.test(b[0])) return 1

    return null
}

const ascending = (a, b) => {
    let sortedByLanguage = englishFirst(a, b)

    if (sortedByLanguage) return sortedByLanguage

    return a.localeCompare(b, 'th')
}

const getType = (fileName) => {
    let [type, detail] = fileName.split(' - ')

    return {
        type,
        detail
    }
}

const { readdirSync, writeFileSync, existsSync, mkdirSync } = require('fs')
// eslint-disable-next-line import/no-extraneous-dependencies
const oneClassName = require('1-classname')

const blacklist = ['.DS_Store']

const filesName = readdirSync('./public/meme')
    .filter((file) => !blacklist.includes(file))
    .sort(ascending)

let exportDeclaration = `export default {\n`

const content = filesName.map((file) => {
    let hashed = oneClassName(file)
    let declaration = `import ${hashed} from "@public/meme/${file}"`

    exportDeclaration += `    "${file}": ${hashed},\n`

    return declaration
})

exportDeclaration += `}`

if (!existsSync('./src/services/images')) mkdirSync('./src/services/images')

writeFileSync(
    `./src/services/images/index.ts`,
    `${content.join('\n')}

${exportDeclaration}`
)
