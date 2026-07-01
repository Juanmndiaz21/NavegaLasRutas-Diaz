import Item from './Item';

const ItemList = ({ products }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-6">
            { }
            {products.map(prod => (
                <Item key={prod.id} {...prod} />
            ))}
        </div>
    );
};

export default ItemList;