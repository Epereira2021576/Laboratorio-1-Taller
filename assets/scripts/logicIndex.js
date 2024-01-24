const links = document.querySelectorAll('.nav-link');

links.forEach((link) => {
  link.addEventListener('click', async (event) => {
    event.preventDefault();

    alert('Link clicked!');

    await new Promise((resolve) => setTimeout(resolve, 2000));

    window.location.href = event.target.getAttribute('href');
  });
});
