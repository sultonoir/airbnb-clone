"use client";
import { SafeUser } from "@/app/types";
import React from "react";
import { IconType } from "react-icons";

interface ListingInfoProps {
  user: SafeUser | null;
  category:
    | {
        icon: IconType;
        label: string;
        description: string;
      }
    | undefined;
  description: string;
  roomCount: number;
  guestCount: number;
  bathroomCount: number;
  locationValue: string;
}

const ListingInfo: React.FC<ListingInfoProps> = ({
  user,
  category,
  description,
  roomCount,
  guestCount,
  bathroomCount,
  locationValue,
}) => {
  return <div>ListingInfo</div>;
};

export default ListingInfo;
