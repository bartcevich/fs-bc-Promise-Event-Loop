function fetchMessages() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("log.fetchMessages");
      resolve("Сообщения загружены");
    }, 1000);
  });
}

function fetchStatuses() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("log.fetchStatuses");
      resolve("Статусы загружены");
    }, 500);
  });
}

function fetchStickers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("log.fetchStickers")
      resolve("Стикеры загружены");
    }, 1500);
  });
}

// 2. Запуск загрузки и логика отображения
console.log("Начало загрузки данных чата");

const allDataPromise = Promise.all([
  fetchMessages(),
  fetchStatuses(),
  fetchStickers()
]);

console.log("Запрос на загрузку отправлен");

allDataPromise.then((results) => {
  console.log(results);
  console.log("Чат готов к отображению!");
});
