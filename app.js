let swiperText = new Swiper( '.text', {

    spaceBetween: 16,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },  
} )

let swiperImages = new Swiper( '.images', {
  effect: "fade",
} )

function sincronizarImagem() {
  let index = swiperText.activeIndex
  swiperImages.slideTo( index )
}

function sincronizarTexto() {
  let index = swiperImages.activeIndex
  swiperText.slideTo( index )
}

swiperText.on('slideChange', sincronizarImagem );
swiperImages.on('slideChange', sincronizarTexto );