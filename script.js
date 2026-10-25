document.addEventListener('DOMContentLoaded', function () 
{
    const intro = document.querySelector('.Intro_Masuk');
    const undangan = document.getElementById('Undangan');
    const tombol = document.getElementById('Buka_Undangan');

    tombol.addEventListener('click', function () 
    {
        intro.classList.add('Tersembunyi');
        undangan.classList.add('is-visible');
        undangan.removeAttribute('aria-hidden');
        document.body.classList.add('is-open');
        window.scrollTo(0, 0);
    });
});