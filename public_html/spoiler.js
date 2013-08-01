$(document).ready(function() {      //wird ausgeführt wenn Dokument geladen

    $(".btn-slide").click(function() {
        $("#panel").slideToggle("slow");    //macht Bereich mit slide sichtbar
        $(this).toggleClass("active");      //setzt Classe aktiv bzw entfernt; stellt fest das slider erst ausfährt und dann wieder einfährt
        return false;
    });


});