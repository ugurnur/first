// code: Ugur Nurcan
// email: ugur-n@yandex.com
// wwww.ugurnurcan.com
// project name: Random Quote Machine


// craates a string of 'str1, str2, .....' for an array
function createstring (){
let strin = '[str1, ';
    for (let i = 0; i < 17; i++){
        let dongu = '[str' + i + ", " + 'author],';
        strin += dongu;
    }
    console.log(strin)
}

// Quotes Database
let str1 = 'Herkesi bir zaman için aldatabilirsiniz, Bazı kişileri her zaman aldatabilirsiniz, Ama herkesi her zaman aldatamazsınız! Ben kimseyi hayatım boyunca aldatmadım!';

let str2 = 'Beşiktaş sevgisi, sevgilerin en güzelidir. Zor dönemlerde sadece taraftarın desteği yetmez, yöneticilerimizin de fedakar taraftarımızın bu desteğine uygun davranışlar içinde olmaları gerekir';

let str3 = 'Beşiktaş için bir şeyler yapmak istiyorsanız kimsenin adamı olmayın!';

let str4 = 'İnsanlarla yaşadım, insanı öğrendim. İnsanlarla yaşadım, insanlığı öğrendim. İnsanlarla yaşadım, İnsanlardan nankörlüğü gördüm. Dostlarım, dostlarım! Ama ben dostlarımdan çok korkarım.';

let str5 = 'Çok üzüntülerimiz oldu hepsini yuttuk, oturduk. Beşiktaş\’ı üzmesinler.';

let str6 = 'Yumruğumuzu vurup, masaları kırıp, olayları halletmemizi tavsiye ediyorlar, biz kanunlara saygılıyız.';

let str7 = 'Futbol sadece şampiyonluklara sevinmek değildir. Bunu belli değerlere sahip çıkarak yaşamaktır. Biz, \‘şerefli ikincilikler\’ de yaşadık. Toplum bunları şimdi anlıyor. O zaman bunlara gülenler vardı. Şimdi ben hepsini hayretle izliyorum. Zamanın haktan yana olduğunu görmek en büyük sevincimdir.';

let str8 = '\"Beşiktaşlılık etik değerlerini sahiplenmeden, hiçbir başarının kalıcı olacağına inanmıyorum.\"';

let str9 = 'Şerefli ikincilikler, şerefsiz şampiyonluklardan önemlidir.';

let str10 = 'Başkanlığım döneminde Beşiktaş\’ın zevkle hamallığını yaptım. Evet, son dönemlerde üzüldüm ama hayatımın en zevkli anlarını Beşiktaş\’ta yaşadım.';

let str11 = '"Sevinin ama rakibinizi üzmeden sevinin"';
let str12 = '"Sizler Beşiktaş\’ta oynuyorsunuz. Bir tek maçta bile sizin yerinizde olmak için tüm bir hayatını verecek milyonlarca fakir insan var. O yüzden siz öyle bir mücadele edeceksiniz ki hakemi bile yeneceksiniz”';
let str13 = '"Futbol sadece şampiyonluklara sevinmek değildir. Bunu belli değerlere sahip çıkarak yaşamaktır"';
let str14 = 'Beşiktaş, şampiyon olsun, maç kazansın, kupa kaldırsın diye tutulmaz. Beşiktaşlılık bir değerler manzumesidir.';
let str15 = '1984 yılında huzurlarınıza hangi heyecan ve duygularla gelmişsem bu gün de huzurlarınızda aynı heyecan ve duygularla başım dik, gönlüm rahat ve huzur içerisinde sizlere veda ediyorum.';
let str16 = 'İyi insan olmadan, iyi beşiktaşlı olunmaz';

const author = 'Süleyman Seba';

const quotes = [[str1, author],[str2, author],[str3, author],[str4, author],[str5, author],[str6, author],[str7, author],[str8, author],[str9, author],[str10, author],[str11, author],[str12, author],[str13, author],[str14, author],[str15, author],[str16, author]];


// selecting html elements
const header = document.querySelector('h1');
const shareBtn = document.querySelector('.changeQuote');
const twitter = document.querySelector('.twitter');
const aLink = document.querySelector('a');
let lastSelected = 0;


// initiate firs load
let rtnAuthor = quotes[0][1];
let rtnquote = quotes[0][0]; 
header.innerHTML = `${quotes[0][0]} <span> ${quotes[0][1]} </span>`;


// function to change css 
const toggleCss = () => {
const dbody = document.body;
dbody.classList.toggle('siyah');
header.classList.toggle('siyah');
};


// get a quote
shareBtn.addEventListener('click', returnRanNumber);

// event listener function
function returnRanNumber (){
    const randomNum = Math.floor(Math.random() * quotes.length);
    const content = `${quotes[randomNum][0]} <span> ${quotes[randomNum][1]} </span>`;
    header.innerHTML = content;
    toggleCss();

    // trying to return values from the function
    rtnquote=  quotes[randomNum][0];
    rtnAuthor = quotes[randomNum][1];

    // eventlistener dan nasil return yapilir arastir
    // let retturnitem = [quotes[randomNum][0], quotes[randomNum][1]];
    // console.log(retturnitem);
    // return retturnitem;
}



// share on twitter
// add event listener 

aLink.addEventListener('click', function(){
const hashtags = 'süleymanseba'

const quote_twitter = rtnquote.substring(0, (144 - hashtags.length))

const uzunlink = `https://twitter.com/intent/tweet?hashtags=suleymanseba&related=freecodecamp&text=${quote_twitter}`;
const uzunvalue = String(uzunlink);

// setting attritubes for a tag
aLink.setAttribute('href', uzunvalue);
aLink.setAttribute('target', '_blank');
});
