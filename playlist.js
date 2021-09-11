var ul = document.getElementById('playlist');

var playlist = [
  {
  	title: "This Band",
      alt: "This Band",
      sourceLink: "thisband.html",
      imageSrc: "https://drive.google.com/thumbnail?id=10DX7hs61PeCACP2NIhlpK6XF-OKxecJr"
  },
  {
  	title: "Roa",
      alt: "Roa",
      sourceLink: "roa.html",
      imageSrc: "https://drive.google.com/thumbnail?id=10DX7hs61PeCACP2NIhlpK6XF-OKxecJr"
  },
  {
  	title: "[Anime] Japanese Music Collection",
      alt: "Anime",
      sourceLink: "animusic.html",
      imageSrc: "https://drive.google.com/thumbnail?id=10DX7hs61PeCACP2NIhlpK6XF-OKxecJr"
  },
  {
  	title: "Jhon Roa",
      alt: "Jhon Roa",
      sourceLink: "jhonroa.html",
      imageSrc: "https://drive.google.com/thumbnail?id=10DX7hs61PeCACP2NIhlpK6XF-OKxecJr"
  },
  {
  	title: "Skusta Clee",
      alt: "Skusta Clee",
      sourceLink: "#",
      imageSrc: "https://drive.google.com/thumbnail?id=10DX7hs61PeCACP2NIhlpK6XF-OKxecJr"
  }
];

for(var x = 0; playlist.length; x++){
	let li, a, img, div;
	
	li = document.createElement('li');
	a = document.createElement('a');
	a.setAttribute('href',''+ playlist[x].sourceLink);
	a.setAttribute('target','_self');
	img = document.createElement('img');
	img.setAttribute('src','');
	img.setAttribute('alt','');
	img.setAttribute('id','album-img');
	div = document.createElement('div');
	div.setAttribute('id','album-title');
	
	img.src = playlist[x].imageSrc;
	img.alt = playlist[x].alt;
	div.textContent = playlist[x].title;
	
	a.appendChild(img);
	a.appendChild(div);
	li.appendChild(a);
	ul.appendChild(li);
	
}
