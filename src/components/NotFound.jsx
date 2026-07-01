export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-4">
            <h2 className="text-4xl font-bold text-red-500 mb-2">404</h2>
            <p className="text-xl text-gray-600">La página que buscas no existe.</p>
        </div>
    );
}