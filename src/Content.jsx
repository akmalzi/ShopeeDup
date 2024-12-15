const Content = () => {
  let getListOfProduct = document.querySelector(".list-product");

  function renderProduct(getProduct) {
    getListOfProduct.innerHTML = getProduct
      .map((value) => `<p key={index}>${value.description}</p>`)
      .join(" ");
  }

  async function fetchListOfProduct() {
    try {
      const apiResponse = await fetch("https://dummyjson.com/products/", {
        method: "GET",
      });

      const result = await apiResponse.json();
      console.log(result);
      if (result?.products?.length > 0) renderProduct(result.products);
    } catch (error) {
      console.log(error);
    }
  }

  fetchListOfProduct();

  return (
    <>
      <div className="flex h-screen m-3 justify-center">
        <div className="list-product"></div>
      </div>
    </>
  );
};

export default Content;
