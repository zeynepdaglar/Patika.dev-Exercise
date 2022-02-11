using System;
using System.Collections.Generic;

namespace PatikaOdev1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Lütfen bir sayı giriniz");
            int Input = int.Parse(Console.ReadLine());
            int Input2;
            List<int> Numbers = new List<int>();
            for (int i = 0; i < Input; i++)
            {
                Console.WriteLine($"Lütfen {i+1}.sayıyı giriniz");
                Input2 = int.Parse(Console.ReadLine());
                Numbers.Add(Input2);
            }

            foreach (var number in Numbers)
            {
                if (number%2==0)
                {
                    Console.WriteLine($"Çift sayılar {number}");
                }
            }
           
        }
    }
}
