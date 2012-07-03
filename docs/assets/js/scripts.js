$(document).ready(function(){
  $('.nav li').click(function(){
    $('.nav .active').removeClass('active').addClass('inactive');
    console.log($(this));
    $(this).addClass('active').removeClass('inactive').find('.icon').addClass('icon-white');
    $.get('includes/' + $(this).children('a').attr('id') + '.php',function(data){
      $('#main-content').html(data);
    });
    return false;
  });
  $('#top .btn').click(function(){
    $.get('includes/nav_work.php',function(data){
      $('.nav .active').removeClass('active').addClass('inactive');
      $('#nav_work').parents('li').addClass('active').find('.icon').addClass('icon-white');
      $('#main-content').html(data);
    });
    return false
  });
});
