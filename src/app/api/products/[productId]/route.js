import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { productId } = params;
  console.log(productId);
  return NextResponse.json({ message: `soy product por id = ${productId}` });
}
