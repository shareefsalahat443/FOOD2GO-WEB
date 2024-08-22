import React, { useState } from 'react';
import Breadcrumb from './Breadcrumb';

import img1 from '../../../assets/img/FOOD2GO/food-1.jpg';
import img2 from '../../../assets/img/FOOD2GO/food-2.jpg';
import img3 from '../../../assets/img/FOOD2GO/food-3.jpg';
import img4 from '../../../assets/img/FOOD2GO/food-4.jpg';
import img5 from '../../../assets/img/FOOD2GO/food-5.jpg';
import img6 from '../../../assets/img/FOOD2GO/food-6.jpg';
import img7 from '../../../assets/img/FOOD2GO/food-7.jpg';
import img8 from '../../../assets/img/FOOD2GO/food-8.jpg';

const initialGridboxes = [
    {
        photo: img1,
        title: "Veggies",
        price: "$45.50",
        qyt: "1467",
        status: "In Stock",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolor sit amet, consectetur adipiscing"
    },
    {
        photo: img2,
        title: "Garlic Bread",
        price: "$45.50",
        qyt: "6224",
        status: "Out of Stock",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolor sit amet, consectetur adipiscing"
    },
    {
        photo: img3,
        title: "Veg Sandwich",
        price: "$45.50",
        qyt: "1467",
        status: "In Stock",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolor sit amet, consectetur adipiscing"
    },
    {
        photo: img4,
        title: "Roast Sandwich",
        price: "$45.50",
        qyt: "6224",
        status: "Out of Stock",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolor sit amet, consectetur adipiscing"
    },
    {
        photo: img5,
        title: "Burger",
        price: "$45.50",
        qyt: "1467",
        status: "In Stock",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolor sit amet, consectetur adipiscing"
    },
    {
        photo: img6,
        title: "Veggies",
        price: "$45.50",
        qyt: "1467",
        status: "In Stock",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolor sit amet, consectetur adipiscing"
    },
    {
        photo: img7,
        title: "Pepperoni Pizza",
        price: "$45.50",
        qyt: "6224",
        status: "Out of Stock",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolor sit amet, consectetur adipiscing"
    },
    {
        photo: img8,
        title: "Egg McMuffin",
        price: "$45.50",
        qyt: "1467",
        status: "In Stock",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolor sit amet, consectetur adipiscing"
    },
]

const Gridcontent = () => {
    const [gridboxes, setGridboxes] = useState(initialGridboxes);
    const [editingIndex, setEditingIndex] = useState(null);
    const [currentItem, setCurrentItem] = useState(null);

    const handleDelete = (index) => {
        setGridboxes(gridboxes.filter((_, i) => i !== index));
    };

    const handleEdit = (index) => {
        setEditingIndex(index);
        setCurrentItem({ ...gridboxes[index] });
    };

    const handleSave = () => {
        if (editingIndex === null) return; // Make sure editingIndex is not null

        // Update the gridboxes array with the updated item
        const updatedGridboxes = gridboxes.map((item, index) => {
            if (index === editingIndex) {
                return currentItem;
            }
            return item;
        });

        // Set the updated gridboxes back to state and reset editing states
        setGridboxes(updatedGridboxes);
        setEditingIndex(null);
        setCurrentItem(null);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentItem(current => ({
            ...current,
            [name]: value
        }));
    };

    return (
        <div className="ms-content-wrapper">
            <div className="row">
                <div className="col-md-12">
                    <Breadcrumb />
                    <div className="row">
                        {gridboxes.map((item, i) => (
                            <div key={i} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div className="ms-card">
                                    <div className="ms-card-img">
                                        <img src={item.photo} alt="card_img" />
                                    </div>
                                    <div className="ms-card-body">
                                        {editingIndex === i ? (
                                            <>
                                                <div className="new">
                                                    <input
                                                        type="text"
                                                        name="title"
                                                        value={currentItem.title}
                                                        onChange={handleChange}
                                                        className="form-control"
                                                    />
                                                    <input
                                                        type="text"
                                                        name="price"
                                                        value={currentItem.price}
                                                        onChange={handleChange}
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="new meta">
                                                    <input
                                                        type="text"
                                                        name="qyt"
                                                        value={currentItem.qyt}
                                                        onChange={handleChange}
                                                        className="form-control"
                                                    />
                                                    <select
                                                        name="status"
                                                        value={currentItem.status}
                                                        onChange={handleChange}
                                                        className="form-control"
                                                    >
                                                        <option value="In Stock">In Stock</option>
                                                        <option value="Out of Stock">Out of Stock</option>
                                                    </select>
                                                </div>
                                                <textarea
                                                    name="para"
                                                    value={currentItem.para}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                />
                                                <div className="new mb-0">
                                                    <button
                                                        type="button"
                                                        className="btn grid-btn mt-0 btn-sm btn-success"
                                                        onClick={handleSave}
                                                    >
                                                        Save
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn grid-btn mt-0 btn-sm btn-secondary"
                                                        onClick={() => setEditingIndex(null)}
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="new">
                                                    <h6 className="mb-0">{item.title}</h6>
                                                    <h6 className="ms-text-primary mb-0">{item.price}</h6>
                                                </div>
                                                <div className="new meta">
                                                    <p>Qty:{item.qyt}</p>
                                                    <span>{item.status}</span>
                                                </div>
                                                <p>{item.para}</p>
                                                <div className="new mb-0">
                                                    <button
                                                        type="button"
                                                        className="btn grid-btn mt-0 btn-sm btn-primary"
                                                        onClick={() => handleDelete(i)}
                                                    >
                                                        Remove
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn grid-btn mt-0 btn-sm btn-edit"
                                                        onClick={() => handleEdit(i)}
                                                    >
                                                        Edit
                                                    </button>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gridcontent;
