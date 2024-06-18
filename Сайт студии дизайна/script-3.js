document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.slider__img');
    const controls = document.querySelectorAll('.control');
    const dots = document.querySelectorAll('.dot');
    const navLinks = document.querySelectorAll('.container-2-nav_selection');
    let imageIndex = 0;

    function showImage(index) {
        
        if (index < 0 || index >= images.length) {
            return; 
        }

        images.forEach(image => image.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        images[index].classList.add('active');
        dots[index].classList.add('active');

        imageIndex = index;
    }

    controls.forEach(control => {
        control.addEventListener('click', () => {
            if (control.classList.contains('prev')) {
                imageIndex = imageIndex === 0 ? images.length - 1 : imageIndex - 1;
            } else if (control.classList.contains('next')) {
                imageIndex = imageIndex === images.length - 1 ? 0 : imageIndex + 1;
            }
            showImage(imageIndex);
        });
    });

    navLinks.forEach((link, index) => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            showImage(index);
        });
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showImage(index);
        });
    });


    showImage(0); 
});

   
