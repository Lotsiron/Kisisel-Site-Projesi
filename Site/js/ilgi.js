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

  fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCEOXxzW2vU0P-0THehuIIeg&maxResults=10&key=AIzaSyDtCR559Fh4iKZRlHM3N-YvtAy9P2ICswo")
  .then((veri)=>{
      return veri.json()
  }).then((data)=>{
    console.log(data)
    let videos = data.items
    let videocontainer = document.querySelector(".youtube-container")
    videocontainer.innerHTML = '<img src="${data.items.at(2).snippet.thumbnails.high.url}">'
  })

