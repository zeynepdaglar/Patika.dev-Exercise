using System;

namespace ConstructorKavramı
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Employee 1");
            Employee Employee1 = new Employee("Ayşe","Kara",46739876,"Personnel Management");
            Employee1.EmployeeData();

            Console.WriteLine("\nEmployee 2");
            Employee Employee2 = new Employee();
            Employee2.Name = "Merve";
            Employee2.Surname="Atalay";
            Employee2.No = 23476543;
            Employee2.Department= "Purchasing Department";
            Employee2.EmployeeData();

            Console.WriteLine("\nÇalışan 3");
            Employee Employee3 = new Employee("Sude","Arıkan");
            Employee3.EmployeeData();
        }
    }
    class Employee
    {
        public string Name;
        public string Surname;
        public int No;
        public string Department;

        public Employee(string name, string surname, int no, string department)
        {
            this.Name = name;
            this.Surname = surname;
            this.No = no;
            this.Department = department;
        }

        public Employee(string name, string surname)
        {
            this.Name = name;
            this.Surname = surname;
        }

        public Employee() { }

        public void EmployeeData()
        {
            Console.WriteLine($"Employee Name: {Name}");
            Console.WriteLine($"Employee Surname: {Surname}");
            Console.WriteLine($"Employee No: {No}");
            Console.WriteLine($"Employee Department: {Department}");
        }
    }
}
