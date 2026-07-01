import ItemCount from './ItemCount';

const ItemDetail = ({ id, name, img, category, price, description, stock }) => {
    return (
        <article className="max-w-2xl mx-auto border p-6 rounded-lg shadow-md bg-white grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <img src={img} alt={name} className="w-full h-auto object-cover rounded-md" />

            <div className="flex flex-col justify-between">
                <div>
                    <span className="text-xs font-semibold text-blue-500 uppercase tracking-wider">{category}</span>
                    <h2 className="text-3xl font-bold text-gray-800 mt-1 mb-2">{name}</h2>
                    <p className="text-gray-600 text-sm mb-4">{description}</p>
                    <p className="text-2xl font-bold text-blue-600">${price}</p>
                    <p className="text-xs text-gray-400 mt-1">Stock disponible: {stock} unidades</p>
                </div>

                {}
                <ItemCount stock={stock} />
            </div>
        </article>
    );
};

export default ItemDetail;