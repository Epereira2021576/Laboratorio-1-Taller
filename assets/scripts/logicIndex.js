function navigateToLink(linkElement) {
  const filename = linkElement
    .getAttribute('href')
    .split('/')
    .pop()
    .split('.')[0];

  const message = `Nos vamos a ${filename}`;
  window.location.href = linkElement.getAttribute('href');
}

const parentElement = document.querySelector('nav');

parentElement.addEventListener('click', function (event) {
  if (event.target.tagName === 'A') {
    navigateToLink(event.target);
  }
});
