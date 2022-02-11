using System;

namespace PatikaOdev1._4
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Lütfen bir cümle giriniz:");
            string cumle = Console.ReadLine();
            string[] kelimeler = cumle.Split(' ');
            Console.WriteLine($"\nGirdiğiniz cümledeki kelime sayısı: {kelimeler.Length}");
            string harfler =cumle.Replace(" ","");
            Console.WriteLine($"Girdiğiniz cümledeki harf sayısı: {harfler.Length}");
        }
    }
}
