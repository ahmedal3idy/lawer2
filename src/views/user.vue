<template>
  <div class="manage2">
    <family />
  </div>
</template>
<script>
import family from "../components/family/family.vue";
export default {
  name: "User",
  components: {
    family
  }
};
</script>
<style lang="scss" scoped>
.manage2 {
  width: 100%;
  background: #1d1c1c;
  position: relative;
  top: 0;
  height: 1050px;

  direction: ltr;
}
</style>
