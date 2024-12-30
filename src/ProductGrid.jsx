import React from 'react';
import ProductCard from './ProductCard';

const products = [
    {
        title: 'MobileApp',
        image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/MobApp-free-one-mobile-app-landing-page.jpg.webp',
        description: 'This is an amazing landing page for app/mobile developer.',
    },
    {
        title: 'Wordpress Website',
        image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/ohio-wordpress-theme.jpg.avif',
        description: 'This a big and large website made by wordpress.',
    },
    {
        title: 'Personal',
        image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/personal-free-template.jpg.webp',
        description: 'This is a personal website and blog',
    },
    {
        title: 'Portfolio Website',
        image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/space-free-template.jpg.avif',
        description: 'This is an amazing website created by react.',
    },
    // Add more products as needed
];

const ProductGrid = () => {
    return (
        <div className="p-4">
            {/* Centered Heading at the Top */}
            <h2 className="text-center text-3xl font-bold mt-8 mb-8">Our Portfolio</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product, index) => (
                    <ProductCard
                        key={index}
                        title={product.title}
                        image={product.image}
                        description={product.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductGrid;
