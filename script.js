const fadeElements =

  document.querySelectorAll(
    ".fade-in"
  );



function checkScroll() {

  fadeElements.forEach(

    function (element) {

      const elementTop =

        element.getBoundingClientRect().top;



      const windowHeight =

        window.innerHeight;



      if (

        elementTop <

        windowHeight - 100

      ) {

        element.classList.add(
          "show"
        );

      }

    }

  );

}



window.addEventListener(

  "scroll",

  checkScroll

);



checkScroll();