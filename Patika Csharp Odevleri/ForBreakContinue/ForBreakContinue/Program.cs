using System;

namespace ForBreakContinue
{
    class Program
    {
        static void Main(string[] args)
        {
            //Ekrandan girilen sayıya kadar olan tek sayıları ekrana yazar
            Console.WriteLine("Lütfen bir sayı giriniz");
            int sayac = int.Parse(Console.ReadLine());
            Console.WriteLine("Tek sayılar:");
            for (int i = 1; i <= sayac; i++)
            {
                if (i%2==1)
                {
                    Console.WriteLine(i);
                }
            }

            //1-1000 arası tek ve çift sayıların kendi içinde toplanması
            int tekToplam = 0;
            int çiftToplam = 0;
            for (int i = 1; i < 1000; i++)
            {
                if (i%2==1)
                {
                    tekToplam += i;
                }
                else
                {
                    çiftToplam += i;
                }
            }
            Console.WriteLine("1-1000 arası tek sayıların toplamı " + tekToplam);
            Console.WriteLine("1-1000 arası çift sayıların toplamı " + çiftToplam );

            //Break
            for (int i = 1; i < 10; i++)
            {
                if (i==4)
                {
                    break; //işlem burda biter
                    Console.WriteLine(i);
                }
            }

            //Continue
            for (int i = 1; i < 10; i++)
            {
                if (i==4)
                {
                    continue;// sadece 4 ü atlar
                    Console.WriteLine(i);
                }
            }
        }
    }
}
