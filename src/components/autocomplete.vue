<template lang="pug">
	.autocomplete(style="width:350px")
		span(class="autocomplete_clear" @click="clear" ) ✕
		input(class="autocomplete_input" type="text" v-model="query" @input="onInput" @focus="onInput")

		ul(class="autocomplete_suggest" v-if="!isSuggestHidden && suggestions")
			li(class="autocomplete_suggest_item" v-for="(sug, id) in suggestions" @click="onChoose(id)") {{sug.name}}
</template>

<script lang="ts">
	import {Component, Prop, Vue} from 'vue-property-decorator';

	export interface ISuggestion {
		name: string;
		value: string;
	}

	@Component
	export default class AutoComplete extends Vue {
		@Prop() private searchFn!: (a: string) => Promise<ISuggestion[]>;
		private query: string = '';
		private isSuggestHidden = false;
		private suggestions: ISuggestion[] = [];
		private value: ISuggestion | null = null;

		mounted() {
			document.body.addEventListener('click', this.onBodyClicked);
		}

		beforeDestroy() {
			document.body.removeEventListener('click', this.onBodyClicked);
		}

		onBodyClicked(e: HTMLElementEventMap['click']) {
			if (e.target && this.$el.contains(e.target as HTMLElement)) {
				return;
			}
			this.isSuggestHidden = true;
			if (this.value) {
				this.query = this.value.name;
			}
		}

		onChoose(id: number) {
			const val = this.suggestions[id];
			this.value = val;
			this.query = val.name;
			this.isSuggestHidden = true;
		}

		clear() {
			this.query = '';
			this.value = null;
		}

		async onInput() {
			if (!this.searchFn) {
				return;
			}
			try {
				this.suggestions = await this.searchFn(this.query);
				this.isSuggestHidden = false;
			} catch (e) {
				// eslint-disable-next-line no-console
				console.error(e);
				this.suggestions = [] as ISuggestion[];
				this.isSuggestHidden = true;
			}
		}
	}

</script>

<style scoped lang="stylus">
	.autocomplete
		position relative

		& *
			box-sizing border-box
			font-size 16px
			line-height 36px

		&_input
			width 100%
			height 36px
			padding 0 10px
			background white
			border 1px solid #ccc

			&:focus
				box-shadow 0 0 0 1px #ffdc61 inset
				border-color #ffdc61
				outline none

		&_clear
			position absolute
			padding 0 10px
			top 0
			right 0
			cursor pointer

		&_suggest
			width 100%
			display block
			list-style-type none
			list-style-position inside
			margin -1px 0 0 0
			padding 0
			z-index 10
			border 1px solid #ccc
			position absolute
			background white

		&_suggest_item
			height 36px
			padding 0 10px
			overflow hidden
			text-overflow ellipsis

			&:hover
				background #ffd668
				cursor pointer
				box-shadow 0 0 0 1px #ffdc61 inset
				outline none

</style>
