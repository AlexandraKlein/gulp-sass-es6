(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

(function () {
    navigation();
    search();
})();

function navigation() {
    var body = document.body;
    var navSwitch = document.querySelector('.navSwitch');
    var mobileNavSwitch = document.querySelector('.open-menu-nav');
    var mobileNav = document.querySelector('.navigation-mobile-menu-nav');
    var mobileNavTint = document.querySelector('.navigation-mobile-tint');
    var mobileNavClose = document.querySelector('.navigation-mobile-close');
    var superTint = document.getElementById('superTint');

    navSwitch.addEventListener('click', function (e) {
        e.preventDefault();
        body.classList.toggle('siteNavOpen');
    });

    mobileNavSwitch.addEventListener('click', function (e) {
        e.preventDefault();
        body.classList.add('siteNavOpen');
        mobileNav.classList.add('visible');
        mobileNavTint.classList.add('visible');
        mobileNavClose.classList.add('visible');
    });

    mobileNavClose.addEventListener('click', function (e) {
        e.preventDefault();
        body.classList.remove('siteNavOpen');
        mobileNav.classList.remove('visible');
        mobileNavTint.classList.remove('visible');
        mobileNavClose.classList.remove('visible');
    });

    superTint.addEventListener('click', function (e) {
        e.preventDefault();
        body.classList.remove('siteNavOpen');
        mobileNav.classList.remove('visible');
        mobileNavTint.classList.remove('visible');
        mobileNavClose.classList.remove('visible');
    });
}

function search() {
    var searchBox = document.querySelector('.searchBox');
    var searchButton = document.querySelector('.searchButton');

    searchButton.addEventListener('click', function (e) {
        e.preventDefault();
        window.location = 'https://www.vw.com/search?btnG=Search+VW&proxystylesheet=vwcom_frontend&sort=date%3AD%3AL%3Ad1&oe=UTF-8&ie=UTF-8&ud=1&exclude_apps=1&getfields=*&q=' + searchBox.value;
    });
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsQ0FBQyxZQUFNO0FBQ0g7QUFDQTtBQUNILENBSEQ7O0FBS0EsU0FBUyxVQUFULEdBQXNCO0FBQ2xCLFFBQU0sT0FBTyxTQUFTLElBQXRCO0FBQ0EsUUFBTSxZQUFZLFNBQVMsYUFBVCxDQUF1QixZQUF2QixDQUFsQjtBQUNBLFFBQU0sa0JBQWtCLFNBQVMsYUFBVCxDQUF1QixnQkFBdkIsQ0FBeEI7QUFDQSxRQUFNLFlBQVksU0FBUyxhQUFULENBQXVCLDZCQUF2QixDQUFsQjtBQUNBLFFBQU0sZ0JBQWdCLFNBQVMsYUFBVCxDQUF1Qix5QkFBdkIsQ0FBdEI7QUFDQSxRQUFNLGlCQUFpQixTQUFTLGFBQVQsQ0FBdUIsMEJBQXZCLENBQXZCO0FBQ0EsUUFBTSxZQUFZLFNBQVMsY0FBVCxDQUF3QixXQUF4QixDQUFsQjs7QUFFQSxjQUFVLGdCQUFWLENBQTJCLE9BQTNCLEVBQW9DLFVBQUMsQ0FBRCxFQUFPO0FBQ3ZDLFVBQUUsY0FBRjtBQUNBLGFBQUssU0FBTCxDQUFlLE1BQWYsQ0FBc0IsYUFBdEI7QUFDSCxLQUhEOztBQUtBLG9CQUFnQixnQkFBaEIsQ0FBaUMsT0FBakMsRUFBMEMsVUFBQyxDQUFELEVBQU87QUFDN0MsVUFBRSxjQUFGO0FBQ0EsYUFBSyxTQUFMLENBQWUsR0FBZixDQUFtQixhQUFuQjtBQUNBLGtCQUFVLFNBQVYsQ0FBb0IsR0FBcEIsQ0FBd0IsU0FBeEI7QUFDQSxzQkFBYyxTQUFkLENBQXdCLEdBQXhCLENBQTRCLFNBQTVCO0FBQ0EsdUJBQWUsU0FBZixDQUF5QixHQUF6QixDQUE2QixTQUE3QjtBQUNILEtBTkQ7O0FBUUEsbUJBQWUsZ0JBQWYsQ0FBZ0MsT0FBaEMsRUFBeUMsVUFBQyxDQUFELEVBQU87QUFDNUMsVUFBRSxjQUFGO0FBQ0EsYUFBSyxTQUFMLENBQWUsTUFBZixDQUFzQixhQUF0QjtBQUNBLGtCQUFVLFNBQVYsQ0FBb0IsTUFBcEIsQ0FBMkIsU0FBM0I7QUFDQSxzQkFBYyxTQUFkLENBQXdCLE1BQXhCLENBQStCLFNBQS9CO0FBQ0EsdUJBQWUsU0FBZixDQUF5QixNQUF6QixDQUFnQyxTQUFoQztBQUNILEtBTkQ7O0FBUUEsY0FBVSxnQkFBVixDQUEyQixPQUEzQixFQUFvQyxVQUFDLENBQUQsRUFBTztBQUN2QyxVQUFFLGNBQUY7QUFDQSxhQUFLLFNBQUwsQ0FBZSxNQUFmLENBQXNCLGFBQXRCO0FBQ0Esa0JBQVUsU0FBVixDQUFvQixNQUFwQixDQUEyQixTQUEzQjtBQUNBLHNCQUFjLFNBQWQsQ0FBd0IsTUFBeEIsQ0FBK0IsU0FBL0I7QUFDQSx1QkFBZSxTQUFmLENBQXlCLE1BQXpCLENBQWdDLFNBQWhDO0FBQ0gsS0FORDtBQU9IOztBQUVELFNBQVMsTUFBVCxHQUFrQjtBQUNkLFFBQU0sWUFBWSxTQUFTLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBbEI7QUFDQSxRQUFNLGVBQWUsU0FBUyxhQUFULENBQXVCLGVBQXZCLENBQXJCOztBQUVBLGlCQUFhLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLFVBQUMsQ0FBRCxFQUFPO0FBQzFDLFVBQUUsY0FBRjtBQUNBLGVBQU8sUUFBUCwySkFBd0ssVUFBVSxLQUFsTDtBQUNILEtBSEQ7QUFJSCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIigoKSA9PiB7XG4gICAgbmF2aWdhdGlvbigpO1xuICAgIHNlYXJjaCgpO1xufSkoKTtcblxuZnVuY3Rpb24gbmF2aWdhdGlvbigpIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICBjb25zdCBuYXZTd2l0Y2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2U3dpdGNoJyk7XG4gICAgY29uc3QgbW9iaWxlTmF2U3dpdGNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wZW4tbWVudS1uYXYnKTtcbiAgICBjb25zdCBtb2JpbGVOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2aWdhdGlvbi1tb2JpbGUtbWVudS1uYXYnKTtcbiAgICBjb25zdCBtb2JpbGVOYXZUaW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmlnYXRpb24tbW9iaWxlLXRpbnQnKTtcbiAgICBjb25zdCBtb2JpbGVOYXZDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZpZ2F0aW9uLW1vYmlsZS1jbG9zZScpO1xuICAgIGNvbnN0IHN1cGVyVGludCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdXBlclRpbnQnKTtcblxuICAgIG5hdlN3aXRjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdzaXRlTmF2T3BlbicpO1xuICAgIH0pO1xuXG4gICAgbW9iaWxlTmF2U3dpdGNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ3NpdGVOYXZPcGVuJyk7XG4gICAgICAgIG1vYmlsZU5hdi5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgICAgIG1vYmlsZU5hdlRpbnQuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgICAgICBtb2JpbGVOYXZDbG9zZS5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgfSk7XG5cbiAgICBtb2JpbGVOYXZDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdzaXRlTmF2T3BlbicpO1xuICAgICAgICBtb2JpbGVOYXYuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgICAgICBtb2JpbGVOYXZUaW50LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICAgICAgbW9iaWxlTmF2Q2xvc2UuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgIH0pO1xuXG4gICAgc3VwZXJUaW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3NpdGVOYXZPcGVuJyk7XG4gICAgICAgIG1vYmlsZU5hdi5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgICAgIG1vYmlsZU5hdlRpbnQuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgICAgICBtb2JpbGVOYXZDbG9zZS5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHNlYXJjaCgpIHtcbiAgICBjb25zdCBzZWFyY2hCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoQm94Jyk7XG4gICAgY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaEJ1dHRvbicpO1xuXG4gICAgc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBgaHR0cHM6Ly93d3cudncuY29tL3NlYXJjaD9idG5HPVNlYXJjaCtWVyZwcm94eXN0eWxlc2hlZXQ9dndjb21fZnJvbnRlbmQmc29ydD1kYXRlJTNBRCUzQUwlM0FkMSZvZT1VVEYtOCZpZT1VVEYtOCZ1ZD0xJmV4Y2x1ZGVfYXBwcz0xJmdldGZpZWxkcz0qJnE9JHtzZWFyY2hCb3gudmFsdWV9YDtcbiAgICB9KTtcbn1cbiJdfQ==

//# sourceMappingURL=script.js.map
