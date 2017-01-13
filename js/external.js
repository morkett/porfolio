
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
        .setClassToggle('.sidebar--projects-main', 'js-sticky') // ad class to project01
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
        triggerElement: '.container--about',
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

      //PROJECT INFO REVEAL
      // d2e
        $('.main-projects--d2e img, .main-projects--d2e .h3--projects, .main-projects--d2e .h4--projects').click(function(){
          $('body, html').animate({
            scrollTop: $('.main-projects').offset().top
        }, 250);
          $('body, section').addClass("js-nav-click-overflow");
          $('.main-projects--d2e .h3--projects, .main-projects--d2e .h4--projects').addClass('js-no-opacity');

          setTimeout(function() {
              $('.sidebar--projects-page-d2e').addClass('js-nav-show');
          }, 250);
        });

        $('.icon-arrow-back-d2e').click(function(){
          $('.sidebar--projects-page').removeClass('js-nav-show');
          $('body, section').removeClass("js-nav-click-overflow");
          $('.main-projects--d2e .h3--projects, .main-projects--d2e .h4--projects').removeClass('js-no-opacity');
        });


        // clocks
          $('.main-projects--clocks img, .main-projects--clocks .h3--projects, .main-projects--clocks .h4--projects').click(function(){
            $('body, html').animate({
              scrollTop: $('.main-projects--clocks').offset().top
          }, 250);
            $('body, section').addClass("js-nav-click-overflow");
            $('.main-projects--clocks .h3--projects, .main-projects--clocks .h4--projects').addClass('js-no-opacity');
            $(".container-projects-clock").css("z-index","5");

            setTimeout(function() {
                $('.sidebar--projects-page-clocks').addClass('js-nav-show');
                $('.clocks-frame').addClass('js-iFrame-show');
            }, 250);
          });

          $('.icon-arrow-back-clocks').click(function(){
            $('.sidebar--projects-page').removeClass('js-nav-show');
            $('body, section').removeClass("js-nav-click-overflow");
            $('.main-projects--clocks .h3--projects, .main-projects--clocks .h4--projects').removeClass('js-no-opacity');

            $('.clocks-frame').removeClass('js-iFrame-show');

            setTimeout(function() {
              $(".clocks-frame").contents().find("section").css("display", "none");
              $(".container-projects-clock").css("z-index","0");

            }, 610);
          });

        // heart
        $('.main-projects--heart img, .main-projects--heart .h3--projects, .main-projects--heart .h4--projects').click(function(){
          $('.main-projects--heart').removeClass('js-sticky-right');
          $('body, html').animate({
            scrollTop: $('.main-projects--heart').offset().top
        }, 250);

          $('body, section').addClass("js-nav-click-overflow");
          $('.main-projects--heart .h3--projects, .main-projects--heart .h4--projects').addClass('js-no-opacity');
          $('.heart-frame').addClass('js-block');

            $(".heart-frame").contents().find("section").css("display", "block");


          setTimeout(function() {
              $('.sidebar--projects-page--heart').addClass('js-nav-show');

              $('.heart-frame').addClass('js-iFrame-show');

          }, 250);
        });



        $('.icon-arrow-back-heart').click(function(){
          $('.sidebar--projects-page--heart').removeClass('js-nav-show');
          $('body, section').removeClass("js-nav-click-overflow");
          $('.main-projects--heart').addClass('js-sticky-right');
          $('.main-projects--heart .h3--projects, .main-projects--heart .h4--projects').removeClass('js-no-opacity');

          $('.heart-frame').removeClass('js-iFrame-show');

          setTimeout(function() {
            $(".heart-frame").contents().find("section").css("display", "none");

          }, 610);
        });

        //heart animation replay
        $('.icon-replay').click(function(){
          $(".heart-frame").contents().find("section").css("display", "none");

          setTimeout(function() {
            $('.heart-frame').contents().find("section").css("display", "block");
          }, 01);
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

      // //TABLET PROJECT H2  - Opacity
      // var opacity1 = new ScrollMagic.Scene({
      // triggerElement: '.h2--projects',
      // triggerHook:0
      // })
      // .setClassToggle('.h3--projects', 'js-opacity') // ad class to project01
      // // .addIndicators({
      // // name: 'info no-sticky',
      // // colorTrigger:'black',
      // // colorStart: 'rgb(163, 44, 44)',
      // // colorEnd: 'pink',
      // // indent:450,
      // // }) //plugin
      // .addTo(controller);

    //NAV SCROLL DISABLED 29/11
      $('.js-scroll-site, .js-link-site').click(function(event) {
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



    });
