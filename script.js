var ul = document.getElementById('music-list');

var music = [
  
  {
     title: "A Super Nice Japanese Song PromiseYakusoku 約束Lyrics",
     audioTruck: "https://dl.dropboxusercontent.com/s/9berr0ybk728aec/A%20Super%20Nice%20Japanese%20Song%20PromiseYakusoku%20%E7%B4%84%E6%9D%9FLyrics.mp3?dl=0"
  },
  {
     title: "Hanatan Yuuhi Saka",
     audioTruck: "https://dl.dropboxusercontent.com/s/ezstw9o1dj0wq8b/Hanatan%20Yuuhi%20Saka.mp3?dl=0"
  },
  {
     title: "Hiroko Promise You",
     audioTruck: "https://dl.dropboxusercontent.com/s/z2ffdw8tu72t7mj/Hiroko%20Promise%20You.mp3?dl=0"
  },
  {
     title: "RSPYasashii Uta",
     audioTruck: "https://dl.dropboxusercontent.com/s/qizzy2mis5vyoyx/RSPYasashii%20Uta.mp3?dl=0"
  },
  {
     title: "Wotamin Mata Futari Koi wo Suru",
     audioTruck: "https://dl.dropboxusercontent.com/s/h57h9tr9z74vteg/Wotamin%20Mata%20Futari%20Koi%20wo%20Suru.mp3?dl=0"
  }, 
  {
    title: "Yuka Masaki feat. KG Last Kiss",
    audioTruck: "https://dl.dropboxusercontent.com/s/ghnfxvdec36ewrl/Yuka%20Masaki%20feat.%20KG%20Last%20Kiss.mp3?dl=0"
  },
  
  {
     title: "Roa - Sunrise 【Official】",
     audioTruck: "https://docs.google.com/uc?export=download&id=1zrgZKTDBCvN2jRFp2TWVAxdmi00XPaUs"
  },
  {
     title: "Roa - Nightfall 【Official】",
     audioTruck: "https://docs.google.com/uc?export=download&id=1m3TS7zZSCCY-_yEQL8Os4eulMKZocccB"
  },
  {
     title: "Roa - Moonlight 【Official】",
     audioTruck: "https://docs.google.com/uc?export=download&id=1IkT0WKkPaHdhR0zmmB03T5EhS1J2ij4Z"
  },
  {
     title: "Waiting - John Roa [Official Lyric Video]",
     audioTruck: "https://docs.google.com/uc?export=download&id=111_eL-GOj3gLQAgums2P3okXfHEZC_8l"
  },
  {
     title: "PAGMAMAHAL - JROA x BOSX1NE",
     audioTruck: "https://docs.google.com/uc?export=download&id=1EUAgRFaKo7JHzzByDTffmbjrlakqvQ8M"
  },
  {
     title: "Nadarang -Agsunta ft. JRoa (lyrics) _ JRoa and Agsunta Version",
     audioTruck: "https://docs.google.com/uc?export=download&id=1ImWmcoMyjSALBho-pUSyiqXJSppEl1fD"
  },
  {
     title: "JRoa ft. Bosx1ne - Baliw Sayo",
     audioTruck: "https://docs.google.com/uc?export=download&id=1OStktGTrsI6K9H5A0KPwsY9Y4AGvL9X0"
  },
  {
     title: "JRoa - Habulan ft. Bryan Chong",
     audioTruck: "https://docs.google.com/uc?export=download&id=1DncVENVdGkfDIjfaxl0M0bGFVptAAPS8"
  },
  {
     title: "JRoa - Dying Inside To Hold You (Lyrics) (Cover)",
     audioTruck: "https://docs.google.com/uc?export=download&id=1DNFA4q9OrMHWWQGnT2nBaXFkUl9TyI1h"
  },


  {
     title: "JRoa - Dati ft. Skusta Clee",
     audioTruck: "https://docs.google.com/uc?export=download&id=10r7rSBCvNAgGbqtWQHzH3tFMCFBjnDLt"
  },
  {
     title: "John Roa - 'Oks Lang' Official Music Video",
     audioTruck: "https://docs.google.com/uc?export=download&id=1LPKvldf41z5DYCkHo5emvr0p1ivCUln5"
  },

  {
     title: "Crush Lyrics   Kent MNL ✘ Jroa (Cover)",
     audioTruck: "https://docs.google.com/uc?export=download&id=1vcAfjqxT6eXUWy3_btpQe2AeqF2jW-Cx"
  },
           {
            title: "Owl →「 琥珀 」(MP3_160K)",
            audioTruck: "https://docs.google.com/uc?export=download&id=1iHG6ZeFsA44WzuahcU_nH-VveJ0H3yRR"
         },
  {
      title: "Yanagi Nagi →[ Toreiru ]",
      audioTruck: "https://docs.google.com/uc?export=download&id=17ZgnHRsUwj4vzJk9uzTBn63TtAx0jLLa"
  },
  {
     title: "Alam Ko - John Roa (Lyrics)",
     audioTruck: "https://docs.google.com/uc?export=download&id=1rr7jCKc7BfCAz-j0n48thguLZmI5_YF8"
  },
  {
     title: "Skusta Clee - Kung Tayo (Official Lyric Video)",
     audioTruck: "https://docs.google.com/uc?export=download&id=1B1thgK6JigBQCFFEKKuxc-xnjsYu3fMQ"
  },
  {
     title: "JRoa - Larawan ft. Flow G",
     audioTruck: "https://docs.google.com/uc?export=download&id=1YyvFYKSAJAqYs10qtCng1_YEu6o_rl3z"
  },
  {
    title: "Hindi Na Nga - This Band",
      audioTruck: "https://docs.google.com/uc?export=download&id=17_0MKihZx-qF0s3aCdMopQkxZGCpJWz1"
  },
  {
    title: "Di ako Fuckboy - JRoa _ Emcee Rhenn ft. Agsunta(MP3_160K)",
      audioTruck: "https://docs.google.com/uc?export=download&id=1fn2xnmT4QbI6sY1mM6VqwQ0lOcZ8r7EV"
  },
  {
    title: "Jireh Lim - BUKO (Official Music Video)(MP3_320K)",
      audioTruck: "https://docs.google.com/uc?export=download&id=1fnT87t9cIasr6VjsIBBA7I2SnSEaFQpa"
  },
  {
    title: "This Band - Bakit Ganon (Lyric Video)(MP3_320K)",
      audioTruck: "https://docs.google.com/uc?export=download&id=17oenc6RajECRAaIByGehEHIHg6KzqUe5"
  },
  {
    title: "This Band - Kahit Ayaw Mo Na (Lyrics)(MP3_160K)",
      audioTruck: "https://docs.google.com/uc?export=download&id=105VFw8iDlDpekEcQ-gsUDoK61OG-xTg6"
  },
  {
    title: "This Band - Nang Iwan (Lyric Video)(MP3_320K)",
      audioTruck: "https://docs.google.com/uc?export=download&id=17e8tdihos0nAzMEb9NnSO_zt9xJN0ohI"
  },
  {
    title: "This Band - _Di Na Babalik (Lyric Video)(MP3_160K)",
      audioTruck: "https://docs.google.com/uc?export=download&id=17lSleUa8pMs3nItDGFiMA7AQ9fm1HiCW"
  },
  {
    title: "This Band _ Bitaw Na (Lyric Video)(MP3_160K)",
      audioTruck: "https://docs.google.com/uc?export=download&id=106xxFsfiJksOwWa6_eVR0xxwZLArfs45"
  },
  {
    title: "This Band - Sinungaling Ka (Lyric Video)(MP3_320K)",
      audioTruck: "https://docs.google.com/uc?export=download&id=17r6QSjpuQ32Ks94DSqJYzzMV83fsJH1i"
  },
  {
    title: "This Band x Pusakalye _ Wala Na Ang Init (Lyric Video)(MP3_160K)",
      audioTruck: "https://docs.google.com/uc?export=download&id=1-Voe8OLHcMDrnRBb84aQK1j7YRorYhjk"
  },
  {
    title:"Ligaya? - This Band",
      audioTruck: "https://docs.google.com/uc?export=download&id=17rZWuyITkCd1HxpE2hiKRx4HJkszg9re"
  },
  {
    title: "Sa Nangungulila - Sarah Geronimo & This Band",
      audioTruck: "https://docs.google.com/uc?export=download&id=104v0VPnhcqR-GZgpM3JmdjJzxUgWl58K"
  },
  {
    title: "Roa - Beautiful Days [OFFICIAL]",
      audioTruck: "https://docs.google.com/uc?export=download&id=16jJByhfI-yimD1VfQHwMPrUjjvjx0dFe"
  },{
    title: "Roa - Fly High [OFFICIAL]",
      audioTruck: "https://docs.google.com/uc?export=download&id=16rBOGq46jNCsR2Xxt7YHPLIEftUt0-gg"
  },{
    title: "Roa - Focus [OFFICIAL]",
      audioTruck: "https://docs.google.com/uc?export=download&id=176U5Fhf2iqWwhMfDFeatTT9tslXAqaoE"
  },{
    title: "Roa - Pineapple [OFFICIAL]",
      audioTruck: "https://docs.google.com/uc?export=download&id=17EzIbKaTpcDAM4r3FBKMoxB6gm54Ia_c"
  },
  {
    title: "Roa - Endless Summer [OFFICIAL]",
      audioTruck: "https://docs.google.com/uc?export=download&id=16mXnpbhJTol_H35xqgjpqhu22ROfXW85"
  },
  {
    title: "Let It Go - by Idina Menzel",
    audioTruck: "https://docs.google.com/uc?export=download&id=16wfvDIbn0wXkEoeYq5oHLCe4PH7i5Gbh"
  }
];

