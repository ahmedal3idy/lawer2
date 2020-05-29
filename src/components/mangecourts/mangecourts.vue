<template>
  <div class="task container-fluid">
    <div class="row">
      <section class="just col-lg-12">
        <h1>ادارة المـحـاكــم</h1>
        <i class="fas layer fa-layer-group"></i>
        <i class="fas layer fa-layer-group"></i>
        <i class="fas layer fa-layer-group"></i>
        <i class="fas layer fa-layer-group"></i>
        <i class="fas layer fa-layer-group"></i>
        <i class="fas layer fa-layer-group"></i>
      </section>
      <mangecourt class="col-lg-12" @datashow="updatedata($event)" />
      <div class="answer col-lg-12">
        <div
          class="ask-answer"
          :id="family.id"
          v-for="family in ask_answer"
          :key="family.id"
          @click="show"
        >
          <h1 @click="showparent">{{ family.ask }}</h1>
          <p>{{ family.answer }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import mangecourt from "../mangecourts/mange/mangecourt.vue";
import kadiafamily from "../mangecourts/jsonmange/kadaifamily.json";
import madany from "../mangecourts/jsonmange/madany.json";
import sell from "../mangecourts/jsonmange/sell.json";
import tanfez from "../mangecourts/jsonmange/tanfez.json";
import mony from "../mangecourts/jsonmange/mony.json";
import how from "../mangecourts/jsonmange/how.json";

export default {
  name: "mangecourts",

  components: {
    mangecourt
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
    heightshow() {
      var z = "#" + event.target.getAttribute("id");
      console.log(z);
    },
    updatedata(updatedata) {
      this.dataclass = updatedata;
      if (this.dataclass == "btn1") {
        this.ask_answer = madany;
      } else if (this.dataclass == "btn2") {
        this.ask_answer = kadiafamily;
      } else if (this.dataclass == "btn3") {
        this.ask_answer = tanfez;
      } else if (this.dataclass == "btn4") {
        this.ask_answer = mony;
      } else if (this.dataclass == "btn5") {
        this.ask_answer = sell;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.just {
  height: 128px;
  margin-bottom: 20px;
}
</style>
