<template>
  <div class="fristpage container-fluid">
    <div class="row">
      <ul class="socail col-lg-12 ">
        <li>
          <a href="#"><i class="fab fa-facebook-f"></i> </a>
        </li>

        <li>
          <a href="#"><i class="fab fa-instagram "></i></a>
        </li>
        <li>
          <a href="#"><i class="fab fa-google-plus "></i></a>
        </li>
        <li>
          <a href="#"><i class="fab fa-twitter "></i></a>
        </li>
      </ul>
      <div class="logo2 col-lg-12">
        <i class="fas fa-lightbulb"></i>
        <h1>إستنبأ</h1>
      </div>
      <div class="say col-lg-12">
        <span class=" col-lg-12">قال رسول الله </span>
        <p class="col-lg-12">ما تشاور قوم إلا هداهم الله لأرشد أمورهم</p>
        <span class=" col-lg-12"
          >صدق رسول الله<label> (صل الله عليه وسلم)</label></span
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "logo2",
};
</script>
<style lang="scss" scoped>
.socail {
  color: white;
  text-align: right;
  position: absolute;
  top: -84px;
  right: 6px;
  list-style-type: none;
  @media (min-width: 992px) {
    max-width: 4%;
  }
  li {
    line-height: 49px;
    .fab {
      color: #fff;
      font-size: 30px;
    }
  }
}
.fristpage {
  margin: 0 auto;
  padding: 0;
  font-family: "Adobe نسخ Medium", Arial, Helvetica, sans-serif;
  font-size: 42px;
  font-weight: bold;
  text-align: center;
  line-height: 40px;
  color: rgba(255, 255, 255, 0.685);
  display: block;
  position: absolute;
  top: 119px;
  width: 100%;
  .logo2 {
    .fa-lightbulb {
      font-size: 121px;
      position: relative;
      top: 67px;
      right: 115px;
      animation: light 1s infinite ease-out;
    }

    @keyframes light {
      0%,
      100% {
        text-shadow: 0 0 60px #f2ee71;
        text-shadow: 0 0 80px #f2ee71;
        text-shadow: 0 0 100px #f2ee71;
        text-shadow: 0 0 120px #f2ee71;
        filter: blur(1px);
      }
      5%,
      95% {
        filter: blur(0px);
        text-shadow: 0 0 50px #f5f071;
      }
    }

    h1 {
      font-size: 163px;
      margin: 0 auto;
      margin-bottom: 5px;
      padding: 0px;
      color: white;
    }
  }
  .say {
    background-color: rgba(0, 0, 0, 0.58);
    position: relative;
    top: -15px;

    text-align: center;
    p {
      margin: 0 auto;
      padding-top: 15px;
      padding-bottom: 8px;
      color: #26dce6;
    }
    span {
      color: #dedb41;
      font-size: 33px;
      padding-top: 10px;
      display: block;
      label {
        color: #fafafb;
        font-size: 20px;
      }
    }
  }
}
</style>
