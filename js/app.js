/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/


/* Add new section button */
function addSection() {
    const sectionHtml = `
    <section id = "section${counter}" data-nav = "Section ${counter}">
    <div class="landing__container">
    <h2>Section ${counter}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

    <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
    </div>
    </section>`;
    counter++;
    document.querySelector('main').insertAdjacentHTML('beforeend', sectionHtml);

    /* This also builds the navigation bar for sections while adding new ones */
    const navBar = addToNavBar();

    sectionScroll(navBar);
}

/**
 * Define Global Variables
 * 
*/
let counter = 1;
var mybutton = document.getElementById("floatBtn");

/**
 * End Global Variables
 * Start Helper Functions
 *
*/

function addToNavBar() {
    const navBar = document.getElementById("navbar__list");
    /* The next line is necessary to prevent duplicates in nav bar */
    navBar.innerHTML = "";
    document.querySelectorAll("section").forEach((section) => {
        const navItem = `<li><a href="#${section.id}" class="menu__link" data-nav="${section.id}" >${section.dataset.nav}</a></li>`;
        navBar.insertAdjacentHTML("beforeend", navItem);
    });
    return navBar;
}

// Makes the scroll behavior of sections
function sectionScroll(navBar) {
    navBar.addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById(event.target.dataset.nav).scrollIntoView({ behavior: "smooth" });
        activeSection(event);
    });
}

// Set sections as active
function activeSection(event) {
    document.querySelector('.your-active-class')?.classList.remove('your-active-class');
    document.querySelector(`#${event.target.dataset.nav}`)?.classList.add('your-active-class');

}


// When the user scrolls down 400px from the top of the document, show the Top button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
// this section changes the active section depending on the viewport
  const sections = document.getElementsByTagName('section');
  for(section of sections){
      if(isInViewport(section)){
          if(!section.classList.contains('your-active-class'))
          section.classList.add('your-active-class');
      }
      else
      section.classList.remove('your-active-class');
  }


}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
       rect.top >= -220 &&
        
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 130
    );
}

/**
 * End Helper Functions*/


// Build menu 
addSection();
addSection();
addSection();
addSection();






