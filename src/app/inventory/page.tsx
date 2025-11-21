"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Package,
  Search,
  Plus,
  TrendingDown,
  AlertCircle,
  CheckCircle2,
  Download,
  Upload,
  BarChart3,
  Filter,
  RefreshCw,
  ShoppingCart,
  DollarSign,
  Calendar,
  Eye,
  Edit,
  Trash,
  Package2,
  Wine,
  Beer,
  Coffee,
  Sparkles
} from "lucide-react";

export default function InventoryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Items", count: 156 },
    { id: "spirits", name: "Spirits", count: 48, icon: Wine },
    { id: "beer", name: "Beer", count: 32, icon: Beer },
    { id: "mixers", name: "Mixers", count: 28, icon: Coffee },
    { id: "garnishes", name: "Garnishes", count: 24, icon: Sparkles },
    { id: "supplies", name: "Supplies", count: 24, icon: Package2 },
  ];

  const inventoryItems = [
    {
      id: 1,
      name: "Tito's Vodka 1.75L",
      category: "Spirits",
      current: 8,
      par: 12,
      reorder: 6,
      cost: 24.99,
      status: "low",
      lastOrdered: "3 days ago",
      vendor: "ABC Liquor"
    },
    {
      id: 2,
      name: "Bacardi White Rum 750ml",
      category: "Spirits",
      current: 15,
      par: 10,
      reorder: 5,
      cost: 16.99,
      status: "good",
      lastOrdered: "1 week ago",
      vendor: "ABC Liquor"
    },
    {
      id: 3,
      name: "Jose Cuervo Tequila 1L",
      category: "Spirits",
      current: 3,
      par: 8,
      reorder: 4,
      cost: 22.99,
      status: "critical",
      lastOrdered: "5 days ago",
      vendor: "Total Wine"
    },
    {
      id: 4,
      name: "Hendrick's Gin 750ml",
      category: "Spirits",
      current: 12,
      par: 10,
      reorder: 5,
      cost: 32.99,
      status: "good",
      lastOrdered: "2 weeks ago",
      vendor: "Total Wine"
    },
    {
      id: 5,
      name: "Fresh Lime Juice 1L",
      category: "Mixers",
      current: 2,
      par: 6,
      reorder: 3,
      cost: 8.99,
      status: "critical",
      lastOrdered: "Yesterday",
      vendor: "Restaurant Depot"
    },
    {
      id: 6,
      name: "Club Soda Cases (24pk)",
      category: "Mixers",
      current: 18,
      par: 12,
      reorder: 6,
      cost: 12.99,
      status: "good",
      lastOrdered: "4 days ago",
      vendor: "Restaurant Depot"
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "critical": return "destructive";
      case "low": return "warning";
      case "good": return "success";
      default: return "default";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "critical": return AlertCircle;
      case "low": return TrendingDown;
      case "good": return CheckCircle2;
      default: return Package;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Inventory Management</h1>
              <p className="text-muted-foreground">
                Real-time stock tracking with AI-powered forecasting
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600">
                <Plus className="h-4 w-4 mr-2" />
                Add Item
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search inventory by name, category, or vendor..."
                className="pl-10 h-12"
              />
            </div>
            <Button variant="outline" size="lg">
              <Filter className="h-5 w-5 mr-2" />
              Filters
            </Button>
            <Button variant="outline" size="lg">
              <RefreshCw className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center justify-between">
                Total Items
                <Package className="h-4 w-4" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">156</p>
              <Badge variant="success" className="mt-2">
                +12 this month
              </Badge>
            </CardContent>
          </Card>

          <Card className="border-red-200 bg-red-50 dark:bg-red-950/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center justify-between text-red-900 dark:text-red-100">
                Low Stock Items
                <AlertCircle className="h-4 w-4 text-red-600" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-red-600">8</p>
              <Badge variant="destructive" className="mt-2">
                Needs attention
              </Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center justify-between">
                Inventory Value
                <DollarSign className="h-4 w-4" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">$8,432</p>
              <Badge variant="default" className="mt-2">
                +5.2% vs last month
              </Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center justify-between">
                Pending Orders
                <ShoppingCart className="h-4 w-4" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">3</p>
              <Badge variant="default" className="mt-2">
                $1,247 total
              </Badge>
            </CardContent>
          </Card>
        </div>

        {/* Alerts */}
        <Card className="mb-8 border-red-200 bg-red-50 dark:bg-red-950/20">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2 text-red-900 dark:text-red-100">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                  Inventory Alerts
                </CardTitle>
                <CardDescription className="text-red-800 dark:text-red-200">
                  8 items need immediate attention
                </CardDescription>
              </div>
              <Button size="sm" className="bg-red-600 hover:bg-red-700">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Create Order
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                "Jose Cuervo Tequila (3 left)",
                "Fresh Lime Juice (2 left)",
                "Simple Syrup (1 left)",
                "Mint Leaves (Out of stock)",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 p-3 bg-white dark:bg-slate-900 rounded-lg">
                  <AlertCircle className="h-4 w-4 text-red-600 flex-shrink-0" />
                  <span className="text-sm font-medium truncate">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Categories */}
        <div className="flex gap-2 mb-6 overflow-x-auto">
          {categories.map((category) => {
            const Icon = category.icon || Package;
            return (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? "bg-gradient-to-r from-purple-600 to-blue-600" : ""}
              >
                {category.icon && <Icon className="h-4 w-4 mr-2" />}
                {category.name}
                <Badge className="ml-2 bg-white/20 border-none">{category.count}</Badge>
              </Button>
            );
          })}
        </div>

        {/* Inventory Table */}
        <Card>
          <CardHeader>
            <CardTitle>Inventory Items</CardTitle>
            <CardDescription>
              Track stock levels, costs, and reorder points in real-time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {inventoryItems.map((item) => {
                const StatusIcon = getStatusIcon(item.status);
                const stockPercentage = (item.current / item.par) * 100;

                return (
                  <Card key={item.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-6">
                        {/* Item Image Placeholder */}
                        <div className="h-20 w-20 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                          <Package className="h-10 w-10 text-white" />
                        </div>

                        {/* Item Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
                              <p className="text-sm text-muted-foreground">{item.category} • {item.vendor}</p>
                            </div>
                            <Badge variant={getStatusColor(item.status) as any}>
                              <StatusIcon className="h-3 w-3 mr-1" />
                              {item.status}
                            </Badge>
                          </div>

                          {/* Stock Level Bar */}
                          <div className="mb-3">
                            <div className="flex items-center justify-between text-sm mb-1">
                              <span className="text-muted-foreground">Stock Level</span>
                              <span className="font-medium">
                                {item.current} / {item.par} units
                              </span>
                            </div>
                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                              <div
                                className={`h-full transition-all ${
                                  stockPercentage < 50
                                    ? "bg-red-500"
                                    : stockPercentage < 80
                                    ? "bg-amber-500"
                                    : "bg-emerald-500"
                                }`}
                                style={{ width: `${Math.min(stockPercentage, 100)}%` }}
                              />
                            </div>
                          </div>

                          {/* Item Details Grid */}
                          <div className="grid grid-cols-4 gap-4">
                            <div>
                              <p className="text-xs text-muted-foreground mb-1">Unit Cost</p>
                              <p className="font-semibold text-emerald-600">${item.cost}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground mb-1">Reorder Point</p>
                              <p className="font-semibold">{item.reorder} units</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground mb-1">Total Value</p>
                              <p className="font-semibold">${(item.current * item.cost).toFixed(2)}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground mb-1">Last Ordered</p>
                              <p className="font-semibold text-sm">{item.lastOrdered}</p>
                            </div>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col gap-2 flex-shrink-0">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
                          </Button>
                          <Button size="sm" className="bg-gradient-to-r from-emerald-600 to-green-600">
                            <ShoppingCart className="h-4 w-4 mr-1" />
                            Reorder
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* AI Insights */}
        <Card className="mt-8 border-purple-200 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-purple-600" />
              AI Insights & Recommendations
            </CardTitle>
            <CardDescription>
              Smart forecasting based on your usage patterns and upcoming events
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-white dark:bg-slate-900">
                <CardContent className="p-4">
                  <BarChart3 className="h-8 w-8 text-blue-600 mb-2" />
                  <h4 className="font-semibold mb-1">Forecasted Usage</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Based on 12 upcoming events, you'll need:
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• 8 bottles vodka</li>
                    <li>• 6 bottles tequila</li>
                    <li>• 12L mixers</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-slate-900">
                <CardContent className="p-4">
                  <TrendingDown className="h-8 w-8 text-amber-600 mb-2" />
                  <h4 className="font-semibold mb-1">Cost Optimization</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    You could save $245/month by:
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Bulk ordering spirits</li>
                    <li>• Switching mixer suppliers</li>
                    <li>• Reducing waste by 15%</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-slate-900">
                <CardContent className="p-4">
                  <Calendar className="h-8 w-8 text-emerald-600 mb-2" />
                  <h4 className="font-semibold mb-1">Order Timing</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Optimal reorder dates:
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Tomorrow: Tequila, limes</li>
                    <li>• June 18: Vodka, mixers</li>
                    <li>• June 22: Beer restock</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
