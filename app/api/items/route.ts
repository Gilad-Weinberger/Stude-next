import { NextResponse } from "next/server";
import dbConnect from "../../../lib/mongodb";
import Item from "../../../lib/models/Item";

export async function GET() {
  try {
    await dbConnect();
    const items = await Item.find({});
    return NextResponse.json({ success: true, data: items });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to fetch items" }, { status: 400 });
  }
}

export async function POST(req: Request) {
  try {
    const { name, description } = await req.json();
    const newItem = await Item.create({ name, description });
    return NextResponse.json({ success: true, data: newItem }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to create item" }, { status: 400 });
  }
}
