using System;

namespace ArraySinifiMetodları
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] Numbers = { 34, 23, 12, 67, 45, 9, 43 };

            Console.WriteLine("Sırasız Dizi");
            foreach (var number in Numbers)
            {
                Console.WriteLine(number);
            }

            //Sort
            Console.WriteLine("Sıralı Dizi");
            Array.Sort(Numbers);
            foreach (var number in Numbers)
                Console.WriteLine(number);

            //Clear
            Console.WriteLine("Array Clear");
            //Sayı dizisi elemanları kullanılarak 2.indexten itibaren 2 tane elemanı 0'lar
            Array.Clear(Numbers,2,2);
            foreach (var number in Numbers)
                Console.WriteLine(number);

            //Reverse, dizi tersten yazdırır
            Console.WriteLine("Array Reverse");
            Array.Reverse(Numbers);
            foreach (var number in Numbers)
                Console.WriteLine(number);

            //IndexOf
            Console.WriteLine("Array IndexOf");
            Console.WriteLine(Array.IndexOf(Numbers, 45));

            //Resize
            Console.WriteLine("Array Resize");
            Array.Resize<int>(ref Numbers, 9);
            Numbers[8] = 99;
            foreach (var number in Numbers)
                Console.WriteLine(number);

            
            

            
            
            
            
        }
    }
}
