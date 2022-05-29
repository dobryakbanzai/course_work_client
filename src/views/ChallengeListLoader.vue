<template>
  <div class="spinner">

  </div>
</template>

<script>
import {wait} from "../utils";
import {mapActions} from "vuex";

export default {
  mounted() {
    this.$nextTick(async ()=>{
      await this.initializeStudents();
      await this.initializeTeachers();
      await this.initializeClasses();
      await this.initializeChallenges();
      await this.initializeStudches();
      await this.initializeStudteaches();
      await wait(1500);

      await this.$router.push({name: "StudChal"});
    });
  },
  methods:{
    ...mapActions([
      "initializeStudents",
      "initializeTeachers",
      "initializeChallenges",
      "initializeClasses",
      "initializeStudches",
      "initializeStudteaches",
    ])
  },
  name: "ChallengeListLoader"
}
</script>


<style scoped>


.spinner {
  color: #2cffff;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.spinner:after {
  animation: changeContent .8s linear infinite;
  display: block;
  content: "⠋";
  font-size: 80px;
}

@keyframes changeContent {
  10% { content: "⠙"; color: #42b983; }
  20% { content: "⠹"; color: #a243ff;}
  30% { content: "⠸"; color: #ff48e1;}
  40% { content: "⠼"; color: #d2ff2e;}
  50% { content: "⠴"; color: #2effa4;}
  60% { content: "⠦"; color: #2aff9a;}
  70% { content: "⠧"; color: #3183ff;}
  80% { content: "⠇"; color: #a545ff;}
  90% { content: "⠏"; color: #ff54ee;}
}
</style>