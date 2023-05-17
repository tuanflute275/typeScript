interface IStudent {
    Code: string;
    Name: string;
    Email: string;
    Phone: string;
    Address: string;
    Password: string;
}

class Student {
    data: Array<IStudent>;

    constructor() {
        this.data = this.getData();
    }
    getData(): Array<IStudent> {
        let dataInStorage: any = localStorage.getItem('data');
        return dataInStorage ? JSON.parse(dataInStorage) : [];
    }
    saveData(data: Array<IStudent>) {
        let jsonString = JSON.stringify(data);
        localStorage.setItem('data', jsonString);
    }
    showDataTotable() {
        let _tr = '';
        let tbodyList: any = document.getElementById('tbodyList');
        for (const key in this.data) {
            let std = this.data[key];
            _tr += `<tr>
                <td>${key}</td>
                <td>${std.Code}</td>
                <td>${std.Name}</td>
                <td>${std.Phone}</td>
                <td>${std.Email}</td>
                <td>${std.Address}</td>
                <td>
                    <a onclick="editData(${key})" class="btn btn-sm btn-primary">Sửa</a>
                    <a onclick="deleteData(${key})" class="btn btn-sm btn-danger">Xóa</a>
                </td>
            </tr>`;
        }

        tbodyList.innerHTML = _tr;
    }

    setData() {
        let stdForm: any = document.forms['stdForm'];
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

    }

    checkCode(code: string): boolean {
        for (const item of this.data) {
            if (item.Code == code) {
                alert("Ok dã có code này rồi, chọn cái khác đi");
                return true;
            }
        }
        return false;
    }

    updateData(idex: number) {
        var stdFormEdit: any = document.forms['stdFormEdit'];
        let x = -1;
        for (let item of this.data) {
            if (item.Code == stdFormEdit.code.value && stdFormEdit.code.value != this.data[idex].Code) {
                x = 1;
                break;
            }
        }

        if (x != -1) {
            alert("Ok dã có code này rồi, chọn cái khác đi");
        } else {
            this.data[idex].Code = stdFormEdit.code.value;
            this.data[idex].Name = stdFormEdit.name.value;
            this.data[idex].Email = stdFormEdit.email.value;
            this.data[idex].Phone = stdFormEdit.phone.value;
            this.data[idex].Address = stdFormEdit.address.value;
            this.data[idex].Password = stdFormEdit.password.value;
            this.saveData(this.data);
            this.showDataTotable();
        }
    }
}

var std = new Student();
std.showDataTotable();

var stdForm: any = document.forms['stdForm'];
var stdFormEdit: any = document.forms['stdFormEdit'];

stdForm.onsubmit = function () {
    if (stdForm.code.value == '') {
        alert("Vui lòng nhập code");
        stdForm.code.style.border = '1px solid red';
        return false;
    } else {
        stdForm.code.style.border = '1px solid #ced4da';
    }

    if (stdForm.name.value == '') {
        alert("Vui lòng nhập name");
        return false;
    }


    std.setData();

    std.showDataTotable();
    return false;
}

function deleteData(idex: number) {
    if (confirm('bạn chắc không?')) {
        std.data.splice(idex, 1);
        std.saveData(std.data);
        std.showDataTotable();
    }
}
function editData(idx: number) {
    stdFormEdit.id.value = idx;
    stdFormEdit.code.value = std.data[idx].Code;
    stdFormEdit.name.value = std.data[idx].Name
    stdFormEdit.email.value = std.data[idx].Email;
    stdFormEdit.phone.value = std.data[idx].Phone;
    stdFormEdit.address.value = std.data[idx].Address;
    stdFormEdit.password.value = std.data[idx].Password;
    return false;
}

stdFormEdit.onsubmit = function () {
    let idex = stdFormEdit.id.value;
    if (idex == '') {
        alert('Bạn cần chọn dữ liệu để chỉnh sửa');
    }

    if (stdFormEdit.code.value == '') {
        alert("Vui lòng nhập code");
        stdFormEdit.code.style.border = '1px solid red';
        return false;
    } else {
        stdFormEdit.code.style.border = '1px solid #ced4da';
    }

    if (stdFormEdit.name.value == '') {
        alert("Vui lòng nhập name");
        return false;
    }
    std.updateData(idex);
    std.showDataTotable();
    return false;
}





var icon_close: any = document.querySelector('.icon-close')
var icon_closeE: any = document.querySelector('.icon-closeE')
var h3_down: any = document.querySelector('.h3-down')
var h3Down: any = document.querySelector('h3')
console.log(icon_close);
icon_close.onclick = () => {
    stdForm.classList.toggle('hide')
}
icon_closeE.onclick = () => {
    stdFormEdit.classList.toggle('hide')
}

