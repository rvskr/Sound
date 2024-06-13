// Функция для отправки данных формы в Google Форму
function submitGoogleForm(name, email, message) {
    const formData = new FormData();
    formData.append("entry.2099680010", name);  // ID поля "Имя:"
    formData.append("entry.1582618556", email); // ID поля "Email:"
    formData.append("entry.9658606", message);  // ID поля "Сообщение:"

    fetch('https://docs.google.com/forms/d/e/1FAIpQLSd94DKnl52L6D6ZC3JXELmOX8iQsl7Z3ztlM2n8vykHdiI8Tw/formResponse', {
        method: 'POST',
        mode: 'no-cors',
        body: formData
    })
    .then(response => {
        // Код обработки успешной отправки
        console.log('Данные успешно отправлены в Google Форму');
        document.getElementById('formResponse').style.display = 'block'; // Показать сообщение об успешной отправке
        document.getElementById('contactForm').reset(); // Очистить форму
    })
    .catch(error => {
        // Код обработки ошибки
        console.error('Произошла ошибка при отправке данных:', error);
    });
}

// Пример использования:
const nameInput = document.getElementById('name');       // Получение поля "Имя:"
const emailInput = document.getElementById('email');     // Получение поля "Email:"
const messageInput = document.getElementById('message'); // Получение поля "Сообщение:"

// Обработчик события отправки формы
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращение стандартной отправки формы

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // Проверка наличия всех необходимых данных
    if (name && email && message) {
        submitGoogleForm(name, email, message); // Отправка данных в Google Форму
    } else {
        alert('Пожалуйста, заполните все обязательные поля: Имя, Email и Сообщение.');
    }
});
