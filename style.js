var content= document.getElementById("gallery");
var button= document.getElementById("show");

button.onclick = function(){

    if(content.className== "open"){
        //shrink the box
        content.className="";
        button.innerHTML="show more";

    }
    else{
        //expand the box

        content.className="open";
        button.innerHTML="show less";
    }

};

var image1= document.getElementById('image1')
var images1=['123-01 (1).jpg','20201203_133904.png','anime (1).jpg','ben10__-01 (1).jpg','christmas (1).png','cute (1).jpg','Dr_Strange-01 (1).png','low_polly-01 (1).png','stefensalvatore.png','summer__-01.png','task3-01 (1).png','techn-01.jpg', 'yo-01.png', 'zz-01 (1).png']
setInterval(function(){
    var random=Math.floor(Math.random()*14);
    image1.src=images1[random];
},1000);

var image2= document.getElementById('image2')
var images2=['123-01 (1).jpg','20201203_133904.png','anime (1).jpg','ben10__-01 (1).jpg','christmas (1).png','cute (1).jpg','Dr_Strange-01 (1).png','low_polly-01 (1).png','stefensalvatore.png','summer__-01.png','task3-01 (1).png','techn-01.jpg', 'yo-01.png', 'zz-01 (1).png']
setInterval(function(){
    var random=Math.floor(Math.random()*14);
    image2.src=images2[random];
},1000);

var image3= document.getElementById('image3')
var images3=['123-01 (1).jpg','20201203_133904.png','anime (1).jpg','ben10__-01 (1).jpg','christmas (1).png','cute (1).jpg','Dr_Strange-01 (1).png','low_polly-01 (1).png','stefensalvatore.png','summer__-01.png','task3-01 (1).png','techn-01.jpg', 'yo-01.png', 'zz-01 (1).png']
setInterval(function(){
    var random=Math.floor(Math.random()*14);
    image3.src=images3[random];
},1000);

var image4= document.getElementById('image4')
var images4=['123-01 (1).jpg','20201203_133904.png','anime (1).jpg','ben10__-01 (1).jpg','christmas (1).png','cute (1).jpg','Dr_Strange-01 (1).png','low_polly-01 (1).png','stefensalvatore.png','summer__-01.png','task3-01 (1).png','techn-01.jpg', 'yo-01.png', 'zz-01 (1).png']
setInterval(function(){
    var random=Math.floor(Math.random()*14);
    image4.src=images4[random];
},1000);

var image5= document.getElementById('image5')
var images5=['123-01 (1).jpg','20201203_133904.png','anime (1).jpg','ben10__-01 (1).jpg','christmas (1).png','cute (1).jpg','Dr_Strange-01 (1).png','low_polly-01 (1).png','stefensalvatore.png','summer__-01.png','task3-01 (1).png','techn-01.jpg', 'yo-01.png', 'zz-01 (1).png']
setInterval(function(){
    var random=Math.floor(Math.random()*14);
    image5.src=images5[random];
},1000);

var image6= document.getElementById('image6')
var images6=['123-01 (1).jpg','20201203_133904.png','anime (1).jpg','ben10__-01 (1).jpg','christmas (1).png','cute (1).jpg','Dr_Strange-01 (1).png','low_polly-01 (1).png','stefensalvatore.png','summer__-01.png','task3-01 (1).png','techn-01.jpg', 'yo-01.png', 'zz-01 (1).png']
setInterval(function(){
    var random=Math.floor(Math.random()*14);
    image6.src=images6[random];
},1000);

var image7= document.getElementById('image7')
var images7=['123-01 (1).jpg','20201203_133904.png','anime (1).jpg','ben10__-01 (1).jpg','christmas (1).png','cute (1).jpg','Dr_Strange-01 (1).png','low_polly-01 (1).png','stefensalvatore.png','summer__-01.png','task3-01 (1).png','techn-01.jpg', 'yo-01.png', 'zz-01 (1).png']
setInterval(function(){
    var random=Math.floor(Math.random()*14);
    image7.src=images7[random];
},1000);

