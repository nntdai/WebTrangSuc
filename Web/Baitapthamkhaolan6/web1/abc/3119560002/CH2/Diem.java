/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package CH2;
import java.util.Scanner;
/**
 *
 * @author tram anh
 */
public class Diem {
    public double x;
    public double y;
    Scanner sc=new Scanner(System.in);
    
public Diem(){
    this.x=0;
    this.y=0;
}
public Diem(double x,double y){
    this.x=x;
    this.y=y;
}
public void setx(double x){
    this.x=x;
}
public void sety(double y){
    this.y=y;
}
public double getx(){
    return x;
}
public double gety(){
    return y;
}
public void nhap(){
    System.out.println("Nhap toa do x: ");
    x=sc.nextDouble();
    System.out.println("Nhap toa do y: ");
    y=sc.nextDouble();
}
public void xuat(){
    System.out.println(x + "," + y);
}
public double tinhkhoangcach(double x, double y){
    double kq;
    kq = Math.sqrt(Math.pow((x-this.x),2)+Math.pow((y-this.y),2));
    return kq;
}
public static double tinhkhoangcach(Diem p1,Diem p2){
    double kq;
    kq = Math.sqrt(Math.pow((p2.x-p1.x),2)+Math.pow((p2.y-p1.y),2));
    return kq;
}
public double tinhkhoangcach(Diem p1){
  double kq;
  kq = Math.sqrt(Math.pow((this.x-p1.x),2)+Math.pow((this.y-p1.y),2));
  return kq;
}
public void move(int x,int y){
    this.x=x;
    this.y=y;
}
public void translate(int dx,int dy){
    this.x=this.x + dx;
    this.y=this.y + dy;
}
public void Diem(){
    double x,y;
    Diem diem= new Diem(); 
    diem.nhap();
    System.out.print("Diem da nhap: ");
    diem.xuat();
    //System.out.println("P1");
    //Diem p1= new Diem();
    //p1.nhap();
    //Diem p2= new Diem();
    //System.out.println("P2:");
    //p2.nhap();
    //System.out.println(diem.tinhkhoangcach(4,5));
    //System.out.println(Diem.tinhkhoangcach(p1, p2));
    //System.out.println(diem.tinhkhoangcach(p1));
    diem.move(5,6);
    System.out.print("Diem sau di chuyen den: ");
    diem.xuat();
    diem.translate(7,9);
    System.out.print("Diem sau tinh tien: ");
    diem.xuat();
}
}
