
using System;
using System.Collections;
using System.Collections.Generic;

namespace ArrayList0
{
    class Program
    {
        static void Main(string[] args)
        {
            /*Standart diziler aynı veri tipindeki elemanları içermektedir. Örneğin int tipinde oluşturduğumuz bir
            dizide sadece tam sayı tutabiliriz. Ancak ArrayList’de böyle bir kısıtlama bulunmamaktadır. Farklı veri
            tipindeki öğeleri ArrayList’e ekleyebiliriz.

            Standart diziler sabit boyutludur; programlama aşamasında dizinin boyutu belirtilir ve programın
            çalışması sırasında değiştirilemez. ArrayList ise değişken boyutludur. Eleman ekleme ve çıkarma durumuna
            göre boyutu dinamik olarak değişmektedir.  
            using.Collections kütüphanesini kullanır */

            //Listeye eleman eklemek
            ArrayList List = new ArrayList();
            List.Add(2);
            //liste.Add("Zeynep");
            //liste.Add(true);
            //liste.Add('K');

            //Liste içerisindeki verilere erişmek
            Console.WriteLine(List[0]);

            //Foreach ile liste içerisindeki verilere erişmek
            foreach (var item in List)
                Console.WriteLine(item);

            //AddRange: birden fazla elemanı topluca ekler
            Console.WriteLine("\nAdd Range Metodu");
            //string[] Colors = { "Purple", "Blue", "White" };
            List<int> Numbers = new List<int>() { 1, 45, 78, 45, 34, 8, 4 };
            //liste.AddRange(renkler);
            List.AddRange(Numbers);

            foreach (var item in List)
                Console.WriteLine(item);

            //Sort : sıralamak
            Console.WriteLine("\nSort Metodu");
            List.Sort();
            foreach (var item in List)
                Console.WriteLine(item);

            //Binary Search : kullanmadan önce sıralamamız gerekir
            Console.WriteLine("\nBinary Search Metodu");
            Console.WriteLine(List.BinarySearch(45));

            //Reverse : tersten sıralar
            Console.WriteLine("\nReverse Metodu");
            List.Reverse();
            foreach (var item in List)
                Console.WriteLine(item);

            //Clear : kolleksiyon içindeki tüm öğeleri siler
            //liste.Clear();
            //foreach (var item in liste)
            //    Console.WriteLine(item);
        }
    }
}
