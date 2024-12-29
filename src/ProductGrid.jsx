// src/components/ProductGrid.js
import React from 'react';
import ProductCard from './ProductCard';

const products = [
    {
        title: 'Product 1',
        image: 'https://via.placeholder.com/150',
        description: 'This is a brief description of Product 1.',
    },
    {
        title: 'Product 2',
        image: 'https://via.placeholder.com/150',
        description: 'This is a brief description of Product 2.',
    },
    {
        title: 'Product 3',
        image: 'https://via.placeholder.com/150',
        description: 'This is a brief description of Product 3.',
    },
    {
        title: 'Product 4',
        image: 'https://via.placeholder.com/150',
        description: 'This is a brief description of Product 4.',
    },
    // Add more products as needed
];

const ProductGrid = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {products.map((product, index) => (
                <ProductCard
                    key={index}
                    title={product.title}
                    image={product.image}
                    description={product.description}
                />
            ))}
        </div>
    );
};

export default ProductGrid;