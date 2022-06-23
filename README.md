[![CI](https://github.com/schoolbook-dev/kingsman/actions/workflows/ci.yml/badge.svg)](https://github.com/schoolbook-dev/kingsman/actions/workflows/ci.yml)

# kingsman
Content is the king!

## How to

### Необходимое для локальной разработки

1. Установить Node v14
  * через [nvm](https://github.com/nvm-sh/nvm)
  * через пакетный менеджер системы
  * с [сайта](https://nodejs.org/)
1. `npm i`

### Локальная разработка

1. `npm run start` – запуск дев-сервера с hot-reload
1. Новые схемы создавать в папке [src/samples](src/samples/), там же можно искать примеры для вдохновения
1. После создания схемы – заимпортировать и реэкспортировать в [src/samples/index.js](src/samples/index.js)
1. Коммитить в данный момент с ключём `-n`, отключающим прекоммитные проверки
  * **TODO**: починить прекоммитные проверки