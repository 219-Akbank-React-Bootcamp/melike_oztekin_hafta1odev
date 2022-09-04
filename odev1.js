/**
 * Array için includesCi isimli yeni bir method(prototype) yazmanız isteniyor.
 * Method’a verilen parametrenin, array’in içerisindeki elemanların küçük/büyük
 * harf duyarlılığına bakmaksızın var olup olmadığının kontrolünü yapabilmesi gerekiyor.
 */

//İpucu 1: Array.prototype.includesCi =  dedikten sonra metodunuzu yazabilirsiniz
//İpucu 2: "HaKaN".toUppercase() size "HAKAN" sonucunu üretir

//Test :

const array = ["Patika", "219", "Akbank", "React", "Bootcamp"];

Array.prototype.includesCi = function (search) {
  if (this.find((item) => item.toLowerCase() === search.toLowerCase())) {
    // array içindekileri tek tek dön ve küçük harfe çevir
    // parametre olarak verdiğimi küçük harfe çevir öyle karşılaştır
    // birbirine denkse true değilse false döndür.
    return true;
  } else return false;
};

//test

console.log(array.includesCi("patika")); // true
console.log(array.includesCi("AKBANK")); // true
console.log(array.includesCi("kırmızı")); // false
console.log(array.includesCi("ReAct")); // true
