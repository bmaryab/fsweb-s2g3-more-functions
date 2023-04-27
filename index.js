// Aşağıdaki görevleri tamamlayın

/*
  GÖREV 1
  - Input:  Bir dosya yolunu (path) parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon, verilen bir dosya adresideki(path) dosyanın adını vermeli.
  * İpucu:  Dosya adresinin / işaretleri ile bölümlendiğine dikkat et.

  örnek input:  "C:/Users/johnsmith/Music/Beethoven_5.mp3"
  örnek output: "Beethoven_5.mp3"

  örnek input:  "Beethoven_5.mp3"
  örnek output: "Beethoven_5.mp3"

  örnek input:  ""
  örnek output: ""
*/

function dosyaAdiniBul(path) {
  const pathArr = path.split("/");
  return pathArr[pathArr.length-1];
}

console.log("Görev1-örnek1: ", dosyaAdiniBul("C:/Users/johnsmith/Music/Beethoven_5.mp3"))
console.log("Görev1-örnek2: ", dosyaAdiniBul("Beethoven_5.mp3"))
console.log("Görev1-örnek3: ", dosyaAdiniBul(""))
console.log("Görev1-ek alıştırma: ", dosyaAdiniBul("'/klasör1/klasör2/dosyam"))


/*
  GÖREV 2
  - Input:  Bir sayı arrayini parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon input olarak aldığı sayı arrayinin aritmetik ortalamasını dönmeli.

  örnek input:  []
  örnek output: null

  örnek input:  [4]
  örnek output: 4
  
  örnek input:  [50, -26, 153, 7]
  örnek output: 46

  örnek input:  [109, 216, 288, 143, 71, 185, -278, 194, 5]
  örnek output: 104
*/

function ortalamaBul(numberArr) {
  if (numberArr.length === 0){
    return null;
  }
  function arrayToplami (total, number) {
    return total + number;
  }
  const aritmetikOrtalama = numberArr.reduce(arrayToplami,0) / numberArr.length;
  return aritmetikOrtalama;
}

console.log("Görev2-örnek1: ", ortalamaBul([]))
console.log("Görev2-örnek2: ", ortalamaBul([4]))
console.log("Görev2-örnek3: ", ortalamaBul([50, -26, 153, 7]))
console.log("Görev2-örnek4: ", ortalamaBul([109, 216, 288, 143, 71, 185, -278, 194, 5]))

/*
  GÖREV 3
  - Input:  Bir sayı arrayini ve ortalama bulmaya yarayacak bir fonksiyonu parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon input olarak aldığı sayı arrayinin aritmetik ortalamasından büyük ya da eşit elemanlardan oluşan bir array dönmeli.
  * Çağırırken kendi ortalama fonksiyonunla çağırabilirsin, ama parametrenin tanımlama aşamasında soyut bir ifade olduğunu unutma.
  * f(x) = 2x+5 içerisindeki x değeri gibi.

  örnek input:  []
  örnek output: null

  örnek input:  [4]
  örnek output: 4
  
  örnek input:  [50, -26, 153, 7]
  örnek output: [50, 153]

  örnek input:  [109, 216, 288, 143, 71, 185, -278, 194, 5]
  örnek output: [109, 216, 288, 143, 185, 194]
*/

function ortalamadanBuyukleriBul(sayiArrayi, ortalamaCallBack) {
  if (sayiArrayi.length===0){
    return null;
  }
  let yeniArray = []
  for (let i=0; i<sayiArrayi.length; i++){
    if (sayiArrayi[i] >= ortalamaCallBack(sayiArrayi)){
      yeniArray.push(sayiArrayi[i]);
    }
  } return yeniArray;
}
console.log("Görev3-örnek1: ", ortalamadanBuyukleriBul([],ortalamaBul))
console.log("Görev3-örnek2: ", ortalamadanBuyukleriBul([4],ortalamaBul))
console.log("Görev3-örnek3: ", ortalamadanBuyukleriBul([50, -26, 153, 7],ortalamaBul))
console.log("Görev3-örnek4: ", ortalamadanBuyukleriBul([109, 216, 288, 143, 71, 185, -278, 194, 5],ortalamaBul))

/* !!!! Burdan aşağısını değiştirmeyin !!!! */
function as() {
  console.log("Kodlar sorunsuz çalışıyor!");
  return "sa";
}
as();
export { dosyaAdiniBul, ortalamaBul, ortalamadanBuyukleriBul, as };
