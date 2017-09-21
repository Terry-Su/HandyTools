<template>
	<div id="app">
		<div>
			Words' length
			<input type="text" />
		</div>

		<br /><br /><br /><br /><br />

		<div>
			All words
			<textarea name="" id="" cols="30" rows="10" :value="rawWords" @input="rawWordsChanged" />
			<button @click="generate">Generate</button>
		</div>

		<br /><br /><br /><br /><br />

		<div>
			<button>word1</button>
			<button>word2</button>
		</div>

		<div>
			Results
			<textarea name="" id="" cols="30" rows="10" />
		</div>

	</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
	computed: Object.assign(
		mapState(['rawWords']),
		{

		}
	),
	methods: Object.assign(
		mapActions(['updateState']),
		{
			rawWordsChanged(e) {
				const { value } = e.target
				this.updateState({
					key: 'rawWords',
					value
				})
				
			},
			generatePossibleWords() {

			},
			generate(e) {
				console.log(this.$store.state)
			},
		}
	)
}
</script>

<style>

</style>

