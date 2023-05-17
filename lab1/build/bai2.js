var html = "";
for (let i = 0; i < 8; i++) {
    html += `
     <div class="col-md-3">
 <div class="card">
     <img class="card-img-top" src="./img/dior.jpg" alt="">
     <div class="card-body">
         <h4 class="card-title text-center">Title</h4>
         <a name="" id="" class="btn btn-primary ml-5" href="#" role="button">Chi tiết</a>
     </div>
 </div>
</div>`;
}
var tbody = document.getElementById('tbody');
tbody.innerHTML = html;
