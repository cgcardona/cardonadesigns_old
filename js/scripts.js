$(document).ready(function(){
  function soljah()
  {
    setTimeout(function(){
      $('.active').removeClass('active').addClass('secondActive');
      pappa();
      }
      ,2000
    );
  }
  function pappa()
  {
    setTimeout(function(){
      $('.secondActive').removeClass('secondActive').addClass('active');
      soljah();
      }
      ,2000
    );
  }
  setTimeout(soljah(),250);

  $('#home, #about, #work, #contact').css({'height':$(window).height()});

  $('#nav').click(function(event){

    $('.active, .secondActive').removeClass('active').removeClass('secondActive');
//    $('.awake').addClass('asleep').removeClass('awake');
    $('#' + event.target.id).addClass('active');

    if((event.target.id) == 'hm')
    {
 //     $('#home').addClass('awake').removeClass('asleep');
      $.scrollTo(0,0);
    }
    else if((event.target.id) == 'abt')
    {
  //    $('#about').addClass('awake').removeClass('asleep');
      $.scrollTo($('#about').height(),$('#about').height());
    }
    else if((event.target.id) == 'wrk')
    {
   //   $('#work').addClass('awake').removeClass('asleep');
      $.scrollTo(($('#work').height() * 2),($('#work').height() * 2));
    }
    else if((event.target.id) == 'ctct')
    {
    //  $('#contact').addClass('awake').removeClass('asleep');
      $.scrollTo(($('#contact').height() * 3),($('#contact').height() * 3));
    }
    return false;
  }); 
});
