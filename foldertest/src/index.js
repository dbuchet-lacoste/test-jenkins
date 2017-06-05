import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


const elems = document.getElementsByClassName('form-contact-vitrine');
Array.from(elems).map(domEl => {
    const params = {
        locale: domEl.getAttribute('data-locale'),
        mode: domEl.getAttribute('data-mode'),
        showBreadcrumb: domEl.getAttribute('data-breadcrumb') === "true",
        type: domEl.getAttribute('data-form-type'),
        finder: domEl.getAttribute('data-finder') === "true",
    }
    ReactDOM.render(<App {...params} />, domEl);
    return null;
});

window.BAndCUtils = {
    scrollTo: pos => {
        const $ = window.$;
        $('html, body').animate({ scrollTop: pos }, 200, "swing");
    },
    unfixContactCelebrity: () => {
        const $ = window.$;
        if ($(window).width() <= 768) return;

        const scrollToPos = $(document).height() - 2*$(window).height() - $('.l-main__bottom').outerHeight() - $('.l-footer').outerHeight() + 30 + $('.js-sidebar-container').offset().top;

        if (!isNaN(scrollToPos)) window.BAndCUtils.scrollTo(scrollToPos);
    },
    setHeaderHeight: h => {
        const $ = window.$;
        const pt = h === 0 ? 0 : 120;
        $('section.l-main > .c-jumbotron-tunnel').css('margin-bottom', `${h}px`).css('padding-top', `${pt}px`);
    }
};

window.EVENT_HEADER_FORM_HEIGHT_CHANGE = 'form::header::height';
window.EVENT_HEADER_FINDER_DEPLOY = 'form::header::deploy';

window.addEventListener(window.EVENT_HEADER_FORM_HEIGHT_CHANGE, e => window.BAndCUtils.setHeaderHeight(e.detail.h === 0 ? 0 : (e.detail.h-135)));

window.addEventListener(window.EVENT_HEADER_FINDER_DEPLOY, e => window.BAndCUtils.scrollTo(250));

/* Hot reloading */
if (module.hot) {
    module.hot.accept();
}
