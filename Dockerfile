# Используем официальный образ Node.js как базовый
FROM node:16.16.0 AS build

# Создаем рабочую директорию внутри контейнера
WORKDIR /frontend

# Копируем package.json и package-lock.json в рабочую директорию контейнера
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы проекdocker build -t my-app .та в рабочую директорию контейнера
COPY . .
   
# Собираем проект (если это необходимо)
RUN npm run build

# FROM nginx:alpine

# COPY --from=build /app/build /usr/share/nginx/html

# Команда по умолчанию для запуска приложения
CMD ["npm", "start", "serve", "-s", "build"]

# Указываем, какой порт должен быть открыт
EXPOSE 3000
