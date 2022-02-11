using System;

namespace Switch_Case_P
{
    class Program
    {
        static void Main(string[] args)
        {
            int month = DateTime.Now.Month;
            switch (month)
            {
                case 7:
                    Console.WriteLine("Temmuz ayındasınız.");
                    break;
                case 8:
                    Console.WriteLine("Ağustos ayındasınız.");
                    break;
                case 9:
                    Console.WriteLine("Eylül ayındasınız.");
                    break;
                case 10:
                    Console.WriteLine("Ekim ayındasınız.");
                    break;
                default:
                    Console.WriteLine("Yanlış veri girişi");
                    break;
            }

            switch (month)
            {
                case 12:
                case 1:
                case 2:
                    Console.WriteLine("Kış aylarındasınız.");
                    break;
                case 3:
                case 4:
                case 5:
                    Console.WriteLine("İlkbahar aylarındasınız.");
                    break;
                case 6:
                case 7:
                case 8:
                    Console.WriteLine("Yaz aylarındasınız.");
                    break;
                case 9:
                case 10:
                case 11:
                    Console.WriteLine("Sonbahar aylarındasınız");
                    break;
                default:
                    break;
            }
            Console.Read();
        }
    }
}
