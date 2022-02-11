using System;

namespace ConsoleApp3
{
    class Program
    {
        static void Main(string[] args)
        {
            string name, surname;
            Console.WriteLine("Lütfen Adınızı Giriniz :");
            name = Console.ReadLine();
            Console.WriteLine("Lütfen Soyadınızı Giriniz :");
            surname = Console.ReadLine();
            Console.WriteLine($"Merhaba {name} {surname}");

        }
    }
}
