'use client'
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import ImageUpload from './_components/ImageUpload';

function AddProduct() {
    const categoryOption = ['Video', 'Audio', 'Image', 'Icon'];

    const [imagePreview, setImagePreview] = useState(null);  // State for image preview
    const [formData, setFormData] = useState({
        productTitle: '',
        productPrice: '',
        productCategory: '',
        productDescription: '',
        productDetail: '',
        file: null
    });

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImagePreview(URL.createObjectURL(file));  // Set image preview
            setFormData({ ...formData, file });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission here (e.g., API call)
        console.log('Form submitted', formData);
    };

    return (
        <div className='mt-10'>
            <h2 className='text-2xl font-bold'>Add New Product</h2>
            <p>Start adding product details to add your item</p>
            <form onSubmit={handleSubmit} className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-10'>
                <div className='flex flex-col gap-5'>
                    <div>
                        <h4>Upload Image</h4>
                        <div>
                            {/* Image Preview */}
                            {imagePreview ? (
                                <img src={imagePreview} alt="Image Preview" className="w-32 h-32 object-cover" />
                            ) : (
                                <p>No image selected</p>
                            )}
                        </div>
                        <div className='mt-5'>
                            <Input type="file" accept="image/*" onChange={handleImageChange} />
                        </div>
                    </div>
                    <div>
                        <h4>Message To User</h4>
                        <Textarea placeholder="Message to user" />
                    </div>
                </div>

                <div className='flex flex-col gap-5'>
                    <div>
                        <h4>Product Title</h4>
                        <Input
                            type="text"
                            placeholder="Product Title"
                            value={formData.productTitle}
                            onChange={(e) => setFormData({ ...formData, productTitle: e.target.value })}
                        />
                    </div>
                    <div>
                        <h4>Price</h4>
                        <Input
                            type="number"
                            placeholder="Product Price"
                            value={formData.productPrice}
                            onChange={(e) => setFormData({ ...formData, productPrice: e.target.value })}
                        />
                    </div>
                    <div>
                        <h4>Select Product Category</h4>
                        <Select
                            value={formData.productCategory}
                            onValueChange={(value) => setFormData({ ...formData, productCategory: value })}
                        >
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select Category" />
                            </SelectTrigger>
                            <SelectContent>
                                {categoryOption.map((category, index) => (
                                    <SelectItem key={index} value={category.toLowerCase()}>
                                        {category}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div>
                        <h4>Description</h4>
                        <Textarea
                            placeholder="Add Product Description"
                            value={formData.productDescription}
                            onChange={(e) => setFormData({ ...formData, productDescription: e.target.value })}
                        />
                    </div>

                    <div>
                        <h4>Product Detail</h4>
                        <Textarea
                            placeholder="Add Product Detail"
                            value={formData.productDetail}
                            onChange={(e) => setFormData({ ...formData, productDetail: e.target.value })}
                        />
                    </div>
                </div>

                <div className="flex justify-end">
                    <button type="submit" className="bg-blue-500 text-white hover:bg-blue-600 transition-all px-4 py-2 rounded">
                        Submit Product
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddProduct;
