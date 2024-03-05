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
public class HT {
    public double Bankinh;
    Scanner sc = new Scanner(System.in);

public HT(){
    this.Bankinh=0;
}
public HT(double Bankinh){
    this.Bankinh= Bankinh;
}
public void setBankinh(){
    this.Bankinh=Bankinh;
}
public double getBankinh(){
    return Bankinh;
}
    public void nhap() {
        do {
            System.out.println("Nhap ban kinh hinh tron: ");
            Bankinh = sc.nextDouble();
        } while (Bankinh<0);
    }
     
    public double tinhChuVi(double Bankinh) {
        double chuVi = Bankinh *2 *3.14;
        return chuVi;
    }
     
    public double tinhDienTich(double Bankinh) {
        double dienTich = Bankinh *Bankinh *3.14;
        return dienTich;
    }
     
    public void Xuat() {
        System.out.println("Ban kinh hinh tron la: " + Bankinh );
    }
    public void HT(){
        HT hinhtron = new HT();
        hinhtron.nhap();
        hinhtron.Xuat();
        System.out.println("Chu vi hinh tron: " + hinhtron.tinhChuVi(hinhtron.Bankinh));
        System.out.println("Dien tich hình tron: " + hinhtron.tinhDienTich(hinhtron.Bankinh));
    }
    
}
