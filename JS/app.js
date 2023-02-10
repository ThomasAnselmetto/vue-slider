// artendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.

// Bonus:
// 1- al click su una thumb, visualizzare in grande l'immagine corrispondente
// 2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// 3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
// Consigli del giorno:
// - regola d'oro: riciclare ovunque possibile! Questo significa che per la parte di markup possiamo recuperare html e css dell'esercizio svolto qualche giorno fa: è già tutto pronto!
// - il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, l'esercizio si riduce a poche righe ;)

// console.log("ecco qui", Vue);

const myApp = Vue.createApp({
  data() {
    return {
      movie: {
        title: "The Lord Of The Rings",
        category: "fantasy forse e' riduttivo",
        length: 6720,
        images: [
          "./IMG/LOTR.01.jpg",
          "./IMG/LOTR.02.avif",
          "./IMG/LOTR.03.webp",
          "./IMG/LOTR.04.webp",
          "./IMG/LOTR.05.jpg",
        ],

        thumbAttiva: 0,
      },
    };
  },
  methods: {
    prevImage() {
      if (this.movie.thumbAttiva - 1 < 0) {
        this.movie.thumbAttiva = this.movie.images.length - 1;
      } else {
        this.movie.thumbAttiva--;
      }
    },
    nextImage() {
      if (this.movie.thumbAttiva + 1 > this.movie.images.length - 1) {
        this.movie.thumbAttiva = 0;
      } else {
        this.movie.thumbAttiva++;
      }
    },
  },
});

myApp.mount("#the-carousel");
