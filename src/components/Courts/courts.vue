<template>
  <div class="task container-fluid">
    <div class="row">
      <section class="just col-lg-12">
        <h1>الدعاوى والاشكالات وحجوزات البيع</h1>
        <i class="fas layer fa-layer-group"></i>
        <i class="fas layer fa-layer-group"></i>
        <i class="fas layer fa-layer-group"></i>
        <i class="fas layer fa-layer-group"></i>
        <i class="fas layer fa-layer-group"></i>
        <i class="fas layer fa-layer-group"></i>
      </section>
      <court class=" courts col-lg-12" @datashow="updatedata($event)" />
      <div class="answer col-lg-12">
        <div
          class="ask-answer"
          :id="family.id"
          v-for="family in ask_answer"
          :key="family.id"
          @click="show"
        >
          <h1 @click="showparent">{{ family.ask }}</h1>
          <p>
            {{ family.answer }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import court from "../Courts/court/court.vue";
import how from "../Courts/courtjson/how.json";
import dawa from "../Courts/courtjson/dawa.json";
import eshkaleyat from "../Courts/courtjson/eshkaleyat.json";
import gozgeya from "../Courts/courtjson/gozgeya.json";
import kadafamily from "../Courts/courtjson/kadaifamily.json";
import hogozat from "../Courts/courtjson/hogozat.json";
export default {
  name: "family",
  components: {
    court
  },

  data() {
    return {
      dataclass: String,
      ask_answer: how
    };
  },

  methods: {
    show() {
      var x = event.target.getAttribute("id"),
        y = "#" + x;

      console.log(y);
      if ($(y).height() == 56) {
        $(y).height("auto");
      } else {
        $(y).height(56);
      }
    },
    showparent() {
      var z = "#" + event.target.parentNode.id;
      console.log(z);
      if ($(z).height() == 56) {
        $(z).height("auto");
      } else {
        $(z).height(56);
      }
    },
    updatedata(updatedata) {
      this.dataclass = updatedata;
      if (this.dataclass == "btn1") {
        this.ask_answer = hogozat;
      } else if (this.dataclass == "btn2") {
        this.ask_answer = eshkaleyat;
      } else if (this.dataclass == "btn3") {
        this.ask_answer = dawa;
      } else if (this.dataclass == "btn4") {
        this.ask_answer = kadafamily;
      } else if (this.dataclass == "btn5") {
        this.ask_answer = gozgeya;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.courts {
  height: 296px;
  /*eeeeeenddddddd meeeeeeeeeedaiiiiii*/
  @media (max-width: 605px) {
    height: 631px;
    top: 31px;
  }
  @media (min-width: 606px) and(max-width: 980px) {
    height: 414px;
  }
  /*eeeeeenddddddd meeeeeeeeeedaiiiiii*/
}
</style>
