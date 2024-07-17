document.addEventListener('DOMContentLoaded', function() {
    const titleImage = document.getElementById('titleImage');
    const hoverImage = document.getElementById('hoverImage');
    const scheduleButton = document.getElementById('scheduleButton');
    const scheduleModal = document.getElementById('scheduleModal');
    const closeModal = document.getElementById('closeModal');
    const contactButton = document.getElementById('contactButton');
    const suggestionButton = document.getElementById('suggestionButton');
    const suggestionModal = document.getElementById('suggestionModal');
    const closeSuggestionModal = document.getElementById('closeSuggestionModal');

    const toggleImages = (showTitle) => {
        if (showTitle) {
            titleImage.classList.remove('hidden');
            hoverImage.classList.add('hidden');
        } else {
            titleImage.classList.add('hidden');
            hoverImage.classList.remove('hidden');
        }
    };

    titleImage.addEventListener('mouseover', () => toggleImages(false));
    titleImage.addEventListener('mouseout', () => toggleImages(true));
    hoverImage.addEventListener('mouseover', () => toggleImages(false));
    hoverImage.addEventListener('mouseout', () => toggleImages(true));

    const toggleModal = (modal, show) => {
        modal.style.display = show ? "block" : "none";
    };

    scheduleButton.addEventListener('click', () => toggleModal(scheduleModal, true));
    closeModal.addEventListener('click', () => toggleModal(scheduleModal, false));
    window.addEventListener('click', (event) => {
        if (event.target === scheduleModal) {
            toggleModal(scheduleModal, false);
        }
    });

    contactButton.addEventListener('click', () => {
        window.location.href = "mailto:eavoxtrading@gmail.com";
    });

    suggestionButton.addEventListener('click', () => toggleModal(suggestionModal, true));
    closeSuggestionModal.addEventListener('click', () => toggleModal(suggestionModal, false));
    window.addEventListener('click', (event) => {
        if (event.target === suggestionModal) {
            toggleModal(suggestionModal, false);
        }
    });
});
