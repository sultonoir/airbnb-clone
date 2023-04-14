import prisma from "@/app/libs/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const users = await prisma.user.findMany();
  const listings = await prisma.listing.findMany();
  return NextResponse.json({ users, listings });
};
