<template>
  <div class="demo">
    <section class="col-lg-12 col-md-12 sec1">
      <button
        v-for="btn in btnsup"
        :key="btn.stlye"
        :class="btn.style"
        @click="datashow"
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {{ btn.name }}
      </button>
    </section>
    <section class="col-lg-12 col-md-12 sec2">
      <button
        v-for="btn in btnsdown"
        :key="btn.stlye"
        :class="btn.style"
        @click="datashow"
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {{ btn.name }}
      </button>
    </section>
  </div>
</template>
<script>
/*import $ from "jquery";*/
export default {
  name: "mangecourt",

  data() {
    return {
      btnsup: [
        {
          name: "ادارة القضايا المدنية",
          style: "btn1 col-lg-4 col-xs-6",
        },
        {
          name: "ادارة قضايا الاسرة",
          style: "btn2 col-lg-4 col-xs-6",
        },
        {
          name: "ادارة تنفيذ القضايا",
          style: "btn3  col-lg-4 col-xs-6",
        },
      ],
      btnsdown: [
        {
          name: "ادارة الشؤون المالية",
          style: "btn4 col-lg-6 col-xs-6",
        },
        {
          name: "ادارة خدمات القاضايا",
          style: "btn5 col-lg-6 col-xs-12",
        },
      ],
    };
  },
  methods: {
    datashow() {
      var a = event.target.classList[0];
      if (a == "btn1") {
        this.btnsup[0].style = "btn1 col-lg-4 col-xs-6 btn-effect";
        this.btnsup[1].style = "btn2 col-lg-4 col-xs-6";
        this.btnsup[2].style = "btn3 col-lg-4 col-xs-6";
        this.btnsdown[0].style = "btn4 col-lg-6 col-xs-6";
        this.btnsdown[1].style = "btn5 col-lg-6 col-xs-12";
      } else if (a == "btn2") {
        this.btnsup[0].style = "btn1 col-lg-4 col-xs-6";
        this.btnsup[1].style = "btn2 col-lg-4 col-xs-6 btn-effect";
        this.btnsup[2].style = "btn3 col-lg-4 col-xs-6";
        this.btnsdown[0].style = "btn4 col-lg-6 col-xs-6";
        this.btnsdown[1].style = "btn5 col-lg-6 col-xs-12";
      } else if (a == "btn3") {
        this.btnsup[0].style = "btn1 col-lg-4 col-xs-6";
        this.btnsup[1].style = "btn2 col-lg-4 col-xs-6";
        this.btnsup[2].style = "btn3 col-lg-4 col-xs-6  btn-effect";
        this.btnsdown[0].style = "btn4 col-lg-6 col-xs-6";
        this.btnsdown[1].style = "btn5 col-lg-6 col-xs-12";
      } else if (a == "btn4") {
        this.btnsup[0].style = "btn1 col-lg-4 col-xs-6";
        this.btnsup[1].style = "btn2 col-lg-4 col-xs-6";
        this.btnsup[2].style = "btn3 col-lg-4 col-xs-6";
        this.btnsdown[0].style = "btn4 col-lg-6 col-xs-6 btn-effect";
        this.btnsdown[1].style = "btn5 col-lg-6 col-xs-12";
      } else if (a == "btn5") {
        this.btnsup[0].style = "btn1 col-lg-4 col-xs-6";
        this.btnsup[1].style = "btn2 col-lg-4 col-xs-6";
        this.btnsup[2].style = "btn3 col-lg-4 col-xs-6";
        this.btnsdown[0].style = "btn4 col-lg-6 col-xs-6";
        this.btnsdown[1].style = "btn5 col-lg-6 col-xs-12 btn-effect";
      }

      this.$emit("datashow", a);
    },
  },
};
</script>
<style lang="scss" scoped>
.demo {
  height: 300px;
  direction: rtl;
  .sec1,
  .sec2 {
    height: 156px;
    position: relative;
    top: 0px;
  }
}

