#Deploy - https://nos64-rslang.netlify.app/

# rs-lang
### English learning app

> -  Выполнено на React и TypeScript
> -  Северные запросы - Axios
> -  Store - MobX
> -  UI компоненты - Material UI React
> -  Сборка проекта - Webpack



### Добавлен сбор статистики по новым и изученным словам игры Спринт 05.09.22

> - Добавлена главная страница

### Добавлен сбор статистики по новым и изученным словам игры Спринт 05.09.22

> - Добавлена кнопка Новая игра и реализован перезапуск игры с выбором уровня сложности

### Добавлен сбор статистики по новым и изученным словам игры Аудиовызов 04.09.22

> - В папку src/hooks добавлены два хука:
>   useSetStorageWords - для записи статистики по изученным словам в Storage. Если слово отгадано 3 раза, то оно записывается в изученные слова
>   if (parseWordStats.countWin === 3) {

      textbookStore.setLearnedWord(word);
    }

useGetStorageWords - для получения статистики по изученным словам из Storage.

> - Добавлена кнопка Новая игра и реализован перезапуск игры с выбором уровня сложности

### Добавлена форма редактирования данных пользователя 04.09.22

### Добавлена игра Спринт 31.08.22

> - Добавил мини-игру Sprint pages/AudioChallengeSprint.
> - В папку src/api добавил файл Sprint.ts с запросами для игры.

### Добавлена страница статистики, 30.08.22

> **Страница статистики**:
>
> - Доступна по адресу `домен/#/Stats`
>
> **Store**:
>
> - Для получения id авторизованного пользователя было добавлено новое свойство в store - `userId`. Обращение осуществляется аналогично предыдущим добавленным свойствам.
>
> **Обновление статистики**:
>
> - Для обновления статистики был добавлен хук `useSetUserStats`. Расположение файла: `src/hooks/useSetUserStats.ts`. Хук принимает 3 параметра: userId: string - id авторизованного пользователя, type: string - тип операции, value: number | object - данные для изменения.
>
> **Обновление статистики по изученным словам**:
>
> - Чтобы передать статистику по изученному слову вторым аргументом передаем 'words', а третьим число, которое соответствует кол-ву изученных слов.
>
> ```
> import useSetUserStats from './useSetUserStats';
> useSetUserStats(store.userId, 'words', 1);
> ```
>
> **Обновление статистики по играм**:
>
> - Чтобы передать статистику по играм вторым аргументом передаем 'sprint' или 'audioChallenge' (в зависимости от игры), а третьим объект вида:
>
> ```
> {
>   newWords: кол-во новых слов за игру (number),
>   accuracy: процент правильно угаданных слов (number),
>   seriesCorrectAnswers: самая длинная серия из угаданных подряд слов (number),
> }
> ```
>
> ```
> import useSetUserStats from './useSetUserStats';
> useSetUserStats(store.userId, 'sprint', {
>   newWords: 3,
>   accuracy: 12,
>   seriesCorrectAnswers: 1
> });
> ```

### Добавлена игра Аудиовызов 29.08.22

> - Добавил мини-игру AudioChallenge pages/AudioChallenge. В папку src/api добавил файл AudioChallenge.ts с запросами для игры.
> - Обновлен файл index.d.ts - доавлено - declare module '\*.mp3';
> - Обновлен файл конфигурации Webpack webpack.config.js, добавлена сборка mp3 файлов
>
> {
> test: /\.mp3$/i,
> type: 'asset',
> generator: {
> filename: 'sounds/[hash][ext][query]',
> },
> },

### Добавлена авторизация, аутентификация и идентификация, 23.08.22

> **Работа с Axios**:
>
> - Добавил папку src/axios. Туда разместил инстанс axios, через который нужно делать http запросы. Импортируем `$api` и делаем нужные запросы. Так же для запросов вам может понадобиться userId, он хранится в localStorage: `localStorage.getItem('userId')`.
>
> ```
> import $api from '../../axios'; //Импортируем $api
> function getWords() {
>   return $api.get(`/words`); //Делаем нужные запросы
> }
> ```
>
> **Визуальная составляющая**:
>
> - Добавил компонент авторизации components/Auth. Для использования импортируем `component/Auth/Welcome/Welcome.tsx` и вставляем в код сам компонент.
>
> ```
> import Welcome from '../Auth/Welcome/Welcome'; //Импортируем компонент
> const Header: React.FC = () => {
>   return (
>     <div>
>       Header
>       <Welcome /> //Вставляем для отображения
>     </div>
>   );
> };
> ```
>
> **Работа со Store**:
>
> - Добавил ряд переменных и методов в глобальный Store. Вам для работы может понадобиться несколько из них: `isAuth` - возвращает true, если пользователь авторизован и false, если нет, `userName` - возвращает имя пользователя, если он авторизован.
>
> ```
> import Context from '../../context'; // Импортируем Context из папки src/context
> const Header: React.FC = () => {
>   const { store } = React.useContext(Context); // Получаем доступ к переменным из компонента
>   return (
>     <div>
>       Header
>       {store.userName} //Обращаемся к необходимым свойствам или методам
>     </div>
>   );
> };
> ```

