document.querySelectorAll('.tag').forEach(box => {
    const tagName = box.tagName.toLowerCase();

    box.style.borderColor = '#616161';

    if (!box.classList.contains('nolabel')){
        const label = document.createElement('label');
        
    }
})