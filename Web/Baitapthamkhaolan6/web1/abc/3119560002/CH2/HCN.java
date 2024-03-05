package CH2;
 
import java.util.Scanner;
 
public class HCN {
   public double chieuDai;
   public double chieuRong;
    Scanner sc = new Scanner(System.in);
   public HCN(){
    this.chieuDai=0;
    this.chieuRong=0;
}
   public HCN(double chieuDai,double chieuRong){
    this.chieuDai=chieuDai;
    this.chieuRong=chieuRong;
   }
   public void setchieuDai(double chieuDai){
       this.chieuDai=chieuDai;
   }
   public void setchieuRong(double chieuRong){
       this.chieuRong=chieuRong;
   }
   public double getchieuDai(){
       return chieuDai;
   }
   public double getchieuRong(){
       return chieuRong;
   }
    public void nhap() {
        do {
            System.out.println("Nhap chieu dai hinh chu nhat: ");
            chieuDai = sc.nextDouble();
            System.out.println("Nhap chiue rong hinh chu nhat: ");
            chieuRong = sc.nextDouble();
        } while (chieuDai < chieuRong);
    }
     
    public double tinhChuVi(double dai, double rong) {
        double chuVi = (dai + rong) * 2;
        return chuVi;
    }
     
    public double tinhDienTich(double dai, double rong) {
        double dienTich = dai * rong;
        return dienTich;
    }
     
    public void Xuat() {
        System.out.println("Chieu dai: "+chieuDai);
        System.out.println("Chieu rong: "+chieuRong);
    }
    public void HCN(){
        HCN chunhat=new HCN();
        chunhat.nhap();
        chunhat.Xuat();
        System.out.println("Chu vi hinh chu nhat: "+ chunhat.tinhChuVi(chunhat.chieuDai,chunhat.chieuRong));
        System.out.println("Dien tich hinh chu nhat: "+ chunhat.tinhDienTich(chunhat.chieuDai,chunhat.chieuRong));
        
    }
}