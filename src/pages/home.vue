<template>
  <div class="cont col">
    <div class="paragraph">
      <h3>Professional Profile</h3>
      <p>
        I’m really into design patterns and I’m always trying to improve the code quality by applying paradigms to solve coding problem.
        For this reason I found Javascript the best language to apply a lot of different techniques.
        In particular I like to work with NodeJs, Angular, and React.
        <br><br>I'm always experimenting with new technologies and frameworks. Learning is my main occupation.
        <br><br>I love working in a team, sharing knowledge and best practices.
      </p>
    </div>
    <div class="paragraph">
      <h3>Wannabe...</h3>
      <p>
        I'm looking to became an expert in software development,
        not only for the web but also for "native" technologies such as iOS and Android.<br>
      </p>
    </div>
    <div class="paragraph">
      <h3>Stack...</h3>
      <p>
        In my day to day work I use primarly Javascript based technologies.<br>
        NodeJs for the server side and Angular, React or Vue based on the project requirements.<br>
        For large and "enterprish" web application I choos Angular for the strong structure that provide out of the box.
        Instead for small or personal project I jump between React and Vue quite often.<br>
      </p>
      <div class="cont mar-huge mar-only-top">
        <div class="cont section card">
          <h4>Frontend</h4>
          <ul>
            <li>HTML</li>
            <li>CSS (Flexbox)</li>
            <li>Swift</li>
            <li>AngularJS</li>
            <li>ReactJS</li>
            <li>React Native</li>
            <li>VueJS</li>
            <li>Typescript</li>
          </ul>
        </div>
        <div class="cont section card">
          <h4>Backend</h4>
          <ul>
            <li>NodeJS</li>
            <li>PHP</li>
            <li>Express</li>
            <li>Sql</li>
            <li>C++</li>
          </ul>
        </div>
        <div class="cont section card">
          <h4>Jolly</h4>
          <ul>
            <li>OCaml</li>
            <li>Assembly</li>
            <li>WordPress</li>
            <li>Arduino</li>
            <li>Docker</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style scoped>
.paragraph {
  margin-top: 40px;
}

.section {
  display: flex;
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.cont {
  justify-content: start;
}

@media only screen and (max-width: 1000px) {
  .section {
    flex: none;
    width: 100%;
    padding: 0px;
  }
}
</style>
