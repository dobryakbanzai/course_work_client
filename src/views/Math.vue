<template>
  <div>
  <div class="decor">
    <div class="form-left-decoration"></div>
    <div class="form-right-decoration"></div>
    <div class="circle"></div>
    <div  class="form-inner">
      <h3>MATH.ESE</h3>
      <h3 v-if="problem && problem[0]" id="prim">{{problem[0].problem}}</h3>
      <input id="answer" type="text">
      <button id="give_answ" v-on:click="giv()">OK</button>

      <button id="gen" @click="gen()" >Next</button>
      <h3 id="corr">&nbsp;</h3>
      <h3>{{user[0].totalScore}}</h3>
    </div>
  </div>

  <div class="arr_div">
    <router-link :to="{name: 'MainStud' }" style="text-decoration: none;">
      <button class="arrow">Назад</button>
    </router-link>
  </div>
  </div>
</template>

<script>

import {mapActions, mapState} from 'vuex';

export default {
  data() {
    return {
      id: 0,
      lName: "",
      fName: "",
      login: "",
      pass: "",
      totalScore: 0,
      classId: 0,
    };
  },
  methods:{
    async giv(){
      var ans1 = document.getElementById("answer").value;
      //&nbsp;
      if(ans1 === this.problem[0].resolve && (document.getElementById('corr').innerHTML === "&nbsp;" || document.getElementById('corr').innerHTML === "Подумай ещё 😿")){
        console.log(new Date());
        document.getElementById('corr').innerHTML = "Молодец правильно 😸";
        const item = {
          id: this.id,
          lName: this.lName,
          fName: this.fName,
          login: this.login,
          pass: this.pass,
          totalScore: parseInt(this.totalScore) + 1,
          classId: this.classId
        };
        await this.editStudent(item);
        await this.editUser(item);

      } else if (ans1 != this.problem[0].resolve) {
        document.getElementById('corr').innerHTML = "Подумай ещё 😿";
      } else {
        document.getElementById('corr').innerHTML = "Нажми Next";
      }
    },
    gen(){
      this.$router.push({name: "MathLoad"});
    },
    ...mapActions([
      'addStudent',
      'editStudent',
      'editUser',
      'editStudch'

    ])
  },
  computed: {
    ...mapState({
      problem: state => state.problem,
      students: state => state.students,
      studches: state => state.studches,
      user: state => state.user
    })
  },
  created() {
        this.id = this.user[0].id,
        this.lName = this.user[0].lName,
        this.fName= this.user[0].fName,
        this.login= this.user[0].login,
        this.pass= this.user[0].pass,
        this.totalScore= this.user[0].totalScore,
        this.classId= this.user[0].classId
  },
  name: "Math"
}
</script>

<style scoped>

.arr_div{
  position: absolute;
  top: 10%;
  left: 10%;
  border-width: 0;
  border-radius: 20px;
  background: rgba(255, 190, 143, 0.78);
  padding: 5px;
}
.arrow{

  display: block;
  width: 100%;
  padding: 0 20px;
  margin-bottom: 10px;
  line-height: 40px;
  border-width: 0;
  border-radius: 20px;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  margin-top: 10px;
  background: #f69a73;
  border-bottom: 4px solid #d87d56;
  color: white;
  font-size: 14px;
}

.arrow:active {
  display: block;
  width: 100%;
  padding: 0 20px;
  margin-bottom: 10px;
  line-height: 40px;
  border-width: 0;
  border-radius: 20px;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  margin-top: 10px;
  background: #af7053;
  border-bottom: 4px solid #d87d56;
  color: white;
  font-size: 14px;
}

.form-inner button:active/*[type="submit"]*/ {
  margin-top: 30px;
  background: #af7053;
  border-bottom: 4px solid #d87d56;
  color: white;
  font-size: 14px;
}
* {
  box-sizing: border-box;
}
body {
  background: #f69a73;
}
.decor {
  position: relative;
  max-width: 400px;
  margin: 50px auto 0;
  background: white;
  border-radius: 30px;
}
.form-left-decoration, .form-right-decoration {
  content: "";
  position: absolute;
  width: 50px;
  height: 20px;
  background: #f69a73;
  border-radius: 20px;
}
.form-left-decoration {
  bottom: 60px;
  left: -30px;
}
.form-right-decoration {
  top: 60px;
  right: -30px;
}
.form-left-decoration:before, .form-left-decoration:after, .form-right-decoration:before, .form-right-decoration:after {
  content: "";
  position: absolute;
  width: 50px;
  height: 20px;
  border-radius: 30px;
  background: white;
}
.form-left-decoration:before {
  top: -20px;
}
.form-left-decoration:after {
  top: 20px;
  left: 10px;
}
.form-right-decoration:before {
  top: -20px;
  right: 0;
}
.form-right-decoration:after {
  top: 20px;
  right: 10px;
}
.circle {
  position: absolute;
  bottom: 80px;
  left: -55px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
}
.form-inner {
  padding: 50px;
}
.form-inner input, .form-inner textarea, .form-inner button {
  display: block;
  width: 100%;
  padding: 0 20px;
  margin-bottom: 10px;
  background: #E9EFF6;
  line-height: 40px;
  border-width: 0;
  border-radius: 20px;
  font-family: 'Roboto', sans-serif;
  text-align: center;
}
.form-inner input[type="submit"] {
  margin-top: 30px;
  background: #f69a73;
  border-bottom: 4px solid #d87d56;
  color: white;
  font-size: 14px;
}
.form-inner button/*[type="submit"]*/ {
  margin-top: 30px;
  background: #f69a73;
  border-bottom: 4px solid #d87d56;
  color: white;
  font-size: 14px;
}
.form-inner textarea {
  resize: none;
}
.form-inner h3 {
  margin-top: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 24px;
  color: #707981;
}
</style>