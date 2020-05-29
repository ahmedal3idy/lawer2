<template>
  <div class="task container-fluid">
    <div class="row">
      <section class="just col-lg-12">
        <h1>الزواج والطلاق</h1>
        <i class="fas layer fa-layer-group"></i>
        <i class="fas layer fa-layer-group"></i>
        <i class="fas layer fa-layer-group"></i>
        <i class="fas layer fa-layer-group"></i>
        <i class="fas layer fa-layer-group"></i>
        <i class="fas layer fa-layer-group"></i>
      </section>
      <status class="col-lg-12" @datashow='updatedata($event)'/>
     <div class="answer col-lg-12">
        <div
          class="ask-answer"
          :id="family.id"
          v-for="family in ask_answer"
          :key="family.id"
          @click="show"
        >
          <h1 @click="showparent">{{ family.ask }}</h1>
          <p >
            {{ family.answer }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import $ from "jquery";
import status from "../family/status/status.vue";
import how from"../family/jsonfamily/how.json";
import talak from"../family/jsonfamily/talak.json";
import maried from"../family/jsonfamily/maried.json";
export default {
  name: "family",
  components: {
  status
  },

  data() {
    return {
      
     dataclass:String,
     ask_answer:how,
      
    };
  },


  methods: {
    show() {
      var x = event.target.getAttribute("id"),
        y = "#" + x;

      console.log(y);
      if ($(y).height() == 56) {
        $(y).height('auto');
      } else {
        $(y).height(56);
      }
    },
    showparent() {
      var z = "#" + event.target.parentNode.id;
      console.log(z);
      if ($(z).height() == 56) {
        $(z).height('auto');
      } else {
        $(z).height(56);
      }
    },
    updatedata(updatedata){
       this.dataclass=updatedata;
       if(this.dataclass=="devorce")
        {
            this.ask_answer= talak;
        }
       else if(this.dataclass=="maried") {
            this.ask_answer= maried;

       }
       

       
    },
    
    
    
  },
};
</script>
<style lang="scss" scoped>

</style>
