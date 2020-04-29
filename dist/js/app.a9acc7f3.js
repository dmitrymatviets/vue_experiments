(function(e) {
	function t(t) { for(var r, o, s = t[0], c = t[1], i = t[2], p = 0, f = []; p < s.length; p++)o = s[p], Object.prototype.hasOwnProperty.call(a, o) && a[o] && f.push(a[o][0]), a[o] = 0; for(r in c)Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]); l && l(t); while(f.length)f.shift()(); return u.push.apply(u, i || []), n(); }function n() { for(var e, t = 0; t < u.length; t++) { for(var n = u[t], r = !0, s = 1; s < n.length; s++) { var c = n[s]; a[c] !== 0 && (r = !1); }r && (u.splice(t--, 1), e = o(o.s = n[0])); }return e; }var r = {},
		a = { app: 0 },
		u = []; function o(t) { if(r[t])return r[t].exports; var n = r[t] = { i: t, l: !1, exports: {} }; return e[t].call(n.exports, n, n.exports, o), n.l = !0, n.exports; }o.m = e, o.c = r, o.d = function(e, t, n) { o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n }); }, o.r = function(e) { typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 }); }, o.t = function(e, t) { if(1 & t && (e = o(e)), 8 & t)return e; if(4 & t && typeof e === 'object' && e && e.__esModule)return e; var n = Object.create(null); if(o.r(n), Object.defineProperty(n, 'default', { enumerable: !0, value: e }), 2 & t && typeof e != 'string')for(var r in e)o.d(n, r, ((t) => { return e[t]; }).bind(null, r)); return n; }, o.n = function(e) { var t = e && e.__esModule ? function() { return e.default; } : function() { return e; }; return o.d(t, 'a', t), t; }, o.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t); }, o.p = '/'; var s = window.webpackJsonp = window.webpackJsonp || [],
		c = s.push.bind(s); s.push = t, s = s.slice(); for(var i = 0; i < s.length; i++)t(s[i]); var l = c; u.push([0, 'chunk-vendors']), n();
})({ 0(e, t, n) { e.exports = n('cd49'); }, 3123(e, t, n) {
	'use strict'; var r = n('4db6'),
		a = n.n(r); a.a;
}, '4aaa'(e, t, n) {
	'use strict'; var r = n('a792'),
		a = n.n(r); a.a;
}, '4db6'(e, t, n) {}, a792(e, t, n) {}, cd49(e, t, n) {
	'use strict'; n.r(t); n('e260'), n('e6cf'), n('cca6'), n('a79d'); var r = n('2b0e'),
		a = function() {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t; return n('Home');
		},
		u = [],
		o = n('d4ec'),
		s = n('262e'),
		c = n('2caf'),
		i = n('9ab4'),
		l = n('60a3'),
		p = function() {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t; return n('div', { staticClass: 'home' }, [n('p', [e._v('Выберите фильм')]), n('AutoComplete', { attrs: { searchFn: e.apiSuggester } }), n('br'), n('br'), n('br'), n('p', [e._v('Выберите значение')]), n('AutoComplete', { attrs: { searchFn: e.defaultValueSuggester } })], 1);
		},
		f = [],
		d = (n('d81d'), n('b0c0'), n('96cf'), n('1da1')),
		v = n('bee2'),
		h = n('bc3a'),
		g = n.n(h),
		b = function() {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t; return n('div', { staticClass: 'autocomplete', staticStyle: { width: '350px' } }, [n('span', { staticClass: 'autocomplete_clear', on: { click: e.clear } }, [e._v('✕')]), n('input', { directives: [{ name: 'model', rawName: 'v-model', value: e.query, expression: 'query' }], staticClass: 'autocomplete_input', attrs: { type: 'text' }, domProps: { value: e.query }, on: { input: [function(t) { t.target.composing || (e.query = t.target.value); }, e.onInput], focus: e.onInput } }), !e.isSuggestHidden && e.suggestions ? n('ul', { staticClass: 'autocomplete_suggest' }, e._l(e.suggestions, ((t, r) => { return n('li', { staticClass: 'autocomplete_suggest_item', on: { click(t) { return e.onChoose(r); } } }, [e._v(e._s(t.name))]); })), 0) : e._e()]);
		},
		m = [],
		y = function(e) { Object(s.a)(n, e); var t = Object(c.a)(n); function n() { var e; return Object(o.a)(this, n), e = t.apply(this, arguments), e.query = '', e.isSuggestHidden = !1, e.suggestions = [], e.value = null, e; }return Object(v.a)(n, [{ key: 'mounted', value() { document.body.addEventListener('click', this.onBodyClicked); } }, { key: 'beforeDestroy', value() { document.body.removeEventListener('click', this.onBodyClicked); } }, { key: 'onBodyClicked', value(e) { e.target && this.$el.contains(e.target) || (this.isSuggestHidden = !0); } }, { key: 'onChoose', value(e) { var t = this.suggestions[e]; this.value = t, this.query = t.name, this.isSuggestHidden = !0; } }, { key: 'clear', value() { this.query = ''; } }, { key: 'onInput', value: function() { var e = Object(d.a)(regeneratorRuntime.mark((function e() { return regeneratorRuntime.wrap((function(e) { while(1)switch(e.prev = e.next) { case 0:if(this.searchFn) { e.next = 3; break; }return e.abrupt('return'); case 3:return e.prev = 3, e.next = 6, this.searchFn(this.query); case 6:this.suggestions = e.sent, this.isSuggestHidden = !1, e.next = 15; break; case 10:e.prev = 10, e.t0 = e.catch(3), console.error(e.t0), this.suggestions = [], this.isSuggestHidden = !0; case 15:case'end':return e.stop(); } }), e, this, [[3, 10]]); }))); function t() { return e.apply(this, arguments); }return t; }() }]), n; }(l.c); i.a([Object(l.b)()], y.prototype, 'searchFn', void 0), y = i.a([l.a], y); var O = y,
		j = O,
		w = (n('4aaa'), n('2877')),
		_ = Object(w.a)(j, b, m, !1, null, '39f021be', null),
		k = _.exports,
		x = function(e) { Object(s.a)(n, e); var t = Object(c.a)(n); function n() { return Object(o.a)(this, n), t.apply(this, arguments); }return Object(v.a)(n, [{ key: 'defaultValueSuggester', value: function() { var e = Object(d.a)(regeneratorRuntime.mark((function e(t) { return regeneratorRuntime.wrap(((e) => { while(1)switch(e.prev = e.next) { case 0:return e.next = 2, [{ name: 'Значение по умолчанию', value: 'default' }]; case 2:return e.abrupt('return', e.sent); case 3:case'end':return e.stop(); } }), e); }))); function t(t) { return e.apply(this, arguments); }return t; }() }, { key: 'apiSuggester', value: function() { var e = Object(d.a)(regeneratorRuntime.mark((function e(t) { var n; return regeneratorRuntime.wrap(((e) => { while(1)switch(e.prev = e.next) { case 0:return e.next = 2, g()({ method: 'GET', url: 'http://api.tvmaze.com/search/shows?q='.concat(encodeURIComponent(t)) }); case 2:return n = e.sent, e.abrupt('return', n.data.map(((e) => { return{ name: e.show.name, value: e.show.id }; }))); case 4:case'end':return e.stop(); } }), e); }))); function t(t) { return e.apply(this, arguments); }return t; }() }]), n; }(l.c); x = i.a([Object(l.a)({ components: { AutoComplete: k } })], x); var S = x,
		C = S,
		q = Object(w.a)(C, p, f, !1, null, null, null),
		H = q.exports,
		P = function(e) { Object(s.a)(n, e); var t = Object(c.a)(n); function n() { return Object(o.a)(this, n), t.apply(this, arguments); }return n; }(l.c); P = i.a([Object(l.a)({ components: { Home: H } })], P); var R = P,
		E = R,
		F = (n('3123'), Object(w.a)(E, a, u, !1, null, null, null)),
		$ = F.exports,
		I = n('2f62'); r.a.use(I.a); var M = new I.a.Store({ state: {}, mutations: {}, actions: {}, modules: {} }); r.a.config.productionTip = !1, new r.a({ store: M, render(e) { return e($); } }).$mount('#app');
} });
// # sourceMappingURL=app.a9acc7f3.js.map