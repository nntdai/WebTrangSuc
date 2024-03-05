var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function chuyenSlide(n) {
    showSlides(slideIndex = n);
}
var a;
localStorage.setItem('a','bar');

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
 // js của login box -
 function hideImage()
{
    var kq='<img src="images/hide.svg" id="hideImage" width="30px" height="30px">';
    return kq;
}
function showImage()            
{
    var kq='<img src="images/show.svg" id="hideImage" width="30px" height="30px">';
    return kq;
}
function hidePass(btnPass)         //an hien mk
{
    const ipnElement=document.getElementById("ipnPass");
    const currentType=ipnElement.getAttribute("type");
    var hideButton=btnPass;

    if (currentType==="password") {
        ipnElement.setAttribute("type","text");
       // hideButton.replace(showImage,hideImage);
       btnPass.innerHTML=showImage();
    }
    else 
    {
        ipnElement.setAttribute("type","password");
       // hideButton.replace(hideImage,showImage);
       btnPass.innerHTML=hideImage();
    }
}

    
function checkLog()           //kt nhap tk mk
{
    var passValue=passWord.value;
    if (userNameValue===' ')
    setError(userName,"Tên tài khoản không được để trống");
    else{
        setSuccess(userName);
    }
}

function checkUserName()
{
    const userName=document.getElementById("UserName");
    let ErrorUN=document.getElementById("ErrorUN");
    let userNameValue=userName.value;
    if (userNameValue=="")
    {
        ErrorUN.setAttribute("style","color:red;margin-left:10px;font-family: Verdana;font-size:14px")
        ErrorUN.innerHTML="Username không được để trống !";
    }
    else 
    {
    ErrorUN.setAttribute("style","color:green;margin-left:10px;font-family: Verdana;font-size:14px")
    ErrorUN.innerHTML="Username được chấp nhận !";}
}
function checkPass()
{
    var passWord=document.getElementById("ipnPass");
    let ErrorP=document.getElementById("ErrorP");
    let passValue=passWord.value;
    if (passValue=="")
    {
        ErrorP.setAttribute("style","color:red;margin-left:10px;font-family: Verdana;font-size:14px")
        ErrorP.innerHTML="Password không được để trống !";
    }
    else 
    {
        ErrorP.setAttribute("style","color:green;margin-left:10px;font-family: Verdana;font-size:14px")
        ErrorP.innerHTML="Password được chấp nhận !";}
}
// -js của login box
// js của register box --
function checkName()
{
    var name=document.getElementById("name");
    var ErrorN=document.getElementById("ErrorN");
    var nameValue=name.value;
    if (nameValue=="")
    {
        ErrorN.setAttribute("style","color:red;margin-left:10px;font-family: Verdana;font-size:14px;float:left")
        ErrorN.innerHTML="Họ và tên không được để trống !";
    }
    else 
    {
        ErrorN.setAttribute("style","color:green;margin-left:10px;font-family: Verdana;font-size:14px;float:left")
        ErrorN.innerHTML="Họ và tên được chấp nhận !";}
}
function maxDateBirth()            // điều chỉnh ngày lớn nhất
{
    var dateBirth=document.getElementById("Dayofbirth");
    var today = new Date();
    var date=parseInt(today.getDate());
    date>9?date=String(date):date="0"+String(date);
    var maxdate =today.getFullYear() +'-'+(today.getMonth()+1)+'-'+ date ;
    dateBirth.setAttribute("max",maxdate); 
}
function checkDateBirth()
{
    //var today = new Date();
    //var date=parseInt(today.getDate());
    //date>9?date=String(date):date="0"+String(date);
    //var mdate =today.getFullYear() +'-'+(today.getMonth()+1)+'-'+ date ;
    var dateBirth=document.getElementById("Dayofbirth");
    var ErrorBD=document.getElementById("ErrorBD");
    var dateBValue=dateBirth.value;
    //var mindate= String(parseInt(today.getFullYear()-18)+'-'+(today.getMonth()+1)+'-'+ date) 
    if (dateBValue=="")
    {
        ErrorBD.setAttribute("style","color:red;margin-left:10px;font-family: Verdana;font-size:14px;float:left")
        ErrorBD.innerHTML="Ngày sinh không được để trống !";
    }
    else 
    {
        ErrorBD.setAttribute("style","color:green;margin-left:10px;font-family: Verdana;font-size:14px;float:left")
        ErrorBD.innerHTML="Ngày sinh được chấp nhận !";
    }
}
function checkNumber()            // điều chỉnh ngày lớn nhất
{
    var phone=document.getElementById("Phone");
    var ErrorNumber=document.getElementById("ErrorNumber");
    var phoneValue=phone.value;
    var x=String(Number(phoneValue));
    if (phoneValue=="")
    {
        ErrorNumber.setAttribute("style","color:red;margin-left:10px;font-family: Verdana;font-size:14px;float:left")
        ErrorNumber.innerHTML="Số điện thoại không được để trống !";
    }
    else if (x=="NaN")
    {
        ErrorNumber.setAttribute("style","color:red;margin-left:10px;font-family: Verdana;font-size:14px;float:left")
        ErrorNumber.innerHTML="Số điện thoại không chứa ký tự !";
    }
    else 
    {
        ErrorNumber.setAttribute("style","color:green;margin-left:10px;font-family: Verdana;font-size:14px;float:left")
        ErrorNumber.innerHTML="Số điện thoại được chấp nhận !";
    }
}
function checkEmail()
{
    var email=document.getElementById("Email");
    var ErrorE=document.getElementById("ErrorE");
    var emailValue=email.value;
    if (emailValue=="")
    {
        ErrorE.setAttribute("style","color:red;margin-left:10px;font-family: Verdana;font-size:14px;float:left")
        ErrorE.innerHTML="Email không được để trống !";
    }
    else if(emailValue.indexOf("@gmail.com")==-1)
    {
        ErrorE.setAttribute("style","color:red;margin-left:10px;font-family: Verdana;font-size:14px;float:left")
        ErrorE.innerHTML="Email cần có '@gmail.com' !";
    }
    else 
    {
        ErrorE.setAttribute("style","color:green;margin-left:10px;font-family: Verdana;font-size:14px;float:left")
        ErrorE.innerHTML="Email  được chấp nhận !";}
}
function checkEmail()
{
    var email=document.getElementById("Email");
    var ErrorE=document.getElementById("ErrorE");
    var emailValue=email.value;
    if (emailValue=="")
    {
        ErrorE.setAttribute("style","color:red;margin-left:10px;font-family: Verdana;font-size:14px;float:left")
        ErrorE.innerHTML="Email không được để trống !";
    }
    else if(emailValue.indexOf("@gmail.com")==-1)
    {
        ErrorE.setAttribute("style","color:red;margin-left:10px;font-family: Verdana;font-size:14px;float:left")
        ErrorE.innerHTML="Email cần có '@gmail.com' !";
    }
    else 
    {
        ErrorE.setAttribute("style","color:green;margin-left:10px;font-family: Verdana;font-size:14px;float:left")
        ErrorE.innerHTML="Email  được chấp nhận !";}
}
function checkPassRegister(){
    var passR=document.getElementById("Password");
    var ErrorPR=document.getElementById("ErrorPR");
    var passRValue=passR.value;
    if (passRValue=="")
    {
        ErrorPR.setAttribute("style","color:red;margin-left:10px;font-family: Verdana;font-size:14px;float:left")
        ErrorPR.innerHTML="Mật khẩu không được để trống !";
    }
    else if (passRValue.length<6&&passRValue.length>0)
    {
        ErrorPR.setAttribute("style","color:red;margin-left:10px;font-family: Verdana;font-size:14px;float:left")
        ErrorPR.innerHTML="Mật khẩu tối thiểu 6 kí tự";
    }
    else 
    {
        ErrorPR.setAttribute("style","color:green;margin-left:10px;font-family: Verdana;font-size:14px;float:left")
        ErrorPR.innerHTML="Mật khẩu được chấp nhận !";
        return 1;
    }
}
function checkPassRegisterA()
{
    checkPassRegister();
    if (checkPassRegister()==1)
    {
    var passRA=document.getElementById("Password-again");
    var ErrorPRA=document.getElementById("ErrorPR-A");
    var passRAValue=passRA.value;
    var passR=document.getElementById("Password");
    var passRValue=passR.value;
    if (passRAValue==passRValue)
    {
        ErrorPRA.setAttribute("style","color:green;margin-left:10px;font-family: Verdana;font-size:14px;float:left")
        ErrorPRA.innerHTML="Mật khẩu khớp!";
    }
    else if (passRAValue=="")
    {
        ErrorPRA.setAttribute("style","color:red;margin-left:10px;font-family: Verdana;font-size:14px;float:left")
        ErrorPRA.innerHTML="Mật khẩu nhập lại không được để trống";
    }
    else 
    {
        ErrorPRA.setAttribute("style","color:red;margin-left:10px;font-family: Verdana;font-size:14px;float:left")
        ErrorPRA.innerHTML="Mật khẩu không khớp !";
    }
}
}
function openLogin()
{
    var modal=document.getElementById("modal-background");
    modal.style.display="block";
}
function closeLogin()
{
    var modal=document.getElementById("modal-background");
    modal.style.display="none";
}
function rotate()
{
    var khung=document.getElementById("khung");
    
    khung.style.transform="rotateY(180deg)";
    setTimeout(function()
    {var khunglogin=document.getElementById("khunglogin");
    khunglogin.style.display="none";},1000);
    

}
function rotate1()
{
    var khung=document.getElementById("khung");
    var khunglogin=document.getElementById("khunglogin");
    khung.style.transform="none";
    khunglogin.style.display="block";
} 
function register(name,date,gender,number,email,password)
{
    var nameValue=name.value;
    var dateValue=date.value;
    var genderValue=gender.value;
    var numberValue=number.value;
    var emailValue=email.value;
    var passValue=password.value;
    [
        {
            "name":nameValue,
            "date":dateValue,
            "gender":genderValue,
            "number":numberValue,
            "email":emailValue,
            "pass":passValue


        }
    ]
}