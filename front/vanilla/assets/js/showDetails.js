const showDetails = event => {

    // methods
    const adminMultipleClass = (action, className, delay, ...elements) => {

        elements.forEach(element => {

            const teste = document.querySelector(element);

            if (action === 'add') {
                setTimeout(() => {
                    document.querySelector(element).classList.add(className);
                }, delay);
            } else if (action == 'remove') {
                setTimeout(() => {
                    document.querySelector(element).classList.remove(className);
                }, delay);
            }

        });

    }

    // getting elements
    const overlay = document.querySelector('.overlay-section-wrapper');
    const animationStatus = overlay.getAttribute('data-animation-status');
    const img = event.target;
    const title = document.querySelector('.overlay-section-info-title');
    const detailsContainer = document.querySelector('.details-section');

    if (animationStatus === 'off') {

        overlay.setAttribute('data-animation-status', 'on');
        overlay.classList.add('overlay-section-wrapper-animation');

        img.classList.add('overlay-section-img-animation');
        title.classList.add('overlay-section-info-title-animation');

        adminMultipleClass('add',
            'overlay-section-header-animation',
            0,
            '.overlay-section-header',
            '.back-circle-effect',
            '.glide__bullets',
            '.overlay-section-info-price',
            '.overlay-section-info-description',
        );

        detailsContainer.classList.add('details-section-animation');

        adminMultipleClass('add', 'overlay-reset-animation', 200, '.overlay-section', '.glide__track', '.glide__slides');

    } else {

        overlay.setAttribute('data-animation-status', 'off');
        overlay.classList.remove('overlay-section-wrapper-animation');

        img.classList.remove('overlay-section-img-animation');
        title.classList.remove('overlay-section-info-title-animation');

        adminMultipleClass('remove',
            'overlay-section-header-animation',
            0,
            '.overlay-section-header',
            '.back-circle-effect',
            '.glide__bullets',
            '.overlay-section-info-price',
            '.overlay-section-info-description',
        );

        detailsContainer.classList.remove('details-section-animation');

        adminMultipleClass('remove', 'overlay-reset-animation', 350, '.overlay-section', '.glide__track', '.glide__slides');
    }

}