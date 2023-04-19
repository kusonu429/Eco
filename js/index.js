


// ===== toggle menu starts ===== //

let icon_bar = document.querySelector('#hamburger') 

let active_menu = document.querySelector('.menu-bar')


icon_bar.addEventListener('click' , function(){

  active_menu.classList.toggle('active-menu-bar')
})


// ===== change product img starts ===== //

function clickimg(smallimg){
  let fullimg = document.querySelector("#active-img-box")

  fullimg.src = smallimg.src
}


// ====== hover menu ====== //
let  user_account = document.querySelector('.user-account');
let hover_menu = document.querySelector('.user-menu');
let user_acount_details = document.querySelector('.user-acount-details')


user_account.addEventListener('click' , function(){

  hover_menu.classList.toggle('active-user-menu')
  user_acount_details.classList.toggle('active-user-acount-details')


})











// ===== slider starts here  ===== //


const next = '<i class="fas fa-thin fa-arrow-right"></i>'
const prev = '<i class="fas fa-light fa-arrow-left"></i>'

// ===== owlCarousel-1 ===== //
 $('.owl-carousel-one').owlCarousel({
loop:true, 
margin:30,
autoplay:true, 
dots:false,
nav:true,
navText:[
prev,
next     
],
responsive:{
0:{
      items:1
  },

575:{
      items:2
  },

  767:{
      items:3
  },
  991:{
      items:4
  },
  1200:{
      items:4
  }
}
})


// ===== owlCarousel-2 ===== //

$('.owl-carousel-two').owlCarousel({
  loop:true, 
  autoplay:true, 
  margin:30,
  nav:true,
  navText:[
    prev,
    next      
    ],
  responsive:{ 
      0:{
          items:1 
      },
      600:{
          items:3 
      },
      1200:{
          items:6 
      }
  }
})

// ===== owlCarousel-3 ===== //

$('.owl-carousel-three').owlCarousel({
  loop:true, 
  autoplay:true, 
  margin:30,
  nav:true,
  navText:[
    prev,
    next      
    ],
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3 
      },
      1200:{
          items:2  
      }
  }
})

// ===== owlCarousel-4 ===== //
$('.owl-carousel-four').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  navText:[
    prev,
    next     
    ],
  dots:false,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
        
      },
      600:{
          items:3,
         
      },
      1000:{
          items:4,
        
         
      }
  }
})






// ======= swiperjs slider starts here 

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal', 
    loop: true,
    autoplay:true,    
   
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next', 
      prevEl: '.swiper-button-prev', 
    },
  
    // And if we need scrollbar 
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });



