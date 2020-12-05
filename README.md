# sample-app

> Приложение, использующее typescript и компоненты `material-ui`, с помощью которого я готовлюсь к собесу в [CSSSR](http://csssr.ru/)...

## Настройка системы сборки проекта

> Были выполнены следующие команды

 - 1. Создание приложения sample-app на typescript

```
npx create-react-app sample-app --template typescript --use-npm
```

 - 1.1. Устанавливаем `enzyme` для тестов

```
npm instal enzyme @types/enzyme @wojtekmaj/enzyme-adapter-react-17
```

 - 2. Устанавливаем `material-ui`

```
npm install @material-ui/core
npm install @material-ui/icons
```

 - 3. Устанавливаем `react-router-dom`

```
npm install react-router-dom
npm install @types/react-router-dom
```

 - 4. Устанавливаем `classnames`

```
npm install classnames
```

 - 5. Устанавливаем `use-debounce`

```
npm install use-debounce
```

 - 6. Установим Redux (опционально)

```
npm install redux @types/redux react-redux @types/react-redux
```

 - 7. Работа с http (опционально)

```
npm install axios redux-promise moxios @types/moxios
```

## Маппинг путей

> Вместо записи `paths` в `tsconfig.json` был создан файл `.env`, где папке `src` был присвоен алиас `~`...

Можно сделать запись в `tsconfig.json`

## Линтиг если много пропов

```
  <InputComponent
    aria-describedby={helperTextId}
    autoComplete={autoComplete}
    autoFocus={autoFocus}
    defaultValue={defaultValue}
    fullWidth={fullWidth}
    multiline={multiline}
    {...InputProps}
  />
```

