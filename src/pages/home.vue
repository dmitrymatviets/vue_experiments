<template lang="pug">
.home
	img(
		alt="Vue logo"
		src="@/assets/logo.png"
	)
	HelloWorld(msg="Welcome to Your Vue.js App")
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import HelloWorld from '@/components/HelloWorld.vue';

	@Component({
		components: {
			HelloWorld,
		},
	})
	export default class Home extends Vue {}
</script>
