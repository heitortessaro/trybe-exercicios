const cartItemsOl = document.getElementsByClassName('cart__items')[0];
const totalPriceSpan = document.getElementsByClassName('total-price')[0];
const emptyCartBtn = document.getElementsByClassName('empty-cart')[0];
const itemsSec = document.getElementsByClassName('items')[0];
let totalPrice = 0;

const itensInTheCart = () => [...document.getElementsByClassName('cart__item')]
  .map((element) => element.getAttribute('sku'));

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

const calcCartTotalPrice = (price) => {
  totalPrice += price;
  totalPrice = Math.round(totalPrice * 100) / 100;
  totalPriceSpan.innerHTML = `${totalPrice}`;
};

function cartItemClickListener(event) {
  const elemento = event.target;
  const salePrice = elemento.getAttribute('salePrice');
  elemento.remove();
  calcCartTotalPrice(-salePrice);
  saveCartItems(JSON.stringify(itensInTheCart()));
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  li.setAttribute('salePrice', salePrice);
  li.setAttribute('sku', sku);
  return li;
}

async function addIdToCart(itemId) {
  const { id: sku, title: name, price: salePrice } = await fetchItem(itemId);
  const elemento = createCartItemElement({ sku, name, salePrice });
  cartItemsOl.appendChild(elemento);
  saveCartItems(JSON.stringify(itensInTheCart()));
  calcCartTotalPrice(salePrice);
}

async function getSecIdAndAdd() {
  const parent = this.parentNode;
  await addIdToCart(parent.id);
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  if (element === 'button') {
    e.addEventListener('click', getSecIdAndAdd);
  }
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.id = sku;
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

const emptyCart = () => {
  localStorage.removeItem('cartItems');
  while (cartItemsOl.firstChild) {
    cartItemsOl.firstChild.remove();
  }
  calcCartTotalPrice(-totalPrice);
};

const loadItemsToTheCart = async () => {
  const savedItems = getSavedCartItems();
  if (savedItems !== null) {
    if (savedItems.search(']') > 0) {
      const list = JSON.parse(savedItems);
      list.forEach(async (id) => {
        await addIdToCart(id);
      });
    } else {
      await addIdToCart(savedItems);
    }
  }
};

function addElementsOnWindows(arrElements) {
  arrElements.forEach((element) => {
    const { id: sku, title: name, thumbnail: image } = element;
    const elemento = createProductItemElement({ sku, name, image });
    itemsSec.appendChild(elemento);
  });
}

const addLoadingElements = (quantidade) => {
  for (let index = 0; index < quantidade; index += 1) {
    const section = document.createElement('section');
    section.classList.add('item', 'loading');
    section.innerText = 'Carregando Item';
    itemsSec.appendChild(section);
  }
};

const removeLoadingElements = () => {
  const loadingElements = document.getElementsByClassName('loading');
  const loadingElementsArr = [...loadingElements];
  loadingElementsArr.forEach((element) => element.remove());
};

window.onload = async () => {
  addLoadingElements(50);
  const results = await fetchProducts('computador');
  loadItemsToTheCart();
  removeLoadingElements();
  addElementsOnWindows(results);
  emptyCartBtn.addEventListener('click', emptyCart);
};
