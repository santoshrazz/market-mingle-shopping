"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { productType } from "@/types/types";

// This would typically come from an API or database
// const initialProducts = [
//   {
//     id: 1,
//     title: "Wireless Earbuds",
//     price: 79.99,
//     rating: 4.5,
//     image: "/placeholder.svg",
//     category: "Electronics",
//   },
//   {
//     id: 2,
//     title: "Smartphone Case",
//     price: 19.99,
//     rating: 4.0,
//     image: "/placeholder.svg",
//     category: "Accessories",
//   },
//   {
//     id: 3,
//     title: "USB-C Cable",
//     price: 9.99,
//     rating: 4.2,
//     image: "/placeholder.svg",
//     category: "Electronics",
//   },
//   {
//     id: 4,
//     title: "Bluetooth Speaker",
//     price: 49.99,
//     rating: 4.7,
//     image: "/placeholder.svg",
//     category: "Electronics",
//   },
//   {
//     id: 5,
//     title: "Laptop Backpack",
//     price: 39.99,
//     rating: 4.3,
//     image: "/placeholder.svg",
//     category: "Accessories",
//   },
//   {
//     id: 6,
//     title: "Wireless Mouse",
//     price: 29.99,
//     rating: 4.1,
//     image: "/placeholder.svg",
//     category: "Electronics",
//   },
// ];

type Product = {
  id: number;
  title: string;
  price: number;
  rating: number;
  image: string;
  category: string;
};

export default function ProductListingPage({
  initialProducts,
}: {
  initialProducts: productType[];
}) {
  const [products, setProducts] = useState<productType[]>(initialProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<"price" | "rating">("price");

  const categories = Array.from(
    new Set(initialProducts.map((p) => p.category))
  );

  const filteredProducts = products
    .filter(
      (product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (!selectedCategory || product.category === selectedCategory)
    )
    .sort((a, b) => {
      if (sortBy === "price") return Number(a.price) - Number(b.price);
      if (sortBy === "rating") return Number(b.rating) - Number(a.rating);
      return 0;
    });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>

      <div className="flex justify-between items-center mb-6">
        <Input
          type="search"
          placeholder="Search products..."
          className="max-w-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="flex items-center space-x-4">
          <Select
            onValueChange={(value) => setSortBy(value as "price" | "rating")}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="price">Price: Low to High</SelectItem>
              <SelectItem value="rating">Rating: High to Low</SelectItem>
            </SelectContent>
          </Select>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" /> Filter
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Filter Products</SheetTitle>
                <SheetDescription>
                  Choose a category to filter the products.
                </SheetDescription>
              </SheetHeader>
              <div className="mt-4 space-y-4">
                <Button
                  variant={selectedCategory === null ? "default" : "outline"}
                  className="w-full"
                  onClick={() => setSelectedCategory(null)}
                >
                  All Categories
                </Button>
                {categories.map((category, ind) => (
                  <Button
                    key={ind}
                    variant={
                      selectedCategory === category ? "default" : "outline"
                    }
                    className="w-full"
                    onClick={() => setSelectedCategory(String(category))}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product, ind) => (
          <div
            key={ind}
            className="border rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src={String(product.images[0]?.imageUrl)}
              alt={String(product.title)}
              width={300}
              height={200}
              //   className="object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
              <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
              <div className="flex items-center mb-2">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="ml-1">{product.rating.toFixed(1)}</span>
              </div>
              <p className="text-sm text-gray-500 mb-4">{product.category}</p>
              <Link href={`/allproducts/${product._id}`} passHref>
                <Button className="w-full">View Details</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-500 mt-8">
          No products found. Try adjusting your filters.
        </p>
      )}
    </div>
  );
}
