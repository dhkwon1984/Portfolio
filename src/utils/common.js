export function myCommonFunction() {
    var header = document.querySelector('header').offsetHeight;
    var footer = document.querySelector('footer').offsetHeight;

    var container = document.querySelector('#app');
    container.style.height = `calc(100vh - ${header + footer}px)`;
}
