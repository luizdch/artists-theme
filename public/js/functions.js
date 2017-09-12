'use strict';
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

jQuery(function() {

   var $personPages = $('.personPage')
   var $companiesButtons = $('.companiesLogoContainer button')
   var currentActivePageIndex = 0

   $('.flipLeft').on('click', function() {
      if(currentActivePageIndex === 0) currentActivePageIndex = $personPages.length - 1
      else currentActivePageIndex -= 1
      $personPages.removeClass('js-active')
      $companiesButtons.removeClass('js-selected')
      $personPages.eq(currentActivePageIndex).addClass('js-active')
      $companiesButtons.eq(currentActivePageIndex).addClass('js-selected')
   })
   $('.flipRight').on('click', function() {
      if(currentActivePageIndex === $personPages.length - 1) currentActivePageIndex = 0
      else currentActivePageIndex += 1
      $personPages.removeClass('js-active')
      $companiesButtons.removeClass('js-selected')
      $personPages.eq(currentActivePageIndex).addClass('js-active')
      $companiesButtons.eq(currentActivePageIndex).addClass('js-selected')
   })
   $companiesButtons.on('click', function() {
      currentActivePageIndex = $(this).index()
      $personPages.removeClass('js-active')
      $companiesButtons.removeClass('js-selected')
      $personPages.eq($(this).index()).addClass('js-active')
      $(this).addClass('js-selected')
   })

})

