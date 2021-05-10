/* eslint-disable no-unused-vars */
import { atom } from 'jotai'

export enum SearchSort {
    character,
    detail
}

export const searchAtom = atom<string>('')
export const searchOptionAtom = atom({
    sortBy: SearchSort.character
})