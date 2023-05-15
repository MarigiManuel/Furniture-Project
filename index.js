function checkout() {
    // Get all selected products
    var selectedProducts = $('.product-checkbox:checked').map(function() {
      return $(this).val();
    }).get();
    
    // Redirect user to checkout page
    var checkoutUrl = 'https://example.com/checkout?products=' + selectedProducts.join(',');
    window.location.href = checkoutUrl;
  }
  