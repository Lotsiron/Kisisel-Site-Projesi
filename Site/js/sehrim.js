  function menuButonu() {
    var menu = document.getElementById("menu");
  
    if (menu.style.display === "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  }
  
  // header küçülmesi 
  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    if (document.documentElement.scrollTop > 120) 
    {
      document.getElementById("header").style.height = "50px";
      document.getElementById("Logo").style.height = "50px";
    } 
    else if (document.documentElement.scrollTop < 60) 
    {
      document.getElementById("header").style.height = "120px";
      document.getElementById("Logo").style.height = "100px";
    }
  } 

  //Şehir resimleri
  let jSlideSayi = 1;
  slideGoster(jSlideSayi);
  
  // sonraki/önceki kontrolleri
  function slideArttir(n) {
    slideGoster(jSlideSayi += n);
  }
  
  // Küçük resim kontrolleri
  function SlideSabit(n) {
    slideGoster(jSlideSayi = n);
  }


  function slideGoster(n) {
    let i;
    let jslides = document.getElementsByClassName("slide");
    let jkucukresim = document.getElementsByClassName("kucukresim");
    if (n > jslides.length) {jSlideSayi = 1}
    if (n < 1) {jSlideSayi = jslides.length}
    for (i = 0; i < jslides.length; i++) {
      jslides[i].style.display = "none";
    }
    for (i = 0; i < jkucukresim.length; i++) {
      jkucukresim[i].className = jkucukresim[i].className.replace(" active", "");
    }
    jslides[jSlideSayi-1].style.display = "block";
    jkucukresim[jSlideSayi-1].className += " active";
  }
