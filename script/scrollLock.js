const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;

const body = document.querySelector('#body')

disableBodyScroll(targetElement);
 
// enableBodyScroll(targetElement);