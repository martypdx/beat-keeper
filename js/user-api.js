
const addUserData = {
    init: function() {
        const form = document.getElementById('start-page');

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            // console.log('test');
            const elements = form.elements;

            const userData = {
                username: elements.username.value
                            //  genre: elements.genre.value
                            //  beatsarray: []
            };
            console.log(userData.username);
            // addUserData.init();
        });
    }
};

addUserData.init();

// export default addUserData;