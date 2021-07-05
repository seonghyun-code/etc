var Links={
  setColor:function(color){
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while (i < alist.length){
    //   alist[i].style.color = color;
    //   i = i + 1;
    // }
    $('a').css('color',color);
  }
}
var Body={
  setBackgroundColor : function(color){
    //document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor',color);
  }
}

var h1={
  setBackgroundColor:function(color){
    //document.querySelector('h1').style.backgroundColor = color;
    $('h1').css('backgroundColor',color);
  }
}

function nightDayHandler(self){
  if(self.value==='night'){
    Body.setBackgroundColor("#7C7877");
    h1.setBackgroundColor('#D9D4CF');
    Links.setColor('white');
    self.value='day';
    //var target_0=document.querySelector('body');
    //var target_1=document.querySelector('h1');
    //target_0.style.backgroundColor='#7C7877';
    //var alist=document.querySelectorAll('a');
    //var i = 0;
    //while(i < alist.length){
    //  console.log(alist[i]);
    //  alist[i].style.color = 'white';
    //  i = i + 1;
    //}
  }
  else{
    Body.setBackgroundColor("white");
    h1.setBackgroundColor('pink');
    Links.setColor('black');
    self.value='night';
  }
}
