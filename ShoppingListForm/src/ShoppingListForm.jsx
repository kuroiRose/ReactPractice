import { useState } from "react";

function ShoppingListForm({addItem}){
    const [formData, setFormData] = useState({ product: "", quantity: 0 });
    
    const handleChange = (evt) => {
        setFormData(currData => {
            return {
                ...currData,
                [evt.target.name] : evt.target.value,
            };
        });
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(formData);
        setFormData({ product: "", quantity: 0 });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="product">Product Name:</label>
            <input type="text" placeholder="product name" id="product" name="product" onChange={handleChange} value={formData.product} />
            <label htmlFor="quantity">Quantity:</label>
            <input type="number" id="quantity" name="quantity" placeholder="0" onChange={handleChange} value={formData.quantity} />
            <button>Add Item</button>
        </form>
    )
}

export default ShoppingListForm;