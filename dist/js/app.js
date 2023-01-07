// * боковое юзер-меню
const userSetting = document.getElementById('user_setting');
const userSettingOffcanvas = UIkit.offcanvas(userSetting);
// ! отключить на релизе
// userSettingOffcanvas.show();

// * параметры URL строки
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

// * дублируем содержимое поиска
// * получаем все поля поиска
const searchInputs = document.querySelectorAll('input.uk-search-input');
// * обходим их, назначаем содержимое поля и присваиваем событие/я
searchInputs.forEach((input, index) => {

	// * назначаем содержимое поля поиска, если ранее что-то искалось
	input.value = urlParams.get('search') ?? null;

	['input'].forEach(event => {
		input.addEventListener(event, element => {
			searchInputs.forEach((i) => {
				i.value = element.target.value;
			})
		})
	})
});

// * меняем год на актуальный
const copyrightYear = document.getElementById('copyright_year');
copyrightYear.innerText = new Date().getFullYear();

// * отслеживание хэшей в адресной строке для табов
const clickTabLinkHash = (link) => {
	if (link.getAttribute('href') == window.location.hash) {
		link.click();
	}
}
document.addEventListener('DOMContentLoaded', () => {

	// * отслеживаем изменение хэша
	window.onhashchange = () => {
		const link = document.querySelector('a[href="'+window.location.hash+'"]');
		if (link) clickTabLinkHash(link);

	}

	// * если страница загрузилась с хэшем, ищем соответствующую ссылку
	if (window.location.hash) {
		document.querySelectorAll('.uk-tab a').forEach((link) => {
			clickTabLinkHash(link);
			link.addEventListener('click', () => {
				window.location.hash = link.getAttribute('href');
			})
		})
	}

});
// * переключение хэшей

// // * трясем колокольчик, если есть непрочитанные уведомления
// const notification_count = Number(document.getElementById('notification_count').textContent) ?? 0;
// const notification_icon = document.getElementById('notification_icon');

// // * переключение темы сайта
// // * цветовая схема системы: dark - true, light - false
// let themeDarkColorSchemeSystem = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? true : false;
// // * кнопка переключение темы
// const themeSwitcher = document.getElementById('theme_switcher');

// // * получаем цвет темы из локального хранилища
// const getLocalColorScheme = () => {
// 	return localStorage.getItem('color-scheme') ?? null;
// }
// // * сохраняем цвет темы в локальное хранилище
// const setLocalColorScheme = (style) => {
// 	return localStorage.setItem('color-scheme', style);
// }
// // * переключаем тему сайта
// const switchColorScheme = (style) => {
// 	if (style == 'dark' || themeDarkColorSchemeSystem) {
// 		document.body.classList.toggle('uk-dark');
// 	} else {
// 		document.body.classList.toggle('uk-light');
// 	}
// }

// // * если устройство в тёмном режиме и тема сайта не выбрана
// if (themeDarkColorSchemeSystem && (getLocalColorScheme == null || getLocalColorScheme == 'dark')) {
// 	switchColorScheme('dark');
// } else {
// 	switchColorScheme('light');
// }


// // * выставляем статус кнопке
// themeSwitcher.classList.toggle(themeDarkColorSchemeSystem ? 'button--dark' : 'button--light');
// // * клик по кнопке переключения темы
// themeSwitcher.addEventListener('click', e => {

// 	switchColorScheme();

// 	// * трясем колокольчик, если есть непрочитанные уведомления
// 	if (userSetting.classList.contains('uk-open') && notification_count > 0) {
// 		notification_icon.classList.toggle('uk-animation-shake');
// 		notification_icon.addEventListener('animationend', () => {
// 			notification_icon.classList.remove('uk-animation-shake');
// 		}, { once: true })
// 	}
// });
