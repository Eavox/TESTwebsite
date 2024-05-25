document.addEventListener('DOMContentLoaded', function() {
    const titleImage = document.getElementById('titleImage');
    const hoverImage = document.getElementById('hoverImage');

    titleImage.addEventListener('mouseover', function() {
        titleImage.style.opacity = '0';
        hoverImage.style.opacity = '1';
    });

    titleImage.addEventListener('mouseout', function() {
        titleImage.style.opacity = '1';
        hoverImage.style.opacity = '0';
    });

    hoverImage.addEventListener('mouseover', function() {
        titleImage.style.opacity = '0';
        hoverImage.style.opacity = '1';
    });

    hoverImage.addEventListener('mouseout', function() {
        titleImage.style.opacity = '1';
        hoverImage.style.opacity = '0';
    });
});
