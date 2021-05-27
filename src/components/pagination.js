function a () {

    document.querySelector('.pagination-wrapper').addEventListener('click',event => {
        event.preventDefault();
        
        if (event.target && event.target.classList.contains('pagination__link')) {
    
            const links = document.querySelectorAll('.pagination__link');
            links.forEach(link => {
                link.classList.remove('pagination__link_active');
            });
            event.target.classList.add('pagination__link_active');
            
            return console.log(+event.target.innerText);
        }
    })
}

// a()



 




