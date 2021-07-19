// sleep time expects milliseconds
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

// to show all menu
function allMenu(){
  $.getJSON('../pizza.json', function(data){
    let menu = data.menu;
    $.each(menu, function(i, data){
      if(data.kategori != 'minuman'){
        $('#makanan').append(`
        <div id="card" class="col-span-3 bg-indigo-600 overflow-hidden rounded-lg">
          <img class="w-full h-max" src="./img/pizza/`+ data.gambar +`" alt="american-favourite">
          <div class="px-4">
            <div class="flex justify-between pt-2">
              <h1>`+ data.nama +`</h1>
              <p>Rp. `+ data.harga +`</p>
            </div>
            <hr class="my-2 mx-auto">
            <p class="pb-2">`+ data.deskripsi +`</p>
          </div>
        </div>`);
      } else {
        $('#minuman').append(`
      <div id="card" class="col-span-3 bg-indigo-600 overflow-hidden rounded-lg">
        <img class="w-full h-max" src="./img/pizza/`+ data.gambar +`" alt="american-favourite">
        <div class="px-4">
          <div class="flex justify-between pt-2">
            <h1>`+ data.nama +`</h1>
            <p>Rp. `+ data.harga +`</p>
          </div>
          <hr class="my-2 mx-auto">
          <p class="pb-2">`+ data.deskripsi +`</p>
        </div>
      </div>`);
      }
    });
  });
}

allMenu();

$('.item-nav').on('click', function(){
  $('.item-nav').removeClass('active');
  $(this).addClass('active');
  const kategori = $(this).html();
  if(kategori == 'All Menu'){
    $('#kategori').html('Makanan');
    $('.minuman').html('Minuman');
    $('#makanan').html('');
    allMenu()
    return;
  } else{
    $('#kategori').html(kategori);
    $('#minuman').html('');
    $('.minuman').html('');
  }

  $.getJSON('../pizza.json', function(data){
    let menu = data.menu;
    content = '';
    $.each(menu, function(i, data){
      if(data.kategori == kategori.toLowerCase()){
        content += `<div id="card" class="col-span-3 bg-indigo-600 overflow-hidden rounded-lg">
        <img class="w-full h-max" src="./img/pizza/`+ data.gambar +`" alt="american-favourite">
        <div class="px-4">
          <div class="flex justify-between pt-2">
            <h1>`+ data.nama +`</h1>
            <p>Rp. `+ data.harga +`</p>
          </div>
          <hr class="my-2 mx-auto">
          <p class="pb-2">`+ data.deskripsi +`</p>
        </div>
      </div>`;
if (value.name.search(expression) != -1 || value.location.search(expression) != -1)
    {
     $('#result').append('<li class="list-group-item link-class"><img src="'+value.image+'" height="40" width="40" class="img-thumbnail" /> '+value.name+' | <span class="text-muted">'+value.location+'</span></li>');
    }      $('#makanan').html(content);
      }
    });
  });
});

// live search
$(document).ready(function(){
  $('#search').on('keyup', function(){
    $('#makanan').html('');
    $('#minuman').html('');
    $('.minuman').html('');
    $('#all-menu').html('');
    $('.makanan').html("Hasil Untuk "+ $('#search').val());
    // $('#minuman').html('');
    let query = $('#search').val();
    let expression = new RegExp(query, 'i');
    
    $.getJSON('../pizza.json', function(data){
      let menu = data.menu;   
      $.each(menu, function(i, data){
        if (data.nama.search(expression) != -1 || data.kategori.search(expression) != -1 || data.deskripsi.search(expression) != -1 || data.harga.toString().search(expression) != -1){
          if(query == ''){
            $('.makanan').html('Makanan');
            // $('#minuman').html('');
            $('.minuman').html('Minuman');
            $('#all-menu').html('All Menu');
            allMenu();
          } else {
            sleep(100).then(() => {
              $('#makanan').append(`
                <div id="card" class="col-span-3 bg-indigo-600 overflow-hidden rounded-lg">
                  <img class="w-full h-max" src="./img/pizza/`+ data.gambar +`" alt="american-favourite">
                  <div class="px-4">
                    <div class="flex justify-between pt-2">
                      <h1>`+ data.nama +`</h1>
                      <p>Rp. `+ data.harga +`</p>
                    </div>
                    <hr class="my-2 mx-auto">
                    <p class="pb-2">`+ data.deskripsi +`</p>
                  </div>
                </div>
              `);
            });
          }
        }
      });
    });
  });
});