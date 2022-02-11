using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace Kolleksiyonlar_Soru_2
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] Numbers = new int[20];

            Console.WriteLine("Toplam 20 adet sayı giriniz");
            for (int i = 0; i < 20; i++)
            {
                Console.WriteLine($"{i + 1}.sayıyı giriniz");
                int number = Convert.ToInt32(Console.ReadLine());
                Numbers[i] = number;
            }

            int Sum = 0;
            Array.Sort(Numbers);
            for (int i = 0; i < 3; i++)
            {
                Sum += Numbers[i];
            }

            int Average = Sum / 3;
            Console.WriteLine($"\nDizideki en küçük üç sayının ortalaması: {Average}");

            int Sum2 = 0;
            for (int i = Numbers.Length - 1; i > Numbers.Length - 4; i--)
            {
                Sum2 += Numbers[i];
            }
            int Average2 = Sum2 / 3;
            Console.WriteLine($"\nDizideki en büyük üç sayının ortalaması: {Average2}");
            int AverageTotal = Average + Average2;
            Console.WriteLine($"\nOrtalamaların toplamı: {AverageTotal}");
        }
    }
}
