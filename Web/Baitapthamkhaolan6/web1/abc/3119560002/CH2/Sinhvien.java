/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package CH2;
import java.util.Scanner;
 
public class Sinhvien {
    private String hoTen, lop, maSV;
    private double diemmon1, diemmon2, diemmon3;
    Scanner sc= new Scanner(System.in);
public Sinhvien()
{
    this.maSV=null;
    this.hoTen=null;
    this.lop=null;
}
public Sinhvien(String hoTen,String lop, String maSv,double diemmon1,double diemmon2,double diemmon3)
{
    this.maSV=maSV;
    this.hoTen=hoTen;
    this.lop=lop;
    this.diemmon1=diemmon1;
    this.diemmon2=diemmon2;
    this.diemmon3=diemmon3;
}
  public void setmaSV(String maSV){
      this.maSV=maSV;
  }
  
  public void sethoTen(String hoTen){
      this.hoTen=hoTen;
  }
  public void setlop(String lop){
      this.lop=lop;
  }
  public void setdiemmon1(double diemmon1){
      this.diemmon1=diemmon1;
  }
  public void setdiemmon2(double diemmon2){
      this.diemmon2=diemmon2;
  }
  public void setdiemmon3(double diemmon3){
      this.diemmon3=diemmon3;
  }
  public String getmaSV(){
      return maSV;
  }
  public String gethoTen(){
      return hoTen;
  }
 public String getlop(){
      return lop;
  } 
 public double getdiemmon1(){
      return diemmon1;
  }
 public double diemmon2(){
      return diemmon2;
  }
 public double diemmon3(){
      return diemmon3;
  } 
 public void nhap(){
    System.out.println("Nhap ma sinh vien ");
    maSV = sc.nextLine();
    System.out.println("Nhap ho va ten sinh vien ");
    hoTen = sc.nextLine();
    System.out.println("Nhap lop: ");
    lop = sc.nextLine();
    System.out.println("Nhap diem mon 1: ");
    diemmon1 = sc.nextDouble();
    System.out.println("Nhap diem mon 2: ");
    diemmon2 = sc.nextDouble();
    System.out.println("Nhap diem mon 3: ");
    diemmon3 = sc.nextDouble();
 }
    public double tinhDiemTrungBinh(double a, double b, double c) {
        return (a + b + c) / 3;
    }
    public String xepLoaiHocLuc(double diemTB) {
        if (diemTB >= 8 && diemTB <= 10) {
            return "Gioi";
        }
        if (diemTB >= 6.5 && diemTB < 8) {
            return "Kha";
        }
        if (diemTB >= 5.0 && diemTB < 6) {
            return "Trung binh";
        }
        if (diemTB >= 0.0 && diemTB < 5) {
            return "Yeu";
        }
        return "Nhap sai!";
    }
     public void xuat(){
        System.out.printf("%-12s%-20s%-12s%-12s%-12s%-12s\n",maSV,hoTen,lop,diemmon1,diemmon2,diemmon3);
     }
    public void Sinhvien() {
        Sinhvien student = new Sinhvien();
        student.nhap();
        student.xuat();
        System.out.println("Diem trung binh 3 mon:  = " + student.tinhDiemTrungBinh(student.diemmon1, student.diemmon2, student.diemmon3));
        System.out.println(student.xepLoaiHocLuc(
        student.tinhDiemTrungBinh(student.diemmon1, student.diemmon2, student.diemmon3)));
    }
 
}