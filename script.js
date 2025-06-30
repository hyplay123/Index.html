const productos = [
    {
        nombre: "Celular Samsung Galaxy A24",
        precio: 189999,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_963358-MLA72752391589_112023-F.webp",
    },
    {
        nombre: "Notebook Lenovo IdeaPad 3",
        precio: 499999,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_760310-MLA54909048953_042023-F.webp",
    },
    {
        nombre: "Smart TV 50'' Philips 4K",
        precio: 379999,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_722128-MLA54485311046_032023-F.webp",
    },
    {
        nombre: "Aire Acondicionado BGH 3500W",
        precio: 429999,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_947829-MLA54876454805_042023-F.webp",
    },
    {
        nombre: "Auriculares Inalámbricos JBL",
        precio: 55999,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_755501-MLA69791772511_062023-F.webp",
    },
    {
        nombre: "Parlante Bluetooth Sony",
        precio: 64999,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_718073-MLA54486552810_032023-F.webp",
    },
];

function mostrarProductos(filtro = "") {
    const contenedor = document.getElementById("productos");
    contenedor.innerHTML = "";
    const filtrados = productos.filter(p => p.nombre.toLowerCase().includes(filtro.toLowerCase()));
    if (filtrados.length === 0) {
        contenedor.innerHTML = "<p>No se encontraron productos.</p>";
        return;
    }
    filtrados.forEach(producto => {
        contenedor.innerHTML += `
            <div class="producto">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h2>${producto.nombre}</h2>
                <div class="precio">$${producto.precio.toLocaleString()}</div>
                <button onclick="alert('¡Compra simulada!')">Comprar</button>
            </div>
        `;
    });
}

function buscarProducto() {
    const filtro = document.getElementById("busqueda").value;
    mostrarProductos(filtro);
}

// Mostrar todos al cargar
mostrarProductos();
