const changeModalState = (state) => {
    let size = document.querySelector('#size'),
        material = document.querySelector('#material'),
        options = document.querySelector('#options');

    function setState (block, event) {
        block.addEventListener(event, function(e) {
            let attr = block.getAttribute('name');
            if(attr === 'size'){
                state[attr] = block.value;
            } else if(attr === 'material') {
                state[attr] = block.value;
            } else {
                state[attr] = block.value;
            }

            console.log(state);
        });
    }    
    setState(size, 'change');
    setState(material, 'change');
    setState(options, 'change');
};

export default changeModalState;