<template lang="pug">
	.home
		p Выберите фильм
		AutoComplete(:searchFn="apiSuggester")
		br
		br
		br
		p Выберите значение
		AutoComplete(:searchFn="defaultValueSuggester")
</template>

<script lang="ts">
	import axios from 'axios';
	import { Component, Vue } from 'vue-property-decorator';
	import AutoComplete, { ISuggestion } from '@/components/autocomplete.vue';


	@Component({
		components: {
			AutoComplete,
		},
	})
	export default class Home extends Vue {
		async defaultValueSuggester(query: string): Promise<ISuggestion[]> {
			return await [{ name: 'Значение по умолчанию', value: 'default' }];
		}

		async apiSuggester(query: string): Promise<ISuggestion[]> {
			const result = await axios({
				method: 'GET',
				url: `http://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`,
			});

			return result.data.map((s: any) => ({
				name: s.show.name,
				value: s.show.id,
			}));
		}

	}
</script>
