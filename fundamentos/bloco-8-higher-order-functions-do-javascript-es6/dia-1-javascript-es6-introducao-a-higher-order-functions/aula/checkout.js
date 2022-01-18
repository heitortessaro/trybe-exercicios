const carrinho = [10, 30, 20, 40];

const desconto10P = (total) => {
    return total * 1 / 10;
}

const desconto5P = (total) => {
    return total * 1 / 20;
}

const desconto20P = (total) => {
    return total * 1 / 5;
}

const checkout = (carrinho, callback) => {
    let total = 0;
    for (const item of carrinho) {
        total += item;
    }
    total -= callback(total);
    return total;
}

const total = checkout(carrinho, desconto20P);
console.log(total);

// --------------------------------