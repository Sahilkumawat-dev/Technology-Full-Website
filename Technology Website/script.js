        let currentImage = 0;
        const images = document.querySelectorAll('.center .image-container img');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        function changeImage(index) {
            images[currentImage].classList.remove('active');
            currentImage = (index + images.length) % images.length;
            images[currentImage].classList.add('active');
        }
                // NotesSociety

        prevBtn.addEventListener('click', () => changeImage(currentImage - 1));
        nextBtn.addEventListener('click', () => changeImage(currentImage + 1));
                // NotesSociety

        setInterval(() => {
            changeImage(currentImage + 1);
        }, 3000); // chnge img every 3 sec
        const menuToggle = document.querySelector('.menu-toggle');
        const menu = document.querySelector('.menu');
        // NotesSociety
        menuToggle.addEventListener('click', () => {
            menu.classList.toggle('show');
        });
       
