(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

(function () {
    navigation();
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsQ0FBQyxZQUFNO0FBQ0g7QUFDSCxDQUZEOztBQUlBLFNBQVMsVUFBVCxHQUFzQjtBQUNsQixRQUFNLE9BQU8sU0FBUyxJQUF0QjtBQUNBLFFBQU0sWUFBWSxTQUFTLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBbEI7QUFDQSxRQUFNLGtCQUFrQixTQUFTLGFBQVQsQ0FBdUIsZ0JBQXZCLENBQXhCO0FBQ0EsUUFBTSxZQUFZLFNBQVMsYUFBVCxDQUF1Qiw2QkFBdkIsQ0FBbEI7QUFDQSxRQUFNLGdCQUFnQixTQUFTLGFBQVQsQ0FBdUIseUJBQXZCLENBQXRCO0FBQ0EsUUFBTSxpQkFBaUIsU0FBUyxhQUFULENBQXVCLDBCQUF2QixDQUF2QjtBQUNBLFFBQU0sWUFBWSxTQUFTLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBbEI7O0FBRUEsY0FBVSxnQkFBVixDQUEyQixPQUEzQixFQUFvQyxVQUFDLENBQUQsRUFBTTtBQUN0QyxVQUFFLGNBQUY7QUFDQSxhQUFLLFNBQUwsQ0FBZSxNQUFmLENBQXNCLGFBQXRCO0FBQ0gsS0FIRDs7QUFLQSxvQkFBZ0IsZ0JBQWhCLENBQWlDLE9BQWpDLEVBQTBDLFVBQUMsQ0FBRCxFQUFNO0FBQzVDLFVBQUUsY0FBRjtBQUNBLGFBQUssU0FBTCxDQUFlLEdBQWYsQ0FBbUIsYUFBbkI7QUFDQSxrQkFBVSxTQUFWLENBQW9CLEdBQXBCLENBQXdCLFNBQXhCO0FBQ0Esc0JBQWMsU0FBZCxDQUF3QixHQUF4QixDQUE0QixTQUE1QjtBQUNBLHVCQUFlLFNBQWYsQ0FBeUIsR0FBekIsQ0FBNkIsU0FBN0I7QUFDSCxLQU5EOztBQVFBLG1CQUFlLGdCQUFmLENBQWdDLE9BQWhDLEVBQXlDLFVBQUMsQ0FBRCxFQUFNO0FBQzNDLFVBQUUsY0FBRjtBQUNBLGFBQUssU0FBTCxDQUFlLE1BQWYsQ0FBc0IsYUFBdEI7QUFDQSxrQkFBVSxTQUFWLENBQW9CLE1BQXBCLENBQTJCLFNBQTNCO0FBQ0Esc0JBQWMsU0FBZCxDQUF3QixNQUF4QixDQUErQixTQUEvQjtBQUNBLHVCQUFlLFNBQWYsQ0FBeUIsTUFBekIsQ0FBZ0MsU0FBaEM7QUFDSCxLQU5EOztBQVFBLGNBQVUsZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBb0MsVUFBQyxDQUFELEVBQU07QUFDdEMsVUFBRSxjQUFGO0FBQ0EsYUFBSyxTQUFMLENBQWUsTUFBZixDQUFzQixhQUF0QjtBQUNBLGtCQUFVLFNBQVYsQ0FBb0IsTUFBcEIsQ0FBMkIsU0FBM0I7QUFDQSxzQkFBYyxTQUFkLENBQXdCLE1BQXhCLENBQStCLFNBQS9CO0FBQ0EsdUJBQWUsU0FBZixDQUF5QixNQUF6QixDQUFnQyxTQUFoQztBQUNILEtBTkQ7QUFPSCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIigoKSA9PiB7XG4gICAgbmF2aWdhdGlvbigpO1xufSkoKTtcblxuZnVuY3Rpb24gbmF2aWdhdGlvbigpIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICBjb25zdCBuYXZTd2l0Y2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2U3dpdGNoJyk7XG4gICAgY29uc3QgbW9iaWxlTmF2U3dpdGNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wZW4tbWVudS1uYXYnKTtcbiAgICBjb25zdCBtb2JpbGVOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2aWdhdGlvbi1tb2JpbGUtbWVudS1uYXYnKTtcbiAgICBjb25zdCBtb2JpbGVOYXZUaW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmlnYXRpb24tbW9iaWxlLXRpbnQnKTtcbiAgICBjb25zdCBtb2JpbGVOYXZDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZpZ2F0aW9uLW1vYmlsZS1jbG9zZScpO1xuICAgIGNvbnN0IHN1cGVyVGludCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdXBlclRpbnQnKTtcblxuICAgIG5hdlN3aXRjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBib2R5LmNsYXNzTGlzdC50b2dnbGUoJ3NpdGVOYXZPcGVuJyk7XG4gICAgfSk7XG5cbiAgICBtb2JpbGVOYXZTd2l0Y2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCdzaXRlTmF2T3BlbicpO1xuICAgICAgICBtb2JpbGVOYXYuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgICAgICBtb2JpbGVOYXZUaW50LmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICAgICAgbW9iaWxlTmF2Q2xvc2UuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgIH0pO1xuXG4gICAgbW9iaWxlTmF2Q2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdzaXRlTmF2T3BlbicpO1xuICAgICAgICBtb2JpbGVOYXYuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgICAgICBtb2JpbGVOYXZUaW50LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICAgICAgbW9iaWxlTmF2Q2xvc2UuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgIH0pO1xuXG4gICAgc3VwZXJUaW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnc2l0ZU5hdk9wZW4nKTtcbiAgICAgICAgbW9iaWxlTmF2LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICAgICAgbW9iaWxlTmF2VGludC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgICAgIG1vYmlsZU5hdkNsb3NlLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICB9KTtcbn1cbiJdfQ==

//# sourceMappingURL=script.js.map
