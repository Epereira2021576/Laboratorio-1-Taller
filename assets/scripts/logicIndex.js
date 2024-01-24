const links = document.querySelectorAll('.nav-link');

links.forEach((link) => {
  link.addEventListener('click', async (event) => {
    alert('Yendo al documento...');

    await new Promise((resolve) => setTimeout(resolve, 2000));

    window.location.href = event.target.getAttribute('href');
  });
});
