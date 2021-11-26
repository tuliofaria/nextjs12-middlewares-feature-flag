import { isFlagActivated } from "../lib/feature-flag";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const isProductOpen = await isFlagActivated("products-open");
  if (req.url === "/" && isProductOpen) {
    return NextResponse.rewrite("/index-open");
  }
}
