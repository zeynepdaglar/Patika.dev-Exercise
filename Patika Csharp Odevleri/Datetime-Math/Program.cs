using System;

namespace Datetime_Math_Metotları
{
    class Program
    {
        static void Main(string[] args)
        {
            //Datetime
            Console.WriteLine(DateTime.Now);
            Console.WriteLine(DateTime.Now.Date);
            Console.WriteLine(DateTime.Now.Day);
            Console.WriteLine(DateTime.Now.Month);
            Console.WriteLine(DateTime.Now.Year);
            Console.WriteLine(DateTime.Now.Hour);
            Console.WriteLine(DateTime.Now.Minute);
            Console.WriteLine(DateTime.Now.Second);

            Console.WriteLine(DateTime.Now.DayOfWeek);
            Console.WriteLine(DateTime.Now.DayOfYear);

            Console.WriteLine(DateTime.Now.ToLongDateString());
            Console.WriteLine(DateTime.Now.ToShortDateString());
            Console.WriteLine(DateTime.Now.ToLongTimeString());
            Console.WriteLine(DateTime.Now.ToLongTimeString());

            Console.WriteLine(DateTime.Now.AddDays(2));
            Console.WriteLine(DateTime.Now.AddHours(4));
            Console.WriteLine(DateTime.Now.AddSeconds(6));
            Console.WriteLine(DateTime.Now.AddMonths(3));
            Console.WriteLine(DateTime.Now.AddYears(1));
            Console.WriteLine(DateTime.Now.AddMilliseconds(2));

            //Datetime Format
            Console.WriteLine(DateTime.Now.ToString("dd")); //24
            Console.WriteLine(DateTime.Now.ToString("ddd")); //Sat
            Console.WriteLine(DateTime.Now.ToString("dddd")); //Saturday

            Console.WriteLine(DateTime.Now.ToString("MM")); //04
            Console.WriteLine(DateTime.Now.ToString("MMM")); //Apr
            Console.WriteLine(DateTime.Now.ToString("MMMM")); //April

            Console.WriteLine(DateTime.Now.ToString("yy")); //21
            Console.WriteLine(DateTime.Now.ToString("yyyy")); //2021

            Console.WriteLine("Math Kütüphanesi");

            //Math Kütüphanesi
            Console.WriteLine(Math.Abs(-25)); //mutlak değer
            Console.WriteLine(Math.Sin(10));
            Console.WriteLine(Math.Cos(10));
            Console.WriteLine(Math.Tan(10));

            Console.WriteLine(Math.Ceiling(23.3)); //23
            Console.WriteLine(Math.Round(23.3)); //22
            Console.WriteLine(Math.Ceiling(23.7)); //23
            Console.WriteLine(Math.Floor(23.7)); //22

            Console.WriteLine(Math.Pow(3,4)); //üs hesaplar
            Console.WriteLine(Math.Sqrt(9)); //karekök
            Console.WriteLine(Math.Log(9)); // 9 un e tabanındaki logaritmasınındaki karşılığını verir
            Console.WriteLine(Math.Exp(3)); //e üzeri 3 ü verir
            Console.WriteLine(Math.Log10(10)); //10 sayısının logaritma 10 tabanındaki karşılığı

        }
    }
}
