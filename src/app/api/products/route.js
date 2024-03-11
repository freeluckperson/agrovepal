import connectDB from "@/limbs/mongoDB";
import Products from "@/models/products.model";
import { NextResponse } from "next/server";


//GETALLPRODUCTS
export async function GET(request) {
  try {
    connectDB();
    const productsFound = await Products.find({ logicalErase: false });

    if (!productsFound.length)
      return NextResponse.json({ message: "Not products found" });

    return NextResponse.json(productsFound, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}

//CREATEPRODUCT
export async function POST(request) {
  try {
    connectDB();
    const {title,description,price,stock,brand,category,thumbnail,logicalErase,images,} = await request.json();

    if (images.some((url) => typeof url !== "string") || !Array.isArray(images))
      return NextResponse.json(
        { message: "Image must be an array of string" },
        { status: 400 }
      );

    if (
      [title, description, price, stock, brand, category, thumbnail].some(
        (field) => typeof field !== "string"
      ) ||
      [title, description, price, stock, brand, category, thumbnail].some(
        (field) => field.trim() === ""
      ) ||
      typeof logicalErase !== "boolean"
    )
      return NextResponse.json(
        { message: " Each field is required and must be a string" },
        { status: 400 }
      );

    const makeProduct = await Products.create({title,description,price,stock,brand,category,thumbnail,logicalErase,images,});

    return NextResponse.json(makeProduct, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}
