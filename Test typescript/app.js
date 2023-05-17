var Students = /** @class */ (function () {
    function Students() {
        this.data = new Array();
        this.data = [
            { code: 'B12345', name: "Ngô Hoàng Anh", email: 'anh2gmail.com', phone: "0123456789", MarkAVG: 8.5 },
            { code: 'B41434', name: "Ngô Hoàng Yến", email: 'yengmail.com', phone: "0123456789", MarkAVG: 7.5 },
            { code: 'B43534', name: "hoang thi lanh", email: 'hoanglanh2gmail.com', phone: "0123456789", MarkAVG: 8 },
        ];
    }
    Students.prototype.showListTotable = function (data) {
        var _tr = '';
        var xep_loai = '';
        var tbody_list = document.getElementById('tbodyList');
        for (var key in data) {
            var std_1 = this.data[key];
            // dieu kien xep loai
            if (std_1.MarkAVG > 5 && std_1.MarkAVG < 6.5) {
                xep_loai = 'Trung Bình';
            }
            else if (std_1.MarkAVG >= 6.5 && std_1.MarkAVG < 8) {
                xep_loai = 'Khá';
            }
            else if (std_1.MarkAVG >= 8 && std_1.MarkAVG < 9) {
                xep_loai = 'Giỏi';
            }
            else if (std_1.MarkAVG >= 9) {
                xep_loai = 'Xuất sắc';
            }
            else {
                xep_loai = 'Yếu kém';
            }
            // in ra màn hình
            _tr += "<tr>\n            <td>".concat(std_1.code, "</td>\n            <td>").concat(std_1.name, "</td>\n            <td>").concat(std_1.phone, "</td>\n            <td>").concat(std_1.email, "</td>\n            <td>").concat(std_1.MarkAVG.toFixed(1), "</td>\n            <td>").concat(xep_loai, "</td>\n            <td><a class=\"btn btn-sm btn-danger\" onclick=\"deleteData(").concat(key, ")\">X\u00F3a</a></td>\n                </tr>");
        }
        tbody_list.innerHTML = _tr;
    };
    Students.prototype.removeStudent = function (stdCode) {
        var index = this.data.findIndex(function (item) {
            return item.code == stdCode;
        });
        this.data.splice(index, 1);
    };
    Students.prototype.filterStd = function (stdCode) {
        var info = this.data.filter(function (item) {
            return item.code == stdCode;
        });
    };
    return Students;
}());
// tạo đối tượng student 
var std = new Students();
std.showListTotable(std.data);
// hàm xóa
function deleteData(idex) {
    if (confirm('bạn chắc không?')) {
        std.data.splice(idex, 1);
        std.showListTotable(std.data);
    }
}
// tim kiem
var input_title = document.getElementById('input_title');
var btn_filter = document.getElementById('btn_filter');
btn_filter.onclick = function () {
    var code = input_title.value;
    if (code == '') {
        alert('Bạn chưa nhập thông tin cần tìm');
        return;
    }
    var StudentFilter = std.data.filter(function (obj) {
        return code == obj.code;
    });
    std.showListTotable(StudentFilter);
};
