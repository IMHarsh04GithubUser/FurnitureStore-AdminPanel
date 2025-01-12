const AddProduct = () => {
  return (
    <>  
        <div className="add_product_container">
            <h1 className="add_product_heading font-bold text-2xl mx-10 my-5">Add Product in Caruseol</h1>
            <div className="form_add_product border w-fit p-10 " role="form">
                <form action="" role="form" aria-label="form for adding product in caruseol" className="rounded-lg w-fit">
                    <label htmlFor="Product_name" className="font-semibold">Product Name</label><br />
                    <input type="text" name="" id="" required placeholder="Enter the Product Name" maxLength='20' className="p-1"/>
                    <div className="warning_for_text">Do not Exceed 20 characters when entering the product name</div>
                    <label htmlFor="Category" className="font-semibold">Category</label><br />
                    <select name="item_type" id="select_item_type" required>
                        <option value="Product">Product</option>
                        <option value="Shop">Shop</option>
                    </select><br />
                    <label htmlFor="description" className="font-semibold">Product Description</label><br />
                    <textarea name="description" id="description_product" required placeholder="Description" maxLength={100}></textarea><br />
                    <div className="warning_for_text"></div>
                </form>
            </div>
        </div>
    </>
  )
}

export default AddProduct