"use client";

import React from "react";

/**
 * This component renders the rounded white card with 4 circular placeholders
 * shown in the screenshot (the small white card on top of hero area).
 */

export default function HeroPartnersCard() {
    return (
        <div className="mx-auto max-w-3xl -mt-8">
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 px-6 py-6">
                <div className="flex items-center justify-between space-x-4">
                    {/* four circular placeholders */}
                    <div className="flex gap-6 justify-center w-full">
                        {Array.from({ length: 4 }).map((_, i) => (
                            <div key={i} className="flex flex-col items-center space-y-2">
                                <div className="w-14 h-14 rounded-full bg-gray-100" />
                                <div className="text-xs text-gray-400">Partner</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
