import { Link } from 'react-router-dom';

const Item = ({ id, name, img, price, category }) => {
    return (
        <article className="border p-4 rounded-lg shadow-sm bg-white flex flex-col items-center max-w-xs mx-auto">
            <img src={img} alt={name} className="w-48 h-48 object-cover mb-4 rounded" />
            <h3 className="text-lg font-bold text-gray-800">{name}</h3>
            <p className="text-sm text-gray-500 uppercase font-semibold tracking-wider my-1">{category}</p>
            <p className="text-xl font-semibold text-blue-600 mb-4">${price}</p>

            {}
            <Link
                to={`/item/${id}`}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors w-full text-center font-medium"
            >
                Ver detalle
            </Link>
        </article>
    );
};

export default Item;