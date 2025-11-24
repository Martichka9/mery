// $(document).ready(function(){
//     $('.center').slick({
//       autoplay: true,
//       centerMode: true,
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       centerMode: true,
//       focusOnSelect: false,
//       mobileFirst: true,
//       swipeToSlide: true,
//       variableWidth: true,
//       arrows: false,
//       dots: true,
//       /*responsive:[
//         {
//           breakpoint:768,
//           settings:{
//             arrows:false,
//             centerMode: true,
//             slidesToShow:3,
//             mobileFirst: true,
//           }
//         }
//       ]*/
//     });
//   });
  
//   // Get the modal
//   $('.img-small').each(function(index){
//     $(this).on('click',function(){
//       $('.modal-content').attr('src', $(this).attr('src'));
//       $('.modal').css('display','flex');
//       $('.modal').css('left','25%'); /*fix margin*/
//     });
//   })
//   $('span.close').on('click',function(){
//       $('.modal').css('display','none');
//   })
  
//Initialize Swiper 
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });