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
      <div class="answer col-lg-12">
        <div class="ask-answer">
          <div @click="show">
            <h1>ما هو حكم الطلاق؟</h1>
            <p>
              الطلاق جائز و مشرع بحكم الشريعة الإسلامية ورغم أنه من أبغض الحلال
              إلا أنه أفضل الطرق إذا استحالت المعيشة ما بين الزوجين، وتأكيداً
              على شرعية الطلاق فقد قال الله تعالى في كتابه الكريم “الطلاق مرتان
              فإمساك بمعروف أو تسريح بإحسان”، كما ورد عن النبي عليه أفضل الصلاة
              والسلام أن طلق حفصة ثم راجعها، وعند جمهور الفقهاء أيضاً فقد أجمعوا
              على شرعيته وجوازه، ويبيح الشرع للرجل طلقتين يستطيع بعدهما أن يرد
              زوجته خلال فترة العدّة والتي مدتها بالنسبة لغير الحامل ثلاثة أشهر،
              وبعد وضع الحمل بالنسبة للمرأة الحامل، فإن مرت فترة العدّة ولم يقم
              الزوج برد زوجته إليه تحتسب بينونة صغرى ولا يستطيع أن يرجعها إليه
              إلا بعقد جديد مع تقديم مهر إليها بالطبع.
            </p>
          </div>
        </div>
      </div>
      <div class="hello">

    </div>
  </div>
  </div>
</template>
<script>

import $ from "jquery";

export default {
  name: "hello",
  components: {
  
  },

  methods: {
    show() {
      if ($(".ask-answer").height() == 84) {
        $(".ask-answer").height(270);
      } else {
        $(".ask-answer").height(84);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.hello{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: #030303d6;
    width: 100%;
}
.task {
  background: transparent;
  font-family: Adobe نسخ Medium;
    filter: blur(2px);
  height: 1000px;
  margin: 0;
  padding: 0;
  overflow: hidden;

  .just {
    background-color: #ffffff3b;
    width: 100%;
    height: 120px;
    position: relative;
    top: -35px;
    h1 {
      font-size: 37px;
    color: white;
    padding-top: 20px;
    margin-bottom: 30px;
    }
    .layer {
      font-size: 21px;
      position: relative;
      top: -29px;
      color: #1edcda;
    }
  }

  .kind {
    padding-top: 81px;
    background: #0000003d;
    margin: 0 auto;
    border-radius: 31px;
    @media (min-width: 992px) {
      max-width: 89%;
    }
    .ask {
      float: right;
      width: 21%;
      margin: 0 auto;
      margin-right: 41px;
    }
  }
  .answer {
    margin: 20px auto;
    background-color: transparent;

    border-top: 6px dashed #999a9d;

    .ask-answer {
      background-color: #ffffffde;
      width: 96%;

      margin: 25px auto;
      padding: 1px 31px;
      border-radius: 27px;
      height: 84px;
      overflow: hidden;
      transition-property: all;
      transition-duration: 0.5s;
      transition-timing-function: linear;
      h1 {
        color: #0e0e0e;
        font-size: 41px;
        word-spacing: 2px;
        font-weight: bold;
        margin-right: 26px;
        margin-bottom: 9px;
        text-align: right;
      }
      p {
        margin-top: 0;
        margin-bottom: 1rem;
        font-size: 27px;
        font-weight: bold;
        color: #484a49;
      }
    }
  }
}
</style>

