using System;
using System.Collections.Generic;

namespace PatikaOdev1._3
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Lütfen bir sayı giriniz:");
            int Input = int.Parse(Console.ReadLine());
            Console.WriteLine($"Toplam {Input} adet kelime giriniz:");

            List<string> Words = new List<string>();
            for (int i = 0; i < Input; i++)
            {
                Console.WriteLine($"{i+1}. kelimeyi giriniz");
                string Word = Console.ReadLine();
                Words.Add(Word);
            }

            Console.WriteLine("Listenizin sondan başa doğru yazılmış hali");
            Words.Reverse();
            foreach (var item in Words)
            {
                Console.WriteLine(item);
            }
        }
    }
}
