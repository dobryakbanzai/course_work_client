<template>
  <div>
  <div class="decor">
    <div class="form-left-decoration"></div>
    <div class="form-right-decoration"></div>
    <div class="circle"></div>
    <div class="form-inner">
      <h3>STUDENT</h3>
      <br>
      <input id="login" type="text" placeholder="LOGIN">
      <br>
      <input id="pass" type="password" placeholder="PASSWORD">
<!--      <router-link :to="{name: 'MainStud'}" style="text-decoration: none">-->
        <button id="myButton" class="foo bar" @click="gen()">Sign In</button>
<!--      </router-link>-->
      <router-link :to="{name: 'Regstud'}" style="text-decoration: none">
        <button id="myButton2" class="foo bar" >Sign Up</button>
      </router-link>
    </div>

  </div >
    <div class="arr_div">
      <router-link :to="{name: 'Choise' }" style="text-decoration: none;">
        <button class="arrow">Назад</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import {formatDate, wait} from "../utils";
import {mapActions, mapState} from 'vuex';

export default {
  methods:{
    async gen(){
      var stud = this.$store.state.students.find(item => item.login === document.getElementById("login").value);
      if(stud != null && stud.pass === document.getElementById("pass").value){
        await this.addUser(stud);
        await this.$router.push({name: "MainStud"});
      }else {
        alert("Не правильно введены login/password");
      }

    },
    ...mapActions([
      'addUser'
    ])
  },
  computed:{
    ...mapState({
      students: state => state.students
    })
  },
  name: "HomeStudent"
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
.form-inner button:active/*[type="submit"]*/ {
  margin-top: 30px;
  background: #af7053;
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