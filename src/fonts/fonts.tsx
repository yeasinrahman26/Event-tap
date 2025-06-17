import { Open_Sans,Laila } from "next/font/google";

export const openSans = Open_Sans({
    subsets: ["latin"], // Add subsets if needed
    weight: ["400", "500", "600", "700"], // Specify available weights
    variable: "--font-open-sans", // Define a meaningful CSS variable
});

export const laila = Laila({
    subsets: ["latin"], // Add subsets if needed
    weight: ["400", "500", "600", "700"], // Specify available weights
    variable: "--font-laila", //
})

