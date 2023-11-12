//scroll
if ($(window).width() > 992) {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 10) {
            $('.header-logo').hide();
            $('.fa-home').show();
        } else {
            $('.header-logo').show();
            $('.fa-home').hide();
        }
    });
}
$(document).ready(function () {

//console.log($(document).height());

    var heightDoc = $(document).height();
    $(window).scroll(function () {
        // console.log(heightDoc);
        //  console.log($(window).scrollTop());
        //console.log($(window).height());
        if (($(window).scrollTop() + 700) > heightDoc - 500) {
            //console.log("bottom here s");
            $('.fixed-box').fadeOut();
        } else {
            $('.fixed-box').fadeIn();

        }
    });

});


$(document).ready(function () {

    var val = parseInt($("#day").attr('data-pct'));
    var r = $("#svg_day .circle").attr('r');
    var c = Math.PI * (r * 2);

    if (val < 0) {
        val = 0;
    }
    if (val > 31) {
        val = 31;
    }

    var pct = ((31 - val) / 31) * c;
    $("#svg_day .circle").css({strokeDashoffset: pct});

    $('#day').attr('data-pct', val);

    ///////////////////////////////////

    var val2 = parseInt($("#hour").attr('data-pct'));
    var r2 = $("#svg_hour .circle").attr('r');
    var c2 = Math.PI * (r2 * 2);

    if (val2 < 0) {
        val2 = 0;
    }
    if (val2 > 24) {
        val2 = 24;
    }

    var pct2 = ((24 - val2) / 24) * c2;
    $("#svg_hour .circle").css({strokeDashoffset: pct2});

    $('#hour').attr('data-pct', val2);

    ///////////////////////////////////

    var val3 = parseInt($("#min").attr('data-pct'));
    var r3 = $("#svg_min .circle").attr('r');
    var c3 = Math.PI * (r3 * 2);

    if (val3 < 0) {
        val3 = 0;
    }
    if (val3 > 60) {
        val3 = 60;
    }

    var pct3 = ((60 - val3) / 60) * c3;
    $("#svg_min .circle").css({strokeDashoffset: pct3});

    $('#min').attr('data-pct', val3);

    ///////////////////////////////////

    var val4 = parseInt($("#sec").attr('data-pct'));
    var r4 = $("#svg_sec .circle").attr('r');
    var c4 = Math.PI * (r4 * 2);

    if (val4 < 0) {
        val4 = 0;
    }
    if (val4 > 60) {
        val4 = 60;
    }

    var pct4 = ((60 - val4) / 60) * c4;
    $("#svg_sec .circle").css({strokeDashoffset: pct4});

    $('#sec').attr('data-pct', val4);

});

function getoutput() {
    file_name_preview.value = file.value.split('\\').pop();
    $("#file_name_preview").attr("style", "display:block !important;");
}

$('#Video-player').on('shown.bs.modal', function () {
    $('#video1')[0].play();
})
$('#Video-player').on('hidden.bs.modal', function () {
    $('#video1')[0].pause();
})
$('.career').on('click', function () {
    $('.forms').trigger("reset");
    var job = $(this).html();
    $(".job-name").val(job);
})
$('.apply-for-job').on('click', function () {
    setTimeout(function(){ $('.success-text').show(); }, 1000);
    setTimeout(function(){  $("#Career-modal").modal('hide'); }, 3000);
})
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}