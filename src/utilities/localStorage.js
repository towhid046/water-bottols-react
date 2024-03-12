const getItemFromLS = () => {
  const existedItems = localStorage.getItem("cart");
  return existedItems ? JSON.parse(existedItems) : [];
};

const saveItemToLS = (items) => {
    localStorage.setItem('cart', JSON.stringify(items))
}

const removeItemFromLS = (id) => {
  const items = getItemFromLS();
  const reminingItems = items.filter(item=> item !== id);
  saveItemToLS(reminingItems)
}

const addToLS = (item) => {
  const existedItems = getItemFromLS();
  existedItems.push(item);
  saveItemToLS(existedItems)
};

export { addToLS, getItemFromLS, removeItemFromLS };
