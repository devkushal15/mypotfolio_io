


let tag = document.querySelector(".navbtn");
let show = document.querySelector(".popupwraper")


let aboutbtn = document.querySelector(".btngroup");





let close = document.querySelector(".close")





tag.addEventListener('click', function () {

  show.classList.add("opacity-100");

  if (aboutbtn.classList.contains("hidden")) {



    aboutbtn.classList.remove("hidden");
  }

  else {

    aboutbtn.classList.add("hidden");
  }


});

close.addEventListener('click', function () {

  show.classList.remove("opacity-100");


  if (aboutbtn.classList.contains("hidden")) {



    aboutbtn.classList.remove("hidden");
  }

  else {

    aboutbtn.classList.add("hidden");
  }


});





// for responsiv navbar

let hambargar = document.querySelector(".hambargar");
let resheader = document.querySelector(".resheader");

let resclose = document.querySelector(".resclose");


hambargar.addEventListener('click', function () {

  resheader.classList.remove("hidden");
})

resclose.addEventListener('click', function () {

  resheader.classList.add("hidden");

})

// form varification

let go = false








function chak() {



  let user = document.myform.user.value;

  let useralert = document.querySelector(".alert");


  let email = document.myform.email.value;
  let emailalert = document.querySelector("#emailalert");


  let chakbox = document.myform.chakbox;

  let chakalert = document.querySelector("#chakalert");



  if (user == "") {

    useralert.classList.remove("d-none");
    return false

  }


  else {

    useralert.classList.add("d-none");
  }

  if (email == "") {

    emailalert.classList.remove("d-none");
    return false;
  }

  else {

    emailalert.classList.add("d-none");
  }


  if (chakbox.checked == "") {

    chakalert.classList.remove("d-none");
    return false;

  }

  else {

    chakalert.classList.add("d-none");
  }



}

let nighticon = document.querySelector(".nighticon");

let bgmain = document.querySelectorAll("section")


bgmain.forEach(section => {



  nighticon.addEventListener('click', function () {

    section.classList.toggle("bg-black");
    section.classList.toggle("text-white");

  })

});



// grid card animation

let gridcard = document.querySelectorAll(".active");
let dimco = document.querySelectorAll(".gridcardtext");


for (let i = 0; i < gridcard.length; i++) {
  gridcard[i].addEventListener("mouseenter", function (e) {
    dimco[i].style.display = "block";
  });

  gridcard[i].addEventListener("mouseleave", function (e) {
    dimco[i].style.display = "block";
  });
}










