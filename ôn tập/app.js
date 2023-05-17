var Blog = /** @class */ (function () {
    function Blog() {
        this.data = [
            { id: '1', title: 'chay di cho chi', image: 'hinh anh nhe' },
            { id: '2', title: 'nguoi ay la ai', image: 'hinh anh nhe' },
            { id: '3', title: 'sao nhap ngu', image: 'hinh anh nhe' },
            { id: '4', title: 'ai la trieu phu', image: 'hinh anh nhe' },
            { id: '5', title: '7 nu cuoi xuan', image: 'hinh anh nhe' },
        ];
    }
    Blog.prototype.showBlogList = function (data) {
        var _html = '';
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var item = data_1[_i];
            _html += "\n            <tr>\n                <td>".concat(item.id, "</td>\n                <td>").concat(item.title, "</td>\n                <td>").concat(item.image, "</td>\n            </tr>");
        }
        var tbody = document.getElementById('tbody');
        tbody.innerHTML = _html;
    };
    return Blog;
}());
var blog = new Blog();
blog.showBlogList(blog.data);
var btn_search = document.getElementById('btn-search');
var inp = document.getElementById('input');
console.log(btn_search, inp);
btn_search.onclick = function () {
    var title = inp.value;
    if (title == "") {
        alert('bạn chưa điền thông tin ');
        return;
    }
    var searchT = blog.data.filter(function (item) {
        return title == item.title;
    });
    blog.showBlogList(searchT);
};
