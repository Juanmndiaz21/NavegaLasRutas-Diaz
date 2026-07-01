import { useState } from 'react';

const ItemCount = ({ stock, initial = 1 }) => {
    const [count, setCount] = useState(initial);

    const increment = () => {
        if (count < stock) setCount(count + 1);
    };

    const decrement = () => {
        if (count > 1) setCount(count - 1);
    };

    return (
        <div className="flex flex-col items-center gap-3 mt-4">
            <div className="flex items-center gap-4 border p-2 rounded">
                <button onClick={decrement} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 font-bold">-</button>
                <span className="text-lg font-semibold">{count}</span>
                <button onClick={increment} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 font-bold">+</button>
            </div>
            <button
                className="w-full bg-blue-600 text-white py-2 rounded font-medium hover:bg-blue-700 transition-colors"
                onClick={() => alert(`Agregado al carrito: ${count} unidades (Lógica de carrito no requerida en esta entrega)`)}
            >
                Agregar al carrito
            </button>
        </div>
    );
};

export default ItemCount;