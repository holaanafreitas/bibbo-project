// Archive for the Bibbó project 

// ---------------------------------
//          CURTAIN MENU
// ---------------------------------

/* to open our menu */
function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  /* to close our menu */
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }

// ---------------------------------
//           DARK MODE
// ---------------------------------
//Naming the const's
const darkMode = document.getElementById('Nav-dark');
const darkIcon = document.getElementById('Dark-icon');

// Creating the function for the the change
const darkModeOn = () => {
    const isDark = document.body.classList.toggle('Dark-mode');
    
    if (isDark) {
        darkIcon.classList.remove("fa-moon");
        darkIcon.classList.add("fa-sun");
    } else {
        darkIcon.classList.add("fa-sun");
        darkIcon.classList.remove("fa-moon");
    }

    // Saving in local storage
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
};

// Creating the click event

darkIcon.addEventListener('click', () => {
    darkModeOn();
})

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('Dark-mode');
    darkIcon.classList.remove('fa-moon');
    darkIcon.classList.add('fa-sun');
}



// ---------------------------------
//          SERVICE PAGE
// ---------------------------------

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

