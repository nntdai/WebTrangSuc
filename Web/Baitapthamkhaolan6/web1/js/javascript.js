
function createAdmin(){
	var userArray = [];
	var bien="abc123";
	
	//if(localStorage.getItem('user')==null){		
		alert("co vao day k!!!!!!!!!!!");
		
	 //userArray = JSON.parse(localStorage.getItem('user'));
		var user1 = {username: 'admin', password: 'admin', fullname: 'Nguyen Van A ', address: '273 An An Duong Vuong - P3 - Q5', phone: '0566490523' , datesignup: '23-11-1999'};
		var user2 = {username: 'abc', password: 'abc', fullname: 'Nguyen Van b ', address: '273 An An Duong Vuong - P3 - Q5', phone: '0566490523' , datesignup: '23-11-1999'};
		var user3={username:bien , password: 'abc', fullname: 'Nguyen Van b ', address: '273 An An Duong Vuong - P3 - Q5', phone: '0566490523' , datesignup: '23-11-1999'}
		userArray.push(user1);
		userArray.push(user2);
		userArray.push(user3);
		console.log(userArray);
		localStorage.setItem('user',JSON.stringify(userArray));
	//}
}
//----------------------show user----------------------------------
function showUserList(){
alert("co vao day k");
	if(localStorage.getItem('user')===null){
		return false;
	}
	 userArray = JSON.parse(localStorage.getItem('user'));
	var tr='<tr><th>STT</th><th>HỌ TÊN KH</th><th>TÊN ĐĂNG NHẬP</th><th>Mật Khẩu</th><th>NGÀY ĐĂNG KÝ</th><th>XOA</th></tr><br />';
	for(var i=0; i<userArray.length;i++){
		tr+='<tr><td>'+i+'</td><td>'+userArray[i].fullname+'</td><td>'+userArray[i].username+'</td><td>'+userArray[i].datesignup+'</td><td>'+ userArray[i].password +'</td><td><button class="delete" onClick="deleteuser(\''+userArray[i].username+'\')">&times;</button></td></tr>';
	}
	document.getElementById('userlist').innerHTML=tr;
}

//su dung: push them phan tu vao cuoi mang, pop: xoa phan tu cuoi mang, unshit: them phan tu vao dau mang, shit: xoa phtu nam dau mang-----
//----------------------delete user-------------------------------
function deleteuser(usernamedelete){
	var userArray = JSON.parse(localStorage.getItem('user'));
	for(var i=0;i<userArray.length;i++){
		if(userArray[i].username == usernamedelete){
			if(confirm('Bạn có muốn xóa tài khoản này?')){
				userArray.splice(i, 1);
			}
		}
	}
	localStorage.setItem('user',JSON.stringify(userArray));
	showUserList();
}

function createnewuser()
{
	userArray = JSON.parse(localStorage.getItem('user'));
	var user1 = {username: 'user123', password: '123456', fullname: 'Nguyen Van C ', address: '273 An An Duong Vuong - P3 - Q5', phone: '0566490523' , datesignup: '23-11-1999'};
	console.log(user1);
	console.log("Type user 1:");
	console.log(typeof(user1));
	userArray.push(user1);
	
	localStorage.setItem('user',JSON.stringify(userArray));
	showUserList();
}

function login()
{
	
	alert("login");
	var username=document.getElementById("user").value;
	var password=document.getElementById("pass").value;
	var userArray = JSON.parse(localStorage.getItem('user'));
	for(i=0;i<userArray.length;i++)
		if(userArray[i].username==username && userArray[i].password==password)
			window.location="abc.html";
	alert("dang nhap khong thanh cong");		
}

