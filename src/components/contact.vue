<template>
  <div class="contact container-fluid">
    <div class="row">
      <h1 class=" col-lg-12">اتـصــل بـنـا</h1>
      <i class="fad fa-heart-rate"></i>
      <div class="comment col-lg-12">
        <form class=" col-lg-12">
          <input
            type="text"
            name="name"
            placeholder="الأســـم"
            class="col-lg-6"
          />
          <input
            type="text"
            name="name"
            placeholder="البريد الإلـكترونى"
            class="col-lg-6"
          />
          <textarea
            rows="6"
            cols="50"
            class="col-lg-12"
            placeholder="اترك رسالتك"
          ></textarea>
          <button class="col-lg-12">إرسال</button>
          <i class="fal line fa-horizontal-rule"></i>
        </form>
      <div class="col-lg-12 line"></div>
      </div>

      <div class="conection col-lg-12">
        <div class="col-lg-4">
          <a href="#"> <i class="fab set fa-telegram-plane"></i></a>
          <p>example@exampla.com</p>
          <span>حساب تليجرام</span>
      </div>

        <div class="col-lg-4">
          <a href="#"><i class="fab set fa-whatsapp"></i></a>
          <p>(+2)012345678901@whatsapp</p>
          <span>حساب الواتس </span>
        </div>

        <div class="col-lg-4">
          <a href="#"><i class="fas set fa-phone-alt"></i></a>
          <p>(+2)012345678901</p>
          <span>رقم الهاتف</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.contact {
  background-color: #1d1c1c;
  font-family: Adobe نسخ Medium;
  position: relative;
  top: 0;
  left: 0;
  direction: rtl;
  height: 1000px;
  h1 {
    font-size: 45px;
    color: white;
    margin: 30px auto;
  }

  .comment {
    background-color: #070709;
    border: none;
    border-radius: 15px;
    position: relative;
    top: 42px;
    margin: 0 auto;
    height: 406px;
    border-bottom: 3px solid #1d1c1c;
    @media (min-width: 992px) {
      max-width: 90%;
    }

    form {
      background-color: transparent;
      border: none;
      height: 383px;

      input {
        height: 14%;
        color: #313133;
        background: transparent;
        font-size: 26px;
        padding: 0px;
        margin-top: 33px;
        margin-left: 36px;
        padding-right: 27px;
        border: none;
        border-bottom: 3px solid #1d1c1c;
        @media (min-width: 992px) {
          max-width: 45%;
        }
      }
      textarea {
        height: 43%;
        color: #313133;
        background: transparent;
        font-size: 28px;
        width: 95%;
        border: none;
        border-bottom: 3px solid #1d1c1c;
        margin-top: 37px;
        padding-top: 28px;
        overflow: auto;
        overflow-wrap: break-word;
      }
      button {
        border: none;
        color: white;
        background: transparent;
        width: 20%;
        height: 16%;
        margin: 0 auto;
        font-size: 36px;
        margin-top: 8px;
        border-bottom: 5px solid rgb(38, 220, 218);
        transition-property: width;
        transition-duration: 2s;
        transition-timing-function: linear;
        transition-delay: 1s;
        &:hover {
          transform: rotatey(3deg);
        }
      }
    }
    .line {
      border-bottom: 3px solid #131212;
      position: relative;
      top: 60px;
      margin: 0 auto;
      height: 20px;
    }
  }
  .conection {
    color: white;
    font-size: 40px;
    margin: 0 auto;
    display: block;
    position: relative;
    top: 165px;
    background: #070709;
    border-radius: 15px;
    height: 219px;
    padding: 30px;

    @media (min-width: 992px) {
      max-width: 92%;
    }
    div {
      float: left;
      .set {
        font-size: 60px;
        color: white;
      }
      p {
        margin: 0 auto;

        font-size: 24px;
        padding: 11px;
      }
      span {
        display: block;
        font-size: 25px;
        color: #757575;
      }
    }
  }
}
</style>
