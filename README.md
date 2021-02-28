# Songs API for keygroup
This is a RESTful API with Express, postgres, and sequelize. This was built for the keygroup technical challenge

# Getting started

## 1. Install dependencies
```
yarn install
```

## 2. Populate .env
```
cp .env.example .env
```
Insert the appropriate credentials

## 3. Migrate database
```
npx sequelize-cli db:migrate
```

## 4. Seeding the database
```
npx sequelize-cli db:seed:all
```

## 5. Running the app
```
yarn start
```

## Running the app in development
When running the app in development, the database will be migrated/seeded for you
```
yarn dev
```