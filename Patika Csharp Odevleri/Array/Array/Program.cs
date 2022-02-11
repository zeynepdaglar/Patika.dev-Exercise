using System;

namespace Array
{
    class Program
    {
        static void Main(string[] args)
        {
            //Dizi Tanımlama
            string[] Colors = new string[5];

            string[] Animals = { "Cat", "Dog", "Bird", "Monkey" };
            int[] array;
            array = new int[5];

            //Dizilere değer atama ve erişim
            Colors[0] = "Blue";
            array[3] = 10;

            Console.WriteLine(Animals[1]);
            Console.WriteLine(array[3]);
            Console.WriteLine(Colors[0]);

            //Döngülerle dizi kullanımı
            //klavyeden girilen n tane sayının ortalamasını hesaplayan program
            Console.WriteLine("Lütfen dizinin eleman sayısını giriniz");
            int ArrayLength = int.Parse(Console.ReadLine());
            int[] Numbers = new int[ArrayLength];

            for (int i = 0; i <ArrayLength; i++)
            {
                Console.WriteLine("Lütfen {0}.sayıyı giriniz: ",i+1);
                Numbers[i] = int.Parse(Console.ReadLine());
            }

            int Sum = 0;
            foreach (var number in Numbers)
            {
                Sum += number;
            }
            Console.WriteLine("Ortalama: "+Sum/ArrayLength);
        }
    }
}
