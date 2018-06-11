$(document).ready(function($) {

	$('.input_phone input').mask('+7 (000) 000-00-00');

	$('.catalog__list').slick({
		// slidesPerRow: 3,
		slidesToShow: 6,
		asNavFor: $('.products'),
		focusOnSelect: true
	})
	$('.product__nav').slick({
		slidesToShow: 4,
		focusOnSelect: true,
		asNavFor: $('.product__tabs-wrap'),
		responsive: [{
			breakpoint: 1010,
			settings: {
				slidesToShow: 2
			}}, {
			breakpoint: 790,
			settings: {
				slidesToShow: 1
			}
		}]
	})

	$('.product__tabs-wrap').slick({
		slidesToShow: 1,
		asNavFor: $('.product__nav'),
		fade: true,
		arrows: false
	})

	$('.tabs').each(function(index, el) {
		$(this).tabs({
			collapsible: true
		});
	});

	

	$('.products').slick({
		arrows: false,
		swipe: false,
		asNavFor: $('.product__nav'),
	})

	$('.catalog__item').click(function(){
    var _href = $('.product__title');
    $('html, body').animate({scrollTop: $(_href).offset().top-40+'px'}, 500);
  });

  $('.brands__wrap').slick();

  function valueElementForm(nameElement) {
  	var newNameElement = '.' + nameElement;
  		element = $(newNameElement);
  	element.each(function(index, el) {
  		var elementInput = $(this).find($('input')),
  			elementLabel = $(this).find($('label')),
  			elementValue = index + 1;
  		elementInput.attr('id', nameElement + '-' + elementValue);
  		elementLabel.attr('for', nameElement + '-' + elementValue);
  	});
  	
  }
  valueElementForm('checkbox');
  valueElementForm('radio');


  $('.certificates__list').slick({
  	slidesToShow: 3,
  	responsive: [{
			breakpoint: 790,
			settings: {
				slidesToShow: 1
			}
		}]
  })
  $('form').submit(function() {
		$.ajax({
		    type: "POST",
		    url: "order.php",
		    data: $(this).serialize()
		}).done(function() {
		    document.location.href = "thanks.html"
		});
		return false;
	});


  $('.product__img').slick();

  $('.tabs__nav a').click(function(event) {
  	$('.product__img').slick('reinit');
  });
});
