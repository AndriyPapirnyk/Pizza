let price = 50;
let summary = 'грн';
let speedAnimation = 300;
$('.choseOpen').hide();
$('.item1').hide();
$('.total').text('До сплати: ' + price + summary);


let ingradientPrice = {
    fetaPrice: 25,
    mozaPrice: 20,
    chederPrice: 20,
    bluPrice: 15,
    parmPrice: 30,
    chickenPrice: 45,
    bakonPrice: 35,
    shynkaPrice: 20,
    paperoniPrice: 20,
    alfredoPrice: 5,
    barbequPrice: 5,
    chasnykPrice: 5,
    kukurudzaPrice: 10,
    ananasPrice: 10,
    tomatoPrice: 8,
    grubPrice: 15,
    shpunatPrice: 10,
    peretsPrice: 10,
};


// 1. функція зміни цін на всі інградієнти (obj,%,+)


$('#chease').click(function () {
    $('#chooseChease').slideToggle(speedAnimation);
});

$('#meat').click(function () {
    $('#chooseMeat').slideToggle(speedAnimation);
});

$('#souse').click(function () {
    $('#chooseSouse').slideToggle(speedAnimation);
});

$('#vegitables').click(function () {
    $('#chooseVegitables').slideToggle(speedAnimation);
});

$('#add').click(function () {
    $('#chooseAdd').slideToggle(speedAnimation);
});
//..
//мясо
//соуси
//овочі


// cheese
$('.fetaGroup').click(function () {
    $('.fetaGroup').hide();
    $('#fetaHide').show();
    price += ingradientPrice.fetaPrice;
    $('.total').text('До сплати: ' + price + summary);
})

$('#fetaHide').click(function () {
    $('#fetaHide').hide();
    $('.fetaGroup').show();
    price -= ingradientPrice.fetaPrice;
    $('.total').text('До сплати: ' + price + summary);
})







$('.mozaGroup').click(function () {
    $('.mozaGroup').hide();
    $('#mozaHide').show();
    price += ingradientPrice.mozaPrice;
    $('.total').text('До сплати: ' + price + summary);
});

$('#mozaHide').click(function () {
    $('#mozaHide').hide();
    $('.mozaGroup').show();
    price -= ingradientPrice.mozaPrice;
    $('.total').text('До сплати: ' + price + summary);
});




$('.chederGroup').click(function () {
    $('.chederGroup').hide();
    $('#chederHide').show();
    price += ingradientPrice.chederPrice;
    $('.total').text('До сплати: ' + price + summary);
})

$('#chederHide').click(function () {
    $('#chederHide').hide();
    $('.chederGroup').show();
    price -= ingradientPrice.chederPrice;
    $('.total').text('До сплати: ' + price + summary);
})




$('.bluGroup').click(function () {
    $('.bluGroup').hide();
    $('#bluHide').show();
    price += ingradientPrice.bluPrice;
    $('.total').text('До сплати: ' + price + summary);
})

$('#bluHide').click(function () {
    $('#bluHide').hide();
    $('.bluGroup').show();
    price -= ingradientPrice.bluPrice;
    $('.total').text('До сплати: ' + price + summary);
})





$('.parmGroup').click(function () {
    $('.parmGroup').hide();
    $('#parmHide').show();
    price += ingradientPrice.parmPrice;
    $('.total').text('До сплати: ' + price + summary);
})

$('#parmHide').click(function () {
    $('#parmHide').hide();
    $('.parmGroup').show();
    price -= ingradientPrice.parmPrice;
    $('.total').text('До сплати: ' + price + summary);
})



// meat

$('.chickenGroup').click(function () {
    $('.chickenGroup').hide();
    $('#chickenHide').show();
    price += ingradientPrice.chickenPrice;
    $('.total').text('До сплати: ' + price + summary);
})

$('#chickenHide').click(function () {
    $('#chickenHide').hide();
    $('.chickenGroup').show();
    price -= ingradientPrice.chickenPrice;
    $('.total').text('До сплати: ' + price + summary);
})





$('.bakonGroup').click(function () {
    $('.bakonGroup').hide();
    $('#bakonHide').show();
    price += ingradientPrice.bakonPrice;
    $('.total').text('До сплати: ' + price + summary);
})

$('#bakonHide').click(function () {
    $('#bakonHide').hide();
    $('.bakonGroup').show();
    price -= ingradientPrice.bakonPrice;
    $('.total').text('До сплати: ' + price + summary);
})



$('.shynkaGroup').click(function () {
    $('.shynkaGroup').hide();
    $('#shynkaHide').show();
    price += ingradientPrice.shynkaPrice;
    $('.total').text('До сплати: ' + price + summary);
})

$('#shynkaHide').click(function () {
    $('#shynkaHide').hide();
    $('.shynkaGroup').show();
    price -= ingradientPrice.shynkaPrice;
    $('.total').text('До сплати: ' + price + summary);
})






$('.paperoniGroup').click(function () {
    $('.paperoniGroup').hide();
    $('#paperoniHide').show();
    price += ingradientPrice.paperoniPrice;
    $('.total').text('До сплати: ' + price + summary);
})

