import { data } from './data.js'
const neccesaryInputs = ['usr', 'eme', 'psw', 'age', 'loc', 'fll']

const users = []
let validUsers = 0

const lines = data.split('\n\n') // split by line space in between
lines.forEach(line => {
    const user = {}
    const fields = line.split(' ') // split by spaces
    const fieldsWithoutSpaces = fields.filter(field => field !== '')

    fieldsWithoutSpaces.forEach(field => {
        const [key, value] = field.split(':')
        if (neccesaryInputs.includes(key)) {
            user[key] = value
        }
    })
    users.push(user)
})

const filteredUsers = users.filter((user) => {
    if (Object.keys(user).length === neccesaryInputs.length) {
        let hasAllInputs = true
        neccesaryInputs.forEach(input => {
            if (!user[input]) {
                hasAllInputs = false
            }
        })
        if(hasAllInputs) return user
    }
})

console.log(`${filteredUsers.length}${filteredUsers[filteredUsers.length - 1].usr}`)
