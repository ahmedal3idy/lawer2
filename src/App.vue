<template>
  <div id="app">
    <logo2 />

    <div id="nav" :class="stand2">
      <div>
        <button id="navbar" @click="step2">
          <i class="fas fa-bars "></i>
        </button>
      </div>

      <ul @click="go">
        <router-link to="/" tag="li" :class="stand[0]" exact
          ><a
            ><span> الرئسية</span
            ><i
              class="fas fa-house-damage"
              @mouseenter="hover"
              @mouseout="unhover"
            ></i> </a
        ></router-link>

        <router-link to="/Manage" tag="li" :class="stand[1]"
          ><a
            ><span>ادارة المحاكم</span
            ><i
              class="fas fa-balance-scale"
              @mouseenter="hover"
              @mouseout="unhover"
            ></i></a
        ></router-link>

        <router-link to="/General" tag="li" :class="stand[2]"
          ><a
            ><span>وحجوزات البيع</span
            ><i
              class="fas fa-receipt"
              @mouseenter="hover"
              @mouseout="unhover"
            ></i></a
        ></router-link>
        <router-link to="/about" tag="li" :class="stand[3]" replace
          ><a
            ><span>العقود</span
            ><i
              class="fas fa-tasks"
              @mouseenter="hover"
              @mouseout="unhover"
            ></i> </a
        ></router-link>
        <router-link to="/User" tag="li" :class="stand[3]" replace
          ><a
            ><span>الزواج والطلاق</span
            ><i
              class="fas fa-user-tie"
              @mouseenter="hover"
              @mouseout="unhover"
            ></i></a
        ></router-link>
      </ul>
    </div>
    <router-view />
  </div>
</template>
<script>
/*var x = function() {
  if ((document.getElementById("navbar").style.display == "none")) {
    document.getElementById("nav").style.width (102);
  }
};
x();*/
import logo2 from "../src/components/logo2.vue";
/*import $ from "jquery";*/

export default {
  name: "App",
  components: {
    logo2
  },
  data: function() {
    return {
      bool: false,
      stand: ["stander ", "stander ", "stander ", " stander"],
      stand2: "nav1"
    };
  },

  computed: {
    Message: function() {
      var x = function() {
        if (document.getElementById("navbar").style.display == "none") {
          document.getElementById("nav").style.width(102);
        }
      };

      return x;
    }
  },

  methods: {
    step2() {
      this.bool = this.bool === false ? true : false;
      if (this.bool === false) {
        this.stand2 = "nav1";
      } else {
        this.stand2 = "nav2";
      }
    },
    go() {
      var i = event.target.getAttribute("class");
      if (i == "fas") {
        document.querySelector(".").style.right = -1600;
      }
    },
    colorclick() {
      event.target.setAttribute("style.color", "#26dce6");
      console.log(event.target.getAttribute("class"));
    },
    hover() {
      event.target.parentElement.childNodes[0].style.visibility = "visible";
    },
    unhover() {
      event.target.parentElement.childNodes[0].style.visibility = "hidden";
    }
  }
};
</script>
<style lang="scss" scoped>
#app {
  @media (min-width: 991px) {
    background-image: url("../src/assets/global/ground2.jpg");
  }
  @media (max-height: 790px) {
    background-image: url("../src/assets/global/ground2.jpg");
    background-size: cover;
  }
  @media (min-height: 790px) {
    background-image: url("../src/assets/global/ground2.jpg");
    background-size: 100% 100%;
    height: 931px;
    #nav {
      height: 931px;
    }
  }

  background-repeat: no-repeat;
  background-color: transparent;
  background-size: cover;
  overflow-x: hidden;
}
.stander :hover {
  color: #26dce6;
}
#nav {
  transition: 0.5s;
  width: 102px;
}
.nav1 {
  left: 0;
  overflow: hidden;
}
.nav2 {
  left: -103px;
}
</style>
