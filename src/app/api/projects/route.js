import connectMongoDB from "../../libs/mongodb";

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
