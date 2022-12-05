const validPasswords = [];

for (let i = 11098; i < 98123; i++) {
    if (i.toString().includes('5')) {
        let counter5 = 0
        let isAsc = true
        for (let j = 0; j < i.toString().length; j++) {
            const prevChar = j === 0 ? 0 : i.toString()[j - 1]
            const char = Number(i.toString()[j])
            if(prevChar > char) {
                isAsc = false
            }
            if (char === 5 ) {
                counter5++
            }
        }
        if (counter5 >= 2 && isAsc) {
            validPasswords.push(i)
        }
    }
}

console.log(`${validPasswords.length}-${validPasswords[55]}`)