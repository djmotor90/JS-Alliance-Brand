var customerName = "Alliance  ";

// <h1 id="tm-header" class="tm-brand text-uppercase"></h1> <!--todo: Add Customer Name-->
function addCustomerName() {

    let title = document.getElementById('tm-header')
    title.textContent = customerName;
    // let brand = document.getElementById('tm-header')
    // title.textContent = customerName;
    let intro = document.getElementById('introheader')
    intro.textContent = customerName;
    
    // <h1 id="tm-header" class="tm-brand text-uppercase"></h1> <!--todo: Add Customer Name-->

    // <h2 id="introheader" class="tm-section-title mb-5 text-uppercase tm-color-primary"></h2> <!--todo: Add Customer Name-->

};

function toggleColors() {
    // <!-- todo: Change all classes named 'tm-white-rect' to 'tm-blue-rect' -->
    let el = document.querySelectorAll('.tm-white-rect')
    for (let i = 0; i < el.length; i++) {
        
        el[i].classList.add('tm-blue-rect')
        el[i].classList.remove('tm-white-rect')
      }

};

// let el = document.querySelectorAll('.tm-white-rect');

//     for (i = 0; i < el.length; ++i) {
//         el[i].classList.add('tm-blue-rect');
//         el[i].classList.remove('tm-white-rect');
//     }
// };

function hideElement() {
    //<ul class="nav flex-row tm-social-links">  <!--todo: Hide social links-->

};

 function addText() {

    //<p id="intropara1" class="tm-color-gray">  <!--todo: Add customer company introduction text about their founding year-->

    //<p id="intropara2" class="mb-0 tm-color-gray"> <!--todo: Add customer company introduction text about what they lead in-->

     //<p id="aboutpara1" id="a" class="mb-5"> <!--todo: Add customer company about text-->

    //<p id="aboutpara2"> <!--todo: Add customer company motto text-->

    // <p id="addresspara" class="mb-3"> <!--todo: Add customer company phone number text-->

}; 



