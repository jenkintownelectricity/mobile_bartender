"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Wine,
  Beer,
  Coffee,
  IceCream,
  Search,
  ShoppingCart,
  Plus,
  Minus,
  X,
  Check,
  Clock,
  ChefHat,
  Bell,
  User,
  CreditCard,
  ArrowLeft,
  Star,
  Sparkles,
  Flame,
  Leaf,
  CircleDot
} from "lucide-react";

export default function TabletPOSPage() {
  const [cart, setCart] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("cocktails");
  const [isCartOpen, setIsCartOpen] = useState(false);

  const categories = [
    { id: "cocktails", name: "Cocktails", icon: Wine, count: 24 },
    { id: "beer", name: "Beer & Cider", icon: Beer, count: 18 },
    { id: "wine", name: "Wine", icon: Wine, count: 15 },
    { id: "non-alcoholic", name: "Non-Alcoholic", icon: Coffee, count: 12 },
  ];

  const menuItems = [
    {
      id: 1,
      name: "Classic Mojito",
      description: "White rum, fresh mint, lime, sugar, soda water",
      price: 12,
      category: "cocktails",
      image: "🍹",
      tags: ["Popular", "Refreshing"],
      allergens: [],
      prepTime: "5 min"
    },
    {
      id: 2,
      name: "Old Fashioned",
      description: "Bourbon, sugar, angostura bitters, orange peel",
      price: 14,
      category: "cocktails",
      image: "🥃",
      tags: ["Classic", "Strong"],
      allergens: [],
      prepTime: "3 min"
    },
    {
      id: 3,
      name: "Margarita",
      description: "Tequila, triple sec, fresh lime juice, salt rim",
      price: 13,
      category: "cocktails",
      image: "🍸",
      tags: ["Popular"],
      allergens: [],
      prepTime: "4 min"
    },
    {
      id: 4,
      name: "Espresso Martini",
      description: "Vodka, coffee liqueur, fresh espresso, sugar syrup",
      price: 14,
      category: "cocktails",
      image: "☕",
      tags: ["Signature", "Energizing"],
      allergens: [],
      prepTime: "6 min"
    },
    {
      id: 5,
      name: "Aperol Spritz",
      description: "Aperol, prosecco, soda water, orange slice",
      price: 11,
      category: "cocktails",
      image: "🍊",
      tags: ["Light", "Popular"],
      allergens: [],
      prepTime: "3 min"
    },
    {
      id: 6,
      name: "Piña Colada",
      description: "White rum, coconut cream, pineapple juice",
      price: 13,
      category: "cocktails",
      image: "🥥",
      tags: ["Tropical"],
      allergens: ["Coconut"],
      prepTime: "5 min"
    },
  ];

  const addToCart = (item: any) => {
    const existing = cart.find(i => i.id === item.id);
    if (existing) {
      setCart(cart.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i));
    } else {
      setCart([...cart, { ...item, quantity: 1, customizations: [] }]);
    }
  };

  const removeFromCart = (itemId: number) => {
    setCart(cart.filter(i => i.id !== itemId));
  };

  const updateQuantity = (itemId: number, delta: number) => {
    setCart(cart.map(i => {
      if (i.id === itemId) {
        const newQuantity = Math.max(0, i.quantity + delta);
        return newQuantity > 0 ? { ...i, quantity: newQuantity } : null;
      }
      return i;
    }).filter(Boolean) as any[]);
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-900 via-purple-800 to-blue-900 p-6 shadow-2xl">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-1 flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  🍸
                </div>
                FlowBar Premium
              </h1>
              <p className="text-purple-200">Summer Corporate Mixer • Table 7</p>
            </div>
            <div className="flex items-center gap-4">
              <Badge className="bg-white/20 border-none text-white px-4 py-2 text-sm">
                <Clock className="h-4 w-4 mr-2" />
                7:45 PM
              </Badge>
              <Button
                size="lg"
                className="bg-white text-purple-900 hover:bg-white/90 font-semibold shadow-xl relative"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Cart ({cartCount})
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 h-6 w-6 bg-emerald-500 rounded-full flex items-center justify-center text-xs font-bold">
                    {cartCount}
                  </span>
                )}
              </Button>
            </div>
          </div>

          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
            <Input
              placeholder="Search drinks..."
              className="w-full h-14 pl-12 bg-white/10 border-white/20 text-white placeholder:text-white/50 text-lg backdrop-blur-sm"
            />
          </div>
        </div>
      </header>

      {/* Categories */}
      <div className="bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex gap-3 overflow-x-auto">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="lg"
                onClick={() => setSelectedCategory(category.id)}
                className={`flex-shrink-0 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                    : "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700"
                }`}
              >
                <category.icon className="h-5 w-5 mr-2" />
                {category.name}
                <Badge className="ml-2 bg-white/20 border-none">{category.count}</Badge>
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Grid */}
      <div className="flex-1 bg-slate-950 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Signature Cocktails</h2>
            <p className="text-slate-400">Handcrafted with premium ingredients</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item) => (
              <Card
                key={item.id}
                className="bg-slate-900 border-slate-800 overflow-hidden hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-[1.02] cursor-pointer group"
                onClick={() => addToCart(item)}
              >
                <CardHeader className="relative p-0">
                  <div className="h-48 bg-gradient-to-br from-purple-900 via-purple-700 to-blue-900 flex items-center justify-center">
                    <span className="text-8xl">{item.image}</span>
                  </div>
                  {item.tags.length > 0 && (
                    <div className="absolute top-4 left-4 flex gap-2">
                      {item.tags.map((tag) => (
                        <Badge key={tag} className="bg-white/90 text-slate-900 border-none font-semibold shadow-lg">
                          {tag === "Popular" && <Flame className="h-3 w-3 mr-1 text-orange-500" />}
                          {tag === "Signature" && <Star className="h-3 w-3 mr-1 text-amber-500" />}
                          {tag === "Refreshing" && <Sparkles className="h-3 w-3 mr-1 text-blue-500" />}
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-emerald-500 text-white border-none font-bold text-lg px-3 py-1 shadow-lg">
                      ${item.price}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Clock className="h-3 w-3" />
                      {item.prepTime}
                    </div>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 font-semibold shadow-lg"
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(item);
                      }}
                    >
                      <Plus className="h-4 w-4 mr-1" />
                      Add to Order
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="flex-1 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsCartOpen(false)}
          />
          <div className="w-full max-w-md bg-slate-900 shadow-2xl flex flex-col">
            <div className="p-6 border-b border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Your Order</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsCartOpen(false)}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <p className="text-slate-400">Table 7 • {cartCount} items</p>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingCart className="h-16 w-16 text-slate-700 mb-4" />
                  <p className="text-slate-400 text-lg mb-2">Your cart is empty</p>
                  <p className="text-slate-500 text-sm">Add some drinks to get started!</p>
                </div>
              ) : (
                cart.map((item) => (
                  <Card key={item.id} className="bg-slate-800 border-slate-700">
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <div className="h-16 w-16 rounded-lg bg-gradient-to-br from-purple-900 to-blue-900 flex items-center justify-center text-3xl flex-shrink-0">
                          {item.image}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold mb-1">{item.name}</h4>
                          <p className="text-emerald-500 font-bold">${item.price} each</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            size="icon"
                            variant="outline"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, -1)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-8 text-center font-bold">{item.quantity}</span>
                          <Button
                            size="icon"
                            variant="outline"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-500/10"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-slate-800 space-y-4 bg-slate-900">
                <div className="space-y-2">
                  <div className="flex justify-between text-slate-400">
                    <span>Subtotal</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Tax (10%)</span>
                    <span>${(cartTotal * 0.1).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-2xl font-bold pt-2 border-t border-slate-700">
                    <span>Total</span>
                    <span className="text-emerald-500">${(cartTotal * 1.1).toFixed(2)}</span>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-bold text-lg h-14 shadow-xl"
                >
                  <CreditCard className="h-5 w-5 mr-2" />
                  Proceed to Payment
                </Button>

                <div className="flex gap-2">
                  <Button variant="outline" size="lg" className="flex-1 border-slate-700">
                    <User className="h-5 w-5 mr-2" />
                    Call Server
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1 border-slate-700">
                    <ChefHat className="h-5 w-5 mr-2" />
                    Kitchen Status
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Bottom Bar */}
      <div className="bg-slate-900 border-t border-slate-800 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 px-4 py-2">
              <CircleDot className="h-4 w-4 mr-2 animate-pulse" />
              Online • Synced
            </Badge>
            <span className="text-slate-400 text-sm">All orders sync automatically</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm">
              Help
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
