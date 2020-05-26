import * as types from './mutation-types.js'
const mutations = {
	[types.SET_AGE](state, age) {
		state.age = age
	}
}

export default mutations