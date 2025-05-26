"use client"

import {
  Home,
  User,
  FileText,
  FolderOpen,
  Map,
  CheckSquare,
  MessageCircle,
  Mail,
  Search,
  Printer,
  CheckCircle,
} from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"

const navigationItems = [
  { title: "Home", icon: Home, isActive: true },
  { title: "About", icon: User },
  { title: "Blog", icon: FileText },
  { title: "Projects", icon: FolderOpen },
  { title: "Roadmap", icon: Map },
  { title: "Task Board", icon: CheckSquare },
  { title: "Chat Room", icon: MessageCircle },
  { title: "Contact", icon: Mail },
]

const articles = [
  {
    title: "Mux data integration for Expo ...",
    date: "Aug 04, 2024",
    image: "/placeholder.svg?height=120&width=200",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Solving Zustand State Hydratio...",
    date: "Dec 05, 2023",
    image: "/placeholder.svg?height=120&width=200",
    gradient: "from-blue-500 to-purple-500",
  },
  {
    title: "State - Next Js App Directory ...",
    date: "Sep 20, 2023",
    image: "/placeholder.svg?height=120&width=200",
    gradient: "from-gray-800 to-purple-500",
  },
  {
    title: "Props ...",
    date: "Sep 14, 2023",
    image: "/placeholder.svg?height=120&width=200",
    gradient: "from-green-500 to-blue-500",
  },
]

const services = [
  { name: "Blender", icon: "🎨" },
  { name: "Figma", icon: "🎨" },
  { name: "Framer", icon: "🎨" },
  { name: "Webflow", icon: "🌐" },
  { name: "Notion", icon: "📝" },
  { name: "Outlook", icon: "📧" },
  { name: "Chrome", icon: "🌐" },
  { name: "VS Code", icon: "💻" },
]

function AppSidebar() {
  return (
    <Sidebar className="border-r">
      <SidebarHeader className="p-6">
        <div className="flex flex-col items-center space-y-4">
          <div className="relative">
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="Profile"
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
            <Button
              size="sm"
              className="absolute -top-2 -right-2 h-8 px-3 bg-green-500 hover:bg-green-600 text-white text-xs"
            >
              <div className="w-2 h-2 bg-white rounded-full mr-1" />
              Hire me.
            </Button>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1">
              <h2 className="text-lg font-semibold">Bayu Setiawan</h2>
              <CheckCircle className="w-4 h-4 text-blue-500 fill-current" />
            </div>
            <p className="text-sm text-muted-foreground">@codebayu</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={item.isActive}>
                    <a href="#" className="flex items-center gap-3 px-3 py-2">
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Type here to search" className="pl-10 bg-muted/50" />
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

export function PortfolioSidebar() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <main className="flex-1 p-8 bg-gray-50/50">
          <div className="max-w-4xl">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">Hi, I'm Bayu Setiawan</h1>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span>Remote worker</span>
                  <span>•</span>
                  <span>Based in Jakarta</span>
                </div>
              </div>
              <Button variant="outline" size="icon">
                <Printer className="w-4 h-4" />
              </Button>
            </div>

            {/* Bio */}
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Passionate and seasoned Software Engineer with a strong focus on frontend development. Proficient in
              TypeScript and well-versed in all aspects of web technologies. Collaborative team player dedicated to
              delivering efficient, scalable, and visually appealing web applications.
            </p>

            {/* Latest Articles */}
            <section className="mb-12">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-5 h-5" />
                <h2 className="text-xl font-semibold">Latest Articles</h2>
              </div>
              <p className="text-muted-foreground mb-6">Latest articles from dev.to</p>

              <div className="flex gap-4 overflow-x-auto pb-4">
                {articles.map((article, index) => (
                  <Card key={index} className="flex-shrink-0 w-64 overflow-hidden">
                    <div className={`h-32 bg-gradient-to-br ${article.gradient} relative`}>
                      <div className="absolute inset-0 bg-black/20" />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium text-sm mb-2 line-clamp-2">{article.title}</h3>
                      <p className="text-xs text-muted-foreground">{article.date}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Services */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-5 h-5">⚙️</div>
                <h2 className="text-xl font-semibold">Services</h2>
              </div>
              <p className="text-muted-foreground mb-6">I can deliver the following services</p>

              <div className="flex flex-wrap gap-3">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border hover:shadow-sm transition-shadow"
                  >
                    <span className="text-lg">{service.icon}</span>
                    <span className="text-sm font-medium">{service.name}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
