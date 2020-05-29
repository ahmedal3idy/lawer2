<template>
  <section class="example-3d col-lg-12" @mousemove="datashow">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide
        v-for="slide in slides"
        :key="slide.name"
        :class="slide.name"
      >
        <h1>{{ slide.define }}</h1>
      </swiper-slide>
    </swiper>
  </section>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "slider",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      x: 0,
      y: 0,

      slides: [
        {
          name: " slide-1",
          define: "عقد العمل"
        },
        {
          name: "  slide-2",
          define: "الإقرارات"
        },
        {
          name: "slide-3",
          define: "الوكالات"
        },
        {
          name: "slide-4",
          define: "انذارات "
        },
        {
          name: " slide-5",
          define: "بيع المحل التجارى"
        },

        {
          name: "slide-6",
          define: "عقد الشركات"
        }
      ],

      swiperOption: {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 40,
          stretch: 0,
          depth: 150,
          modifier: 4,
          slideShadows: true
        },
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },

  methods: {
    datashow() {
      var d = document.getElementsByClassName("swiper-slide-active")[0]
        .classList[1];
      console.log(d);

      this.$emit("datashow", d);
    },
    hello() {
      this.Swiper(".swiper-container", {
        // other parameters
        on: {
          click: function() {
            /* do something */
            console.log("wewe");
          }
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.example-3d {
  width: 100%;
  height: 334px;
  padding-top: 7px;
  padding-bottom: 24px;

  .swiper {
    height: 100%;
    width: 100%;
    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 300px;
      height: 300px;
      text-align: center;
      font-weight: bold;

      background-color: #2c8dfb;
      background-position: center;
      background-size: cover;
      color: white;
    }
    .swiper-pagination {
      /deep/ .swiper-pagination-bullet.swiper-pagination-bullet-active {
        background-color: black;
      }
    }

    @for $i from 1 through 6 {
      .slide-#{$i} {
        background-image: url("../Contracts/image/img#{$i}.jpg");
        background-repeat: no-repeat;
        background-size: 100% 80%;
        background-position-y: top;
        background-color: white;
        align-items: center;
      }
    }

    h1 {
      font-size: 38px;

      position: absolute;
      top: 222px;
      color: rgb(29, 28, 28);
    }
  }
}
</style>
