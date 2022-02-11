using System;
using System.Collections.Generic;

namespace PatikaOdev1._2
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Lütfen 1.sayıyı giriniz:");
            int Input = int.Parse(Console.ReadLine());
            Console.WriteLine("Lütfen 2.sayıyı giriniz:");
            int Input2 = int.Parse(Console.ReadLine());
            Console.WriteLine();
            Console.WriteLine($"Toplam {Input} adet sayı giriniz:");
            List<int> Numbers = new List<int>();
            for (int i = 0; i <Input; i++)
            {
                Console.WriteLine($"Lütfen {i+1}.sayıyı giriniz:");
                int Input3 = int.Parse(Console.ReadLine());
                Numbers.Add(Input3);
            }
            foreach (var number in Numbers)
            {
                if (number==Input2)
                {
                    Console.WriteLine(number);
                }
                else if(number%Input2==0)
                {
                    Console.WriteLine();
                    Console.WriteLine($"{number} sayisi {Input2} sayısına tam bölünüyor");
                }

            }
        }
    }
}
