import { NextResponse } from "next/server";

export async function middleware(req) {
  console.log("ola middleware products");
  //return NextResponse.rewrite("/products/index2");
}

// feature flag
