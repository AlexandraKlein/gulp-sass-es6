export default function navigationEvents() {
    const body = document.body;
    const navSwitch = document.querySelector('.navSwitch');
    const mobileNavSwitch = document.querySelector('.open-menu-nav');
    const mobileNav = document.querySelector('.navigation-mobile-menu-nav');
    const mobileNavTint = document.querySelector('.navigation-mobile-tint');
    const mobileNavClose = document.querySelector('.navigation-mobile-close');
    const superTint = document.getElementById('superTint');
    const mobileTint = document.querySelector('.navigation-mobile-tint');

    navSwitch.addEventListener('click', (e) => {
        e.preventDefault();
        body.classList.toggle('siteNavOpen');
    });

    mobileNavSwitch.addEventListener('click', (e) => {
        e.preventDefault();
        body.classList.add('siteNavOpen');
        mobileNav.classList.add('visible');
        mobileNavTint.classList.add('visible');
        mobileNavClose.classList.add('visible');
    });

    function closeNav(clickEl) {
        clickEl.addEventListener('click', (e) => {
            e.preventDefault();
            body.classList.remove('siteNavOpen');
            mobileNav.classList.remove('visible');
            mobileNavTint.classList.remove('visible');
            mobileNavClose.classList.remove('visible');
        });
    }

    const clickElArray = [mobileNavClose, superTint, mobileTint];

    for (let i = 0; i < clickElArray.length; i++) {
        closeNav(clickElArray[i]);
    }

    const searchBox = document.querySelector('.searchBox');
    const searchButton = document.querySelector('.searchButton');

    searchButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.location = `https://www.vw.com/search?btnG=Search+VW&proxystylesheet=vwcom_frontend&sort=date%3AD%3AL%3Ad1&oe=UTF-8&ie=UTF-8&ud=1&exclude_apps=1&getfields=*&q=${searchBox.value}`;
    });
};
