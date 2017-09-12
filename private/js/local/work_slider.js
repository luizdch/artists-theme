jQuery(function() {

   $('.workGrid .cover').on('click', function(event) {
      event.preventDefault()
      if($(this).css('opacity') === '1') {
         $('.workSection').addClass('js-slide')
         $('.completeWorkContainer').addClass('js-show')
         $('.completeWorkContainer .work').eq($(this).parent().index()).addClass('js-show')
      }
   })

   $('.completeWorkContainer .backIcon').on('click', function() {
      $('.workSection').removeClass('js-slide')
      $('.completeWorkContainer').removeClass('js-show')
      $('.completeWorkContainer .work.js-show').removeClass('js-show')
   })

})
