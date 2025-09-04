"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CustomButton } from "./custom-button";
import {
  LayoutDashboard,
  Building2,
  MessageSquare,
  Bookmark,
  Calendar,
  Settings,
  Menu,
  X,
  Users,
  FileText,
  BarChart3,
} from "lucide-react";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: Building2, label: "Properties", href: "/properties" },
  { icon: Users, label: "Tenants", href: "/tenants" },
  { icon: MessageSquare, label: "Chat", href: "/chat" },
  { icon: Bookmark, label: "Saved", href: "/saved" },
  { icon: Calendar, label: "Appointments", href: "/appointments" },
  { icon: FileText, label: "Reports", href: "/reports" },
  { icon: BarChart3, label: "Analytics", href: "/analytics" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  const combineClasses = (...classes: (string | boolean | undefined)[]) =>
    classes.filter(Boolean).join(" ");

  return (
    <>
      {/* Mobile overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Mobile menu button */}
      <CustomButton
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <Menu className="h-5 w-5" />
        )}
      </CustomButton>

      {/* Sidebar */}
      <aside
        className={combineClasses(
          "fixed left-0 top-0 z-40 h-screen bg-white border-r border-gray-200 shadow-sm transition-all duration-300",
          isCollapsed ? "w-16" : "w-64",
          isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
          className
        )}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex h-16 items-center justify-between px-4 border-b border-gray-200">
            {!isCollapsed && (
              <h2 className="text-lg font-bold text-purple-600">PropertyHub</h2>
            )}
            <CustomButton
              variant="ghost"
              size="icon"
              className="hidden lg:flex"
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              <Menu className="h-4 w-4" />
            </CustomButton>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 p-4">
            {sidebarItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.label} href={item.href}>
                  <CustomButton
                    variant="ghost"
                    className={combineClasses(
                      "w-full justify-start gap-3 text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors",
                      isCollapsed && "justify-center px-2",
                      isActive &&
                        "bg-purple-100 text-purple-700 font-medium shadow-sm"
                    )}
                    aria-label={isCollapsed ? item.label : undefined}
                  >
                    <item.icon className="h-5 w-5 flex-shrink-0" />
                    {!isCollapsed && <span>{item.label}</span>}
                  </CustomButton>
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <div
              className={combineClasses(
                "flex items-center gap-3",
                isCollapsed && "justify-center"
              )}
            >
              <div className="h-9 w-9 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center shadow-sm">
                <span className="text-sm font-medium text-white">JD</span>
              </div>
              {!isCollapsed && (
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 truncate">
                    John Doe
                  </p>
                  <p className="text-xs text-gray-500 truncate">Admin</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
