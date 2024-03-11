import connectDB from "@/limbs/mongoDB";
import Products from "@/models/products.model";
import { NextResponse } from "next/server";

//GETBYID
export async function GET(request, { params }) {
  try {
    connectDB();
    const { productId } = params;
    const productFound = await Products.find({ _id: productId });
    if (!productFound.length)
      return NextResponse.json(
        { message: "Product not exist" },
        { status: 400 }
      );
    return NextResponse.json(productFound, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}

//UPDATE
export async function PUT(request, { params }) {
  try {
    connectDB();
    const {title,description,price,stock,brand,category,thumbnail,logicalErase,images,}= await request.json();

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

    const { productId } = params;
    const productModified = await Products.findByIdAndUpdate(productId, {title,description,price,stock,brand,category,thumbnail,logicalErase,images,}, {new:true});
    if (!productModified)
      return NextResponse.json(
        { message: "Product not exist" },
        { status: 400 }
      );
    return NextResponse.json(productModified, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}

//DELETE
export async function DELETE(request, { params }) {
  try {
    connectDB();
    const { productId } = params;
    const producteRASE = await Products.findByIdAndDelete(productId, {
      new: true,
    });
    if (!producteRASE)
      return NextResponse.json(
        { message: "Product not exist" },
        { status: 400 }
      );
    return NextResponse.json(producteRASE, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}
