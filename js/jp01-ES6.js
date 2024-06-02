document.addEventListener('DOMContentLoaded', function() {
    translate()
 }, false);

(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if(window.pageYOffset > 50){
            header.classList.add('header_active')
        }
        else{
            header.classList.remove('header_active')
        }
    }
})();

//burger handler
(function () {
    const burgerItem = document.querySelector('.burger')
    const menu = document.querySelector('.header__nav')
    const menuCloseItem = document.querySelector('.header__nav-close')
    const menuLinks = document.querySelectorAll('.header__link')
    burgerItem.addEventListener('click', () => {  
        menu.classList.add('header__nav_active')
    })
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__nav_active')
    })
    for (let i = 0; i < menuLinks.length; i += 1){
        menuLinks[i].addEventListener('click', () => {
            if (window.innerWidth <= 767 ) {
                menu.classList.remove('header__nav_active')
            }
        })
    }
})();

// Scroll to anchors
(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);
     };

    const scrollTo = () => {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };

    scrollTo();
})();

// 2lg
const lgConfig = {
    ru: {
        home: 'ГЛАВНОЕ',
        articles: 'СТАТЬЯ',
        locations: 'ЛОКАЦИИ',
        video: 'ВИДЕО',
        intro__title:'Откройте Для Себя Удивительные Места Казахстана',
        intro__subtitle:' Казахстан славится своими безграничными просторами степей, которые представляют собой удивительные ландшафты и уникальную природу. Открыв для себя эти места, вы погрузитесь в мир бескрайних просторов, где небо сливается с землей, и где вы почувствуете свободу и уединение, недоступные в городской суете. ',
        tickets: 'Дешевые Билеты!',
        tickets__desc: 'Дешевые билеты для вашего путешествия по Казахстану. Планируйте свои поездки заранее и экономьте на перелетах.',
        tours: 'Лучшие Экскурсии!',
        tours__desc: 'Найдите местного гида для экскурсий и узнайте больше о местной культуре, традициях и истории.',
        hotel: 'Отели с лучшими Ценами!',
        hotel__desc: 'Найдите лучшие отели и гостиницы по лучшим ценам для вашего пребывания.',
        places__title: 'Изучите прекрасные места Казахстана!',
        mount:' Гора-Алатау',
        turkestan: 'Туркестан',
        almaty: 'Алматы',
        aktau: 'Актау',
        astana: 'Астана',
        charyn: 'ЧАРЫНСКИЙ КАНЬОН',
        charyn__desc: 'Чарынский каньон - это каньон в Центральном Казахстане, который нередко называют "маленьким братом" знаменитого Гранд-Каньона в США. Он известен своими красивыми красноватыми скалами, формировавшимися в результате эрозии, и потрясающими пейзажами. Каньон привлекает туристов своей красотой и возможностями для пеших и велосипедных прогулок.',
        lake: 'ОЗЕРО АЛАКОЛЬ',
        lake__desc: 'Алаколь - это солёное озеро в Восточном Казахстане, расположенное на высоте около 347 метров над уровнем моря.',
        visit: 'ТОП МЕСТ ДЛЯ ВИЗИТА',
        medeo: 'МЕДЕУ',
        medeo__desc: 'Медеу - это каток в горах, расположенный неподалеку от города Алматы в Казахстане. Он знаменит своим уникальным расположением на высоте около 1700 метров над уровнем моря, что делает его одним из самых высоких катков в мире.',
        koktobe: 'КОК-ТОБЕ',
        koktobe__desc: 'Коктобе - это живописный холм, расположенный на окраине города Алматы в Казахстане. С вершины Коктобе открывается потрясающий вид на город и его окрестности, включая Заилийский Алатау. Здесь также расположен телевизионный башня "Коктобе", которая является одним из символов города.',
        esentai: 'ЕСЕНТАЙ',
        esentai__desc: ' Esentai Mall - это крупный торговый центр в Казахстане. Он является одним из самых известных и престижных торговых комплексов в регионе. Esentai Mall предлагает широкий выбор магазинов, ресторанов, кинотеатров и других развлекательных заведений для посетителей всех возрастов и интересов.',
        borovoe: 'БОРОВОЕ',
        borovoe__desc: 'Бурабай - это курортный район в Казахстане, расположенный в Акмолинской области. Он славится своей изумительной природой, включая живописные горные озера, леса и скалы. Бурабай является популярным местом для активного отдыха, такого как пешие прогулки, велосипедные прогулки, альпинизм и катание на лыжах (зимой). ',
        balhash: 'БАЛХАШ',
        balhash__desc: 'Озеро Балхаш - это крупнейшее озеро в Казахстане и одно из самых больших солёных озёр в мире. Оно имеет уникальные экологические и географические характеристики, так как разделено на две части: восточную, солёную, и западную, пресную.',
        shym: 'ШЫМБУЛАК',
        shym__desc: 'Шымбулак - это крупный горнолыжный курорт, расположенный неподалеку от города Алматы в Казахстане. Он известен своими высококачественными трассами, красивыми горными пейзажами и обширными возможностями для зимних видов спорта.',
        more: 'ПОДРОБНЕЕ',
    },
    en: {
        home: 'HOME',
        articles: 'ARTICLES',
        locations: 'LOCATIONS',
        video: 'VIDEO',
        intro__title:'Discover Amazing Places in Kazakhstan',
        intro__subtitle:'Kazakhstan is known for its vast steppe landscapes, which offer stunning scenery and unique nature. By discovering these places, you will immerse yourself in a world of endless spaces, where the sky merges with the earth, and where you will feel freedom and solitude, unavailable in the city bustle. ',
        tickets: 'Cheap Tickets!',
        tickets__desc: 'Find cheap tickets for your trip to Kazakhstan. Plan your trips in advance and save on flights.',
        tours: 'Best Tours!',
        tours__desc: 'Find a local guide for tours and learn more about local culture, traditions, and history.',
        hotel: 'Hotels with Best Prices!',
        hotel__desc: 'Find the best hotels and guesthouses at the best prices for your stay.',
        places__title: 'Explore Beautiful Places in Kazakhstan!',   
        mount:' Mountain Alatau',
        turkestan: 'Turkestan',
        almaty: 'Almaty',
        aktau: 'Aktau',
        astana: 'Astana',
        charyn: 'CHARYN CANYON',
        charyn__desc: 'Charyn Canyon is a canyon in Central Kazakhstan, often referred to as the "little brother" of the famous Grand Canyon in the USA. It is known for its beautiful reddish rocks formed by erosion and stunning landscapes. The canyon attracts tourists with its beauty and opportunities for hiking and biking.',
        lake: 'LAKE ALAKOL',
        lake__desc: 'Alakol is a salt lake in Eastern Kazakhstan, located at an altitude of about 347 meters above sea level.',
        visit: 'TOP PLACES TO VISIT',
        medeo: 'MEDEO',
        medeo__desc: 'Medeo is a mountain skating rink located near the city of Almaty in Kazakhstan. It is famous for its unique location at an altitude of about 1700 meters above sea level, making it one of the highest skating rinks in the world.',
        koktobe: 'KOK-TOBE',
        koktobe__desc: 'Koktobe is a picturesque hill located on the outskirts of the city of Almaty in Kazakhstan. From the top of Koktobe, you can enjoy stunning views of the city and its surroundings, including the Zailiyskiy Alatau. The Koktobe TV Tower, one of the city\'s landmarks, is also located here.',
        esentai: 'ESSENTAI',
        esentai__desc: 'Esentai Mall is a large shopping center in Kazakhstan. It is one of the most famous and prestigious shopping complexes in the region. Esentai Mall offers a wide range of shops, restaurants, cinemas, and other entertainment venues for visitors of all ages and interests.',
        borovoe: 'BOROVOE',
        borovoe__desc: 'Borovoe is a resort area in Kazakhstan located in the Akmola region. It is famous for its amazing nature, including picturesque mountain lakes, forests, and rocks. Borovoe is a popular destination for outdoor activities such as hiking, biking, mountaineering, and skiing (in winter).',
        balhash: 'BALKHASH',
        balhash__desc: 'Lake Balkhash is the largest lake in Kazakhstan and one of the largest salt lakes in the world. It has unique ecological and geographical characteristics, as it is divided into two parts: the eastern, salty part, and the western, fresh part.',
        shym: 'SHYMBULAK',
        shym__desc: 'Shymbulak is a large ski resort located near the city of Almaty in Kazakhstan. It is known for its high-quality slopes, beautiful mountain landscapes, and extensive winter sports opportunities.',
        more: 'SEE MORE',
    },
    kz: {
        home: 'БАСТЫ БЕТ',
        articles: 'МАҒАЛАЛАР',
        locations: 'ОРЫНДАР',
        video: 'БЕЙНЕ',
        intro__title:'Қазақстандағы таңғажайып орындарды ашыңыз',
        intro__subtitle:'Қазақстан өзінің кең дала пейзаждарымен танымал, олар таңғажайып көріністер мен ерекше табиғатты ұсынады. Бұл орындарды зерттеу арқылы сіз шексіз кеңістіктер әлеміне еніп, аспан жермен бірігетін жерде еркіндік пен жалғыздықты сезінесіз, қала күйбеңінде қолжетімсіз.',
        tickets: 'Арзан билеттер!',
        tickets__desc: 'Қазақстанға сапарыңыз үшін арзан билеттерді табыңыз. Сапарларыңызды алдын ала жоспарлап, ұшуларға үнемдеңіз.',
        tours: 'Үздік турлар!',
        tours__desc: 'Жергілікті мәдениет, дәстүрлер және тарих туралы көбірек білу үшін жергілікті гидті табыңыз.',
        hotel: 'Ең жақсы бағалармен қонақүйлер!',
        hotel__desc: 'Сапарыңыз үшін ең жақсы қонақүйлер мен қонақүйлерді ең жақсы бағалармен табыңыз.',
        places__title: 'Қазақстандағы әдемі орындарды зерттеңіз!',   
        mount:' Алатау тауы',
        turkestan: 'Түркістан',
        almaty: 'Алматы',
        aktau: 'Ақтау',
        astana: 'Астана',
        charyn: 'ШАРЫН КАНЬОНЫ',
        charyn__desc: 'Шарын каньоны Орталық Қазақстанда орналасқан каньон, жиі АҚШ-тағы атақты Үлкен Каньонның "кіші інісі" деп аталады. Ол эрозия арқылы қалыптасқан әдемі қызғылт тастарымен және таңғажайып пейзаждарымен танымал. Каньон өзінің сұлулығы мен жаяу және велосипед тебуге арналған мүмкіндіктерімен туристерді тартады.',
        lake: 'АЛАКӨЛ КӨЛІ',
        lake__desc: 'Алакөл - Қазақстанның шығысында орналасқан тұзды көл, теңіз деңгейінен шамамен 347 метр биіктікте орналасқан.',
        visit: 'БАРУ ҮШІН ЕҢ ҮЗДІК ОРЫНДАР',
        medeo: 'МЕДЕУ',
        medeo__desc: 'Медеу - Қазақстанның Алматы қаласының маңында орналасқан таулы мұз айдыны. Ол теңіз деңгейінен шамамен 1700 метр биіктікте орналасқан, бұл оны әлемдегі ең биік мұз айдындарының біріне айналдырады.',
        koktobe: 'КӨК-ТӨБЕ',
        koktobe__desc: 'Көктөбе - Қазақстанның Алматы қаласының шетінде орналасқан көркем төбе. Көктөбе шыңынан сіз қала мен оның айналасын, соның ішінде Зайлий Алатауын қамтитын таңғажайып көріністерді тамашалай аласыз. Қаланың бір көрікті жерлерінің бірі - Көктөбе телемұнарасы да осында орналасқан.',
        esentai: 'ЕСЕНТАЙ',
        esentai__desc: 'Esentai Mall - Қазақстандағы үлкен сауда орталығы. Бұл аймақтағы ең танымал және беделді сауда кешендерінің бірі. Esentai Mall барлық жастағы және қызығушылықтағы келушілер үшін дүкендер, мейрамханалар, кинотеатрлар және басқа да ойын-сауық орындарының кең ауқымын ұсынады.',
        borovoe: 'БҰРАБАЙ',
        borovoe__desc: 'Бұрабай - Қазақстанның Ақмола облысында орналасқан курорттық аймақ. Ол керемет табиғатымен, соның ішінде көркем тау көлдері, ормандар және жартастарымен танымал. Бұрабай жаяу серуендеу, велосипед тебу, альпинизм және шаңғы тебу (қыс мезгілінде) сияқты ашық ауадағы іс-шаралар үшін танымал орын.',
        balhash: 'БАЛҚАШ',
        balhash__desc: 'Балқаш көлі - Қазақстандағы ең үлкен көл және әлемдегі ең үлкен тұзды көлдердің бірі. Оның бірегей экологиялық және географиялық сипаттамалары бар, өйткені ол екі бөлікке бөлінген: шығыс, тұзды бөлігі және батыс, тұщы бөлігі.',
        shym: 'ШЫМБҰЛАҚ',
        shym__desc: 'Шымбұлақ - Қазақстанның Алматы қаласының жанында орналасқан үлкен шаңғы курорты. Ол жоғары сапалы беткейлерімен, әдемі тау көріністерімен және кең ауқымды қысқы спорт түрлерімен танымал.',
        more: 'ТАҒЫ КӨРСЕТУ',
    }
}

const russianBtn = document.querySelector('#russian-btn')
const englishBtn = document.querySelector('#english-btn')
const kazakhBtn = document.querySelector('#kazakh-btn')

const translate = () => {
    const lang = localStorage.getItem('lang') || 'ru'
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach((el) => {
        const key = el.dataset.i18n
        el.innerText = lgConfig[lang][key]
    });
}

russianBtn.addEventListener('click', () => {
    localStorage.setItem('lang', 'ru')
    translate()
})

englishBtn.addEventListener('click', () => {
    localStorage.setItem('lang', 'en')
    translate()
})

kazakhBtn.addEventListener('click', () => {
    localStorage.setItem('lang', 'kz')
    translate()
})