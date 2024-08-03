document.addEventListener('DOMContentLoaded', function() {
    const moreInfoBtns = document.querySelectorAll('.more-info-btn');
    
    moreInfoBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const moreInfo = this.nextElementSibling;
            moreInfo.classList.toggle('show');
            if (moreInfo.classList.contains('show')) {
                this.textContent = 'Скрыть';
            } else {
                this.textContent = 'Читать';
            }
        });
    });
});