### Update configuration 19.08.22

> - Обновлена папка `styles`: добавлены базовые инструменты для стилизации: миксины, функции, выбранная цветовая > > гамма. Обнуление стандартных браузерных стилей в файле `zeroing.scss` пока закомментировала. Для использования в > файл со стилями компонента нужно импортировать `common.scss`:
>
> **Component.module.scss**:
>
> ```
> @import '../../styles/common.scss';
>
> .class {
>   width: vw(400, xl);
> }
> ```
>
> **Component.tsx**:
>
> ```
> import styles from './Component.module.scss'
>
> const Component = () => {
>   return (
>     <div className={styles.class}>
>   )
> }
> ```
>
> - Обновлена конфигурация проекта - добавлена библиотека компонентов Material UI. Список всех компонентов с > > > > описанием и примерами использования по ссылке: https://mui.com/material-ui/.
> - Обновлен конфиг вебпака - добавлено сохранение ассетов по разным папком в билде.
> - Обновлен файл деклараций - теперь можно импортировать все ассеты (кроме шрифтов!) в компонент:
>
> ```
> import svg from '../../assets/icon/icon.svg';
>
> const Component = () => {
>   return (
>     <img src={svg} alt="" width='100' height='100' />
>   )
> }
>
> ```

### Структура проекта:

- src
  - components
    - component folder
      - component.tsx
      - component.module.scss
      - types.ts
  - pages
    - main page component folder
      - main.tsx
      - main.module.scss
      - types.ts
    - textbook page component folder
      - texbook.tsx
      - textbook.module.scss
      - types.ts
  - store
    - index.ts
  - variables
    - переменные и константы
  - api
    - файлы, относящиеся к работе с апи
  - helpers
    - различные вспомогательные функции
  - assets
    - images
    - icons
    - fonts
    - sounds
  - styles
    - base.scss - базовые общие стили
    - общие файлы для всего проекта, не генерирующие при сборке самостоятельных стилей (переменные, функции, миксины и т.д.). Все стили пишутся в стилевом файле своего компонента! Благодаря `css-modules` можно не беспокоиться об уникальности имен классов за пределами компонента - т.е., например, в каждом компоненте может быть элемент с классом `wrapper`, в итоговом бандле им будут присвоены разные имена

Если компонент принимает какие-то пропсы, их нужно типизировать. Пропсы - это объект, интерфейс к нему нужно писать в файле types.ts и импортировать в файл самого компонента. Далее тип указывается так:

```
const Component: React.FC<IComponentProps> = () => { ... };
```

Имя компонента обязательно должно начинаться с заглавной буквы, иначе Реакт не поймет, что это компонент.
Если у компонента нет потребности в типизации, то файл types.ts не создается.

### MobX

В файле стора создан объект класса Store, импортируется только он, другие экземпляры класса создавать не нужно. При необходимости или для разделения ответственности, можно создать другие классы аналогично существующему. Никакой связи между ними не нужно, они существуют сами по себе. Если в компоненте используется значение из стора, то для того, чтобы значение было реактивным, его нужно обернуть в функцию `observer`. Она импортируется в файл компонента из пакета `'mobx-react-lite'`. В итоге компонент выглядит так:

```
const Component = observer(() => { ... });
```

Внутри класса Store создаются свойства, которые необходимо хранить и методы, управляющие их состоянием. Нежелательно изменение свойства стора за пределами класса (в компоненте). Если это все-таки необходимо, то изменяющую функцию нужно обернуть в функцию `action`. Она импортируется из пакета `'mobx'`:

```
action(() => store.data = anotherData);
```

Также MobX поддерживает computed-значения - значения, вычисляемые на основе хранимых. Например, порядок сортировки. Для создания такого значения нужно написать для него геттер:

```
class Store {
  users: IUsers[] = [];

  constructor() {
    ...

    this.fetchUsers();
  }

  async fetchUsers = () => { ... };

  get ascendingUsers = () => {
    return this.users.sort((a, b) => a.name - b.name);
  }
}
```

Теперь к этому значению можно обращаться из компонента:

```
<div classname={styles.users}>
  {
    store.ascendingUsers.map((item) => <User user={item} key={item.id} />)
  }
</div>
```

Важный момент - при генерации компонентов в цикле для генерируемого компонента необходимо указывать ключ - какое-либо уникальное значение. Это ориентир для реакта, связанный с оптимизацией рендера. Например, при изменении одного значения в массиве, реакт по ключу будет определять, какой именно компонент нужно перерисовать. Не рекомендуется использовать для значения ключа индекс элемента, т.к. он может поменяться. Если нет заведомо уникальных значений (id), то можно использовать комбинацию нескольких. Например, индекс + имя.

### Routing

Для доступа на страницу через адресную строку нужно указывать в пути хэш.

```
http://localhost:8080/#/textbook

```
