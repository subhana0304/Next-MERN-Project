import { NextResponse } from "next/server"
import connectMongoDB from "../../libs/mongodb"
import Project from "../../../models/project"

export async function POST(request) {
  try {
    await connectMongoDB();
    
    const body = await request.json();
    
    if (!body.title || !body.image) {
      return NextResponse.json({
        error: "Validation error",
        details: "Title and image are required fields"
      }, { 
        status: 400 
      });
    }

    const project = await Project.create(body);
    
    return NextResponse.json({ 
      success: true,
      message: "Project created successfully",
      project 
    }, { 
      status: 201 
    });
  } catch (error) {
    console.error('API Error:', error);
    
    const isIpError = error.message.includes('IP address');
    const statusCode = isIpError ? 403 : 500;
    
    return NextResponse.json({ 
      error: "Failed to create project",
      details: isIpError 
        ? "Your IP address is not whitelisted in MongoDB Atlas. Please add your IP address in Network Access settings." 
        : error.message,
      helpLink: isIpError 
        ? "https://www.mongodb.com/docs/atlas/security-whitelist/"
        : null
    }, { 
      status: statusCode 
    });
  }
}

export async function GET() {
  try {
    await connectMongoDB(); // Attempt to connect to MongoDB
    return new Response(
      JSON.stringify({ success: true, message: "Connected to MongoDB" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Failed to connect to MongoDB",
        error: error.message,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
