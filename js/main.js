


///////////////////////////////////////////    Вид помещения  //////////////////////////////////////////////////////////////////////////////

var flatClicked = true;
var officeClicked = false;
var houseClicked = false;

$(function () {
    $('.type').addClass('typeOff')
    $('.flat').removeClass('typeOff').addClass('typeOn')
    
 
    $(".office").bind('click', function () {
        flatClicked = false;
        officeClicked = true;
        houseClicked = false;
        $('.type').addClass('typeOff')
        $('.office').removeClass('typeOff').addClass('typeOn')
        $('.xtype').addClass('typeOff')
        $('.super').removeClass('typeOff').addClass('typeOn')
        $('.flat-container').css('display', 'none');
        $('.house-container').css('display', 'none');
        $('.office-container').css('display', 'block');
        $("#total").val(Math.round((2250 + bathPrice) * discont));
        $("#office-slider").slider({
            value: 1
        });
        $("#flat-slider").slider({
            value: 1
        });
        $("#house-slider").slider({
            value: 1
        });
        $("#bath-slider").slider({
            value: 1
        });
        $('#bath-amount').val(1);
        $("#office-amount").val('50');
        $('input:checkbox').removeAttr('checked');



        $(".totalLabel").text("Сумма:").removeClass('bigTotalLabel');
    });
});
$(function () {
    $(".flat").bind('click', function () {
        flatClicked = true;
        officeClicked = false;
        houseClicked = false;
        $('.type').addClass('typeOff')
        $('.flat').removeClass('typeOff').addClass('typeOn')
        $('.xtype').addClass('typeOff')
        $('.super').removeClass('typeOff').addClass('typeOn')
        $('.office-container').css('display', 'none');
        $('.house-container').css('display', 'none');
        $('.flat-container').css('display', 'block');
        $("#total").val(Math.round((1400 + bathPrice) * discont));
        $("#office-slider").slider({
            value: 1
        });
        $("#flat-slider").slider({
            value: 1
        });
        $("#house-slider").slider({
            value: 1
        });
        $("#bath-slider").slider({
            value: 1
        });
        $('#bath-amount').val(1);
        $("#flat-amount").val('1');
        $('input:checkbox').removeAttr('checked');
        $(".totalLabel").text("Сумма:").removeClass('bigTotalLabel');

    });
});

$(function () {
    $(".house").bind('click', function () {
        flatClicked = false;
        officeClicked = false;
        houseClicked = true;
        $('.type').addClass('typeOff')
        $('.house').removeClass('typeOff').addClass('typeOn')
        $('.xtype').addClass('typeOff')
        $('.super').removeClass('typeOff').addClass('typeOn')
        $('.office-container').css('display', 'none');
        $('.flat-container').css('display', 'none');
        $('.house-container').css('display', 'block');
        $("#total").val(Math.round((2500 + bathPrice) * discont));
        $("#office-slider").slider({
            value: 1
        });
        $("#flat-slider").slider({
            value: 1
        });
        $("#house-slider").slider({
            value: 1
        });
        $("#bath-slider").slider({
            value: 1
        });
        $('#bath-amount').val(1);
        $("#office-amount").val('100');
        $('input:checkbox').removeAttr('checked');
        $(".totalLabel").text("Сумма:").removeClass('bigTotalLabel');
       
        
    });
});
 

/////////////////////////////////////////////////////          СЛАЙДЕРЫ         ///////////////////////////////////////////////////////////
var total;
var rooms = 1;
var baths = 1;
var meters = 50;
var discont = 1;
var type = 1;
var bathPrice = 300;
$(function () {
    $("#flat-slider").slider({
        range: "max",
        min: 1,
        max: 4,
        value: 1,
        slide: function (event, ui) {
            $("#flat-amount").val(ui.value);
            rooms = ui.value;
            if (rooms >= 2) {
                total = (400 + rooms * 1000 + features + bathPrice) * discont * type;
                total = Math.round(total);
                $("label[for='flat-amount']").text("Кол-во комнат:");
                $(".totalLabel").text("Сумма:").removeClass('bigTotalLabel');

            }
            else {
                total = (1400 + features + bathPrice) * discont * type;
                total = Math.round(total);  
            }
            
            if (rooms >= 4) {
                total = "Цена договорная"
                $("#flat-amount").val("100м2");
                $("label[for='flat-amount']").text("Больше")
                $(".totalLabel").text("Цена договорная").addClass('bigTotalLabel')
            }
            $("#total").val(total);
        }
    });

    $("label[for='flat-amount']").text("Кол-во комнат:")
    $("#flat-amount").val($("#flat-slider").slider("value"));
    $("#total").val(1700);
});



$(function () {
    $("#office-slider").slider({
        range: "max",
        min: 50,
        max: 100,
        value: 1,
        step: 10,
        slide: function (event, ui) {
            $("#office-amount").val(ui.value);
            meters = ui.value;
            total = (meters * 45 + features + bathPrice) * discont * type;
            total = Math.round(total);
            $("#total").val(total);
        }
    });
    $("#office-amount").val($("#office-slider").slider("value"));

});

$(function () {
    $("#house-slider").slider({
        range: "max",
        min: 50,
        max: 200,
        value: 1,
        step: 10,
        slide: function (event, ui) {
            $("#house-amount").val(ui.value);
            meters = ui.value;
            total = (meters * 50 + bathPrice + features) * discont * type;
            total = Math.round(total);
            $("#total").val(total);
        }
    });
    $("#house-amount").val($("#house-slider").slider("value"));

});

