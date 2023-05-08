const app = Vue.createApp({
    data(){
        return {
            activeIndex: 0,
            slides : [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                },
            ]
        }
    },
    methods: {
        showNextSlide () {
            this.activeIndex++

        if (this.activeIndex >= this.slides.length) {
        this.activeIndex = 0;
        }},

        showPrevSlide () {
            this.activeIndex--

        if (this.activeIndex < 0) {
            this.activeIndex = this.slides.length - 1;
        }},

        setActiveIndex(index) { 
            this.activeIndex = index;
        },
        
        

    }
});

app.mount(`#app`)


















// // SCORRIMENTO DEL CAROSELLO
// let BtnNormal = document.querySelector(".normal")
// BtnNormal.addEventListener("click",function(){
//     BtnNormal = setInterval(() => {
//         listHighlighted[activeIndex].classList.remove('active');
//         listThumbs[activeIndex].classList.remove('active');
//         titleHighlighted[activeIndex].classList.remove('active');
//         textHighlighted[activeIndex].classList.remove('active');
//         // decido il nuovo valore di active index
//         activeIndex++;
//         if (activeIndex >= listHighlighted.length) {
//             activeIndex = 0;
//         }
//         // alla nuova immagine attiva aggiungo la classe active
//         listHighlighted[activeIndex].classList.add('active');
//         listThumbs[activeIndex].classList.add('active');
//         titleHighlighted[activeIndex].classList.add('active');
//         textHighlighted[activeIndex].classList.add('active');
//     }, 2000);
//     BtnReverse.classList.add("deactivate")
//     document.querySelector(".choice-order").classList.add("deactivate")
//     document.querySelector(".your-choice").classList.add("activate")
//     document.querySelector(".normal").disabled = true
// }
// )
    


// let BtnReverse = document.querySelector(".reverse")
// BtnReverse.addEventListener("click",function(){
//     BtnReverse = setInterval(() => {
//         listHighlighted[activeIndex].classList.remove('active');
//         listThumbs[activeIndex].classList.remove('active');
//         titleHighlighted[activeIndex].classList.remove('active');
//         textHighlighted[activeIndex].classList.remove('active');
//         // decido il nuovo valore di active index
//         activeIndex--;
//         if (activeIndex < 0) {
//             activeIndex = listHighlighted.length - 1
//         }
//         // alla nuova immagine attiva aggiungo la classe active
//         listHighlighted[activeIndex].classList.add('active');
//         listThumbs[activeIndex].classList.add('active');
//         titleHighlighted[activeIndex].classList.add('active');
//         textHighlighted[activeIndex].classList.add('active');
//     }, 2000);
//     BtnNormal.classList.add("deactivate")
//     document.querySelector(".choice-order").classList.add("deactivate")
//     document.querySelector(".your-choice").classList.add("activate")
//     document.querySelector(".reverse").disabled = true

// })