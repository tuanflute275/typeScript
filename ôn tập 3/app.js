var Student = /** @class */ (function () {
    function Student() {
        this.data = this.getData();
    }
    Student.prototype.getData = function () {
        var data = new Array();
        var dataLocalStorage = localStorage.getItem('data_std');
        if (dataLocalStorage) {
            data = JSON.parse(dataLocalStorage);
        }
        return data;
    };
    Student.prototype.saveData = function (data) {
        var jsonString = JSON.stringify(this.data);
        localStorage.setItem('data_std', jsonString);
    };
    Student.prototype.showTable = function () {
        var _tr = '';
        var tbody = document.getElementById('tbodyList');
        for (var key in this.data) {
            var std_1 = this.data[key];
            _tr += "<tr>\n                <td>".concat(key, "</td>\n                <td>").concat(std_1.Code, "</td>\n                <td>").concat(std_1.Name, "</td>\n                <td>").concat(std_1.Phone, "</td>\n                <td>").concat(std_1.Email, "</td>\n                <td>").concat(std_1.Address, "</td>\n                <td>\n                    <a onclick=\"editData(").concat(key, ")\" class=\"btn btn-sm btn-primary\">S\u1EEDa</a>\n                    <a onclick=\"deleteData(").concat(key, ")\" class=\"btn btn-sm btn-danger\">X\u00F3a</a>\n                </td>\n            </tr>");
        }
        tbody.innerHTML = _tr;
    };
    Student.prototype.addStudent = function (Code, Name, Email, Phone, Address, Password) {
        var info = {
            Code: Code,
            Name: Name,
            Email: Email,
            Phone: Phone,
            Address: Address,
            Password: Password
        };
        var stdForm = document.forms['stdForm'];
        if (this.checkCode(stdForm.code.value) == false) {
            this.data.push(info);
        }
        this.saveData(this.data);
    };
    Student.prototype.checkCode = function (code) {
        for (var _i = 0, _a = this.data; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.Code == code) {
                alert('trung lap code');
                return true;
            }
        }
        return false;
    };
    Student.prototype.removeStudent = function (stdCode) {
        var index = this.data.findIndex(function (item) {
            return item.Code == stdCode;
        });
        this.data.splice(index, 1);
        this.saveData(this.data);
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
            this.showTable();
        }
    };
    return Student;
}());
var std = new Student();
std.showTable();
var stdForm = document.forms['stdForm'];
var stdFormEdit = document.forms['stdFormEdit'];
stdForm.onsubmit = function () {
    var code = stdForm.code.value;
    var name = stdForm.name.value;
    var email = stdForm.email.value;
    var phone = stdForm.phone.value;
    var address = stdForm.address.value;
    var password = stdForm.password.value;
    std.addStudent(code, name, email, phone, address, password);
    std.showTable();
    return false;
};
function deleteData(idex) {
    if (confirm('bạn chắc không?')) {
        std.data.splice(idex, 1);
        std.saveData(std.data);
        std.showTable();
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
    std.updateData(idex);
    std.showTable();
    return false;
};