@for $i from 1 through 5 {
  .btn#{$i} {
    height: 142px;
    width: 142px;
    font-size: 24px;
    border: none;
    position: relative;
    background: transparent;
    transition: 0.5s;
    color: #1edcda;

    transform: rotateZ(-47deg);
    border: 1px solid #1edcda;
    overflow: hidden;
    /*meeeeeeedai*/

    @media (max-width: 767px) {
      height: 100px;
      width: 100px;
      font-size: 22px;
      top: 11px;
    }
    /*eeeeend meeeeeeedai*/
  }
}
.btn-effect {
  transform: scale(1.1);
  z-index: 1000;
  background: #1edcda;
  color: #050801;
  box-shadow: 0 0 5px #1edcda, 0 0 25px #1edcda, 0 0 50px #1edcda,
    0 0 75px #1edcda;
}
.btn1 {
  top: 3px;
  right: -61px;
}

.btn2 {
  top: 3px;
  right: 8px;
  /*meeeeeeedai*/
  @media (max-width: 767px) {
    top: 21px;
    right: -3px;
  }
  /*eeeeend meeeeeeedai*/
}
.btn3 {
  top: 3px;
  right: 76px;
  /*meeeeeeedai*/
  @media (max-width: 767px) {
    top: 27px;
    right: 53px;
  }
  /*eeeeend meeeeeeedai*/
}

.btn4 {
  top: -27px;
  right: -27px;
  /*meeeeeeedai*/

  @media (max-width: 767px) {
    top: -57px;
    right: -35px;
  }
  /*eeeeend meeeeeeedai*/
}
.btn5 {
  top: -21px;
  right: 42px;
  /*meeeeeeedai*/
  @media (max-width: 767px) {
    top: -52px;
    right: 23px;
  }
  /*eeeeend meeeeeeedai*/
}
span {
  position: absolute;
  display: block;
  clear: right;
  &:nth-child(1) {
    top: 0;
    left: 0;
    width: 100%;
    height: 7px;
    overflow: hidden;
    background-image: linear-gradient(90deg, transparent, #06c3d0);
    animation: animate1 1s linear infinite;
  }
  @keyframes animate1 {
    0% {
      left: -100%;
    }
    50%,
    100% {
      left: 100%;
    }
  }
  &:nth-child(2) {
    top: -100%;
    right: 0;
    width: 7px;
    height: 100%;
    overflow: hidden;
    background-image: linear-gradient(180deg, transparent, #06c3d0);
    animation: animate2 0.5s linear infinite;
    animation-delay: 0.25s;
  }
  @keyframes animate2 {
    0% {
      top: -100%;
    }

    50%,
    100% {
      top: 100%;
    }
  }
  &:nth-child(1) {
    top: 0;
    left: 0;
    width: 100%;
    height: 7px;
    overflow: hidden;
    background-image: linear-gradient(90deg, transparent, #06c3d0);
    animation: animate1 1s linear infinite;
  }
  @keyframes animate1 {
    0% {
      left: -100%;
    }
    50%,
    100% {
      left: 100%;
    }
  }
  &:nth-child(2) {
    top: -100%;
    right: 0;
    width: 7px;
    height: 100%;
    overflow: hidden;
    background-image: linear-gradient(180deg, transparent, #06c3d0);
    animation: animate2 1s linear infinite;
    animation-delay: 0.25s;
  }
  @keyframes animate2 {
    0% {
      top: -100%;
    }

    50%,
    100% {
      top: 100%;
    }
  }
  &:nth-child(3) {
    bottom: 0;
    right: 0;
    width: 100%;
    height: 7px;
    overflow: hidden;
    background-image: linear-gradient(90deg, transparent, #06c3d0);
    animation: animate3 1s linear infinite;
    animation-delay: 0.5s;
  }
  @keyframes animate3 {
    0% {
      right: -100%;
    }
    50%,
    100% {
      right: 100%;
    }
  }
  &:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 7px;
    height: 100%;
    overflow: hidden;
    background-image: linear-gradient(180deg, transparent, #06c3d0);
    animation: animate4 1s linear infinite;
    animation-delay: 0.75s;
  }
  @keyframes animate4 {
    0% {
      bottom: -100%;
    }

    50%,
    100% {
      bottom: 100%;
    }
  }
}
@media (max-width: 403px) {
  .btn1 {
    right: -11px;
    top: -38px;
  }
  .btn3 {
    right: 6px;
    top: -19px;
  }
}
</style>
