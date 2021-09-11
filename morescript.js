var audiotruck = document.getElementById('audiotruck');

if(audiotruck.duration > 0 && !audiotruck.paused){
  $('.loader').fadeOut(1000);
  $('.mes').fadeOut(1000);
  $('.music-display').fadeIn(1000);
}else{
  $('.loader').fadeIn(1000);
  $('.mes').fadeIn(1000);
  
}