for(var i=0; i<music.length; i++){
  
  var li, div, span, audio, source, a;
  
  li = document.createElement('li');
  div = document.createElement('div');
  a = document.createElement('a');
  span = document.createElement('span');
  audio = document.createElement('audio');
  source = document.createElement('source');
  
  div.setAttribute('class','play-con');
  span.setAttribute('id','title');
  audio.setAttribute('controls','controls');
  audio.setAttribute('id','audiotruck');
  source.setAttribute('src','');
  a.setAttribute('href','#');
  
  span.textContent = music[i].title;
  source.src = music[i].audioTruck;
  
  document.getElementById('songs').textContent = "Available Songs: "+ music.length;
  
  audio.appendChild(source);
  div.appendChild(span);
  div.appendChild(audio);
  a.appendChild(div);
  li.appendChild(a);
  ul.appendChild(li);

}

function searchMusic() {
  
      var input, filter, ul, li, a, i, txtValue;
      
      input = document.getElementById('findmusic');
      filter = input.value.toUpperCase();
      ul = document.getElementById('music-list');
      li = ul.getElementsByTagName('li');

      for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().     indexOf(filter) > -1) {
          
          li[i].style.display = "block";
          
          
         } else {
          
          li[i].style.display = "none";
          

        }
      }
}

 
