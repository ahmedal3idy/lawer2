<template>
  <div class="general">
    <courts />
  </div>
</template>

<script>
import courts from "../components/Courts/courts";
export default {
  name: "General",
  components: {
    courts
  }
};
</script>
<style lang="scss" scoped>
.general {
  direction: rtl;
  width: 100%;
  background: #1d1c1c;
  position: relative;
  top: 0;
  height: 1050px;
}
</style>
