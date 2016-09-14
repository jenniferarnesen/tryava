import {bar} from './bar'

export const foo = (x) => {
	const total = x + 2 + bar()
	return total
}
