package CH2;
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import java.util.Scanner;
import CH2.Chuoi;
import CH2.DanhSachSinhVien;
import CH2.Diem;
import CH2.HCN;
import CH2.HT;
import CH2.Sinhvien;
import CH2.Songuyen;

public class menu {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
	    int chonSo;
	    int N;
	do {
	    System.out.print("Bai tap so 1 (phim 1) \n");
	    System.out.print("Bai tap so 2 (phim 2) \n");
	    System.out.print("Bai tap so 3 (phim 3) \n");
	    System.out.print("Bai tap so 4 (phim 4) \n");
	    //System.out.print("Bai tap so 5 (phim 5) \n");
	    System.out.print("Bai tap so 6 (phim 6) \n");
	   // System.out.print("Bai tap so 7 (phim 7) \n");
	    System.out.print("BBai tap so 8 (phim 8) \n");
	    System.out.print("Bai tap so 9 (phim 9) \n");
	    System.out.print("Bam 0 de thoat chuong trinh \n");
	    System.out.print("Chon bai tap de giai: \n");
	    chonSo = scanner.nextInt();
	    	Diem b1= new Diem();
	    	HCN b2= new HCN();
	    	HT b3=new HT();
	    	Sinhvien b4=new Sinhvien();
	    	Songuyen b6=new Songuyen();
	    	Chuoi b8=new Chuoi();
	    	DanhSachSinhVien b9=new DanhSachSinhVien();
	switch (chonSo) {
	    case 0:
	        System.out.println("Cam on");
	        break;
	    case 1:
	        System.out.print("Ban chon BT1 !!! \n");
                b1.Diem();
	        break;
	    case 2:
	        System.out.print("Ban chon BT2 !!! \n");
	        b2.HCN();
	        break;
	    case 3:
	        System.out.print("Ban chon BT3 !!! \n");
	        b3.HT();
	        break;
	    case 4:
	        System.out.print("Ban chon BT4 !!! \n");
	        b4.Sinhvien();
	        break;
	    case 6:
	        System.out.print("Ban chon BT6 !!! \n");
	        b6.Songuyen();
	        break;
	    case 8:
	        System.out.print("Ban chon BT8 !!! \n");
	        b8.Chuoi();
	        break;
	    case 9:
	        System.out.print("Ban chon BT9 !!! \n");
	        b9.DanhSachSinhVien();
	        break;
	    }
	} while (chonSo!=0);
	}
}
