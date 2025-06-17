"use client";

import Link from "next/link";
import { ReactNode } from "react";
import {
  Heart,
  Pencil,
  Calendar,
  User,
  MessageCircle,
  Rss,
  Share2,
  UserPlus,
  ShieldAlert,
  LogOut,
  LayoutDashboard,
  Contact,
} from "lucide-react";
import AdminLayout, { getItem, MenuItem } from "../Layout";

const navItems: MenuItem[] = [
  getItem(
    <Link href="/dashboard">Dashboard</Link>,
    "/dashboard",
    <LayoutDashboard />
  ),
  getItem(
    <Link href="/dashboard/preferences">Preferences</Link>,
    "/dashboard/preferences",
    <Heart />
  ),
  getItem(
    <Link href="/dashboard/eventCreate">My Events</Link>,
    "/dashboard/eventCreate",
    <Pencil />
  ),
  getItem(
    <Link href="/dashboard/attending-events">Attending Events</Link>,
    "/dashboard/attending-events",
    <Calendar />
  ),
  getItem(
    <Link href="/dashboard/following-organizer">Following Organizer</Link>,
    "/dashboard/following-organizer",
    <User />
  ),
  getItem(
    <Link href="/dashboard/my-comment">My Comment</Link>,
    "/dashboard/my-comment",
    <MessageCircle />
  ),
  getItem(
    <Link href="/dashboard/followers">Followers</Link>,
    "/dashboard/followers",
    <Rss />
  ),
  getItem(
    <Link href="/dashboard/category-request">New Category Request</Link>,
    "/dashboard/category-request",
    <Share2 />
  ),
  getItem(
    <Link href="/dashboard/invite">Invite a Friend</Link>,
    "/dashboard/invite",
    <UserPlus />
  ),
  getItem(
    <Link href="/dashboard/about">About</Link>,
    "/dashboard/about",
    <ShieldAlert />
  ),
  getItem(
    <Link href="/dashboard/contact">Contact Us</Link>,
    "/dashboard/contact",
    <Contact />
  ),
  getItem(<Link href="/logout">Logout</Link>, "/logout", <LogOut />),
];

const SuperAdminLayout = ({ children }: { children: ReactNode }) => {
  return <AdminLayout menu={navItems}>{children}</AdminLayout>;
};

export default SuperAdminLayout;
