using System;

namespace Operatorler.Patika
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Atama Ve İşlemli Atama Operatorleri");
            int x = 5;
            int y = 4;
            y = y + 2;
            Console.WriteLine(y);
            y += 2;
            Console.WriteLine(y);
            y /= 1;
            Console.WriteLine(y);
            y *= 2;
            Console.WriteLine(y);

            Console.WriteLine("Mantıksal Operatorler");
            bool isSuccess = true;
            bool isCompleted = false;

            if (isSuccess && isCompleted)
            {
                Console.WriteLine("Perfect");
            }
            if (isSuccess || isCompleted)
            {
                Console.WriteLine("Great");
            }
            if (isSuccess && isCompleted)
            {
                Console.WriteLine("Fine");
            }


            int sayi5 = Convert.ToInt16(Console.ReadLine());
            if (sayi5 >= 0 && sayi5 <= 100)
            {
                Console.WriteLine("Sayi5 is between 0-100");
            }
            else if (sayi5 > 100 && sayi5 <= 200)
            {
                Console.WriteLine("Sayi5 is beetwen 101-200");
            }
            else if (sayi5 > 200 || sayi5 < 0)
            {
                Console.WriteLine("Sayi5 is less than 0 or greater than 200");
            }   
          

            Console.WriteLine("İlişkisel Oparatorler");
            int a = 3;
            int b = 4;
            bool sonuc1 = a < b;
            Console.WriteLine(sonuc1);
            sonuc1 = a >= b;
            Console.WriteLine(sonuc1);
            sonuc1 = a == b;
            Console.WriteLine(sonuc1);
            sonuc1 = a != b;
            Console.WriteLine(sonuc1);

            Console.WriteLine("Aritmetik Operatorler");
            int number1 = 10;
            int number2 = 5;
            int sonuc2 = number1 / number2;
            Console.WriteLine(sonuc2);
            sonuc2 = number1 * number2;
            Console.WriteLine(sonuc2);
            sonuc2 = number1 + number2;
            Console.WriteLine(sonuc2);
            sonuc2 = number1++;

            //mod
            int sonuc3 = 20 % 3;
            Console.WriteLine(sonuc3);

            //çift ve Tek Sayıları bulur
            int number = Convert.ToInt16(Console.ReadLine());
            if (number % 2 == 0)
            {
                Console.WriteLine("Sayı Çifttir");
            }
            else
            {
                Console.WriteLine("Sayı Tektir");
            }
        }
    }
}
