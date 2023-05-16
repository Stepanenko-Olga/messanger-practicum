## **Описание**
Проект "Messanger" представляет собой сайт для обмена приватными сообщениями между пользователями.
Возможности: 
- ведение переписки с пользователем,
- сохранение переписки в чате,
- отправка текстовых сообщений и файлов,
- доступ к контактной информации пользователей: фамилия, имя, имейл, телефон,
- указание информации о себе, включая аватар.

Структура мессанджера:
- форма регистрации,
- форма авторизации,
- страница чатов,
- страница профиля.

Статус реализации: версия 04 - реализация задач четвертого спринта.


## **Доступные скрипты:**
- `npm run dev` — режим разработки,
- `npm run build` — сборка,
- `npm run start` — сборка и запуск проекта.
- `npm run fix-lint` - проверка и исправление ошибок eslint
- `npm run stylelint-fix` - проверка и исправление ошибок stylelint

## **Используемы технологии и библиотеки:**
- макет в figma: https://www.figma.com/file/onuQUxozDxxjt5VfCWXJfj/sprint_1?node-id=0%3A1&t=XBTzXHQOab8NVBok-0.
- репозиторий github: https://github.com/StepanenkoOlgaV/middle.messenger.praktikum.yandex.
- задеплоеный проект netlify: https://deploy-preview-4--endearing-klepon-cdfcb6.netlify.app/ 
- задеполенный проект на Яндекс.Облако https://bbaq0f4u91jr9ffcct1p.containers.yandexcloud.net/
- API проекта: https://ya-praktikum.tech/api/v2


- express, 
- webpack, 
- handlebars precompile,
- postcss,
- typescript,
- eslint,
- stylelint,
- husky.

- класс для рaботы с запросами HTTPTransport
- класс для работы с WebSocet - WSTransport
- класс обработки событий EventBus
- класс для локального хранения данных Store


## **Система контроля версий git**
- прекоммит содержит:
  -npm run test
  -npm run stylelint-fix
  -npm run fix-lint
- sprint_i (i - номер спринта) - ветки для разработки,
- main - основная ветка, в ней осуществляется проверка выполненной работы,
- deploy - ветка, деплоящаяся на netlify пулл в нее осуществляется после проверки работы.

npm audit --production не содержит уязвимостей


## Автор
Степаненко Ольга
