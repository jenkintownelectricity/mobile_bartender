"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  CheckCircle2,
  AlertCircle,
  DollarSign,
  TrendingUp,
  Star,
  Award,
  BookOpen,
  MessageCircle,
  Bell,
  LogIn,
  LogOut,
  Package,
  ClipboardList,
  Home
} from "lucide-react";

export default function EmployeeModePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                <span className="text-2xl">🍸</span>
              </div>
              <div>
                <h1 className="text-xl font-bold">FlowBar Employee Portal</h1>
                <p className="text-sm text-gray-600">Welcome, Alex</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge className="bg-emerald-500">
                <CheckCircle2 className="h-3 w-3 mr-1" />
                Clocked In
              </Badge>
              <Button variant="outline" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                Clock Out
              </Button>
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white font-semibold">
                AR
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Today's Summary */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl p-8 text-white mb-8 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-2">Good evening, Alex! 👋</h2>
            <p className="text-blue-100 mb-6">
              You're scheduled for 2 events today. Your shift at the Summer Corporate Mixer starts in 45 minutes.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Clock className="h-8 w-8 mb-2" />
                <p className="text-2xl font-bold">4.5 hrs</p>
                <p className="text-sm text-blue-100">Today's Hours</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <DollarSign className="h-8 w-8 mb-2" />
                <p className="text-2xl font-bold">$142</p>
                <p className="text-sm text-blue-100">Today's Earnings</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Star className="h-8 w-8 mb-2" />
                <p className="text-2xl font-bold">4.9</p>
                <p className="text-sm text-blue-100">Your Rating</p>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Button size="lg" className="h-24 flex-col gap-2 bg-white hover:bg-gray-50 text-gray-900 border-2">
            <LogIn className="h-6 w-6" />
            <span>Clock In</span>
          </Button>
          <Button size="lg" className="h-24 flex-col gap-2 bg-white hover:bg-gray-50 text-gray-900 border-2">
            <Calendar className="h-6 w-6" />
            <span>My Schedule</span>
          </Button>
          <Button size="lg" className="h-24 flex-col gap-2 bg-white hover:bg-gray-50 text-gray-900 border-2">
            <Package className="h-6 w-6" />
            <span>Inventory</span>
          </Button>
          <Button size="lg" className="h-24 flex-col gap-2 bg-white hover:bg-gray-50 text-gray-900 border-2">
            <MessageCircle className="h-6 w-6" />
            <span>Messages</span>
          </Button>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Today's Shifts */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Today's Shifts</CardTitle>
                <CardDescription>Your assigned events for June 15, 2025</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    id: 1,
                    name: "Summer Corporate Mixer",
                    client: "TechCorp Industries",
                    time: "7:00 PM - 11:00 PM",
                    location: "Downtown Convention Center",
                    role: "Lead Bartender",
                    status: "upcoming",
                    guests: 150,
                    pay: "$120"
                  },
                  {
                    id: 2,
                    name: "Private Birthday Party",
                    client: "Williams Family",
                    time: "9:00 PM - 1:00 AM",
                    location: "Lakeview Manor",
                    role: "Bartender",
                    status: "upcoming",
                    guests: 75,
                    pay: "$100"
                  }
                ].map((shift) => (
                  <Card key={shift.id} className="bg-gradient-to-br from-white to-gray-50 border-2">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-lg font-bold">{shift.name}</h3>
                            <Badge className="bg-blue-500">{shift.role}</Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">{shift.client}</p>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="flex items-center gap-2 text-sm">
                              <Clock className="h-4 w-4 text-gray-500" />
                              <span>{shift.time}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <Users className="h-4 w-4 text-gray-500" />
                              <span>{shift.guests} guests</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <MapPin className="h-4 w-4 text-gray-500" />
                              <span>{shift.location}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <DollarSign className="h-4 w-4 text-emerald-500" />
                              <span className="font-semibold text-emerald-600">{shift.pay}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600">
                          <CheckCircle2 className="h-4 w-4 mr-2" />
                          Confirm Arrival
                        </Button>
                        <Button variant="outline" className="flex-1">
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Upcoming This Week</CardTitle>
                <CardDescription>Your schedule for the next 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { date: "Wed, June 16", event: "Garden Wedding Reception", time: "5:00 PM - 11:00 PM", pay: "$140" },
                    { date: "Fri, June 18", event: "Johnson Wedding", time: "6:00 PM - 12:00 AM", pay: "$180" },
                    { date: "Sat, June 19", event: "Corporate Gala", time: "7:00 PM - 1:00 AM", pay: "$200" },
                  ].map((shift, i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-lg border hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <p className="text-sm font-semibold text-gray-900">{shift.date.split(",")[1].trim().split(" ")[1]}</p>
                          <p className="text-xs text-gray-500">{shift.date.split(",")[0]}</p>
                        </div>
                        <div>
                          <p className="font-medium">{shift.event}</p>
                          <p className="text-sm text-gray-600">{shift.time}</p>
                        </div>
                      </div>
                      <Badge className="bg-emerald-500">{shift.pay}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">This Month</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Hours</p>
                  <p className="text-3xl font-bold">64.5</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Earnings</p>
                  <p className="text-3xl font-bold text-emerald-600">$1,935</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Events Worked</p>
                  <p className="text-3xl font-bold">18</p>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Rating</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      <span className="font-semibold">4.9</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-emerald-500" />
                    <span className="text-sm text-emerald-600">+0.2 this month</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Performance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">On-Time Arrival</span>
                  <Badge className="bg-emerald-500">100%</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Client Ratings</span>
                  <Badge className="bg-blue-500">4.9/5.0</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Events Completed</span>
                  <Badge className="bg-purple-500">152</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
              <CardHeader>
                <Award className="h-8 w-8 text-amber-600 mb-2" />
                <CardTitle className="text-sm">Top Performer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 mb-3">
                  You're in the top 10% of bartenders this month! Keep up the excellent work!
                </p>
                <Badge className="bg-amber-500">🏆 Elite Status</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Training</CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <BookOpen className="h-4 w-4 mr-2" />
                  View Training Materials
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
