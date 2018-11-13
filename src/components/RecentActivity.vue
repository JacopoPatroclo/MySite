<template>
  <div>
    <h2>My projects from Github</h2>
    <p v-if="loading">Loading...</p>
    <div class="cont mar-normal" v-if="!loading">
      <div class="tiles card" v-for="repo in repos" v-if="!repo.fork" :key="repo.id">
          <a class="fullspace" target="_blank" :href="repo.html_url">{{ repo.full_name }}</a>
          <p class="fullspace"><span class="titoletto">Creato il:</span> {{ date(repo.created_at) }}</p>
          <p class="fullspace"><span class="titoletto">Modificato il:</span> {{ date(repo.updated_at) }}</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "recent-activity",
  data() {
    return {
      loading: true,
      repos: null
    };
  },
  props: {
    username: String
  },
  methods: {
    loadRecentActivityFromGithub() {
      this.loading = true;
      return fetch(`https://api.github.com/users/${this.username}/repos`).then(
        response => response.json()
      );
    },
    date(stringDate) {
      let date = new Date(stringDate);
      return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }
  },
  mounted() {
    this.loadRecentActivityFromGithub()
      .then(json => {
        console.log(json);
        this.loading = false;
        this.repos = json;
      })
      .catch(e => {
        this.loading = false;
        console.error(e);
      });
  }
};
</script>


<style scoped>
.tiles {
  margin: 20px;
  width: 28%;
  align-self: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: left;
  padding: 5px;
  padding-left: 20px;
}

.titoletto {
  font-weight: 500;
}

.fullspace {
  width: 100%;
}

@media only screen and (max-width: 1080px) {
  .tiles {
    width: 40%;
  }
}

@media only screen and (max-width: 722px) {
  .tiles {
    width: 100%;
  }
}
</style>
