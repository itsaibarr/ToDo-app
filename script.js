const inputs = document.querySelectorAll("input[type='text']");
const textarea = document.querySelector(".note-area");

// Загружаем сохранённые данные
window.onload = () => {
  inputs.forEach((input, index) => {
    input.value = localStorage.getItem(`task-${index}`) || "";
  });
  textarea.value = localStorage.getItem("notes") || "";
};

// Сохраняем изменения
inputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    localStorage.setItem(`task-${index}`, input.value);
  });
});

textarea.addEventListener("input", () => {
  localStorage.setItem("notes", textarea.value);
});