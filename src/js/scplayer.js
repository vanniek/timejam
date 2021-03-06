var songs = [];

function newSong() {
  var item = document.getElementById('input').value;
  var uri = encodeURIComponent(item);
  var scUrl = 'https://w.soundcloud.com/player/?url=' + uri;
  var frame = document.getElementById('soundcloud');
  var ul = document.getElementById('list');
  var li = document.createElement('li');
  var scMatch = item.match(/^https?:\/\/(soundcloud\.com|snd\.sc)\/(.*)$/);
  if(scMatch != null) {
      frame.src = scUrl;
      if (songs.indexOf(item) < 0) {
          songs.push(item);
          li.appendChild(document.createTextNode(item));
          ul.appendChild(li);
      }
    } else {
      alert('This is not a valid soundcloud link.');
    }
  document.getElementById('input').value= "";
}

document.body.onkeyup = function(e){
  if(e.keyCode == 13){
    newSong();
  }
}

function removeItem(e) {
  e.target.parentElement.removeChild(e.target);
}
