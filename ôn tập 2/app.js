var Student = /** @class */ (function () {
    function Student() {
        this.data = this.getData();
    }
    Student.prototype.getData = function () {
        var dataInStorage = localStorage.getItem('data');
        return dataInStorage ? JSON.parse(dataInStorage) : [];
    };
    Student.prototype.saveData = function (data) {
        var jsonString = JSON.stringify(data);
        localStorage.setItem('data', jsonString);
    };
    Student.prototype.showDataTotable = function () {
        var _tr = '';
        var tbodyList = document.getElementById('tbodyList');
        for (var key in this.data) {
            var std_1 = this.data[key];
            _tr += "<tr>\n                <td>".concat(key, "</td>\n                <td>").concat(std_1.Code, "</td>\n                <td>").concat(std_1.Name, "</td>\n                <td>").concat(std_1.Phone, "</td>\n                <td>").concat(std_1.Email, "</td>\n                <td>").concat(std_1.Address, "</td>\n                <td>\n                    <a onclick=\"editData(").concat(key, ")\" class=\"btn btn-sm btn-primary\">S\u1EEDa</a>\n                    <a onclick=\"deleteData(").concat(key, ")\" class=\"btn btn-sm btn-danger\">X\u00F3a</a>\n                </td>\n            </tr>");
        }
        tbodyList.innerHTML = _tr;
    };
    Student.prototype.setData = function () {
        var stdForm = document.forms['stdForm'];
        if (this.checkCode(stdForm.code.value) == false) {
            this.data.push({
                Code: stdForm.code.value,
                Name: stdForm.name.value,
                Email: stdForm.email.value,
                Phone: stdForm.phone.value,
                Address: stdForm.address.value,
                Password: stdForm.password.value
            });
            this.saveData(this.data);
        }
    };
    Student.prototype.checkCode = function (code) {
        for (var _i = 0, _a = this.data; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.Code == code) {
                alert("Ok dã có code này rồi, chọn cái khác đi");
                return true;
            }
        }
        return false;
    };
    Student.prototype.updateData = function (idex) {
        var stdFormEdit = document.forms['stdFormEdit'];
        var x = -1;
        for (var _i = 0, _a = this.data; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.Code == stdFormEdit.code.value && stdFormEdit.code.value != this.data[idex].Code) {
                x = 1;
                break;
            }
        }
        if (x != -1) {
            alert("Ok dã có code này rồi, chọn cái khác đi");
        }
        else {
            this.data[idex].Code = stdFormEdit.code.value;
            this.data[idex].Name = stdFormEdit.name.value;
            this.data[idex].Email = stdFormEdit.email.value;
            this.data[idex].Phone = stdFormEdit.phone.value;
            this.data[idex].Address = stdFormEdit.address.value;
            this.data[idex].Password = stdFormEdit.password.value;
            this.saveData(this.data);
            this.showDataTotable();
        }
    };
    return Student;
}());
var std = new Student();
std.showDataTotable();
var stdForm = document.forms['stdForm'];
var stdFormEdit = document.forms['stdFormEdit'];
stdForm.onsubmit = function () {
    if (stdForm.code.value == '') {
        alert("Vui lòng nhập code");
        stdForm.code.style.border = '1px solid red';
        return false;
    }
    else {
        stdForm.code.style.border = '1px solid #ced4da';
    }
    if (stdForm.name.value == '') {
        alert("Vui lòng nhập name");
        return false;
    }
    std.setData();
    std.showDataTotable();
    return false;
};
function deleteData(idex) {
    if (confirm('bạn chắc không?')) {
        std.data.splice(idex, 1);
        std.saveData(std.data);
        std.showDataTotable();
    }
}
function editData(idx) {
    stdFormEdit.id.value = idx;
    stdFormEdit.code.value = std.data[idx].Code;
    stdFormEdit.name.value = std.data[idx].Name;
    stdFormEdit.email.value = std.data[idx].Email;
    stdFormEdit.phone.value = std.data[idx].Phone;
    stdFormEdit.address.value = std.data[idx].Address;
    stdFormEdit.password.value = std.data[idx].Password;
    return false;
}
stdFormEdit.onsubmit = function () {
    var idex = stdFormEdit.id.value;
    if (idex == '') {
        alert('Bạn cần chọn dữ liệu để chỉnh sửa');
    }
    if (stdFormEdit.code.value == '') {
        alert("Vui lòng nhập code");
        stdFormEdit.code.style.border = '1px solid red';
        return false;
    }
    else {
        stdFormEdit.code.style.border = '1px solid #ced4da';
    }
    if (stdFormEdit.name.value == '') {
        alert("Vui lòng nhập name");
        return false;
    }
    std.updateData(idex);
    std.showDataTotable();
    return false;
};
var icon_close = document.querySelector('.icon-close');
var icon_closeE = document.querySelector('.icon-closeE');
var h3_down = document.querySelector('.h3-down');
var h3Down = document.querySelector('h3');
console.log(icon_close);
icon_close.onclick = function () {
    stdForm.classList.toggle('hide');
};
icon_closeE.onclick = function () {
    stdFormEdit.classList.toggle('hide');
};
