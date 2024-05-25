document.addEventListener('DOMContentLoaded', function() {
    const titleImage = document.getElementById('titleImage');
    const hoverImage = document.getElementById('hoverImage');

    titleImage.addEventListener('mouseover', function() {
        titleImage.classList.add('hidden');
        hoverImage.classList.remove('hidden');
    });

    titleImage.addEventListener('mouseout', function() {
        titleImage.classList.remove('hidden');
        hoverImage.classList.add('hidden');
    });

    hoverImage.addEventListener('mouseover', function() {
        titleImage.classList.add('hidden');
        hoverImage.classList.remove('hidden');
    });

    hoverImage.addEventListener('mouseout', function() {
        titleImage.classList.remove('hidden');
        hoverImage.classList.add('hidden');
    });
});
