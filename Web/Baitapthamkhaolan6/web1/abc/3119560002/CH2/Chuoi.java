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
public class Chuoi {
    private String c;
    Scanner sc = new Scanner(System.in);
    public void nhap(){
        System.out.println("Nhap vao chuoi bat ky: ");
        c = sc.nextLine();
    }
    public void xuat(){
        System.out.println("Chuoi vua nhap: "+c);
    }
    public void dodai(String c){
        System.out.println("Do dai chuoi la: "+c.length());
    }
    public void chuanhoa(){
        this.c = c.replaceAll("\\s", "");
        System.out.println("Chuoi sau chuan hoa: "+c);
    }
     public void tu(){
        int d = 0;
        for (int i=0; i<c.length(); i++){
            if (c.charAt(i) == ' '){
                d++;
                System.out.println();
            }
            else {System.out.print(c.charAt(i));}
        }
        System.out.println();
        d++;
        System.out.println("So tu trong chuoi: "+d);
    }
     public void ktu(){
        int l = c.length();
        System.out.print("Nhap k: ");
        int k = sc.nextInt();
        
        System.out.print(k + " ki tu ben trai: " + c.substring(0,k) + "\n");
        System.out.print(k + " ki tu ben phai: " + c.substring(l-k, l) + "\n");       
    }
     public void cau_e(){
        System.out.print("Nhap k: ");
        int k = sc.nextInt();
        System.out.print("Nhap n: ");
        int n = sc.nextInt();
        
        System.out.print(n + " ki tu tu vi tri thu " + k );
        System.out.println(" a:\n" + c.substring(k-1,k+n-1));
    }
     public void Hoathuong(){
        System.out.println("Chuoi sau in hoa: "+c.toUpperCase());
        System.out.println("Chuoi sau in thuong: "+c.toLowerCase());
     }
    public void Chuoi(){
        Chuoi n=new Chuoi();
        n.nhap();
        n.xuat();
        n.dodai(n.c);
        n.tu();
        n.chuanhoa();
        n.ktu();
        n.cau_e();
        n.Hoathuong();
    }
}
