"use client";
import { useParams } from "next/navigation";
import React from "react";

const SpecificCampaign = () => {
  const params = useParams<{ campaignID: string }>();
  return (
    <div className="h-screen w-screen flex justify-center p-10">
      <h1 className="text-5xl font-bold text-center gap-3 flex flex-col">
        Campaign ID
        <br />
        <span>{params.campaignID}</span>
      </h1>
    </div>
  );
};

export default SpecificCampaign;
