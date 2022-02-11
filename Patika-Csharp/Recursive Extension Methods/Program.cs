using System;

namespace Recursive_Extension_metotlar
{
    class Program
    {
        static void Main(string[] args)
        {
            int result = 1;
            for (int i = 1; i < 5; i++)
            {
                result = result * 3;
                Console.WriteLine(result);

            }
            MathExtension instance = new();
            Console.WriteLine(instance.Expo(3, 4));

            //extention metotlar
            string ifade = "Zeynep Daglar";
            bool sonuc = ifade.CheckSpaces();
            Console.WriteLine(sonuc);
            if (sonuc)
            {
                Console.WriteLine(ifade.RemoveWhiteSpaces());
            }
            Console.WriteLine(ifade.MakeUpperCase());
            Console.WriteLine(ifade.MakeLowerCase());

            int[] dizi = { 5, 9, 3, 8, 3, 22, };
            dizi.SortArray();
            dizi.EkranaYazdır();

            int sayi = 5;
            Console.WriteLine(sayi.IsEvenNuber());
            Console.WriteLine(ifade.GetFirstCharacter());
        }

        public class MathExtension
        {
            public int Expo(int sayi, int üs)
            {
                if (üs < 2)
                    return sayi;
                return Expo(sayi, üs - 1) * sayi;
            }

        }
        public static class Extension

        {
            public static bool CheckSpaces(this string param)
            {
                return param.Contains(" ");
            }


            public static string RemoveWhiteSpaces(this string param)
            {
                string[] dizi = param.Split(" ");
                return string.Join("", dizi);
            }

            public static string MakeUpperCase(this string param)
            {
                return param.ToUpper();
            }

            public static string MakeLowerCase(this string param)
            {
                return param.ToLower();
            }

            public static int[] SortArray(this int[] param)
            {
                Array.Sort(param);
                return param;
            }

            public static void EkranaYazdir(this int[] param)
            {
                foreach (var item in param)
                {
                    Console.WriteLine(item);
                }
            }

            public static bool IsEvenNumber(this int param) 
            {
                return param == 0;
            }

            public static string GetFirstCharacter(this string param) 
            {
                return param.Substring(0,1);
            }
        }
    }
}
