"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BarChart3,
  Calendar,
  Users,
  FileText,
  DollarSign,
  Package,
  UserCheck,
  Tablet,
  Code,
  Menu,
  X,
  TrendingUp,
  TrendingDown,
  Clock,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Moon,
  Sun,
  ChevronRight,
  Home,
  Settings,
  Bell,
  Search,
  Plus,
  Filter,
  Download,
  Upload,
  RefreshCw,
  MoreHorizontal,
  Eye,
  Edit,
  Trash,
  Share2,
  Copy,
  ExternalLink
} from "lucide-react";

export default function HomePage() {
  const [activeMode, setActiveMode] = useState<"owner" | "employee" | "client" | "developer" | "tablet">("owner");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const modes = [
    { id: "owner", name: "Business Owner", icon: BarChart3, color: "bg-purple-500" },
    { id: "employee", name: "Employee", icon: UserCheck, color: "bg-blue-500" },
    { id: "client", name: "Client Portal", icon: Users, color: "bg-emerald-500" },
    { id: "developer", name: "Developer", icon: Code, color: "bg-amber-500" },
    { id: "tablet", name: "Tablet POS", icon: Tablet, color: "bg-rose-500" },
  ];

  const navigationItems = [
    { name: "Dashboard", icon: Home, href: "/dashboard" },
    { name: "Events", icon: Calendar, href: "/events", badge: 12 },
    { name: "Customers", icon: Users, href: "/customers" },
    { name: "Proposals", icon: FileText, href: "/proposals", badge: 5 },
    { name: "Invoices", icon: DollarSign, href: "/invoices" },
    { name: "Inventory", icon: Package, href: "/inventory" },
    { name: "Staff", icon: UserCheck, href: "/staff" },
    { name: "Settings", icon: Settings, href: "/settings" },
  ];

  const stats = [
    {
      title: "Total Revenue",
      value: "$47,293",
      change: "+12.3%",
      trend: "up",
      icon: DollarSign,
      color: "bg-emerald-500/10 text-emerald-500"
    },
    {
      title: "Active Events",
      value: "23",
      change: "+4 this week",
      trend: "up",
      icon: Calendar,
      color: "bg-blue-500/10 text-blue-500"
    },
    {
      title: "Avg Event Value",
      value: "$2,056",
      change: "+8.2%",
      trend: "up",
      icon: TrendingUp,
      color: "bg-purple-500/10 text-purple-500"
    },
    {
      title: "Client Satisfaction",
      value: "98%",
      change: "+2.1%",
      trend: "up",
      icon: Sparkles,
      color: "bg-amber-500/10 text-amber-500"
    },
  ];

  const recentEvents = [
    {
      id: 1,
      name: "Summer Corporate Mixer",
      client: "TechCorp Industries",
      date: "June 15, 2025",
      time: "7:00 PM - 11:00 PM",
      guests: 150,
      status: "confirmed",
      value: "$3,250"
    },
    {
      id: 2,
      name: "Johnson Wedding Reception",
      client: "Sarah & Mike Johnson",
      date: "June 18, 2025",
      time: "6:00 PM - 12:00 AM",
      guests: 200,
      status: "pending",
      value: "$4,500"
    },
    {
      id: 3,
      name: "Private Birthday Party",
      client: "Marcus Williams",
      date: "June 22, 2025",
      time: "8:00 PM - 2:00 AM",
      guests: 75,
      status: "confirmed",
      value: "$1,850"
    },
  ];

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? "w-64" : "w-0"} transition-all duration-300 ease-in-out bg-card border-r border-border flex flex-col overflow-hidden`}>
        <div className="p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
              <BarChart3 className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                FlowBar
              </h1>
              <p className="text-xs text-muted-foreground">Mobile Bartending</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-4">
          <div className="space-y-1">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground group"
              >
                <item.icon className="h-5 w-5 text-muted-foreground group-hover:text-accent-foreground" />
                <span className="flex-1 text-left">{item.name}</span>
                {item.badge && (
                  <Badge variant="secondary" className="ml-auto">
                    {item.badge}
                  </Badge>
                )}
              </button>
            ))}
          </div>
        </nav>

        <div className="p-4 border-t border-border">
          <Card className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-purple-500/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Upgrade to Pro</CardTitle>
              <CardDescription className="text-xs">
                Unlock advanced features and integrations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="sm" className="w-full bg-gradient-to-r from-purple-500 to-blue-500">
                Upgrade Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 border-b border-border bg-card flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search events, customers, inventory..."
                className="w-96 h-10 pl-10 pr-4 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
            </Button>

            <div className="h-8 w-px bg-border mx-2"></div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-medium">John Martinez</p>
                <p className="text-xs text-muted-foreground">Business Owner</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-semibold">
                JM
              </div>
            </div>
          </div>
        </header>

        {/* Mode Switcher */}
        <div className="bg-card border-b border-border p-4">
          <div className="flex items-center gap-2 overflow-x-auto">
            <span className="text-sm font-medium text-muted-foreground mr-2">View Mode:</span>
            {modes.map((mode) => (
              <Button
                key={mode.id}
                variant={activeMode === mode.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveMode(mode.id as any)}
                className={activeMode === mode.id ? "bg-gradient-to-r from-purple-500 to-blue-500" : ""}
              >
                <mode.icon className="h-4 w-4 mr-2" />
                {mode.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Welcome Banner */}
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600 p-8 text-white">
            <div className="relative z-10">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-2">Welcome back, John! 👋</h2>
                  <p className="text-white/90 max-w-2xl">
                    You have 12 upcoming events this month and 5 pending proposals to review.
                    Your business is growing 23% faster than last quarter!
                  </p>
                  <div className="flex gap-3 mt-6">
                    <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90">
                      <Plus className="h-5 w-5 mr-2" />
                      Create Event
                    </Button>
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                      View Calendar
                    </Button>
                  </div>
                </div>
                <Badge className="bg-white/20 text-white border-none">
                  <Sparkles className="h-3 w-3 mr-1" />
                  Pro Plan
                </Badge>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-1/3 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      {stat.title}
                    </CardTitle>
                    <div className={`p-2 rounded-lg ${stat.color}`}>
                      <stat.icon className="h-4 w-4" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold">{stat.value}</span>
                    <Badge variant={stat.trend === "up" ? "success" : "destructive"} className="flex items-center gap-1">
                      {stat.trend === "up" ? (
                        <TrendingUp className="h-3 w-3" />
                      ) : (
                        <TrendingDown className="h-3 w-3" />
                      )}
                      {stat.change}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recent Events & Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Events */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Upcoming Events</CardTitle>
                    <CardDescription>Your next scheduled bartending services</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    View All
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentEvents.map((event) => (
                    <div
                      key={event.id}
                      className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-accent transition-all group cursor-pointer"
                    >
                      <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                        {event.date.split(" ")[1].split(",")[0]}
                        <span className="text-xs ml-1">
                          {event.date.split(" ")[0].slice(0, 3)}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-sm truncate">{event.name}</h4>
                          <Badge variant={event.status === "confirmed" ? "success" : "warning"}>
                            {event.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{event.client}</p>
                        <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {event.time}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            {event.guests} guests
                          </span>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="text-lg font-bold text-emerald-500">{event.value}</p>
                        <Button variant="ghost" size="sm" className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common tasks and shortcuts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button className="w-full justify-start" variant="outline">
                    <Calendar className="h-4 w-4 mr-2" />
                    Create New Event
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <FileText className="h-4 w-4 mr-2" />
                    Generate Proposal
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <DollarSign className="h-4 w-4 mr-2" />
                    Send Invoice
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Package className="h-4 w-4 mr-2" />
                    Check Inventory
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <UserCheck className="h-4 w-4 mr-2" />
                    Schedule Staff
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Export Reports
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Feature Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-all border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-transparent">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-3">
                  <Users className="h-6 w-6 text-purple-500" />
                </div>
                <CardTitle>Customer Management</CardTitle>
                <CardDescription>
                  Complete CRM with lead tracking, client portals, and communication history
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  View Customers
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-transparent">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-3">
                  <Package className="h-6 w-6 text-blue-500" />
                </div>
                <CardTitle>Smart Inventory</CardTitle>
                <CardDescription>
                  AI-powered forecasting, real-time tracking, and automated reordering
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Manage Inventory
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-transparent">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-3">
                  <Tablet className="h-6 w-6 text-emerald-500" />
                </div>
                <CardTitle>Tablet POS</CardTitle>
                <CardDescription>
                  Beautiful guest ordering interface with offline mode and real-time sync
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Open POS
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Bottom CTA */}
          <Card className="border-2 border-dashed border-border hover:border-purple-500/50 transition-all">
            <CardHeader>
              <div className="text-center">
                <Sparkles className="h-8 w-8 text-purple-500 mx-auto mb-3" />
                <CardTitle className="text-xl">Everything You Need to Run Your Business</CardTitle>
                <CardDescription className="mt-2 max-w-2xl mx-auto">
                  FlowBar provides a complete, all-in-one platform for mobile bartending businesses.
                  From proposals to payments, inventory to staff management, and stunning tablet POS – we've got you covered.
                </CardDescription>
                <div className="flex items-center justify-center gap-3 mt-6">
                  <Button size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500">
                    Explore All Features
                  </Button>
                  <Button size="lg" variant="outline">
                    Watch Demo
                  </Button>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </main>
    </div>
  );
}
