// Bài Tập 1: Tính Lương Nhân viên*/

/*Khai báo biến */
var luongMotngay = 100000; /*Lương một ngày công làm được*/
var ngayLam = 26; /* Số ngày làm việc trong một tháng*/

/* Tính lương theo ngày công*/
var luongNhanVien = luongMotngay * ngayLam; /*Lương nhân viên bằng lương theo ngày công nhân với số ngày công*/

/* In kết quả ra màn hình*/
console.log("Lương nhân viên là: " + luongNhanVien + " đồng");

/* Bài Tập 2: Tính Giá Trị Trung Bình*/

// Khai báo biến
var a = 27.02;
var b = 19.06;
var c = 11.03;
var d = 08.06;
var e = 13.06;
var Tong = a + b + c + d + e;
// Tính giá trị trung bình của 5 số thực
var trungBinh = Tong / 5;
// In kết quả ra màn hình*/
console.log("Giá trị trung bình của 5 số thực là: " + trungBinh);

// Bài Tập 3: Quy Đổi Tiền

// Khai Báo Biến
var giaUSA = 23500; /*Giá 1 USD là 23500VNĐ*/
var soTienUSA = 329 /* Số tiền người nhập có */
// Công Thức Tính quy đổi tiền*/
var tienVNĐ = giaUSA * soTienUSA /* Số Tiền việt quy đổi = giá trị tiền USD nhân số lượng tiền */
// In kết quả ra màn hình*/
console.log("Số Tiền Việt Quy Đổi Được Là:" + tienVNĐ + "VNĐ")

// Bài Tập 4: Tính diện tích, chu vi hình chữ nhật*/

// Khai báo biến*/
var a = 24; // Chiều dài hình chữ nhật*/
var b = 16; // Chiều rộng hình chữ nhật*/
// Công thức tính chu vi*/
var P = (a + b) * 2;
// Công thức tính diện tích */
var S = a * b;
// In kết quả ra màn hình*/
console.log("Chu vi hình chữ nhật là:" + P + "cm")
console.log("Diện tích hình chữ nhật là:" + S + "cm2")

// Bài Tập 5: Tính tổng 2 ký số*/
// Khai báo biến*/
var n = 27;
var unit, ten, sum;
// Công thức tính tổng 2 ký số vừa nhập */
unit = n % 10;
ten = Math.floor(n % 100 / 10);
sum = unit + ten;
// In kết quả ra màn hình*/
console.log("Tổng 2 ký số vừa nhập là:" + sum)