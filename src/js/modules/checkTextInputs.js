const checkTextInputs = (selector) => {
    const txtInputs = document.querySelectorAll(selector);
    txtInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            if (input.value .match(/[^а-яё 0-9]/ig)) {
                input.value = '';
            }
        });
        input.addEventListener('keypress', function(e) {
            if (e.key.match(/[^а-яё 0-9]/ig)) {
                e.preventDefault();
            }
            console.log(input.value);
        });

    });
};

export default checkTextInputs;