$(function(){
  var trig = $('.show-code');
  trig.on('click', function(e){
    e.preventDefault()
    
    var $this = $(this);
    var code = $this.next('pre');
    var grid = $this.parent().parent().find('.grid');
    code.toggleClass('off-screen');
    grid.toggleClass('off-screen');
  });
});