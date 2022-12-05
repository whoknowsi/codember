import { data } from './data.js'

const decode = (data) => {
	const arr = data.split(' ')
	const result = arr.map((item) => {
		const array = []
		let acc = ''
		const sepAscii = item.split('')
		for (let i = 0; i < sepAscii.length; i++) {
			const char = sepAscii[i]
			if (acc === '') {
				acc = char
			} else if (parseInt(acc + char) >= 255) {
				array.push(acc)
				acc = char
			} else {
				acc = acc + char
			}

            if (i === sepAscii.length - 1) array.push(acc)
		}
		return array
	})

	return result
		.map((item) => {
			return item.map((char) => String.fromCharCode(char)).join('')
		})
		.join(' ')
}

console.log(decode(data))
