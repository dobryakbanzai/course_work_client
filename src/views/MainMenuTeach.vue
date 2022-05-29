<template>
  <div class = "allin">
    <div class="decor1">
      <div class="form-inner1">
        <h3>Menu</h3>
        <button>Profile</button>
        <router-link :to="{name: 'SListT'}" style="text-decoration: none"><button id="list">Students</button></router-link>
<!--        <router-link :to="{name: 'LoHoTec' }" style="text-decoration: none;">-->
          <button id="exit" @click="exit()">Exit</button>
<!--        </router-link>-->

      </div>
    </div>

    <!--https://vipport.ru/wp-content/uploads/2020/06/no_profile_picture.gif-->
    <div class="decor">
      <div class="form-left-decoration"></div>
      <div class="form-right-decoration"></div>
      <div class="circle"></div>
      <div class="form-inner">
        <div class="ImageProfile">
          <img src="https://vipport.ru/wp-content/uploads/2020/06/no_profile_picture.gif" alt="https://vipport.ru/wp-content/uploads/2020/06/no_profile_picture.gif" class ="round">
        </div>

        <div class="ProfileInf">
          <h3 class="inform">Last Name:</h3> <h3 class="inform" id="LName">{{ user[0].lName }}</h3>
          <br>
          <h3 class="inform">First Name:</h3> <h3 class="inform" id="Name">{{user[0].fName }}</h3>
          <br>
        </div>
        <router-link :to="{name: 'EditTeach', params: {id: user[0].id}}" style="text-decoration: none;">
          <button id="edit">Edit</button>
        </router-link>

      </div>
    </div>


  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
  methods:{
    async exit(){
      await this.removeUser(this.user[0]);
      await this.$router.push({name: "Teacher"});
    },
    ...mapActions([
      'addUser',
      'removeUser'
    ])
  },
  computed: {
    ...mapState({
      students: state => state.students,
      user: state => state.user
    })
  },
  name: "MainMenuTeach"
}
</script>

<style scoped>
.form-inner1 button:active/*[type="submit"]*/ {
  margin-top: 30px;
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
.allin{
  padding: 50px;
}
.ImageProfile{
  float: left;
  margin: 20px;
  padding: 10px;
}
.ProfileInf{
  float: left;
  margin: 20px;
  padding: 10px;
}
.inform{
  float: left;
}
.round {
  width: 50%;
  float: left;
  border-radius: 100px; /* Радиус скругления */
}
* {
  box-sizing: border-box;
}
body {
  background: #f69a73;
}
.decor {
  position: absolute;
  right: 10%;
  left: 55%;
  max-width: 400px;
  margin: 50px auto 0;
  background: white;
  border-radius: 30px;
  top: 25px;
  bottom: 30px;
}
.decor1 {
  position: absolute;
  left: 10%;
  right: 55%;
  max-width: 400px;
  margin: 50px auto 0;
  background: white;
  border-radius: 30px;
  top: 25px;
  bottom: 30px;
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
.form-inner, .form-inner1 {
  padding: 50px;
}
.form-inner input, .form-inner textarea, .form-inner button, .form-inner1 input, .form-inner1 textarea, .form-inner1 button  {
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
.form-inner input[type="submit"], .form-inner1 input[type="submit"] {
  margin-top: 30px;
  background: #f69a73;
  border-bottom: 4px solid #d87d56;
  color: white;
  font-size: 14px;
}
.form-inner button/*[type="submit"]*/, .form-inner1 button {
  margin-top: 30px;
  background: #f69a73;
  border-bottom: 4px solid #d87d56;
  color: white;
  font-size: 14px;
}
.form-inner textarea, .form-inner1 textarea {
  resize: none;
}
.form-inner h3, .form-inner1 h3 {
  margin-top: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 24px;
  color: #707981;
}
</style>