"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";

// This would typically come from a global state management solution or API
const initialCartItems = [
  {
    id: 1,
    name: "Wireless Earbuds",
    price: 79.99,
    image: "/placeholder.svg",
    quantity: 1,
  },
  {
    id: 2,
    name: "Smartphone Case",
    price: 19.99,
    image: "/placeholder.svg",
    quantity: 2,
  },
  {
    id: 3,
    name: "USB-C Cable",
    price: 9.99,
    image: "/placeholder.svg",
    quantity: 3,
  },
];

type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity >= 0) {
      setCartItems((items) =>
        items.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-center">
          <p className="text-xl mb-4">Your cart is empty</p>
          <Link href="/products" passHref>
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      ) : (
        <>
          <div className="space-y-8">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center space-x-4 border-b pb-4"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-md"
                />
                <div className="flex-grow">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <p className="font-semibold w-24 text-right">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeItem(item.id)}
                  aria-label={`Remove ${item.name} from cart`}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-between items-center">
            <div>
              <p className="text-lg">
                Subtotal:{" "}
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </p>
              <p className="text-sm text-gray-500">
                Taxes and shipping calculated at checkout
              </p>
            </div>
            <Button size="lg">Proceed to Checkout</Button>
          </div>
        </>
      )}
    </div>
  );
}
