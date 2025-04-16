// Archive for the Bibbó project 

// SANDWHICH MENU

// DARK MODE


/*--------------
    SERVICE PAGE
--------------------*/

// Accordion and toggle at Services page:

const block = document.querySelectorAll('.Accordion-block');
const title = document.querySelectorAll('.Block-title');

//Select all titles

title.forEach((eachTitle, i) => {

    title[i].addEventListener('click', () => {
        block.forEach((eachBlock, i) => {
            block[i].classList.remove('active')
        })

        block[i].classList.add('active')
    })
})

