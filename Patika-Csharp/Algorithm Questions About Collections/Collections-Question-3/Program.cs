using System;
using System.Linq;

namespace Kolleksiyonlar_Soru_3
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine($"Bir cümle yazınız:");
            string Input = Console.ReadLine();
            char[] Vowel = new[] { 'a', 'e', 'ı', 'i', 'o', 'ö', 'u', 'ü' };
            foreach (var character in Vowel)
            {
                bool control = Input.Contains(character);
                if (control==true)
                {
                    Console.WriteLine(character);
                }
            }
            Console.ReadKey();
        }
    }
}
