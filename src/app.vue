<template lang="pug">
	Home()
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import Home from '@/pages/home.vue';

	@Component({
		components: {
			Home,
		},
	})
	export default class App extends Vue {
	}
</script>


<style lang="stylus">
	html
		height 100%
	body
		min-height 100%
</style>
