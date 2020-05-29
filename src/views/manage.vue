<template>
  <div class="manage">
    <mangecourts class="mangecourts" />
  </div>
</template>
<script>
import mangecourts from "../components/mangecourts/mangecourts.vue";
export default {
  name: "Manage",
  components: {
    mangecourts
  }
};
</script>
<style lang="scss" scoped>
.manage {
  direction: rtl;
  background: #1d1c1c;
  position: relative;
  top: 0;
  width: 100%;
  @media (max-height: 790px) {
    height: 790px;
  }
  @media (min-height: 790px) {
    height: 931px;
  }
  overflow: hidden;
}
</style>
