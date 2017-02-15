/* *Project Name:SAF招聘项目模板v1.0
*=====================================
*Copy 2016-2017 SAF网络联盟
*Web: http://www.52saf.com
*=====================================
*Author: 逸轩
*QQ：740749820
*Date: ${date} */

/* swiper animate */
var mySwiper = new Swiper ('.swiper-container', {
  direction : 'vertical',
  pagination: '.swiper-pagination',
  mousewheelControl : true,
  onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
  swiperAnimateCache(swiper); //隐藏动画元素 
  swiperAnimate(swiper); //初始化完成开始动画
  }, 
  onSlideChangeEnd: function(swiper){ 
    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
  } 
})

/*背景音乐*/
var img=document.querySelector('.play');
var audio=document.createElement('audio');
audio.src='http://ojax5auf5.bkt.clouddn.com/52saf.com.mp3';
audio.autoplay=true;
document.body.appendChild(audio);
$('.play').click(function () {
  if(audio.paused){
    audio.play();
    img.style.animationPlayState='running';
    img.style.webkitAnimationPlayState='running';
  }else{
    audio.pause();
    img.style.animationPlayState='paused';
    img.style.webkitAnimationPlayState='paused';
  }
})