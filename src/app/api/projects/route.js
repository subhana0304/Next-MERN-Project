import { NextResponse } from "next/server";
import connectMongoDB from "../../libs/mongodb";
import Project from "../../../models/Project";

export async function POST(request) {
  try {
    await connectMongoDB(); // Ensure the DB connection is established once
    const body = await request.json();

    if (!body.title || !body.image) {
      return NextResponse.json(
        {
          error: "Validation error",
          details: "Title and image are required fields",
        },
        { status: 400 }
      );
    }

    const project = await Project.create(body);
    return NextResponse.json(
      {
        success: true,
        message: "Project created successfully",
        project,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("API Error:", error);

    const isIpError = error.message.includes("IP address");
    const statusCode = isIpError ? 403 : 500;

    return NextResponse.json(
      {
        error: "Failed to create project",
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
    const projects = await Project.find().sort({ createdAt: -1 });
    return NextResponse.json({ projects });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects", details: error.message },
      { status: 500 }
    );
  }
}
