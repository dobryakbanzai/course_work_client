<template>
  <div class="allin">
    <div class="decor1">
      <div class="form-inner1">
        <table class="table table-striped">
          <thead>
          <tr>
            <th>№</th>
            <th>Название</th>
            <th>Счет</th>
            <th>Принять вызов</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(item, index) in challanges" :key="index">
            <td>{{index + 1}}</td>
            <td>{{ item.chName }}</td>
            <td>{{ item.chScore }}</td>
            <td><button @click="takechal(item.id)">&#128170;</button></td>
            <!--          <td><router-link role="button" class="addBtn" :to="{name: 'clientEdit', params: {id: item.id}}">-->
            <!--            &#9998-->
            <!--          </router-link></td>-->
            <!--          <td><button type="button" class="delBtn" @click="handleRemoveClick($event, item.id)">-->
            <!--            &#10006-->
            <!--          </button></td>-->
            <!--          <td><router-link role="button" class="addBtn" :to="{name: 'clientOrd', params: {id: item.id}}">-->
            <!--            &#128269-->
            <!--          </router-link></td>-->
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="arr_div">
      <router-link :to="{name: 'MainStud' }" style="text-decoration: none;">
        <button class="arrow">Назад</button>
      </router-link>
    </div>

    <div class="arr_div1">
      <button class="arrow1" @click="challenge()">Новый вызов</button>
    </div>
    <div class="arr_div2">
      <router-link :to="{name: 'StudOwnLo' }" style="text-decoration: none;">
        <button class="arrow2">Мои вызовы</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import {formatDate, wait} from "../utils";
import {mapActions, mapState} from 'vuex';
export default {
  data(){
    return{
      name:null,
      score: 0,
      chid: 0,
      studid1: 0,
      studid2: 0,
      studchscore: 0
    }
  },
  methods:{
    async challenge(){
      var name = prompt('Дайте названия для вызова');
      var score = parseInt(prompt('Сколько примеров нужно решить?'));
      if(name === null || score === 0){
        alert('Вы не заполнили нужные строки')
      }else if(this.$store.state.challenges.find(item => item.chname === this.name)) {
        alert('Выберите другое название');
      }else {
        const ch = {
          chname: name,
          chscore: score
        };

        await this.addChallenge(ch);
        await this.$router.push({name: "StudChalLoad"});
      }

    },
    ...mapActions([
      'addChallenge',
      'addStudch',

    ]),
    async takechal(id){
      const item ={
        ChId: id,
        StudId: this.user[0].id,
        StudChScore: 0
      };
      await this.addStudch(item);
      await this.$router.push({name: "StudChalLoad"});
    }
  },

  computed: {
    ...mapState({
      students: state => state.students,
      challanges: state => state.challenges,
      studches: state => state.studches,
      user: state => state.user
    })
  },

  name: "ChallengeList"
}
</script>

<style scoped>
.arr_div2{
  position: absolute;
  top: 45%;
  left: 10%;
  border-width: 0;
  border-radius: 20px;
  background: rgba(255, 190, 143, 0.78);
  padding: 5px;
}
.arrow2{

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
.arrow2:active {
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

.arr_div1{
  position: absolute;
  top: 80%;
  left: 10%;
  border-width: 0;
  border-radius: 20px;
  background: rgba(255, 190, 143, 0.78);
  padding: 5px;
}
.arrow1{

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
.arrow1:active {
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
.table-striped{
  left: auto;
  right: auto;
  position: absolute;
}
table {
  margin: 0 auto;
  left: auto;
  right: auto;
  position: absolute;

  font-size: 14px;
  border-radius: 10px;
  border-spacing: 0;
  text-align: center;
}
th {
  background: #BCEBDD;
  color: white;
  text-shadow: 0 1px 1px #2D2020;
  padding: 10px 20px;
}
th, td {
  border-style: solid;
  border-width: 0 1px 1px 0;
  border-color: white;
}
th:first-child, td:first-child {
  text-align: left;
}
th:first-child {
  border-top-left-radius: 10px;
}
th:last-child {
  border-top-right-radius: 10px;
  border-right: none;
}
td {
  padding: 10px 20px;
  background: #F8E391;
}
tr:last-child td:first-child {
  border-radius: 0 0 0 10px;
}
tr:last-child td:last-child {
  border-radius: 0 0 10px 0;
}
tr td:last-child {
  border-right: none;
}
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

  width: auto;
  position: absolute;
  left: 10%;
  right: 10%;
  max-width: 650px;
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

.form-inner input, .form-inner textarea, .form-inner button, .form-inner1 input, .form-inner1 textarea, .form-inner1 button, select  {
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