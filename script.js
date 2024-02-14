const totalPriceTxt = document.getElementById('totalPriceTxt');
const discountTxt = document.getElementById('discountTxt');
const priceTxt = document.getElementById('priceTxt');

const itemTitle = document.getElementById('item-title');
let titleCount = 0, itemTotalPrice = 0, afterDiscountprice = 0, discout = 0;

const cards = document.querySelectorAll('.card');

for(const card of cards) {
    card.addEventListener('click', function() {
        // set the title in side bar
        const cardTitle = card.querySelector('h2').innerText;
        const title = document.createElement('p');
        titleCount += 1;
        title.innerText = `${titleCount}. ${cardTitle}`;
        itemTitle.appendChild(title);
        // set price in side bar
        const cardPriceTxt = card.querySelector('p').innerText;
        const cardPrice = cardPriceTxt.split(' ');
        const price = parseFloat(cardPrice[0]);
        itemTotalPrice += price;
        totalPriceTxt.innerText = itemTotalPrice.toFixed(2);

        afterDiscountprice = itemTotalPrice;
        priceTxt.innerText = afterDiscountprice.toFixed(2);
        discountTxt.innerText = discout.toFixed(2);
        // set the discount
        document.getElementById('btn-coupon').addEventListener('click', function() {
                const couponInputBox = document.getElementById('coupon-input-box').value;
                const couponText = couponInputBox.split(' ').join('').toUpperCase();
                if(itemTotalPrice >= 200) {
                    if(couponText === 'SELL200') {
                        document.getElementById('coupon-input-box').value = '';
                        discout = (itemTotalPrice * 0.2);
                        afterDiscountprice = itemTotalPrice - discout;
                        priceTxt.innerText = afterDiscountprice.toFixed(2);
                        discountTxt.innerText = discout.toFixed(2);
                    }

                }
                else {
                    document.getElementById('coupon-input-box').value = '';
                    alert('You need to purchase 200tk.')
                }
        });
    });
}


document.getElementById('btn-makePurchase').addEventListener('click', function() {
    if(itemTotalPrice !== 0) {
        document.getElementById('purchase-popup').classList.remove('hidden');
    }
    else {
        alert('Please make a purchase first');
    }
});

document.getElementById('btn-goHome').addEventListener('click', function() {
    document.getElementById('purchase-popup').classList.add('hidden');
});