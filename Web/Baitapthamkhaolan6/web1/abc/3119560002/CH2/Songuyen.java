package CH2;
import java.util.Scanner;
public class Songuyen{
    public int n;
    Scanner sc=new Scanner(System.in);
    public Songuyen(){
        this.n=0;
    }
    public Songuyen(int n){
        this.n=n;
    }
    public void setSonguyen(int n){
        this.n=n;
    }
    public int getSonguyen(){
        return n;
    }
    public void nhap(){
        System.out.println("Nhap vao so nguyen n bat ky: ");
        n = sc.nextInt();
    }
    public void xuat(){
        System.out.println("N vua nhap la: "+n);
    }
    public void chanle(int n){
        if (n % 2 == 0) {
            System.out.println(n + " la so chan");
        } else {
            System.out.println(n + " la so le");
        }
    }
    public boolean Ktnt(int t) {
           if (t < 2) {
            return false;
        }
        int sqrt = (int) Math.sqrt(t);
        for (int i = 2; i <= sqrt; i++) {
            if (t % i == 0) {
                return false;
            }
        }
        return true;
    }
    public void Lietkent(int t){
       int d = 1;
       int i = 2;
       while(d<=t){
          if(Ktnt(i)){
            System.out.print(i + " ");
            d++;
           }
          i++;
       }
    }
    public boolean hoanhao(int n){
        int s = 0;
        for(int i=1;i<=n/2;i++){
            if(n%i==0) 
                s+=i;
        }   
        if(s==n) return true; 
        return false;
    }
    public int dem(int n){
    int d = 0;
    while (n > 0)
    {
        n /= 10;
        ++d;
    }
        return d;
    }
    public boolean Armstrong(int n)
{
    int soluong = dem(n);
    int tmp = n, sum = 0, last;
    while (tmp > 0)
    {
        last = tmp % 10;
        tmp /= 10;
        sum += Math.pow(last, soluong);
    }
    if (sum == n)
        return true;
    return false;
}
    public void Songuyen(){
        Songuyen sn=new Songuyen();
        sn.nhap();
        sn.xuat();
        sn.chanle(sn.n);
        if(sn.Ktnt(sn.n)){System.out.println(sn.n+" la so nguyen to");}
        else{System.out.println(sn.n+" khong phai so nguyen to");}
        if(sn.hoanhao(sn.n)){System.out.println(sn.n+" la so hoan hao");}
        else{System.out.println(sn.n+" khong phai so hoan hao");}
        if(sn.Armstrong(sn.n)){System.out.println(sn.n+" la so Armstrong");}
        else{System.out.println(sn.n+" khong phai so Armstrong");}    
        System.out.print("Day " + sn.n + " so dau tien : ");
        Lietkent(sn.n);
        }
    }
