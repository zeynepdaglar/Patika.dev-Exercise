using System;

namespace StaticClass
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine($"Çalışan Sayısı: {Calisan.CalisanSayisi}");

            Calisan calisan = new Calisan("Melek","Yılmaz","İK");
            Console.WriteLine($"Çalışan Sayısı: {Calisan.CalisanSayisi}");

            Calisan calisan1 = new Calisan("Güneş","Yılmaz","İK");
            Calisan calisan2 = new Calisan("Kumsal","Yılmaz","İK");
            Console.WriteLine($"Çalışan Sayısı: {Calisan.CalisanSayisi}");

        }
    }

    class Calisan
    {
        private static int calisanSayisi;
        public static int CalisanSayisi { get => calisanSayisi; }

        private string Isim;
        private string Soyisim;
        private string Departman;

        static Calisan()
        {
            calisanSayisi = 0;
        }

        public Calisan(string isim, string soyisim, string departman)
        {
            this.Isim = isim;
            this.Soyisim = soyisim;
            this.Departman = departman;
            calisanSayisi++;
        }
    }
}
