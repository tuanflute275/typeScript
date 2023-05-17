interface IBlog {
    id: string;
    title: string;
    image: string
}

class Blog {
    data: Array<IBlog> = [
        { id: '1', title: 'chay di cho chi', image: 'hinh anh nhe' },
        { id: '2', title: 'nguoi ay la ai', image: 'hinh anh nhe' },
        { id: '3', title: 'sao nhap ngu', image: 'hinh anh nhe' },
        { id: '4', title: 'ai la trieu phu', image: 'hinh anh nhe' },
        { id: '5', title: '7 nu cuoi xuan', image: 'hinh anh nhe' },

    ]
    constructor() {

    }
    showBlogList(data: any) {
        let _html = '';
        for (let item of data) {
            _html += `
            <tr>
                <td>${item.id}</td>
                <td>${item.title}</td>
                <td>${item.image}</td>
            </tr>`
        }
        let tbody: any = document.getElementById('tbody')
        tbody.innerHTML = _html
    }

}

var blog = new Blog()
blog.showBlogList(blog.data)

var btn_search: any = document.getElementById('btn-search')
var inp: any = document.getElementById('input')
console.log(btn_search, inp);

btn_search.onclick = ()=>{
    var title = inp.value
    if(title == ""){
        alert('bạn chưa điền thông tin ')
        return
    }
    var searchT = blog.data.filter(item=>{
        return title == item.title
    })
    blog.showBlogList(searchT)
}



