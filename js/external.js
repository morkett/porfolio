
    $(document).ready(function() {
      var controller = new ScrollMagic.Controller();
// TODO: REMOVE INDICATORS FROM JS

/////////////////// PIN TO HEADER ////////////////////////
    var pinToHeader = new ScrollMagic.Scene({
        triggerElement: '.header-home',
        triggerHook: 0,
        // duration: '30%'

      })
      .setPin('.header-home', {pushFollowers: false})
      // .addIndicators({
      //   name: 'pin-Header-1',
      //   colorTrigger:'black',
      //   colorStart: '#75c695',
      //   colorEnd: '#75c695'
      // })
      .addTo(controller);

      // // pin again
      // var pinToHeader2 = new ScrollMagic.Scene({
      // 	triggerElement: '.container-projects',
      // 	triggerHook: 0.4
      // })
      // .setPin('.header-home', {pushFollowers: false})
      // .addIndicators({
      //   name: 'pin-Header-2',
      //   colorTrigger:'darkgreen',
      //   colorStart: '#75c695',
      //   colorEnd: 'pink',
      //   indent: -100
      // })
      // .addTo(controller);


/////////////////// SCROLL ////////////////////////

      //PROJECTS SIDEBAR  - FIXED
        var scrollfixed1 = new ScrollMagic.Scene({
        triggerElement: '.container-projects',
        triggerHook:0,
        })
        .setClassToggle('.sidebar--projects', 'js-sticky') // ad class to project01
        // .addIndicators({
        // name: 'sidebar--projects',
        // colorTrigger:'black',
        // colorStart: 'rgb(31, 143, 207)',
        // colorEnd: 'pink',
        // indent:300
        // })
        .addTo(controller);

        //BLINDER
        var scrollfixed2 = new ScrollMagic.Scene({
        triggerElement: '.container-projects',
        triggerHook:0
        })
        .setClassToggle('.header-home', 'blinder') // ad class to project01
        // .addIndicators({
        // name: 'blinder',
        // colorTrigger:'black',
        // colorStart: 'rgb(163, 44, 44)',
        // colorEnd: 'pink',
        // indent:700,
        // }) //plugin
        .addTo(controller);

        //PROJECTS MAIN - NO-FIXED
        var scrollfixed2 = new ScrollMagic.Scene({
        triggerElement: '.container-projects',
        triggerHook:0
        })
        .setClassToggle('.main-projects--d2e', 'js-no-sticky') // ad class to project01
        // .addIndicators({
        // name: 'd2e no-sticky',
        // colorTrigger:'black',
        // colorStart: 'rgb(163, 44, 44)',
        // colorEnd: 'pink',
        // indent:450,
        // }) //plugin
        .addTo(controller);

      //PROJECTS MAIN LAST - FIXED
        var scrollfixed3 = new ScrollMagic.Scene({
        triggerElement: '.container-projects--last',
        triggerHook:0
        })
        .setClassToggle('.main-projects--last', 'js-sticky-right') // ad class to project01
        // .addIndicators({
        // name: 'last project sticky',
        // colorTrigger:'black',
        // colorStart: 'rgb(163, 44, 44)',
        // colorEnd: 'pink',
        // indent:450,
        // }) //plugin
        .addTo(controller);

      //ABOUT SIDEBAR  - FIXED
        var scrollfixed1 = new ScrollMagic.Scene({
        triggerElement: '.container--about',
        triggerHook:0,
        })
        .setClassToggle('.sidebar--about', 'js-sticky') // ad class to project01
        // .addIndicators({
        // name: 'sidebar--about',
        // colorTrigger:'black',
        // colorStart: 'rgb(31, 143, 207)',
        // colorEnd: 'pink',
        // indent:300
        // })
        .addTo(controller);

        //ABOUT MAIN  - NO-FIXED
        var scrollfixed2 = new ScrollMagic.Scene({
        triggerElement: '.container--about',
        triggerHook:0
        })
        .setClassToggle('.main-about-info', 'js-no-sticky') // ad class to project01
        // .addIndicators({
        // name: 'info no-sticky',
        // colorTrigger:'black',
        // colorStart: 'rgb(163, 44, 44)',
        // colorEnd: 'pink',
        // indent:450,
        // }) //plugin
        .addTo(controller);

      //NEW ANIMATION
      // FIXME: ii) change from body + create hamburger
      $('.btn').click(function(){
        $('.nav-desktop').toggleClass("js-nav-show");
        $('.nav-darken').toggleClass("js-nav-darken-show");

        $('body, section').toggleClass("js-nav-click-overflow");
        $('.wrap').toggleClass("js-blur");
        $('.btn-nav').toggleClass('js-btn-nav-close');
    });

      $('.nav-darken').click(function(){
        $('.nav-desktop').toggleClass("js-nav-show");
        $('.nav-darken').toggleClass("js-nav-darken-show");

        $('body, section').toggleClass("js-nav-click-overflow");
        $('.wrap').toggleClass("js-blur");
        $('.btn-nav').toggleClass('js-btn-nav-close');
      });
      // $('.nav-desktop').mouseout(function(){
      //   $('.nav-desktop').addClass("js-nav-hide");
      // });

      //TEMP BEHAVIOUR
      // $('.nav-desktop').click(function(){
      //   $('.nav-desktop').addClass("js-nav-hide");
      //   $('.nav-darken').toggleClass("js-nav-darken-show");
      //   $('body, section').removeClass("js-nav-click-overflow");
      //   $('.wrap').removeClass("js-blur");
      // });
      //TEMP BEHAVIOUR

      $('.js-link-site').click(function(){
        $('.nav-desktop').toggleClass("js-nav-show");
        $('.nav-darken').toggleClass("js-nav-darken-show");

        $('body, section').toggleClass("js-nav-click-overflow");
        $('.wrap').toggleClass("js-blur");
        $('.btn-nav').toggleClass('js-btn-nav-close');
      });
      // $('.nav-desktop').mouseover(function(){
      //   $('.nav-desktop').removeClass("js-nav-hide");
      // });



    //NAV SCROLL DISABLED 29/11
      $('.js-scroll-site').click(function(event) {
          // event.preventDefault();

        var href = $(this).attr('href');
        var target = $(href);
        var position = target.offset().top

        // setTimeout(function() {
          $('body, html').animate({
            scrollTop: position
        }, 700);
      // },500);

        });

    //ANIMATION
    $('.js-down-click').click(function() {
        $('.main--ani-in').addClass('js--main--ani-start');
        setTimeout(function() {
            window.location.href = "/project_down-to-earth.html";
        }, 500);
    });
    $('.js-heart-click').click(function() {
        $('.main--ani-in').addClass('js--main--ani-start');
        setTimeout(function() {
            window.location.href = "/project_beating-heart.html";
        }, 500);
    });
    //mobile nav
    $('.nav-btn').click(function() {
        $(this).addClass('js-nav-btn-opacity')
        $('.nav-btn span').toggleClass('ani');
        $('.nav--mobile').toggleClass('js-display-flex');
    });

    $('.nav--mobile').click(function() {
        $('.nav-btn span').toggleClass('ani');
        $('.nav--mobile').toggleClass('js-display-flex');
    });


//hover main
$('.main-projects').mouseover(function(){
  $(this).children('h3, h4').addClass('js-hover');
});

$('.main-projects').mouseout(function(){
  $(this).children('h3, h4').removeClass('js-hover');
});


    });
