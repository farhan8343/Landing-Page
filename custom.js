jQuery(document).ready(function(){

    jQuery(".close").click(function(e){
        e.preventDefault();
        jQuery(".video-wrapper").addClass('hide');
        jQuery("#video").get(0).pause();
        
    });
    jQuery(".video").click(function(){
        var src = jQuery(this).data('src');
        jQuery('.video-wrapper .video-inner').html("<video id='video' controls><source src=" + src + " type='video/mp4'/></video>");
        jQuery("#video").get(0).play();
        jQuery(".video-wrapper").removeClass('hide');
        
    });

    jQuery(".ta-carousal").slick({
        arrows: true,
        dots: false,
        autoplay: true,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
              }
            }
        ]
    });

    jQuery('.single-element i').click(function(){
        jQuery(".single-element").removeClass('active');
        jQuery(this).parents(".single-element").addClass('active');
    });

    
});