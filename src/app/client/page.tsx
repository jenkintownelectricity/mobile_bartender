"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  FileText,
  DollarSign,
  MessageCircle,
  Download,
  CheckCircle2,
  Clock,
  MapPin,
  Users,
  Phone,
  Mail,
  Star,
  Heart,
  Share2,
  Image as ImageIcon,
  Play,
  Award
} from "lucide-react";

export default function ClientPortalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                <span className="text-2xl">🍸</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  FlowBar Premium
                </h1>
                <p className="text-sm text-gray-600">Mobile Bartending Services</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline">
                <MessageCircle className="h-4 w-4 mr-2" />
                Contact Us
              </Button>
              <div className="flex items-center gap-3 pl-3 border-l border-gray-200">
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-900">Sarah Johnson</p>
                  <p className="text-xs text-gray-500">Premium Client</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-semibold">
                  SJ
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 rounded-2xl p-8 text-white mb-8 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-2">Welcome back, Sarah! 🎉</h2>
            <p className="text-purple-100 mb-6">
              Your wedding reception is coming up in 12 days. Everything is on track and we're excited to make your special day perfect!
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                <Calendar className="h-5 w-5 mr-2" />
                View Event Details
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Download className="h-5 w-5 mr-2" />
                Download Contract
              </Button>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        {/* Event Status */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-2 border-emerald-200 bg-emerald-50">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CheckCircle2 className="h-8 w-8 text-emerald-600" />
                <Badge className="bg-emerald-600">Confirmed</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold text-emerald-900 mb-1">Contract Signed</h3>
              <p className="text-sm text-emerald-700">All legal documents finalized</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-200 bg-blue-50">
            <CardHeader>
              <div className="flex items-center justify-between">
                <DollarSign className="h-8 w-8 text-blue-600" />
                <Badge className="bg-blue-600">50% Paid</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold text-blue-900 mb-1">$2,250 Paid</h3>
              <p className="text-sm text-blue-700">Balance of $2,250 due June 4th</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-200 bg-purple-50">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Clock className="h-8 w-8 text-purple-600" />
                <Badge className="bg-purple-600">12 Days</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold text-purple-900 mb-1">Event Countdown</h3>
              <p className="text-sm text-purple-700">June 18, 2025 at 6:00 PM</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Event Details */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Your Event Details
                </CardTitle>
                <CardDescription>Johnson Wedding Reception</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Event Information</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-purple-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Date & Time</p>
                        <p className="text-sm text-gray-600">June 18, 2025</p>
                        <p className="text-sm text-gray-600">6:00 PM - 12:00 AM</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-purple-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Guest Count</p>
                        <p className="text-sm text-gray-600">200 guests</p>
                        <p className="text-sm text-gray-600">21+ adults</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-purple-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Venue</p>
                        <p className="text-sm text-gray-600">Riverside Gardens</p>
                        <p className="text-sm text-gray-600">123 River Rd, Portland</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FileText className="h-5 w-5 text-purple-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Package</p>
                        <p className="text-sm text-gray-600">Premium Wedding</p>
                        <p className="text-sm text-gray-600">Full service bar</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-semibold mb-3">Services Included</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "3 Professional Bartenders",
                      "Premium Bar Setup",
                      "Custom Signature Cocktails",
                      "Beer & Wine Selection",
                      "Non-Alcoholic Options",
                      "All Bar Equipment",
                      "Setup & Breakdown",
                      "Insurance & Licensing"
                    ].map((service, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                        <span className="text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  Your Bartending Team
                </CardTitle>
                <CardDescription>Meet the professionals serving your event</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { name: "Alex Rivera", role: "Lead Bartender", rating: 4.9, events: 150 },
                    { name: "Jamie Chen", role: "Mixologist", rating: 5.0, events: 120 },
                    { name: "Sam Taylor", role: "Bar Support", rating: 4.8, events: 95 }
                  ].map((staff, i) => (
                    <div key={i} className="text-center">
                      <div className="h-20 w-20 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 mx-auto mb-3 flex items-center justify-center text-white text-2xl font-bold">
                        {staff.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <h4 className="font-semibold text-sm mb-1">{staff.name}</h4>
                      <p className="text-xs text-gray-600 mb-2">{staff.role}</p>
                      <div className="flex items-center justify-center gap-1 text-xs">
                        <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                        <span className="font-medium">{staff.rating}</span>
                        <span className="text-gray-500">• {staff.events} events</span>
                      </div>
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
                <CardTitle className="text-sm">Payment Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Package Total</span>
                    <span className="font-semibold">$4,500</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Deposit Paid</span>
                    <span className="text-emerald-600 font-semibold">-$2,250</span>
                  </div>
                  <div className="border-t border-gray-200 pt-2 flex justify-between">
                    <span className="font-semibold">Balance Due</span>
                    <span className="text-lg font-bold text-purple-600">$2,250</span>
                  </div>
                  <p className="text-xs text-gray-500 pt-2">Due by June 4, 2025</p>
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Make Payment
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <FileText className="h-4 w-4 mr-2" />
                    Service Contract
                    <Download className="h-4 w-4 ml-auto" />
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <FileText className="h-4 w-4 mr-2" />
                    Invoice #1234
                    <Download className="h-4 w-4 ml-auto" />
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <FileText className="h-4 w-4 mr-2" />
                    Insurance Certificate
                    <Download className="h-4 w-4 ml-auto" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <Phone className="h-4 w-4 mr-2" />
                    Call (555) 123-4567
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <Mail className="h-4 w-4 mr-2" />
                    Email Support
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
