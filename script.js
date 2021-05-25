$(function(){

  $( 'input[name="ghead"]:radio' ).change( function() {

     var radioval = $(this).val();
     $("#head").attr('src', 'images/'+radioval+'.png');

  });

  $( 'input[name="gneck"]:radio' ).change( function() {

     var radioval = $(this).val();
     $("#neck").attr('src', 'images/'+radioval+'.png');

  });

  $( 'input[name="gbody"]:radio' ).change( function() {

     var radioval = $(this).val();
     $("#body").attr('src', 'images/'+radioval+'.png');

  });

});
