"use client"

import * as React from "react"
import {
    CreditCard,
    FileText,
    Layout,
    Lock,
    Mail,
    MessageCircle,
    Navigation,
    PieChart,
    Search,
    ShoppingCart,
    Users,
} from "lucide-react"

import {NavCategory} from "@/components/nav-category"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar"
import {SearchForm} from "./search-form"
import {ThemeToggle} from "@/components/theme-toggle";

const data = {
    items: [
        {
            title: "Social",
            url: "#",
            icon: Users,
            isActive: true,
            items: [
                {
                    title: "Post Layouts",
                    url: "#",
                },
                {
                    title: "Profile Cards",
                    url: "#",
                },
                {
                    title: "Social Feeds",
                    url: "#",
                },
                {
                    title: "Interactions",
                    url: "#",
                },
            ],
        },
        {
            title: "Communication",
            url: "#",
            icon: MessageCircle,
            items: [
                {
                    title: "Chat Interfaces",
                    url: "#",
                },
                {
                    title: "Email Layouts",
                    url: "#",
                },
                {
                    title: "Message Threads",
                    url: "#",
                },
                {
                    title: "Notification Panels",
                    url: "#",
                },
            ],
        },
        {
            title: "E-commerce",
            url: "#",
            icon: ShoppingCart,
            items: [
                {
                    title: "Checkout Forms",
                    url: "#",
                },
                {
                    title: "Product Cards",
                    url: "#",
                },
                {
                    title: "Shopping Carts",
                    url: "#",
                },
                {
                    title: "Order Confirmations",
                    url: "#",
                },
            ],
        },
        {
            title: "Authentication",
            url: "#",
            icon: Lock,
            items: [
                {
                    title: "Login Forms",
                    url: "#",
                },
                {
                    title: "Registration Flows",
                    url: "#",
                },
                {
                    title: "Password Reset",
                    url: "#",
                },
                {
                    title: "Multi-step Auth",
                    url: "#",
                },
            ],
        },
        {
            title: "Dashboards",
            url: "#",
            icon: PieChart,
            items: [
                {
                    title: "Analytics Cards",
                    url: "#",
                },
                {
                    title: "Data Tables",
                    url: "#",
                },
                {
                    title: "Charts & Metrics",
                    url: "#",
                },
                {
                    title: "Status Panels",
                    url: "#",
                },
            ],
        },
        {
            title: "Forms & Inputs",
            url: "#",
            icon: FileText,
            items: [
                {
                    title: "Multi-step Forms",
                    url: "#",
                },
                {
                    title: "Survey Layouts",
                    url: "#",
                },
                {
                    title: "Search Interfaces",
                    url: "#",
                },
                {
                    title: "Filter Panels",
                    url: "#",
                },
            ],
        },
        {
            title: "Content",
            url: "#",
            icon: Layout,
            items: [
                {
                    title: "Article Layouts",
                    url: "#",
                },
                {
                    title: "Card Collections",
                    url: "#",
                },
                {
                    title: "Gallery Grids",
                    url: "#",
                },
                {
                    title: "Media Players",
                    url: "#",
                },
            ],
        },
        {
            title: "Navigation",
            url: "#",
            icon: Navigation,
            items: [
                {
                    title: "Header Layouts",
                    url: "#",
                },
                {
                    title: "Footer Designs",
                    url: "#",
                },
                {
                    title: "Breadcrumb Variants",
                    url: "#",
                },
                {
                    title: "Pagination Styles",
                    url: "#",
                },
            ],
        },
    ],
}

export function AppSidebar({...props}: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="offcanvas" {...props}>
            <SidebarHeader>
                <SearchForm/>
            </SidebarHeader>
            <SidebarContent>
                <NavCategory items={data.items}/>
            </SidebarContent>
            <SidebarFooter>
                <ThemeToggle/>
            </SidebarFooter>
            <SidebarRail/>
        </Sidebar>
    )
}
