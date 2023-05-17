// Mảng sản phẩm
const products = [
    {
        name: "Product 1",
        image: "https://example.com/product3.jpg",
        price: 100,
        sale_price: 80,
        category_name: "Category 1"
    },
    {
        name: "Product 2",
        image: "https://example.com/product3.jpg",
        price: 200,
        sale_price: 180,
        category_name: "Category 2"
    },
    {
        name: "Product 3",
        image: "https://example.com/product3.jpg",
        price: 300,
        sale_price: 200,
        category_name: "Category 3"
    },
    {
        name: "Product 4",
        image: "https://example.com/product4.jpg",
        price: 400,
        sale_price: 350,
        category_name: "Category 4"
    },
    {
        name: "Product 5",
        image: "https://example.com/product5.jpg",
        price: 500,
        sale_price: 450,
        category_name: "0"
    }
];
// Hàm để in danh sách sản phẩm lên bảng HTML
function renderProductTable(products) {
    var _html = '';
    for (const product of products) {
        _html += `<tr>
        <td>${product.name}</td>
        <td>${product.image}</td>
        <td>${product.price}</td>
        <td>${product.sale_price}</td>
        <td>${product.category_name}</td>
    </tr> `;
    }
    var tbody = document.getElementById('product-table');
    tbody.innerHTML = _html;
}
renderProductTable(products);
// Hàm để lọc sản phẩm theo khoảng giá
function filterProducts() {
    const minPrice = document.getElementById("min-price").value;
    const maxPrice = document.getElementById("max-price").value;
    const filteredProducts = products.filter((product) => {
        return product.price >= minPrice && product.price <= maxPrice;
    });
    renderProductTable(filteredProducts);
}
// khai báo hàm sort_markAvg kiể arrow function
var sort_markAvg = (sort_type) => {
    // let myData = myDatas(); // load lại dữ liệu mỗi làn click
    if (sort_type == 'ASC') {
        let prdSort = products.sort(function (a, b) {
            return a.price < b.price ? -1 : 0;
        });
        renderProductTable(prdSort);
    }
    else if (sort_type == 'DESC') {
        let prdSort = products.sort(function (a, b) {
            return a.price > b.price ? -1 : 0;
        });
        renderProductTable(prdSort);
    }
    else {
        // Gọi lại hàm
        renderProductTable(products);
    }
};
// search theo category
function searchByCategory(category) {
    let result = [];
    for (let i = 0; i < products.length; i++) {
        if (products[i].category_name === category) {
            result.push(products[i]);
        }
    }
    return result;
}
const myInput = document.getElementById('myInput');
const inputValue = myInput.value;
var btn_search = document.querySelector('#btn-search');
btn_search.addEventListener('click', () => {
    renderProductTable(searchByCategory(inputValue));
});
