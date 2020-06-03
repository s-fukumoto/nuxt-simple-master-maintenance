## Project
Simple Maintenance

---
## 概要
簡単なメンテナンス  
マスターを管理する必要が発生したので、以下のマスタを管理する簡単なものを作成  
* ユーザー管理
* 住所データ管理
* 駅データ管理

住所データは [住所.jp](http://jusyo.jp/) さんのデータを使用。
駅データは [駅データ.jp](https://ekidata.jp/) さんのデータを使用。

---
## 環境
* Nuxt.js
* Express
* Sequelize
* MySQL
* Vuetify.js

---
## 手順

```bash
cd nuxt-simple-maintenance

cp .env_sample .env
vi .env

docker-compose up -d

docker-compose exec app bash -c "npm install"

docker-compose exec app bash -c "npm run dev"

start http://localhost:63000
```
