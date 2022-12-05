import { data } from './data.js'

const resolve = (colors) => {
	const savedColors = {}
	let counter = 0
	let maxCounter = {
		counter: 0,
		color: '',
	}
	let state = 'first'
	for (let i = 0; i < colors.length; i++) {
		const color = colors[i]
		if (!savedColors.primary) {
			savedColors.primary = color
			counter++
		} else if (!savedColors.secondary && savedColors.primary && savedColors.primary !== color) {
			state = 'second'
			savedColors.secondary = color
			counter++
		} else if ((color === savedColors.primary && state === 'second') || (color === savedColors.secondary && state === 'first')) {
			counter++
			state = state === 'second' ? 'first' : 'second'
		} else {
			if (maxCounter.counter < counter) {
				maxCounter.counter = counter
				maxCounter.color = savedColors[state === 'first' ? 'primary' : 'secondary']
            }
			counter = 2
			savedColors.primary = savedColors[state === 'first' ? 'primary' : 'secondary']
			savedColors.secondary = color
			state = 'second'
		} 
	}

	return maxCounter
}

const result = resolve(data)
console.log(`${result.counter}@${result.color}`)
