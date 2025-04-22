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
        darkIcon.classList.add("fa-moon");
        darkIcon.classList.remove("fa-sun");
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
//          PORTFOLIO PAGE
// ---------------------------------

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.Carrousel-img');
    let index = 0;

    // to make sure the fisrt image will appear
    if (images.length > 0) {
      images[0].classList.add('active');
    }

    setInterval(() => {
      images[index].classList.remove('active');
      index = (index + 1) % images.length;
      images[index].classList.add('active');
    }, 3000);
  });


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

// ---------------------------------
//          MENU ACTIVE PAGE
// ---------------------------------

// Naming the const's
const navLinks = document.querySelectorAll(".Nav-a, .Overlay-content a");
const currentPage = window.location.pathname;

// Creating eventListeners
document.addEventListener("DOMContentLoaded", markActiveLink);

// Calling the function

function markActiveLink () {
  navLinks.forEach (link => {
    const href = link.getAttribute("href");

    // found a problem with the use of "./", but i didn't want to remove it, as the teacher taught in class
    const hrefClean = href.replace("./", "");
    const pathAtual = currentPage.split("/").pop(); 

    //to toggle the active class
    if (pathAtual === hrefClean) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}
