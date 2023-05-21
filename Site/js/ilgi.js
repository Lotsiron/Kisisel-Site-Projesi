fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCEOXxzW2vU0P-0THehuIIeg&maxResults=10&key=AIzaSyDtCR559Fh4iKZRlHM3N-YvtAy9P2ICswo")
.then((veri)=>{
    return veri.json()
}).then((data)=>{
  console.log(data)
  console.log(data.items.at(2).snippet.thumbnails.high.url)
  document.getElementById("papagan").src = data.items.at(2).snippet.thumbnails.high.url

})