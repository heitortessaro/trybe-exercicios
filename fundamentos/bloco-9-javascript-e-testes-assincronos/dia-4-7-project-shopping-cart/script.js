const cartItemsOl = document.getElementsByClassName('cart__items')[0];
const totalPriceSpan = document.getElementsByClassName('total-price')[0];
const emptyCartBtn = document.getElementsByClassName('empty-cart')[0];
const itemsSec = document.getElementsByClassName('items')[0];
const searchBtn = document.getElementsByClassName('search-btn')[0];
const searchinput = document.getElementsByClassName('search-input')[0];
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
  const elemento = event.target.parentNode;
  const salePrice = elemento.getAttribute('salePrice');
  elemento.remove();
  calcCartTotalPrice(-salePrice);
  saveCartItems(JSON.stringify(itensInTheCart()));
}

function createCartItemElement({ sku, name, salePrice, picture }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  // li.innerText = `NAME: ${name} \n PRICE: $${salePrice}`;
  // li.addEventListener('click', cartItemClickListener);
  li.setAttribute('salePrice', salePrice);
  li.setAttribute('sku', sku);

  const divImg = document.createElement('div');
  divImg.className = 'cart__img';
  // divImg.addEventListener('click', cartItemClickListener);
  divImg.appendChild(createProductImageElement(picture));

  const divText = document.createElement('div');
  divText.className = 'cart__text';
  divText.innerText = `NAME: ${name} \n PRICE: $${salePrice}`;
  divText.addEventListener('click', cartItemClickListener);

  li.appendChild(divImg);
  li.appendChild(divText);

  return li;
}

async function addIdToCart(itemId) {
  const { id: sku, title: name, price: salePrice, pictures } = await fetchItem(itemId);
  const picture = pictures[0].url;
  const elemento = createCartItemElement({ sku, name, salePrice, picture });
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
  const imageHD = image.replace('I.jpg', 'J.jpg');
  const section = document.createElement('section');
  section.id = sku;
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(imageHD));
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

const removeElements = () => {
  const elements = document.getElementsByClassName('item');
  const elementsArr = [...elements];
  elementsArr.forEach((element) => element.remove());
};



const loadSerchItems = async () => {
  const searchText = searchinput.value;
  removeElements();
  addLoadingElements(50);
  const results = await fetchProducts(searchText);
  removeElements();
  addElementsOnWindows(results);
  searchinput.value = '';
};

window.onload = async () => {
  addLoadingElements(50);
  const results = await fetchProducts('computador');
  loadItemsToTheCart();
  removeElements();
  addElementsOnWindows(results);
  emptyCartBtn.addEventListener('click', emptyCart);
  searchinput.value = '';
  searchBtn.addEventListener('click', loadSerchItems);
};
