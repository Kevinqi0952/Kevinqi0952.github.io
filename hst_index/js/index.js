$(document).ready(function() {

    var pageAnimate = {
        pageOne: {
            animate: function() {
                //相同class名第一条为load动画，第二条为leave动画
                $('.page1-content-bg').toggleClass('fadeInDownBig');
                $('.page1-content-bg').toggleClass('fadeOutUpBig');

                $('.page1-left-content-img1').toggleClass('fadeInLeftBig');
                $('.page1-left-content-img1').toggleClass('fadeOutLeftBig');
                $('.page1-left-content-img1').toggleClass('animate-delay5');

                $('.page1-left-content-img2').toggleClass('fadeInLeftBig');
                $('.page1-left-content-img2').toggleClass('fadeOutLeftBig');
                $('.page1-left-content-img2').toggleClass('animate-delay6');

                $('.page1-left-content-img3').toggleClass('fadeInLeftBig');
                $('.page1-left-content-img3').toggleClass('fadeOutLeftBig');
                $('.page1-left-content-img3').toggleClass('animate-delay7');

                $('.page1-left-content-img4').toggleClass('fadeInDownBig');
                $('.page1-left-content-img4').toggleClass('fadeOutUpBig');
                $('.page1-left-content-img4').toggleClass('animate-delay8');

                $('.page1-left-content-img5').toggleClass('fadeInDownBig');
                $('.page1-left-content-img5').toggleClass('fadeOutUpBig');
                $('.page1-left-content-img5').toggleClass('animate-delay9');

                $('.page1-right-content-title').toggleClass('fadeInBig');
                $('.page1-right-content-title').toggleClass('fadeOutUpBig');
                $('.page1-right-content-title').toggleClass('animate-delay1');

                $('.page1-right-content').toggleClass('fadeInRightBig');
                $('.page1-right-content').toggleClass('fadeOutRightBig');
                $('.page1-right-content').toggleClass('animate-delay1');

                $('.page1-bottom-img').toggleClass('fadeInUpBig');
                $('.page1-bottom-img').toggleClass('fadeOutDownBig');
            }
        },
        pageTwo: {
            animate: function() {
              //相同class名第一条为load动画，第二条为leave动画
              $('.page2-content-bg').toggleClass('fadeInDownBig');
              $('.page2-content-bg').toggleClass('fadeOutUpBig');

              $('.page2-left-content-img1').toggleClass('fadeInLeftBig');
              $('.page2-left-content-img1').toggleClass('fadeOutLeftBig');
              $('.page2-left-content-img1').toggleClass('animate-delay6');

              $('.page2-left-content-img2').toggleClass('jackInTheBox');
              $('.page2-left-content-img2').toggleClass('fadeOutUpBig');
              $('.page2-left-content-img2').toggleClass('animate-delay1');

              $('.page2-right-content-title').toggleClass('fadeIn');
              $('.page2-right-content-title').toggleClass('fadeOutUpBig');
              $('.page2-right-content-title').toggleClass('animate-delay1');

              $('.page2-right-content').toggleClass('fadeInRightBig');
              $('.page2-right-content').toggleClass('fadeOutRightBig');
              $('.page2-right-content').toggleClass('animate-delay1');
            }
        },
        pageThree: {
            animate: function() {
              //相同class名第一条为load动画，第二条为leave动画
              $('.page3-content-bg').toggleClass('fadeIn');
              $('.page3-content-bg').toggleClass('fadeOutUpBig');
              $('.page3-content-bg').toggleClass('animate-duration1');

              $('.page3-left-content-img1').toggleClass('flipInX');
              $('.page3-left-content-img1').toggleClass('fadeOutLeftBig');
              $('.page3-left-content-img1').toggleClass('animate-delay4');

              $('.page3-left-content-img2').toggleClass('fadeIn');
              $('.page3-left-content-img2').toggleClass('fadeOutLeftBig');
              $('.page3-left-content-img2').toggleClass('animate-delay6');
              $('.page3-left-content-img2').toggleClass('animate-duration1');

              $('.page3-left-content-img3').toggleClass('slideInRightShip');
              $('.page3-left-content-img3').toggleClass('fadeOutLeftBig');
              $('.page3-left-content-img3').toggleClass('animate-delay6');
              $('.page3-left-content-img3').toggleClass('animate-duration4');

              $('.page3-right-content-title').toggleClass('fadeIn');
              $('.page3-right-content-title').toggleClass('fadeOutUpBig');
              $('.page3-right-content-title').toggleClass('animate-delay1');

              $('.page3-right-content').toggleClass('flipInX');
              $('.page3-right-content').toggleClass('fadeOutRightBig');
              $('.page3-right-content').toggleClass('animate-delay3');
            }
        },
        pageFour: {
            animate: function() {
              //相同class名第一条为load动画，第二条为leave动画
              $('.page4-left-content-img1').toggleClass('fadeInLeftBig');
              $('.page4-left-content-img1').toggleClass('fadeOutLeftBig');
              $('.page4-left-content-img1').toggleClass('animate-delay2');

              $('.page4-left-content-img2').toggleClass('fadeInLeftBig');
              $('.page4-left-content-img2').toggleClass('fadeOutLeftBig');
              $('.page4-left-content-img2').toggleClass('animate-delay3');

              $('.page4-left-content-img3').toggleClass('zoomIn');
              $('.page4-left-content-img3').toggleClass('fadeOutLeftBig');
              $('.page4-left-content-img3').toggleClass('animate-delay6');

              $('.page4-left-content-img4').toggleClass('bounceIn');
              $('.page4-left-content-img4').toggleClass('fadeOutLeftBig');
              $('.page4-left-content-img4').toggleClass('animate-delay7');

              $('.page4-left-content-img5').toggleClass('flipInX');
              $('.page4-left-content-img5').toggleClass('fadeOutLeftBig');
              $('.page4-left-content-img5').toggleClass('animate-delay9');

              $('.page4-right-content-title').toggleClass('fadeIn');
              $('.page4-right-content-title').toggleClass('fadeOutUpBig');
              $('.page4-right-content-title').toggleClass('animate-delay1');

              $('.page4-right-content').toggleClass('flipInX');
              $('.page4-right-content').toggleClass('fadeOutRightBig');
              $('.page4-right-content').toggleClass('animate-delay3');
            }
        },
        pageFive: {
            animate: function() {
              $('.page5-left-content-img1').toggleClass('fadeInUpBig');
              $('.page5-left-content-img1').toggleClass('fadeOutLeftBig');
              $('.page5-left-content-img1').toggleClass('animate-delay3');

              $('.page5-left-content-img2').toggleClass('zoomIn');
              $('.page5-left-content-img2').toggleClass('fadeOutLeftBig');
              $('.page5-left-content-img2').toggleClass('animate-delay8');

              $('.page5-left-content-img3').toggleClass('flipInX');
              $('.page5-left-content-img3').toggleClass('fadeOutLeftBig');
              $('.page5-left-content-img3').toggleClass('animate-delay4');

              $('.page5-right-content-title').toggleClass('fadeIn');
              $('.page5-right-content-title').toggleClass('fadeOutUpBig');
              $('.page5-right-content-title').toggleClass('animate-delay1');

              $('.page5-right-content').toggleClass('flipInX');
              $('.page5-right-content').toggleClass('fadeOutRightBig');
              $('.page5-right-content').toggleClass('animate-delay3');

            }
        }
    }
    $('#hst-index-fullpage').fullpage({
        'verticalCentered': false,
        'scrollingSpeed': '1000',
        'css3': true,
        // 'navigation': true,
        // 'navigationPosition': 'right',
        // 'navigationTooltips': [
        //     '网络', '卫星网络电话', '天气推送', '政府海洋事物管理', '海鲜在线收购平台'
        // ],

        'afterLoad': function(anchorLink, index) {
            console.log(anchorLink,index)
        },

        'onLeave': function(index, nextIndex, direction) {
           $('#fixedRightList').find('li').removeClass('active');
           $('#fixedRightList').find('li').eq(nextIndex-1).addClass('active');
            // page1 animate
            if ((index == 1 && direction == "down") || (index == 2 && direction == "up")) {
                pageAnimate.pageOne.animate();
            }
            // page2 animate
            if((nextIndex == 2 || nextIndex == 1 && direction == "up") || (nextIndex == 3 && direction == "down")){
              pageAnimate.pageTwo.animate();
            }

            //page3 amimate
            if((nextIndex == 3|| nextIndex == 2 && direction == "up") || (nextIndex == 4 && direction == "down")){
              pageAnimate.pageThree.animate();
            }

            //page4 amimate
            if((nextIndex == 4|| nextIndex == 3 && direction == "up") || (nextIndex == 5 && direction == "down")){
              pageAnimate.pageFour.animate();
            }

            //page5 amimate
            if((nextIndex == 5|| nextIndex == 4 && direction == "up")){
              pageAnimate.pageFive.animate();
            }
            console.log(index, direction,nextIndex)
        }
    })

    $('.ios-button,.android-button,#ios-button').on('mouseover',function(){
      var top = $(this).offset().top;
      var left = $(this).offset().left;
      var winHeight = $(document).height();
      var up = {
        top:top - 240,
        left:left  - 10,
      }

      var down = {
        top:top + 70,
        left:left - 10
      }

      if(winHeight > 700){
        $('.fixed-code').addClass('fixed-code-down');
        $('.fixed-code').css({ top:down.top,left:down.left });
        $('.fixed-code').show();
      } else{
        $('.fixed-code').addClass('fixed-code-top');
        $('.fixed-code').css({ top:up.top,left:up.left });
        $('.fixed-code').show();
      }

    });
    $('.ios-button,.android-button').on('mouseout',function(){
      $('.fixed-code').removeClass('fixed-code-down');
      $('.fixed-code').removeClass('fixed-code-top');
      $('.fixed-code').hide();
    });
})
