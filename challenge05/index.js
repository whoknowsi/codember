import { data } from './data.js'

const arrayToArrayOfObjects = (array) => {
    return array.map((item, index) => {
        return { item, index }
    })
}

const hungerGames = (array) => {
    const filteredArray = array.filter((item, index) => !(index % 2 !== 0 || (index === 0 && array.length % 2 !== 0)))
    return filteredArray.length === 1 ? filteredArray[0] : hungerGames(filteredArray)
}

const result = hungerGames(arrayToArrayOfObjects(data))
console.log(`${result.item}-${result.index}`)