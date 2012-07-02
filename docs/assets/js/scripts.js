$(document).ready(function(){
  $('.nav li').click(function(){
    $('.nav .active').removeClass('active').find('.icon').removeClass('icon-white');
    $(this).addClass('active').find('.icon').addClass('icon-white');
    $.get('includes/' + $(this).children('a').attr('id') + '.php',function(data){
      $('#main-content').html(data);
    });
    return false;
  });
  $('#top .btn').click(function(){
    $.get('includes/nav_work.php',function(data){
      $('.nav .active').removeClass('active').find('.icon').removeClass('icon-white');
      $('#nav_work').parents('li').addClass('active').find('.icon').addClass('icon-white');
      $('#main-content').html(data);
    });
    return false
  });
});
