using System;

namespace Encapsulation_Propertry
{
    class Program
    {
        static void Main(string[] args)
        {
            Ogrenci ogrenci = new Ogrenci("Ayse","Yılmaz",533,3);
            ogrenci.OgrenciBilgileriniGetir();

            ogrenci.SinifAtlat();
            ogrenci.OgrenciBilgileriniGetir();

            Ogrenci ogrenci1 = new Ogrenci("Deniz","Arda",256,1);
            ogrenci1.SinifDusur();
            ogrenci1.OgrenciBilgileriniGetir();
        }
    }

    class Ogrenci
    {
        private string isim;
        private string soyisim;
        private int ogrenciNo;
        private int sinif;

        public string Isim
        { 
          get { return isim; }
          set { isim = value; }
        }

        public string Soyisim { get => soyisim; set => soyisim = value; }
        public int OgrenciNo { get => ogrenciNo; set => ogrenciNo = value; }
        public int Sinif 
        { 
            get =>sinif;
            set 
            {
                if (value <1)
                {
                    Console.WriteLine("Sınıf en az 1 olailir!");
                    sinif = 1;
                }
                else
                sinif = value; 
            }
        }

        public Ogrenci(string ısim, string soyisim, int ogrenciNo, int sinif)
        {
            Isim = ısim;
            Soyisim = soyisim;
            OgrenciNo = ogrenciNo;
            Sinif = sinif;
        }

        public void OgrenciBilgileriniGetir()
        {
            Console.WriteLine($"Öğrenci Adı: {Isim}");
            Console.WriteLine($"Öğrenci Soyadı: {Soyisim}");
            Console.WriteLine($"Öğrenci Numarası: {OgrenciNo}");
            Console.WriteLine($"Öğrenci Sınıfı: {Sinif}");
        }

        public void SinifAtlat()
        {
            this.Sinif = this.Sinif + 1;
        }

        public void SinifDusur()
        {
            this.Sinif = this.Sinif - 1;
        }
    }
}
