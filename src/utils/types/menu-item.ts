import React from "react";

export interface MenuItem {
    title: string;
    to: string;
    htmlBefore?: {
        url: React.SVGProps<SVGSVGElement>;
        alt: string;
    };
}