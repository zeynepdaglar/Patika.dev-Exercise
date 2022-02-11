using System;

namespace DegiskenlerP
{
    class Program
    {
        static void Main(string[] args)
        {
            
            uint number1 = 5; //4 byte
            long number2 = 38647638748458; //8 byte
            ulong number3 = 8768768687; //8 byte

            //Reel sayılar
            float numer4 = 6.9f; // 4 byte
            float number5 = 8.99F;
            float number6 = 609;

            decimal number7= 89; //8 byte
            decimal number8 = 44.9m;
            decimal number9 = 56.90M;

            double number10 = 678; //16 byte
            double number11 = 78.56;

            char character1 = '$'; //2 byte
            char character2 = '£';
            char character3 = 'z';
            Console.WriteLine((int)character3);

            bool b1 = true;
            bool b2 = false;

            object o1 = "x";
            object o2 = "y";
            object o3 = 5;
            object o4 = 9.4;

            string str1 = string.Empty;
            str1 = "Zeynep Daglar";
            string name = "Zeynep";
            string surname = "Daglar";
            string fullName = name + surname;

            int number12 = 4;
            int number13 = 5;
            int multiply = number12 * number13;

            bool bool1 = 10 < 2;

            //Değişken Dönüşümleri
            string s = "20";
            int i1 = 20;
            string year = i1 + Convert.ToString(s);
            Console.WriteLine(year);

            int i2 = i1 + Convert.ToInt16(s);
            Console.WriteLine(i2);

            int i3 = i1 + int.Parse(s);


            //dateTime
            string datetime = DateTime.Now.ToString("dd.MM.yyyy");
            Console.WriteLine(datetime);
            string datetime2 = DateTime.Now.ToString("dd/M/yyyy");
            Console.WriteLine(datetime2);
            string hour = DateTime.Now.ToString("HH:mm");
            Console.WriteLine(hour);
        }
    }
}
