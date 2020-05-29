<template>
  <div class="mantask " @click="row">
    <contracts />
  </div>
</template>
<script>
import contracts from "../components/Ask/contracts.vue";
import $ from "jquery";

export default {
  name: "about",
  components: {
    contracts
  },
  methods: {
    row() {
      $(".mantask").width();
      console.log($(".mantask").width());
    }
  }
};
</script>
<style lang="scss" scoped>
.mantask {
  width: 100%;
  background: #1d1c1c;
  position: relative;
  top: 0;
  height: 1050px;

  direction: ltr;
}
</style>