function theloaimenu()
{
    var theloaiarr=[
        new theloai("as","ASUS"),
        new theloai("hp", "HP"),
        new theloai("le", "LENOVO"),
        new theloai("de", "DEL"),
        new theloai("hp", "HP"),
        new theloai("le", "LENOVO"),
        new theloai("de", "DEL"),
        new theloai("lkc", "Lien ket cuoi trang"),
        new theloai("lkn", "Lien ket ngoai"),
        new theloai("lke", "Lien ket email"),
        ];
        var s="";
		for(i=0;i<theloaiarr.length;i++)
		{	
				var a='<a href="position.html?'+theloaiarr[i].matl+'&1"><li onclik="hienthi1(this);">'+ theloaiarr[i].tentl + '</li></a>';		
					s+=a;
				}
				s='<ul>'+s+'</ul>';
				document.getElementById("javacriptmenu").innerHTML=s;

        if(localStorage.getItem('theloai')===null){
            localStorage.setItem('theloai',JSON.stringify(theloaiarr));
        }
}

function createProduct(){
	if(localStorage.getItem('product')===null){
		var productArray = [
			{productId:10042, brand:'adidas',    img:'images/product/10042.jpg', name:'Stan Smith Green', price:2500000},
			{productId:10041, brand:'nike',    img:'images/product/10041.jpg', name:'Air max 1 Just do it', price:5700000},
			{productId:10040, brand:'adidas',    img:'images/product/10040.jpg', name:'Superstar White Gold', price:2100000},
			{productId:10039, brand:'adidas',    img:'images/product/10039.jpg', name:'Stan Smith Leather White', price:3030000},
			{productId:10038, brand:'gucci',    img:'images/product/10038.jpg', name:'Gucci Snake Diamond', price:18455000},
			{productId:10037, brand:'gucci',    img:'images/product/10037.jpg', name:'Gucci Sneaker Dirty', price:15000000},
			{productId:10036, brand:'balenciaga',    img:'images/product/10036.jpg', name:'Balenciaga Speed Trainer Triple Black', price:17050000},
			{productId:10035, brand:'nike',    img:'images/product/10035.jpg', name:'Vapormax X OFF WHITE 2018', price:7500000},
			{productId:10034, brand:'nike',    img:'images/product/10034.jpg', name:'AIR MAX 270 ALL WHITE', price:4319000},
			{productId:10033, brand:'adidas',    img:'images/product/10033.jpg', name:'Human Race China Exclusive Green', price:10375000},
			{productId:10032, brand:'adidas',    img:'images/product/10032.jpg', name:'Alpha Bounce Instinct All Black', price:4300000},
			{productId:10031, brand:'gucci',    img:'images/product/10031.jpg', name:'Gucci Global Sneaker', price:16050000},
			{productId:10030, brand:'gucci',    img:'images/product/10030.jpg', name:'Gucci Bee Black', price:16000000},
			{productId:10029, brand:'balenciaga',    img:'images/product/10029.jpg', name:'Balenciaga Triple S Grey', price:33000000},
			{productId:10028, brand:'balenciaga',    img:'images/product/10028.jpg', name:'Rick Owens SS17 High', price:18050000},
			{productId:10027, brand:'nike',    img:'images/product/10027.jpg', name:'Pegasus 35 Black', price:7350000},
			{productId:10026, brand:'nike',    img:'images/product/10026.jpg', name:'Air Max 97 Silver Bullet', price:8150000},
			{productId:10025, brand:'adidas',    img:'images/product/10025.jpg', name:'Alpha Bounce Beyond Nude/Pink', price:4100000},
			{productId:10024, brand:'adidas',    img:'images/product/10024.jpg', name:'Adidas YUNG1 Navy/Red', price:4590000},
			{productId:10023, brand:'gucci',    img:'images/product/10023.jpg', name:'Gucci Snake Sneaker', price:16000000},
			{productId:10022, brand:'gucci',    img:'images/product/10022.jpg', name:'Gucci Global Silver Sneaker', price:18000000},
			{productId:10021, brand:'adidas',    img:'images/product/10021.jpg', name:'Yeezy 350 v2 ‘ Zebra ‘ Rep', price:10255000},
			{productId:10020, brand:'adidas',    img:'images/product/10020.jpg', name:'Yeezy 350 v2 Beluga 2.0', price:9500000},
			{productId:10019, brand:'nike',    img:'images/product/10019.jpg', name:'Air Max 270 Black Pink', price:6250000},
			{productId:10018, brand:'nike',    img:'images/product/10018.jpg', name:'Air max 1 x Parra', price:15549000},
			{productId:10017, brand:'adidas',    img:'images/product/10017.jpg', name:'Human Race China Exclusive Peace', price:10375000},
			{productId:10016, brand:'adidas',    img:'images/product/10016.jpg', name:'YUNG1 Frieza', price:4130000},
			{productId:10015, brand:'gucci',    img:'images/product/10015.jpg', name:'Gucci Fox Sneaker', price:16000000},
			{productId:10014, brand:'gucci',    img:'images/product/10014.jpg', name:'Gucci Stripe Sneaker', price:15099000},
			{productId:10013, brand:'balenciaga',    img:'images/product/10013.jpg', name:'Rick Owens SS17 Low', price:23100000},
			{productId:10012, brand:'balenciaga',    img:'images/product/10012.jpg', name:'Balenciaga Triple S Black', price:21255000},
			{productId:10011, brand:'nike',    img:'images/product/10011.jpg', name:'Air max 1 Box Print', price:2330000},
			{productId:10010, brand:'nike',    img:'images/product/10010.jpg', name:'Nike Element 87 Black', price:5295000},
			{productId:10009, brand:'adidas',    img:'images/product/10009.jpg', name:'Human Race V3 Solar Black', price:12355000},
			{productId:10008, brand:'adidas',    img:'images/product/10008.jpg', name:'Adidas Alpha Bounce Instinct Grey', price:2799000},
			{productId:10007, brand:'gucci',    img:'images/product/10007.jpg', name:'Gucci LOVED', price:15600000},
			{productId:10006, brand:'gucci',    img:'images/product/10006.jpg', name:'Gucci Flame Sneaker', price:17099000},
			{productId:10005, brand:'balenciaga',    img:'images/product/10005.jpg', name:'Balenciaga Triple S White', price:20395000},
			{productId:10004, brand:'balenciaga',    img:'images/product/10004.jpg', name:'Balenciaga Speed Trainer BB', price:17020000},
			{productId:10003, brand:'nike',    img:'images/product/10003.jpg', name:'Nike M2K John', price:2949000},
			{productId:10002, brand:'nike',    img:'images/product/10002.jpg', name:'Nike Pegasus 35 Grey', price:5350000},
			{productId:10001, brand:'adidas',    img:'images/product/10001.jpg', name:'Adidas Prophere Undefeated', price:6599000},
			{productId:10000, brand:'adidas',    img:'images/product/10000.jpg', name:'Adidas Yeezy 350 v2 ‘ Oreo ‘ Rep', price:15000000},	
		];
		localStorage.setItem('product',JSON.stringify(productArray));
	}
}

