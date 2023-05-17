interface IBlog{
    id: string,
    name: string,
    images: string
}
class student{
    data: Array<IBlog>
    constructor(){
        data=[
            {'123', 'nguyen va', 'http://'}
        ]
    }

    show_lish():void{
        let _tr = ''
        let tbody: any = document.querySelector('#tbody')
        for (const item of this.data) {
            _tr += ` <tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.images}</td>
        </tr>`
        }
        tbody.innerHTML  = _tr;
    }
}

var std = new student()
std.show_lish()