## Используемые технологии
##### Production:
* [vue.js](https://vuejs.org/)
* [vue-cli](https://cli.vuejs.org/en/)
* [vuex](https://vuex.vuejs.org/en/)
* [vue-router](https://router.vuejs.org/en/)
* [typescript](https://www.typescriptlang.org/)
* [stylus](http://stylus-lang.com/)
* [pug](https://devdocs.io/pug/)

##### Development and testing
* [vue-test-utils + Jest](https://vue-test-utils.vuejs.org/en/)
* [Cypress](https://www.cypress.io/)
* [Кастомизация конфигурации](https://cli.vuejs.org/config/).

##### установлены gitHooks:
* pre-commit: запускает линтер (файл конфига lint-staged.config.js)
* pre-push: запускает unit тесты

## Для запуска приложения в режиме разработки необходимо:
### Установить зависимости
```
npm install
```
#### Запустить в режиме разработки
```
npm run dev
```

#### Запуск unit тестов(Jest)
```
npm run test:unit
```

#### Запуск e2e тестов(Cypress)
```
npm run test:e2e
```

## Особенности билда
* для настройки webpack использовать vue.config.js
