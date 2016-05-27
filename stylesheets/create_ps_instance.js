		/*
		 * IMPORTANT!!!
		 * REMEMBER TO ADD  rel="external"  to your anchor tags. 
		 * If you don't this will mess with how jQuery Mobile works
		 */
		
		(function(window, $, PhotoSwipe){
			
			$(document).ready(function(){
				
				
				$('div.gallery-page').live('pageshow', function(e){
						
					// See if there is a PhotoSwipe instance associated with the page.
					// For this demo I've assumed one page has one instance and the ID 
					// for each instance is the same as the page ID.
					//
					// Of course, it's up to you how many instances per page and what
					// ID naming convention you use!
					var 
						currentPage = $(e.target),
						photoSwipeInstanceId = currentPage.attr('id'),
						photoSwipeInstance = PhotoSwipe.getInstance(photoSwipeInstanceId)
						options = {};
					
					if (typeof photoSwipeInstance === "undefined" || photoSwipeInstance === null) {
						photoSwipeInstance = $("ul.gallery a", e.target).photoSwipe(options, photoSwipeInstanceId);
					}
					
					return true;
					
				})
					
			});
		
		}(window, window.jQuery, window.Code.PhotoSwipe));
		
