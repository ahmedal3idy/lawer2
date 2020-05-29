<template>
  <div class="task container-fluid">
    <div class="row">
      <section class="just col-lg-12">
        <h1>صياغة العقود وتوثيقها</h1>
        <i class="fas layer fa-layer-group"></i>
        <i class="fas layer fa-layer-group"></i>
        <i class="fas layer fa-layer-group"></i>
        <i class="fas layer fa-layer-group"></i>
        <i class="fas layer fa-layer-group"></i>
        <i class="fas layer fa-layer-group"></i>
      </section>
      <slider class="col-lg-12" @datashow="updatedata($event)" />

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
import slider from "./Contracts/slider.vue";
import how from "../Ask/Contracts/askjson/how.json";
import work from "../Ask/Contracts/askjson/work.json";
import ekrar from "../Ask/Contracts/askjson/ekrar.json";
import wekala from "../Ask/Contracts/askjson/wekala.json";
import alert from "../Ask/Contracts/askjson/alert.json";
import shopsell from "../Ask/Contracts/askjson/shopsell.json";
import company from "../Ask/Contracts/askjson/company.json";
import $ from "jquery";
export default {
  name: "contracts",
  components: {
    slider
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
     
      if ($(z).height() == 56) {
        $(z).height("auto");
      } else {
        $(z).height(56);
      }
    },
    updatedata(updatedata) {
      this.dataclass = updatedata;
      if (this.dataclass == "slide-1") {
        this.ask_answer = work;
      } else if (this.dataclass == "slide-2") {
        this.ask_answer = ekrar;
      } else if (this.dataclass == "slide-3") {
        this.ask_answer = wekala;
      } else if (this.dataclass == "slide-4") {
        this.ask_answer = alert;
      } else if (this.dataclass == "slide-5") {
        this.ask_answer = shopsell;
      } else if (this.dataclass == "slide-6") {
        this.ask_answer = company;
      }
    }
  }
};
</script>
<style lang="scss" scoped></style>
