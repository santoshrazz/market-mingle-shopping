"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { SearchIcon } from "lucide-react";

type Category = {
  id: string;
  name: string;
  subcategories: string[];
};

const categories: Category[] = [
  {
    id: "electronics",
    name: "Electronics",
    subcategories: ["Smartphones", "Laptops", "Tablets", "Accessories"],
  },
  {
    id: "clothing",
    name: "Clothing",
    subcategories: ["Men", "Women", "Kids", "Accessories"],
  },
  {
    id: "home",
    name: "Home & Living",
    subcategories: ["Furniture", "Decor", "Kitchen", "Bedding"],
  },
];

export default function Sidebar() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="w-64 bg-background p-4 border-r h-screen overflow-y-auto">
      <div className="mb-6">
        <Label htmlFor="search" className="sr-only">
          Search
        </Label>
        <div className="relative">
          <SearchIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            id="search"
            placeholder="Search products..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="mb-6">
        <Label htmlFor="sort">Sort by Price</Label>
        <Select>
          <SelectTrigger id="sort">
            <SelectValue placeholder="Select option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="low-to-high">Low to High</SelectItem>
            <SelectItem value="high-to-low">High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Accordion type="multiple" className="w-full">
        {categories.map((category) => (
          <AccordionItem value={category.id} key={category.id}>
            <AccordionTrigger>{category.name}</AccordionTrigger>
            <AccordionContent>
              {category.subcategories.map((subcategory) => (
                <div
                  className="flex items-center space-x-2 mb-2"
                  key={subcategory}
                >
                  <Checkbox id={`${category.id}-${subcategory}`} />
                  <Label htmlFor={`${category.id}-${subcategory}`}>
                    {subcategory}
                  </Label>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <Button className="w-full mt-6">Apply Filters</Button>
    </div>
  );
}
