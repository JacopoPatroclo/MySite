<template>
  <div id="app">
    <div class="cont centered">
      <div class="cont col">
        <h1 class="pad-small pad-only-top">Jacopo Martinelli</h1>
        <p class="self-right pad-small mobile-pad-small pad-only-bottom">Full-Stack Javascript developer</p>
        <div class="cont pad-small self-right pad-only-top">
          <a class="pad-small pad-only-right" href="mailto:Jacopo.patroclo.martinelli@gmail.com" >Email</a>
          <a class="pad-small pad-only-right" target="_blank" href="https://github.com/JacopoPatroclo" >GitHub</a>
          <a class="pad-small pad-only-right" target="_blank" href="https://telegram.me/Patroclazzo" >Telegram</a>
          <a class="pad-small pad-only-right" target="_blank" href="https://www.linkedin.com/in/jacopo-martinelli-18952b93" >Linkedin</a>
          <a class="" target="_blank" href="/cv.pdf" >CV</a>
        </div>
      </div>
      <img class="mar-huge mar-only-left img-circular small-quad" src="./assets/profilePic.jpg">
    </div>
    <div class="paragraph mar-huge">
      <router-view></router-view>
    </div>
    <div class="cont mar-huge">
      <recent-activity username="JacopoPatroclo"></recent-activity>
    </div>
  </div>
</template>

<script>
import RecentActivity from "./components/RecentActivity";

export default {
  name: "app",
  components: {
    RecentActivity
  },
  data() {
    return {
      visitorsNumber: 20
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  align-items: center;
}

a {
  color: #429db9;
}

h1,
h2,
p {
  margin: 0px;
}

.small-quad {
  height: 200px;
  width: 200px;
}

.img-circular {
  border-radius: 50%;
}

.cont {
  display: flex;
  flex-wrap: wrap;
}

.col {
  flex-direction: column;
}

.centered {
  justify-content: center;
  align-items: center;
}

.pad-small {
  padding: 10px;
}

.pad-normal {
  padding: 20px;
}

.pad-huge {
  padding: 40px;
}

.mar-huge {
  margin: 40px;
}

.mar-normal {
  margin: 20px;
}

.mar-small {
  margin: 10px;
}

.self-right {
  align-self: flex-end;
}

.pad-only-top {
  padding-left: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
}

.mar-only-top {
  margin-left: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
}

.pad-only-bottom {
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

.pad-only-left {
  padding-right: 0px;
  padding-bottom: 0px;
  padding-top: 0px;
}

.mar-only-left {
  margin-right: 0px;
  margin-bottom: 0px;
  margin-top: 0px;
}

.pad-only-right {
  padding-left: 0px;
  padding-bottom: 0px;
  padding-top: 0px;
}

.paragraph {
  text-align: left;
  width: 80%;
  margin: auto;
}

.card {
  transition: 0.3s;
}

.card:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

@media only screen and (max-width: 700px) {
  .paragraph {
    width: 100%;
  }

  .img-circular {
    margin: auto;
    margin-top: 30px;
  }

  .cont {
    width: 100%;
  }

  .self-right {
    align-self: flex-start;
  }

  .mobile-pad-small {
    padding: 10px;
  }
}
</style>
