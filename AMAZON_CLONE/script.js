function changeCountry(newCountry) {
    document.querySelector('.add-sec').textContent = newCountry;
  }

  function searchAmazon() {
    const searchTerm = document.querySelector('.search-input').value;
    alert(`Searching for: ${searchTerm}`);
  }

  function addToCart(itemName) {
    alert(`Added ${itemName} to your cart.`);
  }

  document.querySelector('.add-icon').addEventListener('click', function () {
    const newCountry = prompt('Enter new country:');
    if (newCountry) {
      changeCountry(newCountry);
    }
  });

  document.querySelector('.search-icon').addEventListener('click', function () {
    searchAmazon();
  });

  const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
  addToCartButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const itemName = this.getAttribute('data-item-name');
      addToCart(itemName);
    });
  });