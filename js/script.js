$(function() {        

    // Check distance to top and display back-to-top.
    $( window ).scroll( function() {
        if ( $( this ).scrollTop() > 600 ) {
            $( '.back-to-top' ).addClass( 'show-back-to-top' );
        
        } else {
            $( '.back-to-top' ).removeClass( 'show-back-to-top' );
        
        }
    });
    
    // Click event to scroll to top.
    $( '.back-to-top' ).click( function() {
        $( 'html, body' ).animate( { scrollTop : 0 }, 600 );
        return false;
    });
});

$(document).ready(function(){
    $('.carousel').slick({
        infinite: true,
        slidesToShow: 3,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 2000,
        slidesToScroll: 1,
        dots:false,
        accessibility:true,
        arrows:false,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerPadding: '40px',
                slidesToShow: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerPadding: '10px',
                slidesToShow: 1
              }
            }
          ]
  
    });
    $('.ads').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots:true,
        accessibility:true,
        arrows:false,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerPadding: '40px',
                slidesToShow: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ]
  
    });
    $('.variable-width').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:false,
        accessibility:true,
        arrows:true,
        
       
  
    });
  });
  
  $(document).on('click','.btn-latest',function(){
      $('.btn-latest').addClass('btn-active');
      $('.btn-video').removeClass('btn-active');
        $('.videos').hide();
      $('.latests').show();
  })
  $(document).on('click','.btn-video',function(){
    $('.btn-video').addClass('btn-active');
    $('.btn-latest').removeClass('btn-active');
    $('.latests').hide();
    $('.videos').show();
})