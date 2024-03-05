// Top up Button
let mybutton = document.getElementById("TopUpButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



var ProductArray = [];

function Product(ProductID, Name, Price, Category, Brand, Image) {
  this.ProductID = ProductID;
  this.Name = Name;
  this.Price = Price;
  this.Category = Category;
  this.Brand = Brand;
  this.Image = Image;
}

function CreateProduct() {
  if (localStorage.getItem('Product') === null) {
      ProductArray = [
          new Product( 10001 , 'Bracelet' , '1700000', 'Bracelet' , "Harry Winston" ,'images/Bracelet_01.jpg'),
          new Product( 10002 , 'Bracelet' , '2100000', 'Bracelet' , "LEKANI" ,'images/Bracelet_02.jpg'),
          new Product( 10003 , 'Bracelet' , '600000', 'Bracelet' , "Chopard" ,'images/Bracelet_03.jpg'),
          new Product( 10004 , 'Bracelet' , '1100000', 'Bracelet' , "Graff" ,'images/Bracelet_04.jpg'),
          new Product( 10005 , 'Bracelet' , '700000', 'Bracelet' , "Harry Winston" ,'images/Bracelet_05.jpg'),
          new Product( 10006 , 'Bracelet' , '2300000', 'Bracelet' , "THAYA" ,'images/Bracelet_06.jpg'),
          new Product( 10007 , 'Bracelet' , '1150000', 'Bracelet' , "Tiffany & Co" ,'images/Bracelet_07.png'),
          new Product( 10008 , 'Bracelet' , '1400000', 'Bracelet', "LEKANI" ,'images/Bracelet_08.jpg'),
          new Product( 10009 , 'Bracelet' , '600000', 'Bracelet' , "Graff" ,'images/Bracelet_09.jpg'),
          new Product( 10010 , 'Earring' , '650000', 'Earring' , "Tiffany & Co" ,'images/Earring_01.jpg'),
          new Product( 10011 , 'Earring' , '900000', 'Earring' , "THAYA" ,'images/Earring_02.jpg'),
          new Product( 10012 , 'Earring' , '1400000', 'Earring' , "Chopard" ,'images/Earring_04.jpg'),
          new Product( 10013 , 'Earring' , '900000', 'Earring' , "Graff" ,'images/Earring_05.jpg'),
          new Product( 10014 , 'Earring' , '1350000', 'Earring' , "Tiffany & Co" ,'images/Earring_06.jpeg'),
          new Product( 10015 , 'Earring' , '2200000', 'Earring' , "THAYA" ,'images/Earring_07.jpg'),
          new Product( 10016 , 'Earring' , '1800000', 'Earring' , "Tiffany & Co" ,'images/Earring_08.jpg'),
          new Product( 10017 , 'Earring' , '1750000', 'Earring' , "Harry Winston" ,'images/Earring_09.jpg'),
          new Product( 10018 , 'Earring' , '850000', 'Earring' , "Graff" ,'images/Earring_10.jpeg'),
          new Product( 10019 , 'Earring' , '1125000', 'Earring' , "Tiffany & Co" ,'images/Earring_11.jpg'),
          new Product( 10020 , 'Necklace' , '2400000', 'Necklace' , "LEKANI" ,'images/Necklace_01.jpg'),
          new Product( 10021 , 'Necklace' , '3000000', 'Necklace' , "Tiffany & Co" ,'images/Necklace_02.jpg'),
          new Product( 10022 , 'Necklace' , '1200000', 'Necklace' , "THAYA" ,'images/Necklace_03.jpg'),
          new Product( 10023 , 'Necklace' , '1100000', 'Necklace' , "Graff" ,'images/Necklace_04.jpg'),
          new Product( 10024 , 'Necklace' , '1700000', 'Necklace' , "Harry Winston" ,'images/Necklace_05.jpg'),
          new Product( 10025 , 'Necklace' , '1100000', 'Necklace' , "LEKANI" ,'images/Necklace_06.jpg'),
          new Product( 10026 , 'Necklace' , '1600000', 'Necklace' , "THAYA" ,'images/Necklace_07.jpg'),
          new Product( 10027 , 'Necklace' , '1800000', 'Necklace' , "Chopard" ,'images/Necklace_08.jpg'),
          new Product( 10028 , 'Necklace' , '1200000', 'Necklace' , "Tiffany & Co" ,'images/Necklace_09.jpg'),
          new Product( 10029 , 'Ring' , '1135000', 'Ring' , "LEKANI" ,'images/Ring_01.jpg'),
          new Product( 10028 , 'Ring' , '1115000', 'Ring' , "Chopard" ,'images/Ring_02.jpg'),
          new Product( 10028 , 'Ring' , '975000', 'Ring' , "THAYA" ,'images/Ring_03.png'),
          new Product( 10028 , 'Ring' , '635000', 'Ring' , "Graff" ,'images/Ring_04.jpg'),
          new Product( 10028 , 'Ring' , '2450000', 'Ring' , "Harry Winston" ,'images/Ring_05.jpg'),
      ];
      localStorage.setItem('Product', JSON.stringify(ProductArray));
  }
}

let StartPage = 0;
let PageSize = 12;
let EndPage = PageSize;
let TotalPage;
let PageID = 1; 

// Hiện sản phẩm 
function ShowProduct(Product){
  let HTML = "";
    for ( let i = 0 ; i < Product.length ; i++ ){
      if ( i >= StartPage && i <EndPage){
        let html =  '<div class = "Products">'
            html += ' <div class = "Product" onclick="OpenDetail('+ Product[i].ProductID + ')">'
            html += '   <div class = "Product-Image">'
            html += '     <img src = "'+ Product[i].Image +'" style="width:200px;height:200px;">'   
            html += '   </div>'
            html += ' <h2 class = "Product-Title">'+ Product[i].Name + '</h2>'
            html += ' <h3 class = "Product-Price" style>'+ Product[i].Price +' vnd</h3>'
            html += ' </div>'
            html += ' <button class = "button Product-Cart" onclick="AddCart()" >Add To Cart</button>'
            html += '</div>';
          HTML = HTML + html;
      }
    }
  document.querySelector("#content").innerHTML = HTML;
}


// Lấy dữ liệu từ Local Storage
function GetProductArray() {
  if ( localStorage.getItem('Product') === null ) {
      return false;
  }
  ProductArray = JSON.parse(localStorage.getItem('Product') );
  TotalPage = Math.ceil(ProductArray.length / PageSize);
  return ProductArray;
}

// Hàm tính tổng số trang
function ListPage(TotalPage){
  if (TotalPage < 2){
    document.querySelector(".pagination").innerHTML = "";
    return;
  }
  let html = '';
  html += `<li class="active"><a>${1}</a></li>`;;
  for (let i = 2 ; i <= TotalPage ; i++) {
    html += `<li><a>${i}</a></li>`;
  }
document.querySelector(".pagination").innerHTML = html;
}

// lấy danh sách sản phẩm của trang
function GetPage(Page){
    StartPage = ( Page - 1 ) * PageSize;
    EndPage = Page * PageSize ;
}

// Phân trang
function ProductPage(Product){
  const PageIDs = document.querySelectorAll('.pagination li');
  for ( let i = 0 ; i < PageIDs.length ; i++ ){
    PageIDs[i].onclick = function() {
      let value = i + 1;
      const current = document.querySelector('.active');
      current.className = current.className.replace('active', '');
      PageIDs[i].classList.add('active');
      PageID = value;
      GetPage(PageID);
      ShowProduct(Product);
      GetPage(1);
    }
  }
}

// Hàm thực hiện các chức năng tìm kiếm
function LeftBarAction(value){
  let Category = ProductArray;
  switch(value){
    // Toàn bộ sản phẩm
    case value = 0:
        ListPage(TotalPage);
        ShowProduct(Category);
        ProductPage(Category);
        break;
    // Sản phẩm thuộc loại Ring
    case value = 1:
        Category = ProductArray.filter(item => {
          return item.Category.includes("Ring");
        })
        ListPage((Math.ceil(Category.length / PageSize)));
        ShowProduct(Category);
        ProductPage(Category);
        break;
    // Sản phẩm thuộc loại Bracelet
    case value = 2:
        Category = ProductArray.filter(item => {
          return item.Category.includes("Bracelet");
        })
        ListPage((Math.ceil(Category.length / PageSize)));
        ShowProduct(Category);
        ProductPage(Category);
        break;
    // Sản phẩm thuộc loại Earring
    case value = 3:
        Category = ProductArray.filter(item => {
          return item.Category.includes("Earring");
        })
        ListPage((Math.ceil(Category.length / PageSize)));
        ShowProduct(Category);
        ProductPage(Category);
        break;
    // Sản phẩm thuộc loại Earring
    case value = 4:
        Category = ProductArray.filter(item => {
          return item.Category.includes("Necklace");
        })
        ListPage((Math.ceil(Category.length / PageSize)));
        ShowProduct(Category);
        ProductPage(Category);
        break;
    // Sản phẩm có giá dưới 1m
    case value = 5:
        Category = ProductArray.filter(item => {
          return item.Price < 1000000;
        })
        ListPage((Math.ceil(Category.length / PageSize)));
        ShowProduct(Category);
        ProductPage(Category);
        break;
     // Sản phẩm có giá từ 1m đến 2m
    case value = 6:
        Category = ProductArray.filter(item => {
          return item.Price >= 1000000 && item.Price <= 2000000;
        })
        ListPage((Math.ceil(Category.length / PageSize)));
        ShowProduct(Category);
        ProductPage(Category);
        break;
    //  Sản phẩm có giá trên 2m
    case value = 7:
        Category = ProductArray.filter(item => {
          return item.Price > 2000000;
        })
        ListPage((Math.ceil(Category.length / PageSize)));
        ShowProduct(Category);
        ProductPage(Category);
        break;
  }
}

function Search(value){
  switch (value){
    // Tìm theo tên sản phẩm
    case value = 0:
      let Name = document.getElementById('ProductNameSearch').value;
      if (!isNaN(Name)) {
        LeftBarAction(0);
        }
      else{
        let Product = ProductArray.filter(item => {
                return item.Name.includes(Name)
            })
            ListPage((Math.ceil(Product.length / PageSize)));
            ShowProduct(Product);
            ProductPage(Product);
      }
      break;
    // Tìm theo giá
    case value = 1:
      let MinPrice = parseInt(document.getElementById('PriceMin').value);
      let MaxPrice = parseInt(document.getElementById('PriceMax').value);
      if (!isNaN(MinPrice) && !isNaN(MaxPrice)) {
        if (MinPrice > MaxPrice) {
            alert("The maximum price must be greater than the minimum price");
            return false;
        } else {
            let Price = ProductArray.filter(item => {
                return item.Price >= MinPrice && item.Price <= MaxPrice;
            })
            ListPage((Math.ceil(Price.length / PageSize)));
            ShowProduct(Price);
            ProductPage(Price);
        }
      } else {
        if (isNaN(MinPrice) && isNaN(MaxPrice))
          alert("Please enter the minimum value and the maximum value!");
        else {
          if (isNaN(MinPrice))
            alert("Please enter the minimum value!");
          if (isNaN(MaxPrice))
            alert("Please enter the maximum value!");
        }
      break;
    }
  }
}

var DetailArray;

// hiện thông tin sản phẩm
function OpenDetail(ID){
  for ( let i = 0 ; i < ProductArray.length ; i++ )
    if ( ID == ProductArray[i].ProductID ){
      DetailArray = ProductArray[i];
      break;
    }
  let html = '<img src="'+ DetailArray.Image +'" style = "margin-left: 30px; width: 300px; height: 300px; border: 1px solid #5e5e5e ;">'
  document.getElementById('Product_Image').innerHTML = html;
  document.getElementById('inputName').value = DetailArray.Name;
  document.getElementById('inputBrand').value = DetailArray.Brand;
  document.getElementById('inputCategory').value = DetailArray.Category;
  document.getElementById('inputPrice').value = DetailArray.Price;
  document.getElementById('inputTotalPrice').value = DetailArray.Price;
  document.getElementById("ProductWindow").style.display = "block";
  
}

// Thoát chương trình
function ExitDetail(){
  document.getElementById("ProductWindow").style.display = "none";
  document.getElementById("Number").value = "1";
}

// Cặp nhật giá
function ChangeNumber(Number){
  if (Number < 1) return
  document.getElementById('Number').value = Number;
  document.getElementById('inputTotalPrice').value = parseInt(document.getElementById('inputPrice').value) * Number;
}

// Tăng số lượng
function IncreaseNumber(){
  let Number = parseInt(document.getElementById('Number').value);
  ChangeNumber(Number + 1);
}

// Giảm số lượng
function DecreaseNumber(){
  let Number = parseInt(document.getElementById('Number').value);
  ChangeNumber(Number - 1);
}

function AddCart(){
  alert("Add product to cart successfully");
  document.getElementById("ProductWindow").style.display = "none";
  document.getElementById("Number").value = "1";
}

// mở cửa giỏ hàng
function OpenCart(){
  document.getElementById("midder").style.display = "none";
  let html = '<label class = "linkbartext" href="" target="_blank">JEWELS HEARTS > <b>CART</b></label>';
  document.getElementById('linkbar').innerHTML = html;
} 

function OpenProduct(){
  document.getElementById("midder").style.display = "grid";
  let html = '<label class = "linkbartext" href="" target="_blank">JEWELS HEARTS > <b>PRODUCTS</b></label>';
  document.getElementById('linkbar').innerHTML = html;

}

window.onload = function() {
  OpenProduct();  
  CreateProduct();
  GetProductArray();
  ShowProduct(ProductArray);
  ListPage(TotalPage);
  ProductPage(ProductArray);
}

