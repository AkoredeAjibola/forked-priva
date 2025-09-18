'use client'

import React, { useState } from "react";
import ComplianceStats from "@components/dashboard/compliance/ComplianceStats";
import OverviewTab from "@components/dashboard/compliance/Tabs/OverviewTab";
import AuditLogsTab from "@components/dashboard/compliance/Tabs/AuditLogs";
import ConsentManagementTab from "@components/dashboard/compliance/Tabs/ConsentManagement";

const ComplianceDashboardPage = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = [
    "Overview",
    "Audit Logs",
    "Consent Management",
    "Role Management",
    "Risk Management"
  ];

  return (
    <div className="p-6">
      {/* Stats */}
      <ComplianceStats />

      {/* Tabs */}

      <div className="mb-6 -mx-2">
        <div className="flex bg-gray-100 rounded-full overflow-x-auto flex-nowrap gap-2 px-2 scrollbar-hide">
          {tabs.map(tab => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap
                ${isActive
                    ? "bg-white text-primary-600 shadow-sm"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-200"
                  }`}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "Overview" && <OverviewTab />}
        {activeTab === "Audit Logs" && <AuditLogsTab />}
        {activeTab === "Consent Management" && <ConsentManagementTab />}
        {activeTab === "Role Management" && (
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            Role Management content here...
          </div>
        )}
        {activeTab === "Risk Management" && (
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            Risk Management content here...
          </div>
        )}
      </div>
    </div>
  );
};

export default ComplianceDashboardPage;
