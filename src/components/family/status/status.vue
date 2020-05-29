<template>
  <div class="model">
    <div
      v-for="stata in status"
      :key="stata.name"
      :class="stata.name"
      @click="datashow"
    >
      <button :class="stata.button">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {{ stata.define }}
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: status,
  data() {
    return {
      status: [
        {
          name: "status2  col-sm-12 col-md-6 ",
          button: "maried col-lg-12",
          define: "الزواج",
        },
        {
          name: "status1  col-sm-12 col-md-6  ",
          button: "devorce col-lg-12",
          define: "الطلاق",
        },
      ],
    };
  },
  methods: {
    datashow() {
      var a = event.target.classList[0];
      if (a == "maried") {
        this.status[0].button = "maried col-lg-12 effect";
        this.status[1].button = "devorce col-lg-12";
      } else if (a == "devorce") {
        this.status[0].button = "maried col-lg-12 ";
        this.status[1].button = "devorce col-lg-12 effect";
      }

      this.$emit("datashow", a);
    },
  },
};
</script>
<style lang="scss" scoped>
.model {
  height: 200px;
  /*meeeeeeedai*/
  @media (min-width: 992px) {
    width: 92%;
  }
  @media (max-width: 767px) {
    height: 330px;
  }
  /*eeeeend meeeeeeedai*/
}


@for $i from 1 through 2 {
  .status#{$i} {
    float: right;
    button {
      height: 94px;
      width: 294px;
      border: none;
      background: transparent;
      padding: 0;
      position: relative;
      color: #1edcda;
      font-size: 57px;
      transition: 0.5s;
      overflow: hidden;
      -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
      /*meeeeeeeeeedaiiiiii*/
      @media (max-width: 767px) {
        margin-bottom: 74px;
      }
      @media (min-width: 768px) and (max-width: 992px) {
        width: 241px;
      }
      /*eeeeeenddddddd meeeeeeeeeedaiiiiii*/
    }
    .effect {
  background: #1edcda;
  color: #050801;
  box-shadow: 0 0 5px #1edcda, 0 0 25px #1edcda, 0 0 50px #1edcda,
    0 0 75px #1edcda;
}
  }
}


.status1 {
  float: left;
}

.status2 {
  float: right;
}
span {
  position: absolute;
  display: block;
  clear: right;
  &:nth-child(1) {
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
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
    width: 2px;
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
    height: 2px;
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
    width: 2px;
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
    height: 2px;
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
    width: 2px;
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
</style>
