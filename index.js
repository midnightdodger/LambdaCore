// Grab all the h2 elements inside #services
const serviceItems = document.querySelectorAll('#services h2');

// Loop through each one
serviceItems.forEach(item => {
    item.addEventListener('click', () => {
        // Example action: load different pages in the iframe based on which item is clicked
        const iframe = document.getElementById('content_iframe');
        switch(item.textContent) {
            case 'Account':
                iframe.src = 'http://87.106.56.146:4545/';
                break;
            case 'Bloom':
                iframe.src = 'http://87.106.56.146:5000/';
                break;
            case 'Bloop':
                iframe.src = 'http://87.106.56.146:5000/error';
                break;
            case 'Boom':
                iframe.src = 'http://87.106.56.146:5000/error';
                break;
            case 'Apps':
                iframe.src = 'https://example.com/apps';
                break;
            case 'OS':
                iframe.src = '/subpages/os.html';
                break;
            default:
                iframe.src = 'https://example.com';
        }
    });
});