<template>
  <div class="managecontact">
    <contact />
  </div>
</template>
<script>
import contact from "../components/contact.vue";
export default {
  name: "Contact",
  components: {
    contact
  }
};
</script>
<style scoped>
.managecontact {
  direction: ltr;
  width: 100%;
  float: right;
  height: 790px;
  overflow-y: scroll;
}
</style>
