
var app = new Vue ({
    
    el: "#app",
    data:{
          header: [
            {
                logo: "./assets/img/avadabarbers-logo-x1.png",
                shopping: "fas fa-shopping-cart",
                title: "Barber Shop",
                subtitle: "The pinnacle of male grooming",
                button: "learn more",
                jumbo: "./assets/img/avadabarbers_hero_focalmirror-600x825.png",
                folder: "fas fa-folder-plus",
                demo: "Demos",
                sale: "On Sale",
                dollar: "$",
                price: "39"
            }
        ],

             socials: ['fab fa-facebook-square', 'fab fa-twitter-square', 'fab fa-instagram', 'fab fa-youtube'],
        shop:[
            {
                nome: "shop",
                poster: "./assets/img/avadabarbers_footer_shop_image-300x234.png",
                button: "shop our range now"
            }
        ],
        reservation:[
            {
                nome: "reservation",
                poster: "./assets/img/avadabarbers_footer_appointment_image-400x312.png",
                button: "book your appointment"
            }
        ],
        contact:[
            {
                nome: "contact",
                poster:"./assets/img/avadabarbers-logo-x1.png",
                title: "Avada Barbers",
                address: "123 New York City",
                city: "New York",
                email: "info@yourwebsite.com",
                phone: "+1(555)555-1212"
            }
        ],
        copyright: "@Copyright 2012-2020 | Avada Therme by ThemeFusion | All Rights Reserved | Powered by Francesco Olivotti",
        menuDropdown: ["Home", "Foto", "Prezzi", "Chi Siamo"],
        drop: false
    },
      methods: {
    scroll() {
      window.scrollTo(0, 0);
    },
  },
})