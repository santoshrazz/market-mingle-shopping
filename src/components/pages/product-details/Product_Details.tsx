"use client";
import { useState } from "react";
import Image from "next/image";
import { Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { productType } from "@/types/types";
// This would typically come from an API or database

export default function ProductDetails({ product }: { product: productType }) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setQuantity(isNaN(value) || value < 1 ? 1 : value);
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} ${product.title}(s) to cart`);
    // Here you would typically dispatch an action to add the item to the cart
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative aspect-square">
          <Image
            src={String(product.images[0]?.imageUrl)}
            alt={String(product.title)}
            fill={true}
            className="rounded-lg object-cover"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <div className="flex items-center mb-4">
            <div className="flex items-center mr-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(Number(product.rating))
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {String(product.rating)} ({product.reviews} reviews)
            </span>
          </div>
          <p className="text-2xl font-bold mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <div className="flex items-center mb-6">
            <Label htmlFor="quantity" className="mr-4">
              Quantity:
            </Label>
            <Input
              type="number"
              id="quantity"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
              className="w-20"
            />
          </div>
          <Button onClick={handleAddToCart} className="w-full">
            <ShoppingCart className="w-5 h-5 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
