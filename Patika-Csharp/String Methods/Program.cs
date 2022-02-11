
using System;

namespace String_Metotlar
{
    class Program
    {
        static void Main(string[] args)
        {
            string degisken = "Dersimiz Charp, Hoşgeldiniz!";
            string degisken2 = "Dersimiz Charp";
            //Length: cümle içerisindeki harf sayısını verir
            Console.WriteLine(degisken.Length);

            //ToUpper: büyük harfe dönüştürür
            Console.WriteLine(degisken.ToUpper());
            //ToLower: küçük harfe dönüştürür
            Console.WriteLine(degisken.ToLower());

            //Concat: birleştirme
            Console.WriteLine(String.Concat(degisken, "Merhaba"));

            //CompareTo: birinci değişkenin karakter sayısı ikinci değişkene eşitse 0 döndürür
            // ilk değişkenin karakter sayısı ikinci değişkenden daha büyükse 1 döndürür
            //// ilk değişkenin karakter sayısı ikinci değişkenden daha küçükse -1 döndürür
            Console.WriteLine(degisken.CompareTo(degisken2));

            //Compare 
            //eğer true yazarsak iki değişkeni karşılaştırırken büyük küçük harf duyarsızlaşır
            Console.WriteLine(String.Compare(degisken,degisken2,true));

            //eğer false yazarsak iki değişkeni karşılaştırırken büyük küçük harf duyarlı olur
            Console.WriteLine(String.Compare(degisken, degisken2, false));

            //Contains: ilk değişkenin içinde ikinci değişken varmı bakar varsa true döner
            Console.WriteLine(degisken.Contains(degisken2));

            //StartsWith, EndsWith: true-false sonuç döndürür
            Console.WriteLine(degisken.StartsWith("Merhaba!"));
            Console.WriteLine(degisken.EndsWith("Hoşgeldiniz!"));

            //IndexOf: eğer bulamazsa -1 değer döndürür
            Console.WriteLine(degisken.IndexOf("CS"));

            //Insert: yazdığımız indexten itibaren ekleme yapar
            Console.WriteLine(degisken.Insert(0, "Merhaba!"));

            //LastIndexOf
            Console.WriteLine(degisken.LastIndexOf("i")); //en sonuncunun index değerini gösterir

            //PadLeft, PadRigth
            Console.WriteLine(degisken + degisken2.PadLeft(30));
            Console.WriteLine(degisken + degisken2.PadLeft(30,'*'));
            Console.WriteLine(degisken.PadRight(50) + degisken2);
            Console.WriteLine(degisken.PadRight(50,'-') + degisken2);

            //Remove: verdiğimiz index numarasından itibaren siler
            Console.WriteLine(degisken.Remove(10));
            Console.WriteLine(degisken.Remove(5,3)); //5.indexten başlayıp 3 karakter siler

            //Replace: değiştirme işlemi yapar
            Console.WriteLine(degisken.Replace("CSharp","C#"));
            Console.WriteLine(degisken.Replace(" ","*"));

            //Split: boşluklardan itibaren kesip bir dizinin içerisine koyar
            Console.WriteLine(degisken.Split(' ')[1]);//dizinin 1.elemanını getirir

            //SubString: yazdığımız indexten sonrasını getirir
            Console.WriteLine(degisken.Substring(4));
            Console.WriteLine(degisken.Substring(4,6));//4.indexten başla 6 karakter getir

        }
    }
}
