var _name: string = "Nguyễn hoàng anh";
var _email: string = "hoanganh@gmail.com";
var _phone: string = "0123456789";
var _gender: string = "Nam";
var _hoppy: string = "Xem phim, Đọc sách, du lịch, bóng đá";

document.write(`
    <table border="1" >
    <tr>
        <td>Họ tên</td>
        <td>${_name}</td>
    </tr>
    <tr>
        <td>Email</td>
        <td>${_email}</td>

    </tr>
    <tr>
        <td>Số điện thoạii</td>
        <td>${_phone}</td>

    </tr>
    <tr>
        <td>Giới tính</td>
        <td>${_gender}</td>
    </tr>
    <tr>
        <td>Sở thích</td>
        <td>${_hoppy}</td>
    </tr>
    </table>
`)