<template>
  <div class="container">
    <client-only>
      <h1>Test</h1>
      <vue-slider ref="slider" v-model="price"></vue-slider>
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      db: this.$fire.firestore,
      price: 5
    };
  },
  mounted() {
    this.db
      .collection("joueurs")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          // doc.data() is never undefined for query doc snapshots
          // this.joueurs = [...this.joueurs, {id : doc.id, data : doc.data()}];
          console.log(doc.id, " => ", doc.data());
        });
      });
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
