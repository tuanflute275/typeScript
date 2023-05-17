interface IStudent {
    Code: string;
    Name: string;
    Email: string;
    Phone: string;
    Address: string;
    Password: string;
}
class Student {
    data: Array<IStudent>
    constructor() {
        this.data = this.getData()
    }
    getData(): Array<IStudent> {
        let data: Array<IStudent> = new Array()
        let dataLocalStorage = localStorage.getItem('data_std')
        if (dataLocalStorage) {
            data = JSON.parse(dataLocalStorage)
        }
        return data
    }
    saveData(data: Array<IStudent>) {
        let jsonString = JSON.stringify(this.data)
        localStorage.setItem('data_std', jsonString)
    }
    showTable() {
        let _tr = '';
        let tbody: any = document.getElementById('tbodyList')

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
        tbody.innerHTML = _tr;
    }
    addStudent(Code: string, Name: string, Email: string, Phone: string, Address: string, Password: string) {
        let info: IStudent = {
            Code: Code,
            Name: Name,
            Email: Email,
            Phone: Phone,
            Address: Address,
            Password: Password
        }
        var stdForm: any = document.forms['stdForm']
        if (this.checkCode(stdForm.code.value) == false) {
            this.data.push(info)
        }

        this.saveData(this.data)
    }
    checkCode(code: string): boolean {
        for (const item of this.data) {
            if (item.Code == code) {
                alert('trung lap code')
                return true
            }
        }
        return false
    }
    removeStudent(stdCode: any) {
        let index = this.data.findIndex(item => {
            return item.Code == stdCode
        })
        this.data.splice(index, 1)
        this.saveData(this.data)
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
            this.saveData(this.data)
            this.showTable();
        }
    }
}

var std = new Student()
std.showTable()

var stdForm: any = document.forms['stdForm']
var stdFormEdit: any = document.forms['stdFormEdit']
stdForm.onsubmit = () => {
    let code = stdForm.code.value
    let name = stdForm.name.value
    let email = stdForm.email.value
    let phone = stdForm.phone.value
    let address = stdForm.address.value
    let password = stdForm.password.value
    std.addStudent(code, name, email, phone, address, password)
    std.showTable()
    return false
}
function deleteData(idex: number) {
    if (confirm('bạn chắc không?')) {
        std.data.splice(idex, 1);
        std.saveData(std.data);
        std.showTable();
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
    std.updateData(idex);
    std.showTable();
    return false;
}
