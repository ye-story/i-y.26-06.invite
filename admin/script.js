const names = [
  { id: "1", name: "Любимая Катюша" },
  { id: "2", name: "Сергей и Елена" },
  { id: "3", name: "Кирилл и Алина" },
  { id: "4", name: "Юра и Света" },
  { id: "5", name: "Дорогие Дима и Настя" },
  { id: "6", name: "Дорогой дядя Вова" },
  { id: "7", name: "Дорогая Олечка" },
  { id: "8", name: "Илона и Андрей" },
  { id: "9", name: "Даша и Лёша" },
  { id: "10", name: "Алёна" },
  { id: "11", name: "Катя" },
  { id: "12", name: "Кристина и Виталик" },
  { id: "13", name: "Андрей" },
  { id: "14", name: "Лера" },
  { id: "15", name: "Сергей" },
  { id: "16", name: "Наташа и Саша" },
  { id: "17", name: "Надежда Васильевна" },
  { id: "18", name: "Паша" },
  { id: "19", name: "Виталик" },
  { id: "20", name: "Владик" },
  { id: "21", name: "Дима и Кристина" },
 /* { id: "22", name: "Дима и Марина" },*/
  { id: "22", name: "Антон и Настя" },
  { id: "23", name: "Сергей" },
  { id: "24", name: "Максим и Вика" },
  { id: "25", name: "Юля и Митя" },
  { id: "26", name: "Наташа и Юра" },
  { id: "27", name: "Аня и Илья" },
];


const baseURL = location.href.replace('admin/', '');
const container = document.getElementById('container');

names.forEach((name, index) => {
  const link = `${baseURL}?id=${name.id}`;

  const card = document.createElement('div');
  card.classList.add('guest-card');

  // Номер 01, 02...
  const numberElem = document.createElement('div');
  numberElem.classList.add('card-number');
  numberElem.textContent = (index + 1).toString().padStart(2, '0');

  // Имя
  const titleElem = document.createElement('div');
  titleElem.classList.add('name__title');
  titleElem.textContent = name.name;

  // Ссылка
  const linkElem = document.createElement('a');
  linkElem.classList.add('link-display');
  linkElem.href = link;
  linkElem.textContent = link;
  linkElem.target = '_blank';
  linkElem.title = "Открыть приглашение";

  // Кнопки
  const actionsDiv = document.createElement('div');
  actionsDiv.classList.add('actions');

  const btnCopy = document.createElement('button');
  btnCopy.className = 'btn-copy';
  btnCopy.dataset.link = link;
  btnCopy.innerHTML = '<i class="fa-regular fa-copy"></i> Копировать';

  const btnViber = document.createElement('a');
  btnViber.className = 'btn-share viber';
  btnViber.href = 'viber://forward?text=' + encodeURIComponent(link);
  btnViber.target = '_blank';
  btnViber.innerHTML = '<i class="fa-brands fa-viber"></i>';

  const btnTg = document.createElement('a');
  btnTg.className = 'btn-share telegram';
  btnTg.href = `https://t.me/share/url?url=${encodeURIComponent(link)}&text=${encodeURIComponent('Приглашение на свадьбу')}`;
  btnTg.target = '_blank';
  btnTg.innerHTML = '<i class="fa-brands fa-telegram"></i>';

  actionsDiv.append(btnCopy, btnViber, btnTg);
  
  card.append(numberElem, titleElem, linkElem, actionsDiv);
  container.append(card);
});

container.addEventListener('click', (e) => {
  const btnCopy = e.target.closest('.btn-copy');

  if (btnCopy) {
    const linkUrl = btnCopy.dataset.link;
    
    navigator.clipboard.writeText(linkUrl)
      .then(() => {
        const originalContent = btnCopy.innerHTML;
        
        btnCopy.classList.add('copied');
        btnCopy.innerHTML = '<i class="fa-solid fa-check"></i> Готово';

        setTimeout(() => {
          btnCopy.classList.remove('copied');
          btnCopy.innerHTML = originalContent;
        }, 2000);
      })
      .catch((err) => {
        console.error('Ошибка:', err);
      });
  }
});