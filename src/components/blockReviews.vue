<template>
  <div class="block-reviews">
    <div class="info">
        <div class="avatar">
            <img src="~@/assets/avatar.jpg" alt="">
        </div>
        <div class="info-name">
            <h3>Вероника Ростова</h3>
            <span>менеджер по продажам</span>
            <div class="coment">
                <p>Подберу для вас самые лучшие предложения.<br>Мои услуги абсолютно бесплатны</p>
            </div>
        </div>
    </div>
    <div class="services">
        <div class="service-wrapper">
            <h3>Услуг</h3>
        <div class="warpper">
            <div class="servise-scale">
                <div class="manual-reservation scale">
                    <span class="description">Ручное бронирование</span>
                </div>
                <div class="count">11</div>
            </div>
            <div class="servise-scale">
                <div class="package-tours scale">
                    <span class="description">Пакетные туры</span>
                </div>
                <div class="count">3</div>
            </div>
            <div class="servise-scale">
                <div class="hotels scale">
                    <span class="description">Отели</span>
                </div>
                <div class="count">1</div>
            </div>
        </div>
        <div class="count-all">
            <span>Всего</span>
            <span>15</span>
        </div>
        </div>
    </div>
    <reviews/>
  </div>
</template>

<script>
import reviews from './reviews.vue'

export default {
  name: 'blockReviews',
  components: {
    reviews
  }
}
</script>

<style scoped>
.info-name{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 10px;
    
}
.info-name h3{
   font-size: 16px;
   font-weight: bold;
}
.info span{
    font-size: 14px;
    color: #808080;
    margin: 10px 0;
}
.block-reviews{
    padding-top: 20px;
    min-width: 360px ;
    max-width: 720px;
    width: 100%;
    background-color: white;
    font-family: Arial, Helvetica, sans-serif;
}
.coment{
    background-color: #fffbc8;
    border: 1px solid #cecabf;
    padding: 10px 10px 10px 60px;
    border-radius: 10px;
    transform: translateX(-62px);
    line-height: 1.2;
}
.avatar{
    min-width: 120px;
	min-height: 120px;
    width: 120px;
    height: 120px;
	background: red;
	-moz-border-radius: 60px;
	-webkit-border-radius: 60px;
    border-radius: 50%;
    z-index: 1;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;  
}
.avatar img{
    width: 200px;
}
.service-wrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
}
.service-wrapper h3{
    font-size: 13px;
    margin-bottom: 5px;

}
.services{
    padding-top: 10px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.warpper{
    display: flex;
    justify-content: center;
    align-items: stretch;
    flex-direction: column;
    width: 320px;
    height: 100px;
    border-top: 1px solid #cccccc;
    border-bottom: 1px solid #cccccc;
    font-size: 13px;
}
.servise-scale{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2px 0;
}
.scale{
     display:flex;
    align-items: center;
    height: 25px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-top: 1px solid ;
    border-bottom: 1px solid ;
}
.manual-reservation{
    width: 220px;
    background-color: #b1e19b;
    border-top-color:  #b1e19b;
    border-bottom-color:#b1e19b ;
}
.manual-reservation::before{
    content: "";
    height: 100%;
    border: 1px solid #83b26d;
}
.package-tours{
    width: 55px;
    background-color: #ace2f8;
    border-top-color:  #ace2f8;
    border-bottom-color:#ace2f8 ;
}
.package-tours::before , .hotels::before{
     content: "";
    height: 100%;
    border: 1px solid #7eb4ca;

}
.hotels{
    width: 35px;
    background-color: #ace2f8;
     background-color: #ace2f8;
    border-top-color:  #ace2f8;
    border-bottom-color:#ace2f8 ;
}
.description{
    position: absolute;
    margin-left: 5px;
}
.count-all{
    margin-top:10px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-size:16px;
    font-weight: bold;
}
.count{
    font-weight: bold;
}

</style>
