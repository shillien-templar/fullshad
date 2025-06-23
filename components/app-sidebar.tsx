"use client"

import * as React from "react"
import {
    Heart,
    MessageCircle,
    Share,
    User,
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
