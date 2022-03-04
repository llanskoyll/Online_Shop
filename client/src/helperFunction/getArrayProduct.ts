export const getArrayProduct = () => {
    return JSON.parse(localStorage.getItem('products') || '[]')
}