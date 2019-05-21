$( document ).ready(function() {
   
    var textContent = [
        {
            title: 'Joys Spritz',
            text: 'Joys Spritz je bezalkoholno gazirano osvježavajuće piće koje okusom podsjeća na aperol koktel. Sadrži aromu kore narandže s dodatkom arome bijelog prosecco vina. ',
            tooltip: 'Osnovni sastojci:  voda, šećer, arome biljnih sokova zajedno sa sokom kore od narandže. Suha tvar (min. 8 %). Energetska vrijednost 39 kcal = 164 kJ.'
        }, 
        {
            title: 'Joys Hugo',
            text: 'Joys Hugo je bezalkoholno ljetnje osvježavajuće blago gazirano piće s okusom zove, dodatkom limuna ili limete i dodatkom arome listića mente.',
            tooltip: 'Osnovni sastojci:  voda, šećer, limunov sok (1% od baze limun) zajedno s aromom zove. Suha tvar (min. 7 %). Nutritivne informacije 100 ml. Energetska vrijednost 29 kcal = 123 kJ.'
        },
        {
            title: 'Joys Tonic',
            text: 'Joys Tonic je bezalkoholno osvježavajuće gazirano piće obogaćeno okusom maline, limunske trave i kininom koji mu daje prepoznatljiv gorak ukus.  Tonik je prepoznatljiv po tome što se koristi u pripremi raznih koktela.',
            tooltip: 'Osnovni sastojci:  voda, šećer, aroma kinina (<0,1 %), sa aromom limunske trave i drugih prirodnih sastojaka iz prirode, prirodne i prirodno identične. Suha tvar (min. 7 %). Energetska vrijednost 33 kcal = 140 kJ.'
        },
        {
            title: 'Joys Cola',
            text: 'Joys Cola je bezalkoholno osvježavajuće gazirano piće napravljeno od biljnih ekstrakata sa aromom kole, pića koje svi poznajemo.',
            tooltip: 'Sastojci: voda, šećer, ugljični dioksid (CO2 min. 4 g/l ), Boja E 150d, Regulator kiselosti : Fosforna kiselina, Konzervans E 211, Aroma: Kofein (<0,1%), Stabilizator E 414. Suha tvar (min. 10 %). Nutritivne informacije 100 ml. Energija 	43 kcal = 183 kJ. Masti 0 g. Od toga šećeri 	0 g. Ugljikohidrati 11 g. Od toga šećeri 11 g. Proteini 0 g. So 0 g.'
        }

    ]

    // Carousel desktop
    $(".carousel").Cloud9Carousel( {
        buttonLeft: $(".controls > .left"),
        buttonRight: $(".controls > .right"),
        autoPlay: 1,
        autoPlayDelay: 8000,
        bringToFront: true,
        xOrigin: 200,
        yOrigin: 100,
        xRadius: 100,
        yRadius: 20,
        farScale: 0.2,
        onAnimationFinished: function( carousel ) {
            var item = $(".carousel").data("carousel").nearestIndex();
            $('#desktop .container').css('background-image', "url('./img/bg-0" + (item+1) + ".jpg')");
            $('#desktop #ballz img').attr("src","./img/balls-0" + (item+1) + ".png");
            $('.text-div h1').text(textContent[item].title);
            $('.text-div h4').text(textContent[item].text);
            $('.tooltiptext').text(textContent[item].tooltip);

        }
      } );


    // clik on controls - change background and ballz
    //
    // $('.controls .left').click(function(e) {
    //     $('#desktop .container').css('background-image', "url('/img/bg-01.jpg')");
    //     $('#desktop #ballz img').attr("src","/img/balls-01.png");
    //     e.preventDefault();
    // });
    // $('.controls .right').click(function(e) {
    //     $('#desktop .container').css('background-image', "url('/img/bg-02.jpg')");
    //     $('#desktop #ballz img').attr("src","/img/balls-02.png");
    //     e.preventDefault();
    // });

        // Carousel mobile
        $("#carousel-mobile").Cloud9Carousel( {
            buttonLeft: $(".controls-mobile > .left"),
            buttonRight: $(".controls-mobile > .right"),
            autoPlay: 1,
            autoPlayDelay: 8000,
            bringToFront: true,
            xOrigin: 200,
            yOrigin: 100,
            xRadius: 70,
            yRadius: 30,
            onAnimationFinished: function( carousel ) {
                var item = $("#carousel-mobile").data("carousel").nearestIndex();

                $('.text-div-mobile h1').text(textContent[item].title);
                $('.text-div-mobile h4').text(textContent[item].text);
                $('#mobile .container-mobile').css('background-image', "url('./img/bg-mobile-0" + (item+1) + ".jpg')");
                // $('.tooltiptext').text(textContent[item].tooltip);

            }
          } );

    // Balls movement
    var scene = document.getElementById('ballz');
    var parallaxInstance = new Parallax(scene);
    
});