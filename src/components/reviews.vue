<template>
  <div class="reviews">
    <div class="last-reviews">
      <div class="wrapper">
        <span> Последние отзывы</span>
        <a href="#">Все отзывы</a>
      </div>
      <div class="social">
        <div class="like">
          <i class="fas fa-heart"></i>
          <span>131</span>
        </div>
        <div class="comment">
          <i class="fas fa-comment-alt"></i>
          <span>14</span>
        </div>
      </div>
    </div>
    <div class="all-message">
      <div class="message" v-for="(msg,key) in postMsg" :key="key">
        <div class="user-info">
          <span class="name">{{msg.name}}</span>
          <span class="date">{{msg.date}}</span>
          
        </div>
        <div class="user-text">
          <p>{{msg.text}}</p>
        </div>
    </div>
    </div>
    <div class="text-area">
      <textarea v-model="textArea" @keyup.ctrl.13.prevent="addToArrMsg"></textarea>
      <a @click.prevent="addToArrMsg" class="button">Написать консультанту</a>
    </div>
  </div>
  
</template>

<script>
export default {
  
  name: 'reviews',
 data() {
   return {
     msgArr:[],
     textArea : "",
     userMsg:null,
   }
 },
 computed:{
   postMsg(){
     return this.msgArr
      },
  
    },
methods:{
  Msg:function(text,name,date){
    this.text= text;
    this.name = name;
    this.date = date||"20.12.12"
    },
  addToArrMsg(){
    if(this.textArea == ""){
      alert("Введите сообщение");
    }else{
      this.userMsg = new this.Msg(this.textArea,"vas9",this.$moment().local('ru').format('LL'));
      this.msgArr.push(this.userMsg)
      this.textArea ="";
      }
   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .reviews{
    min-width: 360px ;
    max-width: 720px;
    width: 100%;
    font-family: arial;
    font-size: 14px;
  }
  .last-reviews{
    display: flex;
    justify-content: space-around;
    padding-bottom: 10px;
  }
  .last-reviews .social{
    display: flex;
    width: 100px;
    justify-content: space-around;
  }
  .last-reviews .wrapper span{
    font-size: 16px;
    font-weight: bold;
    margin-right: 10px;
  }
  .all-message{
    padding:0 20px;
    background-color: white;
  }
  .message{
    width: 100%;
    margin: 20px 0;
    font-size: 14px;
  }
  .name{
    font-weight: bold;
    margin-right: 10px;
  }
  .date{
    font-size: 11px;
    color: #808080;
  }
  .user-info{
    padding: 10px 0;
  }
  .text-area{
    background-color: #f2f2f2;
    padding: 20px 20px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .text-area textarea{
    height: 25%;
    width: 100%;
  }
  .text-area .button{
    background-color: #fdd639;
    border: none;
    padding: 15px 50px;
    border-radius: 25px;
    font-family: 'PT Sans';
    font-weight: bold;
    font-size: 16px;
  }
  .text-area .button:hover{
    box-shadow: inset 0px 0px 20px 2px rgba(0,0,0,0.75);
    cursor: pointer;
  }
  p {
    line-height: 1.5;
    position: relative;
    padding:20px;
    background-color: #f2fbff;
    border: 1px solid #cfcfcf;
  }
  p:after, p:before {
    bottom: 100%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }
 
  p:after {
    border-color: rgba(255, 255, 255, 0);
    border-bottom-color: #f2fbff;
    border-width: 8px;
    left: 20px;
    margin-left: -8px;
  }
  p:before {
    border-color: rgba(0, 0, 0, 0);
    border-bottom-color: #cfcfcf;
    border-width: 10px;
    margin-left: -10px;
  }
  .fas{
    color:#73b4d5;
    text-shadow: 0px 2px 1px #000000; 
    margin-right: 5px;
  }
  .fa-comment-alt{
    transform: scale(-1, 1);
  }
</style>
