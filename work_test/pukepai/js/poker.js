function poker(para)
{
    var poker1 = $('.poker');
    var poker2 = $('.poker2');
    var insideBoxX = poker1.offset().left;
    var insideBoxY = poker1.offset().top;
    var cardList = $('.card');
    var cardList2 = $('.card2');
    var pointer2 = $('.pointer2');
    var cardLength = cardList.length;
    var pointer = $('.pointer');
    var pointerX = pointer.offset().left - insideBoxX;
    var pointerY = pointer.offset().top - insideBoxY;
    var cardPosArray = [];
    var animateIn = para.animateInSpeed||200;
    var animateOut = para.animateOutSpeed||300;
    var maxFlipCount = para.maxFlipCount||3;
    var isStart = true;





    function shuffle()
    {
        if(isStart)
        {
            isStart = false;
            for(var i=0;i<cardLength;i++)
            {
                var tempArray = [];
                tempArray[0] = $(cardList[i]).offset().left - insideBoxX;
                tempArray[1] = $(cardList[i]).offset().top - insideBoxY;
                cardPosArray.push(tempArray);
                tempArray = null;

                (function(i){var t1 = setTimeout(function()
                {
                    $(cardList[i]).animate(
                        {
                            'left':pointerX+"px",
                            'top':pointerY+"px",
                            'opacity':0
                        },animateIn,"swing");
                    clearTimeout(t1);
                },animateIn*(i+1));})(i);



                (function(i){var t2 = setTimeout(function()
                {
                    poker1.hide();
                    poker2.show();
                    $(cardList2[i]).animate(
                        {
                            'left':cardPosArray[i][0]+"px",
                            'top':cardPosArray[i][1]+"px",
                            'opacity':1
                        },animateOut,"swing");
                    clearTimeout(t2);
                },animateOut*(i+1)+animateIn*cardLength+200);})(i);
            }
        }else
        {
            pointer2.children('.back').removeClass('in').addClass('out');
            setTimeout(function()
            {
                pointer2.children('.front').removeClass('out').addClass('in');
            },225);
        }
    }


    //确定有几张牌已翻转
    function flipCount()
    {
        var count = 0;
        for(var i=0;i<cardLength;i++)
        {
            if ($(cardList2[i]).children('.front').hasClass('in'))
            {
                count++;
            }
        }
        if(count >= maxFlipCount)
        {
            return false;
        }else
        {
            return true;
        }
    }

    //翻牌
    cardList2.click(function()
    {
        if(!isStart)
        {
            var self = $(this);
            if(flipCount())
            {
                self.children('.back').removeClass('in').addClass('out');
                setTimeout(function()
                {
                    self.children('.front').removeClass('out').addClass('in');
                },225);
            }else
            {
                if(self.children('.front').hasClass('out'))
                {
                    alert("您的机会用完了");
                }
            }
        }else
        {
            alert("请点击开始按钮！");
        }
    });





    //点击开始
    pointer.click(shuffle);
    pointer2.click(function()
    {
        pointer2.children('.back').removeClass('in').addClass('out');
        setTimeout(function()
        {
            pointer2.children('.front').removeClass('out').addClass('in');
        },225);
    });
}
