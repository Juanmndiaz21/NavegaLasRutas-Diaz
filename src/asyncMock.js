// Array de productos simulados (mínimo 3 productos con categorías distintas)
const products = [
    {
        id: "1",
        name: "Camiseta Arg",
        price: 45000,
        category: "indumentaria",
        img: "https://imgs.search.brave.com/PR2i_00WS8OtdvC4v4_fMc8QZUG-3PnEwJzlQb7HY58/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90ZW1w/bG9mdXRib2wudnRl/eGFzc2V0cy5jb20v/YXJxdWl2b3MvaWRz/LzIwNjY2MTEyLTUw/MC1hdXRvP3Y9NjM4/OTgwMzAzNDgwMzcw/MDAwJndpZHRoPTUw/MCZoZWlnaHQ9YXV0/byZhc3BlY3Q9dHJ1/ZQ",
        description: "Camiseta oficial de la primera equipación.",
        stock: 10
    },
    {
        id: "2",
        name: "Pelota de Fútbol",
        price: 35000,
        category: "accesorios",
        img: "https://imgs.search.brave.com/QoT-bPh50muc4bb_zU5mtPEcwW349eAmJxZdLa4AmaA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzcxN0RVdlpZS0hM/LmpwZw",
        description: "Pelota de alta resistencia para competencia.",
        stock: 5
    },
    {
        id: "3",
        name: "Short de Entrenamiento",
        price: 22000,
        category: "indumentaria",
        img: "https://imgs.search.brave.com/EftVO2IczV0WpBMDCutgd3AY5FRW7wqGqXE6Nag7xYU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YTIuc29sb2RlcG9y/dGVzLmNvbS5hci9t/ZWRpYS9jYXRhbG9n/L3Byb2R1Y3QvY2Fj/aGUvN2M0ZjliMzkz/ZjBiOGNiNzVmMmI3/NGZlNWU5ZTUyYWEv/cy9oL3Nob3J0LWVu/dHJlbmFtaWVudG8t/YWRpZGFzLTctd29y/a291dC1iYXNlLW5l/Z3JvLTEwMDAyMGli/Nzg5MjAwMS0xLmpw/Zw",
        description: "Short ligero y transpirable para entrenar.",
        stock: 15
    }
];

// Promesa para todos los productos
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
};

// Promesa para productos por categoría
export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId));
        }, 500);
    });
};

// Promesa para un solo producto por ID
export const getProductById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === itemId));
        }, 500);
    });
};