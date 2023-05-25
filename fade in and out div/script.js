const box = document.getElementById('box');
        const input = document.getElementById('input');

        input.addEventListener('click', () => {
            box.classList.add('fade-in');
            setTimeout(() => {
                box.classList.remove('fade-in');
            }, 1000);
        });