// const barsIcon = document.querySelector('.mobile-icon');
// const mobileNavbar = document.querySelector('.mobile-navbar');
// const navbar = document.getElementById('navbar');


// barsIcon.addEventListener("click", function () {
//     // navbar.style.color = "red !important";
//     mobileNavbar.style.visibility = "inherit";
//     // navbar.style.height="200px";
//     console.log(mobileNavbar.style.visibility);
// })

$(document).ready(function(){

    $('.mobile-icon').click(function () {
        $(".mobile-navbar").toggleClass("visibility");
        $("#navbar").toggleClass("height");
    })
  });