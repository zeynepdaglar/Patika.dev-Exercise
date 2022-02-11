using System;
using System.Collections;

namespace Koleksiyonlar_Soru_1
{
    class Program
    {
        static void Main(string[] args)
        {

            ArrayList unAsal = new ArrayList();
            ArrayList asal = new ArrayList(); 
            var asalToplam = 0;
            var sayiToplam = 0;

            Console.WriteLine("Toplam 20 adet sayı giriniz:");
            for (int i = 0; i < 20; i++)
            {
                Console.WriteLine($"{i + 1}.sayıyı giriniz:");
                var input = Console.ReadLine();

                int test = 0;
                bool isNumber = int.TryParse(input, out test);
                if (!isNumber)
                {
                    Console.WriteLine("Lütfen numeric bir değer giriniz:");
                    i--;
                    continue;
                }
                else if (test < 0) 
                {
                    Console.WriteLine("Lütfen pozitif bir değer giriniz:");
                    i--;
                    continue;
                }
                else
                {
                    int number = Convert.ToInt16(input);

                    if (IsAsal(number))
                    {
                        asal.Add(number);
                        asalToplam += number;
                    }
                    else
                    {
                        unAsal.Add(number);
                        sayiToplam += number;
                    }

                }
            }

            unAsal.Sort();
            unAsal.Reverse();
            Console.WriteLine("\nAsal Liste:");
            foreach (var item in asal)
            {
                Console.WriteLine(item);
            }
            Console.WriteLine("\nUnAsal Liste:");
            foreach (var item in unAsal)
            {
                Console.WriteLine(item);
            }

            Console.WriteLine("\nAsal olan listedeki eleman sayısı:");
            var elemanSayisi = asal.Count;
            Console.WriteLine(elemanSayisi);

            Console.WriteLine("\nAsal olmayan listedeki eleman sayısı:");
            var elemanSayisi2 = unAsal.Count;
            Console.WriteLine(elemanSayisi2);

            Console.WriteLine("\nAsal olan listedeki sayıların ortalaması:");
            var ortalama = asalToplam / elemanSayisi;
            Console.WriteLine(ortalama);

            Console.WriteLine("\nAsal olmayan listedeki sayıların ortalaması:");
            var asalOrtalama = sayiToplam / elemanSayisi2;
            Console.WriteLine(asalOrtalama);
            Console.ReadLine();
        }

        public static Boolean IsAsal(int number)
        {
            int i = 2;
            int control = 0;

            while (i < number)
            {
                if (number % i == 0)
                {
                    control++;
                }

                i++;
            }

            if (control != 0)
            {
                return false;
            }

            return true;
        }
    }
    
}
