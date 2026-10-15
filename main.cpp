#include <iostream>
#include <fstream>
#include <string>
using namespace std;

class Student
{
public:
    int rollNo;
    string name;
    string branch;
    float cgpa;

    void input()
    {
        cout << "\nEnter Roll Number: ";
        cin >> rollNo;
        cin.ignore();

        cout << "Enter Name: ";
        getline(cin, name);

        cout << "Enter Branch: ";
        getline(cin, branch);

        cout << "Enter CGPA: ";
        cin >> cgpa;
    }

    void display()
    {
        cout << "\nRoll Number: " << rollNo;
        cout << "\nName: " << name;
        cout << "\nBranch: " << branch;
        cout << "\nCGPA: " << cgpa;
        cout << "\n-------------------------";
    }
};

void addStudent()
{
    Student s;

    s.input();

    ofstream file("students.txt", ios::app);

    file << s.rollNo << endl;
    file << s.name << endl;
    file << s.branch << endl;
    file << s.cgpa << endl;

    file.close();

    cout << "\nStudent added successfully!\n";
}

int main()
{

    int choice;

    while (true)
    {

        cout << "\n\n===== STUDENT MANAGEMENT SYSTEM =====";
        cout << "\n1. Add Student";
        cout << "\n2. Exit";

        cout << "\n\nEnter your choice: ";
        cin >> choice;

        if (choice == 1)
        {
            addStudent();
        }
        else if (choice == 2)
        {
            cout << "\nProgram closed.\n";
            break;
        }
        else
        {
            cout << "\nInvalid choice!";
        }
    }

    return 0;
}