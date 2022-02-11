using System;
using System.Collections.Generic;
using System.Linq;

namespace Generic_List
{
    class Program
    {
        static void Main(string[] args)
        {
            //List<T> class
            //using System.Collections.Generic; bu kütüphaneyi eklemeliyiz
            //T-> object türündedir.
            //Foreach kullanırken tek satırlık bir kod yazıcaksan { } kullanmayabiliriz

            List<int> sayiListesi = new List<int>();
            sayiListesi.Add(23);
            sayiListesi.Add(78);
            sayiListesi.Add(88);
            sayiListesi.Add(99);
            sayiListesi.Add(55);

            List<string> renkListesi = new List<string>();
            renkListesi.Add("Mor");
            renkListesi.Add("Mavi");
            renkListesi.Add("Kırmızı");
            renkListesi.Add("Siyah");
            renkListesi.Add("Yeşil");

            //Count: Listede kaç eleman var onu bildirir
            Console.WriteLine("Sayi Listesinin eleman sayısı: "+sayiListesi.Count);
            Console.WriteLine("Renk Listesinin eleman sayısı: " + renkListesi.Count);

            //Foreach ile listedeki elemanlara erişmek
            Console.WriteLine("Sayı Listesi:");
            foreach (var sayi in sayiListesi)
            {
                Console.WriteLine(sayi);
            }

            Console.WriteLine("Renk Listesi");
            foreach (var renk in renkListesi)
                Console.WriteLine(renk);

            //List.ForEach ile elemanlara erişim
            sayiListesi.ForEach(sayi => Console.WriteLine(sayi));
            renkListesi.ForEach(renk => Console.WriteLine(renk));


            //Listeden eleman çıkartma
            sayiListesi.Remove(23);
            renkListesi.Remove("Siyah");

            //İndex numarası ile listeden eleman çıkartma
            sayiListesi.RemoveAt(0);
            renkListesi.RemoveAt(1);
            Console.WriteLine("Listeden eleman çıkartma işlemi");
            foreach (var sayi in sayiListesi)
            {
                Console.WriteLine(sayi);
            }

            foreach ( var renk in renkListesi)
            {
                Console.WriteLine(renk);
            }

            //Liste içerisinde arama: Contains
            //Contains in parantezinin içine bulmak istediğimiz şeyi yazarız
            if (sayiListesi.Contains(88))
            {
                Console.WriteLine("Listede 88 sayısı vardır.");
            }

            //Elemanın indexini bulmak
            Console.WriteLine(renkListesi.BinarySearch("Kırmızı"));

            //Diziyi Liste çevirme 
            string[] hayvanlar = { "Kedi", "Köpek", "Kuş" };
            List<string> hayvanListesi = new List<string>(hayvanlar);

            //Listeyi temizleme
            hayvanListesi.Clear();

            //Liste içerisinde nesne tutmak
            List<kullanıcılar> kullanıcıListesi = new List<kullanıcılar>();
            kullanıcılar kullanıcı1 = new kullanıcılar();//nesne
            kullanıcı1.Isim="Zeynep";
            kullanıcı1.Soyad = "Dağlar";
            kullanıcı1.Yas =20;

            kullanıcıListesi.Add(kullanıcı1);

            List<kullanıcılar> yeniListe = new List<kullanıcılar>();
            yeniListe.Add(new kullanıcılar()
            {
                Isim = "Deniz",
                Soyad = "arda",
                Yas = 34
            }); 

            Console.Read();
        }
    }

    //Ancapsulation kısayol: ctrl r+e
    public class kullanıcılar 
    { 
        private string isim;
        private string soyad;
        private int yas;

        public string Isim { get => isim; set => isim = value; }
        public string Soyad { get => soyad; set => soyad = value; }
        public int Yas { get => yas; set => yas = value; }
    }
}
