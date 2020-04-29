## Code style
### Общие правила:
#### Наименование компонентов и файлов компонентов
* Наименование файлов и компонентов в kebab-case
* наименование props внутри компонента в camelCase, но передача props в kebab-case

```jade
epic-component(
  some-value="1" // вместо :someValue="1"
)
```

```javascript
props: {
  someValue: String
}
```


#### Секция `<template>`
##### Использование сокращенных записей директив

```jade
input(
  :value="newTodoText" // вместо v-bind:value="newTodoText"
  :placeholder="newTodoInstructions" // вместо v-bind:placeholder="newTodoInstructions"
)
```

```jade
input(
    @input="onInput" // вместо v-on:input="onInput"
    @focus="onFocus" // вместо v-on:focus="onFocus"
)
```

```jade
template(#header // вместо v-slot:header)
    div разметка слота
```
