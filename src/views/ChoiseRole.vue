<template>
  <div>
    <router-link :to="{name: 'LoHoStu'}" style="text-decoration: none; color: #2cffff;">
      <div class="decor1" id="student">
        <div class="form-inner1">
          <!--https://yt3.ggpht.com/a/AGF-l79B5oXxxwekx8dSet_fE6oE2W5K36eGChHlXg=s900-c-k-c0xffffffff-no-rj-mo-->
          <img src="https://yt3.ggpht.com/a/AGF-l79B5oXxxwekx8dSet_fE6oE2W5K36eGChHlXg=s900-c-k-c0xffffffff-no-rj-mo" alt="https://yt3.ggpht.com/a/AGF-l79B5oXxxwekx8dSet_fE6oE2W5K36eGChHlXg=s900-c-k-c0xffffffff-no-rj-mo" id="stud" class ="round">
        </div>
        <h1>
          STUDENT
        </h1>

      </div>
    </router-link>
    <router-link :to="{name: 'LoHoTec'}" style="text-decoration: none; color: #2cffff;" >
    <div class="decor" id="teacher">
      <div class="form-inner1">
<!--        https://e7.pngegg.com/pngimages/388/740/png-clipart-university-of-petroșani-scholarship-funding-career-scholarship-angle-service.png-->
          <img src="https://i.pinimg.com/originals/7e/e9/49/7ee9493da229e3cac689a3e1e313b1cf.jpg" alt="https://www.seekpng.com/png/detail/351-3513773_graduation-ceremony-graduate-university-academic-degree-alumni-icon.png" id="teach" class ="round">
        </div>
        <h1>
         TEACHER
        </h1>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ChoiseRole"
}
</script>

<style scoped>

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
  height: 50%;
  left: auto;
  right: auto;
  top: 50%;
  bottom: 50%;
  border-radius: 100px; /* Радиус скругления */
}
.decor:hover .round,.decor1:hover .round {
  transition: 1s;
  left: auto;
  right: auto;
  top: 50%;
  bottom: 50%;
  width: 50%;
  border-radius: 10px; /* Радиус скругления */
  color: #2cffff;
}
.decor:not(:hover) .round,.decor1:not(:hover) .round{
  transition: 1s;
  left: auto;
  right: auto;
  top: 50%;
  bottom: 50%;
  width: 50%;
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
  background: #d89b56;
  border-radius: 30px;
  top: 25%;
  bottom: 25%;
}
.decor1 {
  position: absolute;
  left: 10%;
  right: 55%;
  max-width: 400px;
  margin: 50px auto 0;
  background: #cc5165;
  border-radius: 30px;
  top: 25%;
  bottom: 25%;
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