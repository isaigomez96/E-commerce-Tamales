

const divCarrito= document.querySelector(".cart");
const miBotonMostrar = document.querySelector('.miBotonMostrar');
const btn_cerrar = document.querySelector(".close");
btn_cerrar.addEventListener('click', ()=> { 
    divCarrito.style.display='none';
    miBotonMostrar.style.display='block';
})


miBotonMostrar.addEventListener('click',()=>{
    divCarrito.style.display='block';
    miBotonMostrar.style.display = 'none'; 

})



const btnsAgregar = document.querySelectorAll('.btn_agregar');


btnsAgregar.forEach((btn) => {
  btn.addEventListener('click', (e) => {
   
    const producto = e.target.closest('.products__item');
    const nombre = producto.querySelector('.product__name').textContent;
    const precio = producto.querySelector('.product__title').textContent;
    const imagen = producto.querySelector('.products__img').src;

    
    const nuevoProducto = document.createElement('div');
    nuevoProducto.classList.add('cart__item');
    nuevoProducto.innerHTML = `
      <img class="cart__img" src="${imagen}" alt="Icono carro">
      <p class="cart__price">${precio}</p>
      <p class="cart__title">${nombre}</p>
      <i class="cart__remove"> <img class="cart_remove--img" src="img/quitar.png" alt="Icono quitar"></i>
    `;

    
    const carrito = document.querySelector('.cart');
    carrito.appendChild(nuevoProducto);
  });
});

const badgeCarrito = document.getElementById('badge-carrito');
const carrito = document.querySelector('.cart');


document.querySelectorAll('.btn_agregar').forEach((btn) => {
  btn.addEventListener('click', () => {
    const conteo = carrito.children.length;
    badgeCarrito.textContent = conteo;
  });
});


document.querySelectorAll('.cart__remove').forEach((remove) => {
  remove.addEventListener('click', () => {
    const conteo = carrito.children.length;
    badgeCarrito.textContent = conteo;
  });
});

const menuLateral = document.querySelector('.menu-lateral');
const btnAbrirMenu = document.querySelector('.header__link--icon');
const btnCerrarMenu = document.querySelector('.close-menu');

btnAbrirMenu.addEventListener('click', () => {
  menuLateral.classList.add('abierto');
});

btnCerrarMenu.addEventListener('click', () => {
  menuLateral.classList.remove('abierto');
});