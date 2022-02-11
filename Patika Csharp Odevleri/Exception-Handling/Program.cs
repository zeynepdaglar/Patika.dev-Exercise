using System;

namespace HataYonetimi
{
    class Program
    {
        static void Main(string[] args)
        {
            /*Exception Handling
             Hatalar oluşma zamanına göre ikiye ayrılır :
             1)Compile time : kodu yazarken derleyicinin fırlattığı hatalardır.
             2)Runtime : buradaki hataları handle etmek gerekir çünkü programı beklenmedik bir anda kırmaması vb. için
              
              Özel Durum Formatları:
              1)Index Out Of Range Exception: dizide bulunmayan değerler ile karşılaşınca oluşan hata mesajı
              2)Over Flow Exception: bir değişkenin aralıklarının dışına çıkılması durumunda karşılan hata mesajı
              3)Format Exception: sayısal bir alana sayısal olmayan bir değer girilmesi durumunda oluşan hata mesajıdır
              4)Argument Null Exception: ritmetik bir alanın boş bırakılması durumunda karşımıza çıkan hata mesajıdır.
              5)Aritmethic Exception: matematiksel hatalardan oluşan hata mesajıdır.
              6)Invalid Cast Exception: tür dönüştürme işlemlerinde tanımlanmayan değişkenlere göre farklı bir türde dönüşüm yapılmaya çalışılması durumunda çıkan hata mesajıdır.
              7)Divided By Zero: sıfıra bölme yapmak istenildiği zaman oluşan hata mesajıdır.
             */
            try
            {
                Console.WriteLine("Bir sayı giriniz");
                int number = Convert.ToInt16(Console.ReadLine());
                Console.WriteLine("Girdiğiniz sayı : {0}",number);
            }
            catch (Exception ex)
            {
                Console.WriteLine("Hata : {0}", ex.Message.ToString());
               
            }
            finally//bu kısım zorunlu değil
            {
                Console.WriteLine("İşlem bitti");
            }

            try
            {
                //int a = int.Parse(null);
                //int a = int.Parse("test");
                int a = int.Parse("-200000000000");
            }
            catch (ArgumentNullException ex)
            {
                Console.WriteLine("Boş bir değer girdiniz");
                Console.WriteLine(ex);

            }
            catch (FormatException ex)
            {
                Console.WriteLine("Veri tipi uygun değil");
                Console.WriteLine(ex);
            }
            catch (OverflowException ex)
            {
                Console.WriteLine("Çok küçük veya çok büyük bir değer girdiniz");
                Console.WriteLine(ex);
            }
            finally 
            {
                Console.WriteLine("İşlem tamamlandı ");
            }

            Console.ReadKey();
        }
    }
}
