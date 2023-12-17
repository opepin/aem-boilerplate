export default function decorate(block) { 
  block.textContent = '';
  const reviews = document.createElement('div');
  reviews.innerHTML = '<div class="yotpo yotpo-main-widget" data-product-id="flumist" data-price="0" data-currency="USD" data-name="FluMist" data-url="The url of your product page" data-image-url="The product image url"> </div>'; // decorate footer DOM
  block.append(reviews);

}

