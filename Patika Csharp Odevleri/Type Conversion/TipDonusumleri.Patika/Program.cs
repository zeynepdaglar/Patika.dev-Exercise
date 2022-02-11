using System;

namespace TipDonusumleri.Patika
{
    class Program
    {
        static void Main(string[] args)
        {
            //İmplit Conversion (Bilinçsiz Dönüşüm)
            Console.WriteLine("***İmplit Conversion***");
            byte number1 = 5;
            sbyte number2 = 30;
            short number3 = 10;
            int total = number1 + number2 + number3;
            Console.WriteLine("total: "+total);

            long number4 = total;
            Console.WriteLine("number4: {0}",number4);

            float number5 = number4;
            Console.WriteLine("number5: {0}",number5);

            string name = "Zeynep";
            char character = 'D';
            object total2 = name + character + total;
            Console.WriteLine("total2: {0}",total2);

            //Excilipt Conversion (Biliçli Dönüşüm)
            Console.WriteLine("***Excilipt Conversion***");
            int number6 = 4;
            byte number7 = (byte)number6;
            Console.WriteLine("number7: {0}",number7);

            int number8 = 100;
            byte number9 = (byte)number8;
            Console.WriteLine("number9: {0}",number9);

            float number10 = 10.3f;
            byte number11 = (byte)number10;
            Console.WriteLine("number11: {0}",number11);

            // ToString Methodu
            int number12 = 6;
            string text = number12.ToString();
            Console.WriteLine("text: {0}",text);

            string number13 = 12.5F.ToString();
            Console.WriteLine("number13: {0}",number13);

            // System.Convert
            Console.WriteLine("***System.Convert Sınıfı***");
            string s1 = "10", s2 = "20";
            int Number1, Number2;
            int total3;
            Number1 = Convert.ToInt16(s1);
            Number2 = Convert.ToInt16(s2);
            total3 = Number1 + Number2;
            Console.WriteLine("total3: {0}",total3);

            // Parse
            Console.WriteLine("***Parse Methodu***");
            parseMethod();

            
        }

        public static void parseMethod() 
        {
            string text1 = "10";
            string text2 = "10.25";
            int number14;
            double double1;

            number14 = Int16.Parse(text1);
            double1 = Double.Parse(text2);
            Console.WriteLine("number14: {0} \ndouble1: {1}\n",number14,double1);

        }
    }
}
