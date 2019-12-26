$(document).ready(function () {
    $("#lightgallery").lightGallery();

    AOS.init();

    var replyes = new Swiper('.replyes-container', {
        spaceBetween: 1,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },

        navigation: {
            nextEl: '#replyes-btn-next',
            prevEl: '#replyes-btn-prev',
        },
    });
    var gelery_swiper = new Swiper('.galery-container', {
        spaceBetween: 1,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },

        navigation: {
            nextEl: '.galery-button-next',
            prevEl: '.galery-button-prev',
        },
    });

    //Исключаем переход по ссылке на изображение в галерее
    $('.block-link').on('click', function (e) {
        e.preventDefault();
    })

    ymaps.ready(init);

    function init() {
        var myMap = new ymaps.Map("map", {
            center: [59.996849, 30.219523],
            zoom: 16,
            controls: ['zoomControl'],
            scroll: false
        });
        myMap.behaviors.disable('scrollZoom');
        
        
        var placemark = new ymaps.Placemark(myMap.getCenter(), {
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<p class="map_header text-center">Контакты</p>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<div class="map_desc justify-content-center text-center"><p class="text-center">ООО&nbsp;&laquo;Компания&nbsp;Комплит&raquo;</p>' +
            '<p>197374, г.Санкт-Петербург, ул.Яхтенная, д.22, корп. 1, лит А</p>'+
            '<a class="justify-content-center" href="tel:+7-812-740-30-10">+7 (812) 740-30-10</a></br>' +
            '<a class="justify-content-center" href="tel:+7-812-740-30-11">+7 (812) 740-30-11</a></br>' +
            '<a class="justify-content-center" href="mailto:dc@complete.ru">dc@complete.ru</a></div>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '<div class="text-center"><a href="#" class="map_facebook"></a><a href="#" class="map_linkedin"></a><a href="#" class="map_youtube"></a></div>',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'ООО&nbsp;КОМПЛИТ'
    }, {
        preset: 'islands#redDotIcon'
    });
    // Добавим метку на карту.
    myMap.geoObjects.add(placemark);
    // Откроем балун на метке.
    placemark.balloon.open();
    }

});