    const view = document.getElementById('view');
    const viewImg = document.getElementById('viewImg');
    const images = document.querySelectorAll('.gallery img');

    function openView() {
        viewImg.src = this.src;
        view.style.display = 'flex';
    }

    function closeView() {
        if (view.style.display === 'flex') {
            view.style.display = 'none';
        }
    }

    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener('click', openView);
    }

    view.addEventListener('click', closeView);