/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package CH2;
import java.util.Arrays;
import java.util.Scanner;
/**
 *
 * @author tram anh
 */
public class DanhSachSinhVien {
private int n;
    Sinhvien [] dssv;
    Scanner sc=new Scanner(System.in);
    public DanhSachSinhVien()
    {
        dssv=null;
        n=0;
    }
    
    public void nhapdssinhvien() 
    {
        
        System.out.println("Nhap vao so luong sinh vien:");
        n=Integer.parseInt(sc.nextLine());
        dssv=new Sinhvien[n];
        for(int i=0;i<n;i++)
        {
            Sinhvien a=new Sinhvien();
            a.nhap();
            dssv[i]=a;
        }
    }
    public void xuatmangsinhvien()
    {
        System.out.println("Danh sach sinh vien vua nhap)");
        System.out.printf("%-12s%-12s%s\n","Column 1","Column 2","Column3");
        System.out.printf("%-12d%-12d%07d\n", 15, 12, 5);
        System.out.println("+-----------------------------------------------------------------------------------------------+");
    	System.out.printf("%-12s%-20s%-12s%-12s%-12s%-12s\n","MaSV","Ho Ten","Lop","Diem mon 1","Diem mon 2", "Diem mon 3");
        for(int i=0; i<dssv.length; i++)
        {    
            dssv[i].xuat(); 
            
        }
    }
    public void timkiemsinhvien()
    {
        System.out.println("Nhap vao ma sinh vien can tim: :");
        String masv=sc.nextLine();
        for(int i=0; i<dssv.length; i++)
            if(dssv[i].getmaSV().equalsIgnoreCase(masv))
                dssv[i].xuat();
    }
    public Sinhvien timkiemsinhvien1()
    {
        Sinhvien sv=null;
        System.out.println("Nhap vao ma sinh vien can tim: ");
        String masv=sc.nextLine();
        for(int i=0; i<dssv.length; i++)
            if(dssv[i].getmaSV().equalsIgnoreCase(masv))
            {    
                sv=dssv[i];
                break;
            }
        return sv;
    }
    public void themsinhvien()
    {
        System.out.println("Nhap thong tin sinh vien can them:");
        Sinhvien sv=new Sinhvien();
        sv.nhap();
        dssv = Arrays.copyOf(dssv, dssv.length +1); 
        dssv[n]=sv;
        n++;        
    }
    public Sinhvien [] themsinhvienbatky() {
        Scanner sc = new Scanner(System.in);
        int k;
        Sinhvien sauchen[] = new Sinhvien [n+1];
        Sinhvien chen[] = new Sinhvien [n+1];
        System.out.println("Nhap vi tri can chen: ");
        k = sc.nextInt();k--;
        Sinhvien t= new Sinhvien();
        t.nhap();
        for(int i=0;i<k;i++){
            sauchen[i]=dssv[i];
        }
        sauchen[k]=t;
        for(int i=k+1;i<n;i++){
            sauchen[i]=dssv[i];
        }
        return sauchen;
    }
    public Sinhvien[] xoasinhvien(){
        int l=dssv.length;
        Sinhvien [] arrsauxoa=new Sinhvien[n];
        System.out.println("Nhap ma sv can xoa: ");
        String masv=sc.nextLine();
        int k=0;
        for(int i=0;i<l;i++){
            if(dssv[i].getmaSV().equalsIgnoreCase(masv)){
                k=i;
            }
        }
        for(int i=k;k<l-1;k++){
            dssv[k]=dssv[k+1];
        }
        l--;
        arrsauxoa=dssv;
        return arrsauxoa;
    }
    public void DanhSachSinhVien() {
        DanhSachSinhVien mangsv=new DanhSachSinhVien();
        mangsv.nhapdssinhvien();
        mangsv.xuatmangsinhvien();
        mangsv.timkiemsinhvien();
        Sinhvien sv1=null;
        sv1=mangsv.timkiemsinhvien1();
        sv1.xuat();
        mangsv.themsinhvien();
        mangsv.xuatmangsinhvien();
        Sinhvien a[]=null;
        a=mangsv.xoasinhvien();
        System.out.println("Phan tu cua mang:"+a.length);
        for(int i=0;i<a.length-1;i++)
            a[i].xuat();
/*      Sinhvien arr[]=null;
        arr=mangsv.themsinhvienbatky();
        System.out.println("Phan tu cua mang:"+arr.length);
        for(int i=0;i<arr.length;i++){
            mangsv.n++;
            arr[i].xuat();
        }
*/
    }
}
