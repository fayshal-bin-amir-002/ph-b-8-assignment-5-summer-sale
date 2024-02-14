document.getElementById('btn-goHome').addEventListener('click', function() {
    document.getElementById('purchase-popup').classList.add('hidden');
});

document.getElementById('btn-makePurchase').addEventListener('click', function() {
    document.getElementById('purchase-popup').classList.remove('hidden');
});