$(function () {
    $("#bath-slider").slider({
        range: "max",
        min: 1,
        max: 5,
        value: 1,
        slide: function (event, ui) {
            $("#bath-amount").val(ui.value);
            baths = ui.value;
            bathPrice = baths*300;
           

            if (officeClicked == false && houseClicked == false && flatClicked == true) {
                if (rooms >= 2) {
                    $('#total').val(Math.round((400 + rooms * 1000 + features + bathPrice) * type));
                }
                else {
                    $('#total').val(Math.round((1400 + features + bathPrice) * type));
                }
                if (rooms >= 4) {
                    $('#total').val("Цена договорная");
                }
            }
            if (flatClicked == false && houseClicked == false && officeClicked == true) {
                $('#total').val(Math.round((meters * 45 + features + bathPrice) * discont * type))
            }
            if (flatClicked == false && officeClicked == false && houseClicked == true) {
                $('#total').val(Math.round((meters * 50 + bathPrice) * discont * type))
            }



        }
    });
    $("#bath-amount").val($("#bath-slider").slider("value"));
});




//////////////////////////////////////////////////          ИКОНКИ                  ////////////////////////////////////////////////////////////////

var features = 0;


$(document).ready(function () {
    var totalStr = $("#total").val();
    total = parseInt(totalStr);

    function addFeature(element, price){
      if (element.checked) {
            features += price;
            $("#total").val(Math.round((total + bathPrice - 300) * discont * type + features));
             }
      else 
          {
             features -= price;
            $("#total").val(Math.round((total + bathPrice - 300) * discont * type + features));
          }
    }
   

    $('#fridgeCheckBox').change(function(){addFeature(this, 200)}); 
    $('#ovenCheckBox').change(function(){addFeature(this, 200)});   
    $('#microCheckBox').change(function(){addFeature(this, 100)});
    $('#scarfCheckBox').change(function(){addFeature(this, 150)});
    $('#wallCheckBox').change(function(){addFeature(this, 250)});
    $('#exhaustCheckBox').change(function(){addFeature(this, 250)});
   

});


/////////////////////////////////////////////////  Периодичность        ////////////////////////////////////////////////////////////////







function addDiscount(element, discont)
{
   
    $('input:checkbox').removeAttr('checked');
        $('.period').addClass('typeOff');
        $(element).removeClass('typeOff').addClass('typeOn');
        if (officeClicked == false && houseClicked == false && flatClicked == true) {
            if (rooms >= 2) {
                $('#total').val(Math.round((400 + rooms * 1000 + features + bathPrice) * discont * type));
            }
            else {
                $('#total').val(Math.round((1400 + features + bathPrice) * discont * type));
            }
            if (rooms >= 4) {
                $('#total').val("Цена договорная");
            }
    
        }
        if (flatClicked == false && houseClicked == false && officeClicked == true) {
            $('#total').val(Math.round((meters * 45 + features + bathPrice) * discont * type))
        }
        if (flatClicked == false && officeClicked == false && houseClicked == true) {
            $('#total').val(Math.round((meters * 50 + bathPrice) * discont * type))
        }
    
    var elementValue = $(element).val();
    $('#periodHandler').val(elementValue);
};

$(function () {
    var onetime = $('.oneTime').val();
    $('#periodHandler').val(onetime);
    $('.period').addClass('typeOff')
    $('.oneTime').removeClass('typeOff').addClass('typeOn')


    $('.oneTime').click(  function () {discont = 1, addDiscount(this, discont)});
    $('.everyWeek').click( function () { discont = 0.8, addDiscount(this, discont)});
    $('.every2Weeks').click(  function () { discont = 0.85,addDiscount(this, discont)});
    $('.every4Weeks').click( function () { discont = 0.9, addDiscount(this, discont)});

});
///////////////////////////////////////////////////   Тип  помещения ////////////////////////
$(function () {
    function addRoomType(element){
        $('#roomTypeHandler').val($(element).val());
    }

    var roomType = $('.flat').val();
    $('#roomTypeHandler').val(roomType)
    $('.flat').bind('click', function() {addRoomType(this)});
    $('.office').bind('click', function() {addRoomType(this)});
    $('.house').bind('click', function() {addRoomType(this)});
});

///////////////////////////////////////////////////   Тип  уборки    ////////////////////////

function addType(element, type)
{

    $('#cleanTypeHandler').val($(element).val());
    $('.xtype').addClass('typeOff');
    $(element).removeClass('typeOff').addClass('typeOn');
    if (officeClicked == false && houseClicked == false && flatClicked == true) {
        if (rooms >= 2) {
            $('#total').val(Math.round((400 + rooms * 1000 + features + bathPrice) * discont * type));
        }
        else {
            $('#total').val(Math.round((1400 + features + bathPrice) * discont * type));
        }
        if (rooms >= 4) {
            $('#total').val("Цена договорная");
        }

    }
    if (flatClicked == false && houseClicked == false && officeClicked == true) {
        $('#total').val(Math.round((meters * 45 + features + bathPrice) * discont * type))
    }
    if (flatClicked == false && officeClicked == false && houseClicked == true) {
        $('#total').val(Math.round((meters * 50 + bathPrice) * discont * type))
    }
   
}

$(function () {
    $('.xtype').addClass('typeOff')
    $('.super').removeClass('typeOff').addClass('typeOn')
    $('.simple').click( function () {type = 0.7, addType(this, type)});
    $('.afterRepair').click( function () { type = 1.2, addType(this, type)});
    $('.super').click( function () { type = 1, addType(this, type)});   
});





//////////////////////////////////////////////////////////////////////////////////////////////////
$(function(){
    $('#showHidden').bind('click', function()
{
    $(this).hide();
    $('.hidden-calc').show();
});
})