// ----json là một dạng truyền nhận trên môi trường internet đến server----------------
//Convert to JSON
//- eval(): là hàm trong javascript được dùng để chuyển đổi một biến string sang dạng JSON
//- JSON.parse(): Cú pháp JSON.parse(text [, reviver])
//Là hàm trong javascript được dùng để chuyển đổi chuổi JSON sang đối tượng

var jsontext = '{"Ho": "Hoang", "Ten": "Thanh", "Phone": ["0913690366", "016821034**"]}'
var contact = JSON.parse(jsontext);
document.write(contact.Ten  + ", " + contact.Ho+ '</ br>');

//output: Thanh, Hoang

//JSON.stringify(): Cú pháp JSON.stringify(value [, replacer] [, space])
//Là hàm trong javascript được dùng để chuyển đổi một object và một array thành json

var contact = new Object();
contact.firstname = "Jesper";
contact.surname = "Aaberg";
contact.phone = ["555-0100", "555-0120"];

var memberfilter = new Array();
memberfilter[0] = "surname";
memberfilter[1] = "phone";
var jsonText = JSON.stringify(contact, memberfilter, "\t");
document.write(jsonText);
// Output:  
// { "surname": "Aaberg", "phone": [ "555-0100", "555-0120" ] }
</script>
</head>

<body>
<script>
window.onload=function()
{
	alert("hien thi thanh cong");
	createAdmin();
	showUserList();
	createProduct();
	
}

