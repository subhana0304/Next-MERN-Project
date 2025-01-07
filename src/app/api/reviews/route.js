import connectMongoDB from "@/app/libs/mongodb";
import Review from "@/models/Review";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
      await connectMongoDB(); // Ensure the DB connection is established once
      const body = await request.json();
  
      if (!body.quote || !body.image) {
        return NextResponse.json(
          {
            error: "Validation error",
            details: "Title and image are required fields",
          },
          { status: 400 }
        );
      }
  
      const review = await Review.create(body);
      return NextResponse.json(
        {
          success: true,
          message: "Review created successfully",
          review,
        },
        { status: 201 }
      );
    } catch (error) {
      console.error("API Error:", error);
  
      const isIpError = error.message.includes("IP address");
      const statusCode = isIpError ? 403 : 500;
  
      return NextResponse.json(
        {
          error: "Failed to create review",
          details: isIpError
            ? "Your IP address is not whitelisted in MongoDB Atlas. Please add your IP address in Network Access settings."
            : error.message,
          helpLink: isIpError
            ? "https://www.mongodb.com/docs/atlas/security-whitelist/"
            : null,
        },
        { status: statusCode }
      );
    }
  }

  export async function GET() {
    try {
      await connectMongoDB(); // Ensure the DB connection is established once
      const reviews = await Review.find();
      return NextResponse.json({ reviews });
    } catch (error) {
      console.error("API Error:", error);
      return NextResponse.json(
        { error: "Failed to fetch reviews", details: error.message },
        { status: 500 }
      );
    }
  }