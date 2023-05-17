interface IStudents {
    code: string;
    name: string;
    phone: string;
    email: string;
    MarkAVG: number;
}

class Students {
    data: Array<IStudents> = new Array();
    constructor() {

        this.data = [
            { code: 'B12345', name: "Ngô Hoàng Anh", email: 'anh2gmail.com', phone: "0123456789", MarkAVG: 8.5 },
            { code: 'B41434', name: "Ngô Hoàng Yến", email: 'yengmail.com', phone: "0123456789", MarkAVG: 7.5 },
            { code: 'B43534', name: "hoang thi lanh", email: 'hoanglanh2gmail.com', phone: "0123456789", MarkAVG: 8 },

        ];
    }

    showListTotable(data: any) {
        let _tr = '';
        let xep_loai: string = '';
        let tbody_list: any = document.getElementById('tbodyList');
        for (const key in data) {
            let std = this.data[key];
            // dieu kien xep loai
            if (std.MarkAVG > 5 && std.MarkAVG < 6.5) {
                xep_loai = 'Trung Bình';
            } else if (std.MarkAVG >= 6.5 && std.MarkAVG < 8) {
                xep_loai = 'Khá';
            } else if (std.MarkAVG >= 8 && std.MarkAVG < 9) {
                xep_loai = 'Giỏi';
            } else if (std.MarkAVG >= 9) {
                xep_loai = 'Xuất sắc';
            } else {
                xep_loai = 'Yếu kém';
            }
            // in ra màn hình
            _tr += `<tr>
            <td>${std.code}</td>
            <td>${std.name}</td>
            <td>${std.phone}</td>
            <td>${std.email}</td>
            <td>${std.MarkAVG.toFixed(1)}</td>
            <td>${xep_loai}</td>
            <td><a class="btn btn-sm btn-danger" onclick="deleteData(${key})">Xóa</a></td>
                </tr>`
        }
        tbody_list.innerHTML = _tr;
    }
    removeStudent(stdCode: any) {
        let index = this.data.findIndex(item => {
            return item.code == stdCode
        })
        this.data.splice(index, 1)
    }
    filterStd(stdCode: any) {
        let info = this.data.filter(item => {
            return item.code == stdCode
        })
    }
}
// tạo đối tượng student 
var std = new Students()
std.showListTotable(std.data)

// hàm xóa
function deleteData(idex: number) {
    if (confirm('bạn chắc không?')) {
        std.data.splice(idex, 1);
        std.showListTotable(std.data)
    }
}

// tim kiem
var input_title: any = document.getElementById('input_title');
var btn_filter: any = document.getElementById('btn_filter');

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
}


