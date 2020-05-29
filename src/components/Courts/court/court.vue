<template>
  <div>
    <section class=" court1 col-xs-12 col-md-6 col-lg-3">
      <span :class="courtsbranch[0].span[0]"></span>
      <span :class="courtsbranch[0].span[1]"></span>
      <span :class="courtsbranch[0].span[2]"></span>
      <h3>المحكمة التنفذية</h3>
      <button class="btn1 btn1court1 " :class="btnactive1" @click="datashow">
        الحجوزات والبيع
      </button>
      <button class="btn2 btn2court1" :class="btnactive2" @click="datashow">
        اشكالات
      </button>
    </section>
    <section
      v-for="court in courtsbranch"
      :key="court.style"
      :class="court.style"
    >
      <span :class="court.span[0]"> </span>
      <span :class="court.span[1]"> </span>
      <span :class="court.span[2]"> </span>
      <h3>{{ court.address }}</h3>
      <button :class="court.btnname" @click="datashow">
        {{ court.branch }}
      </button>
    </section>
  </div>
</template>
<script>
export default {
  name: "court",
  data() {
    return {
      btnactive1: "",
      btnactive2: "",

      courtsbranch: [
        {
          address: "المحكمة المدنية",
          branch: "الدعاوى",
          style: "court2 col-xs-12 col-md-6 col-lg-3 ",
          span: ["span1", "span2", "span3"],
          btnname: "btn3 ",
        },
        {
          address: "محكمة الاحول الشخصية",
          branch: "الدعاوى",
          style: "court3 col-xs-12 col-md-6 col-lg-3 ",
          span: ["span1  ", "span2", "span3"],
          btnname: "btn4",
        },
        {
          address: "المحكة الجزئية ",
          branch: "اسئلة عامة",
          style: "court4  col-xs-12 col-md-6 col-lg-3 ",
          span: ["span1 ", "span2", "span3"],
          btnname: "btn5",
        },
      ],
    };
  },
  methods: {
    datashow() {
      var a = event.target.classList[0];

      if (a == "btn1") {
        this.btnactive1 = "activebutton";
        this.btnactive2 = "";
        this.courtsbranch[0].btnname = "btn3";
        this.courtsbranch[1].btnname = "btn4";
        this.courtsbranch[2].btnname = "btn5";
      } else if (a == "btn2") {
        this.btnactive1 = "";
        this.btnactive2 = "activebutton";
        this.courtsbranch[0].btnname = "btn3";
        this.courtsbranch[1].btnname = "btn4";
        this.courtsbranch[2].btnname = "btn5";
      } else if (a == "btn3") {
        this.btnactive1 = "";
        this.btnactive2 = "";
        this.courtsbranch[0].btnname = "btn3  activebutton";
        this.courtsbranch[1].btnname = "btn4";
        this.courtsbranch[2].btnname = "btn5";
      } else if (a == "btn4") {
        this.btnactive1 = "";
        this.btnactive2 = "";
        this.courtsbranch[0].btnname = "btn3";
        this.courtsbranch[1].btnname = "btn4  activebutton";
        this.courtsbranch[2].btnname = "btn5";
      } else if (a == "btn5") {
        this.btnactive1 = "";
        this.btnactive2 = "";
        this.courtsbranch[0].btnname = "btn3";
        this.courtsbranch[1].btnname = "btn4";
        this.courtsbranch[2].btnname = "btn5  activebutton";
      }
      this.$emit("datashow", a);
    },
  },
};
</script>
<style lang="scss" scoped>
@for $i from 1 through 4 {
  .court#{$i} {
    padding: 0;

    height: 142px;
    box-sizing: border-box;
    position: relative;
    top: 144px;

    /*meeeeeeeeeedaiiiiii*/

    @media (min-width: 605px) and (max-width: 980px) {
      width: 258px;
      float: left;
      top: 77px;
      margin: 0;
    }
    @media (min-width: 767px) and (max-width: 980px) {
      width: 37%;
    }

    @media (min-width: 992px) {
      max-width: 19%;
    }

    /*eeeeeenddddddd meeeeeeeeeedaiiiiii*/
    h3 {
      height: 22%;
      font-size: 26px;
      background: #c1c1c1;
      text-align: center;
      margin: 0 auto;
      padding-top: 5px;
      border-radius: 6px;
      color: black;
    }

    button {
      border: none;
      background-color: #1ddcda4a;
      padding: 0;
      position: relative;
      color: #1edcda;
      -webkit-transition: 0.5s;
      transition: 0.2s;
      overflow: hidden;
    }
    .activebutton {
      background-color: #1edcda;
      color: #050801;
      box-shadow: 0 0 5px #1edcda, 0 0 25px #1edcda, 0 0 50px #1edcda,
        0 0 75px #1edcda;
    }
    .span1 {
      background: url("../image/logo.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;

      position: absolute;
      top: -101px;
      right: -8px;
      height: 102px;
    }
    .span2 {
      background: url("../image/logo2.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      width: 54px;
      height: 81%;
      position: absolute;
      top: 31px;
      left: 0px;
    }
    .span3 {
      background: url("../image/logo2.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      width: 54px;
      height: 81%;
      position: absolute;
      top: 31px;
      right: 0px;
    }
  }
}
.court1 {
  h3 {
    height: 16%;
  }
  button {
    height: 46px;
  }
}
/*mediiiiiiiiiiiiiiiiia*/

@media (max-width: 605px) {
  button {
    width: 61%;
    border-radius: 25px;
    font-size: 35px;
    height: 44px;
    top: 18px;
  }
  .court1,
  .court2 {
    clear: right;
    margin: 0 auto;

    width: 240px;

    h3 {
      height: 32px;
    }
  }
  .court1 {
    height: 26%;
    top: 70px;
    .btn1court1 {
      height: 42px;
      font-size: 24px;
      top: 14px;
    }
    .btn2court1 {
      height: 42px;
      font-size: 33px;
      top: 32px;
    }

    .span1 {
      width: 104%;
    }
  }
  .court2 {
    top: 70px;
    height: 17%;

    .span1 {
      display: none;
    }
  }

  .court4,
  .court3 {
    width: 240px;
    height: 17%;
    clear: right;
    margin: 0 auto;

    .span1 {
      display: none;
    }
    h3 {
      height: 32px;
    }
  }
  .court3 {
    top: 78px;
  }
  .court4 {
    top: 86px;
  }
}

@media (min-width: 606px) and (max-width: 980px) {
  button {
    width: 61%;
    border-radius: 25px;
    font-size: 41px;

    top: 26px;
    height: 53px;
  }
  .court1,
  .court2 {
    height: 48%;
    .span1 {
      width: 104%;
    }
    h3 {
      height: 32px;
    }
  }
  .court1 {
    float: right;
    top: 72px;
    right: 26px;

    .btn1court1 {
      height: 57px;
      font-size: 30px;
      top: 20px;
    }
    .btn2court1 {
      font-size: 38px;
      height: 52px;
      top: 38px;
    }
  }

  .court2 {
    top: 73px;
    height: 48%;
    left: 44px;
    .btn3 {
      top: 42px;
    }
  }

  .court4,
  .court3 {
    top: 63px;
    height: 31%;
    margin-right: 10px;
    .span1 {
      display: none;
    }
    h3 {
      height: 32px;
    }
  }
  .court3 {
    float: right;
    top: 63px;
    right: 18px;
    margin-right: 10px;
  }
  .court4 {
    float: left;

    left: 43px;
  }
}
@media (min-width: 981px) {
  button {
    width: 61%;
    border-radius: 25px;
    font-size: 30px;
    top: 42px;
    height: 45px;
  }
  .court1 {
    float: right;
    max-width: 22%;
    margin-right: 20px;
    h3 {
      height: 22%;
    }
    .btn1court1 {
      font-size: 24px;
      top: 17px;
    }
    .btn2court1 {
      font-size: 28px;
      top: 30px;
      height: 40px;
    }
  }
  .span1 {
    width: 104%;
  }
  .court2,
  .court3,
  .court4 {
    display: inline-block;
    max-width: 22%;
    margin-right: 20px;
  }
  .court2 {
    float: right;
  }
  .court3 {
    float: right;
  }
  .court4 {
    float: right;
  }
}
/*eeeeeendddddddmeeeeeeeeeedaiiiiii*/
</style>