var image8= document.getElementById('image8')
var images8=['123-01 (1).jpg','20201203_133904.png','anime (1).jpg','ben10__-01 (1).jpg','christmas (1).png','cute (1).jpg','Dr_Strange-01 (1).png','low_polly-01 (1).png','stefensalvatore.png','summer__-01.png','task3-01 (1).png','techn-01.jpg', 'yo-01.png', 'zz-01 (1).png']
setInterval(function(){
    var random=Math.floor(Math.random()*14);
    image8.src=images8[random];
},1000);

var image9= document.getElementById('image9')
var images9=['123-01 (1).jpg','20201203_133904.png','anime (1).jpg','ben10__-01 (1).jpg','christmas (1).png','cute (1).jpg','Dr_Strange-01 (1).png','low_polly-01 (1).png','stefensalvatore.png','summer__-01.png','task3-01 (1).png','techn-01.jpg', 'yo-01.png', 'zz-01 (1).png']
setInterval(function(){
    var random=Math.floor(Math.random()*14);
    image9.src=images9[random];
},1000);

var image10= document.getElementById('image10')
var images10=['123-01 (1).jpg','20201203_133904.png','anime (1).jpg','ben10__-01 (1).jpg','christmas (1).png','cute (1).jpg','Dr_Strange-01 (1).png','low_polly-01 (1).png','stefensalvatore.png','summer__-01.png','task3-01 (1).png','techn-01.jpg', 'yo-01.png', 'zz-01 (1).png']
setInterval(function(){
    var random=Math.floor(Math.random()*14);
    image10.src=images10[random];
},1000);

var image11= document.getElementById('image11')
var images11=['123-01 (1).jpg','20201203_133904.png','anime (1).jpg','ben10__-01 (1).jpg','christmas (1).png','cute (1).jpg','Dr_Strange-01 (1).png','low_polly-01 (1).png','stefensalvatore.png','summer__-01.png','task3-01 (1).png','techn-01.jpg', 'yo-01.png', 'zz-01 (1).png']
setInterval(function(){
    var random=Math.floor(Math.random()*14);
    image11.src=images11[random];
},1000);

var image12= document.getElementById('image12')
var images12=['123-01 (1).jpg','20201203_133904.png','anime (1).jpg','ben10__-01 (1).jpg','christmas (1).png','cute (1).jpg','Dr_Strange-01 (1).png','low_polly-01 (1).png','stefensalvatore.png','summer__-01.png','task3-01 (1).png','techn-01.jpg', 'yo-01.png', 'zz-01 (1).png']
setInterval(function(){
    var random=Math.floor(Math.random()*14);
    image12.src=images12[random];
},1000);

var image13= document.getElementById('image13')
var images13=['123-01 (1).jpg','20201203_133904.png','anime (1).jpg','ben10__-01 (1).jpg','christmas (1).png','cute (1).jpg','Dr_Strange-01 (1).png','low_polly-01 (1).png','stefensalvatore.png','summer__-01.png','task3-01 (1).png','techn-01.jpg', 'yo-01.png', 'zz-01 (1).png']
setInterval(function(){
    var random=Math.floor(Math.random()*14);
    image13.src=images13[random];
},1000);

var image14= document.getElementById('image14')
var images14=['123-01 (1).jpg','20201203_133904.png','anime (1).jpg','ben10__-01 (1).jpg','christmas (1).png','cute (1).jpg','Dr_Strange-01 (1).png','low_polly-01 (1).png','stefensalvatore.png','summer__-01.png','task3-01 (1).png','techn-01.jpg', 'yo-01.png', 'zz-01 (1).png']
setInterval(function(){
    var random=Math.floor(Math.random()*14);
    image14.src=images14[random];
},1000);