$('#paperoniHide').click(function () {
    $('#paperoniHide').hide();
    $('.paperoniGroup').show();
    price -= ingradientPrice.paperoniPrice;
    $('.total').text('До сплати: ' + price + summary);
})




$('.alfredoGroup').click(function () {
    $('.alfredoGroup').hide();
    $('#alfredoHide').show();
    price += ingradientPrice.alfredoPrice;
    $('.total').text('До сплати: ' + price + summary);
})

$('#alfredoHide').click(function () {
    $('#alfredoHide').hide();
    $('.alfredoGroup').show();
    price -= ingradientPrice.alfredoPrice;
    $('.total').text('До сплати: ' + price + summary);
})




$('.barbequGroup').click(function () {
    $('.barbequGroup').hide();
    $('#barbequHide').show();
    price += ingradientPrice.barbequPrice;
    $('.total').text('До сплати: ' + price + summary);
})

$('#barbequHide').click(function () {
    $('#barbequHide').hide();
    $('.barbequGroup').show();
    price -= ingradientPrice.barbequPrice;
    $('.total').text('До сплати: ' + price + summary);
})




$('.chasnykGroup').click(function () {
    $('.chasnykGroup').hide();
    $('#chasnykHide').show();
    price += ingradientPrice.chasnykPrice;
    $('.total').text('До сплати: ' + price + summary);
})

$('#chasnykHide').click(function () {
    $('#chasnykHide').hide();
    $('.chasnykGroup').show();
    price -= ingradientPrice.chasnykPrice;
    $('.total').text('До сплати: ' + price + summary);
})




$('.kukurudzaGroup').click(function () {
    $('.kukurudzaGroup').hide();
    $('#kukurudzaHide').show();
    price += ingradientPrice.kukurudzaPrice;
    $('.total').text('До сплати: ' + price + summary);
})

$('#kukurudzaHide').click(function () {
    $('#kukurudzaHide').hide();
    $('.kukurudzaGroup').show();
    price -= ingradientPrice.kukurudzaPrice;
    $('.total').text('До сплати: ' + price + summary);
})




$('.ananasGroup').click(function () {
    $('.ananasGroup').hide();
    $('#ananasHide').show();
    price += ingradientPrice.ananasPrice;
    $('.total').text('До сплати: ' + price + summary);
})

$('#ananasHide').click(function () {
    $('#ananasHide').hide();
    $('.ananasGroup').show();
    price -= ingradientPrice.ananasPrice;
    $('.total').text('До сплати: ' + price + summary);
})



$('.tomatoGroup').click(function () {
    $('.tomatoGroup').hide();
    $('#tomatoHide').show();
    price += ingradientPrice.tomatoPrice;
    $('.total').text('До сплати: ' + price + summary);
})

$('#tomatoHide').click(function () {
    $('#tomatoHide').hide();
    $('.tomatoGroup').show();
    price -= ingradientPrice.tomatoPrice;
    $('.total').text('До сплати: ' + price + summary);
})


$('.grubGroup').click(function () {
    $('.grubGroup').hide();
    $('#grubHide').show();
    price += ingradientPrice.grubPrice;
    $('.total').text('До сплати: ' + price + summary);
})

$('#grubHide').click(function () {
    $('#grubHide').hide();
    $('.grubGroup').show();
    price -= ingradientPrice.grubPrice;
    $('.total').text('До сплати: ' + price + summary);
})


$('.shpunatGroup').click(function () {
    $('.shpunatGroup').hide();
    $('#shpunatHide').show();
    price += ingradientPrice.shpunatPrice;
    $('.total').text('До сплати: ' + price + summary);
})

$('#shpunatHide').click(function () {
    $('#shpunatHide').hide();
    $('.shpunatGroup').show();
    price -= ingradientPrice.shpunatPrice;
    $('.total').text('До сплати: ' + price + summary);
})



$('.peretsGroup').click(function () {
    $('.peretsGroup').hide();
    $('#peretsHide').show();
    price += ingradientPrice.peretsPrice;
    $('.total').text('До сплати: ' + price + summary);
})

$('#peretsHide').click(function () {
    $('#peretsHide').hide();
    $('.peretsGroup').show();
    price -= ingradientPrice.peretsPrice;
    $('.total').text('До сплати: ' + price + summary);
})




//...
pay.onclick = function() {
    pay_page.style.display  = 'flex';
    wrap.style.display = 'none';
    price_tag.innerText = 'До сплати: ' +  price + summary;
};
back_btn.onclick = function() {
    pay_page.style.display  = 'none';
    wrap.style.display = 'flex';
};

btn_card.onclick = function() {
alert('Ваші дані збережено, натисніть кнопку "Оплатити" для завершення.')
};

apple.onclick = function() {
prompt('Введіть пароль від вашого apple pay:');
alert('Ваші дані збережено, натисніть кнопку "Оплатити" для завершення.')
};

visa.onclick = function() {
    prompt('Введіть пароль від вашого visa аккаунту:');
    alert('Ваші дані збережено, натисніть кнопку "Оплатити" для завершення.')
    };

    btn_ok.onclick = function() {
        pay_page.style.display  = 'none';
        last.style.display = 'flex';

    };

    leave.onclick = function() {
        wrap.style.display = 'flex';        last.style.display = 'none';

    };