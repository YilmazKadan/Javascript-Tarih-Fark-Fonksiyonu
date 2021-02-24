function get_time_diff(gelen_saat) {
    var gelen_saat = typeof gelen_saat !== 'undefined' ? gelen_saat : "2014-01-01 01:02:03.123456";

    var gelen_saat = new Date(gelen_saat).getTime();
    var suanki_saat = new Date().getTime();

    if (isNaN(gelen_saat)) {
        return "";
    }

    if (gelen_saat < suanki_saat) {
        var sure_farki = (suanki_saat - gelen_saat) / 1000;
    } else {
        var sure_farki = (gelen_saat - suanki_saat) / 1000;
    }
    var dakika = 60;
    var saat = dakika * 60;
    var gun = saat * 24;
    var ay = gun * 30;
    var yil = ay * 12;

    var yil_farki = Math.floor(sure_farki / yil);
    var ay_farki = Math.floor((sure_farki % yil) / ay);
    var gun_farki = Math.floor((sure_farki % ay) / gun);
    var saat_farki = Math.floor((sure_farki % gun) / saat);
    var dakika_farki = Math.floor((sure_farki % saat) / dakika);
    var saniye_farki = Math.floor((sure_farki % dakika));

    array = {
        'yil_farki': yil_farki,
        'gun_farki': gun_farki,
        'saat_farki': saat_farki,
        'dakika_farki': dakika_farki,
        'saniye_farki': saniye_farki
    };
    return array;
}