 // Girilen tarihten ne kadar süre geçtiğini dizi olarak döndüren fonksiyon
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
            array ={
                hata:"olumsuz"
            }
            return  array;
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
            'ay_farki': ay_farki,
            'gun_farki': gun_farki,
            'saat_farki': saat_farki,
            'dakika_farki': dakika_farki,
            'saniye_farki': saniye_farki
        };
        return array;
    }
    // İki saat arasında geçen süreyi metinsel olarak döndüren fonksiyon 
    // Bu fonksiyon diğer fonksiyondan gelen diziyi parametre olarak alıyor.
    function gecenSureYaz(dizi){
        if(dizi.yil_farki > 0){
            return dizi.yil_farki+" Yıl önce"
        }
        else if(dizi.ay_farki>0){
            return dizi.ay_farki +" Ay önce" ;
        }
        else if(dizi.gun_farki >0){
            return dizi.gun_farki +" Gün önce" ;
        }
        else if(dizi.saat_farki >0){
            return dizi.saat_farki + "Saat önce";
        }
        else if (dizi.dakika_farki>0){
            return dizi.saat_farki + "Dakika önce"
        }
        else if (dizi.saniye_farki >0){
            return dizi.saniye_farki + "Saniye önce"
        }
        else if (dizi.hata){ // Get_time fonksiyonuna gelecek bir tarih girdiğinde hata alıyoruz.
            return "Gelecek bir tarih girdiniz";
        }
        else{
            return "Şimdi";
        }
    }

// Örnek kullanım şekli 
console.log(gecenSureYaz(get_time_diff("2021/02/26")));
