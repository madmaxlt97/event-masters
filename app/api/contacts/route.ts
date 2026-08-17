import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    const contactEmail = process.env.CONTACT_EMAIL;

    if (!contactEmail) {
      console.error("CONTACT_EMAIL is not configured");

      return Response.json(
        { error: "Server configuration error" },
        { status: 500 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Event Masters <onboarding@resend.dev>",
      to: [contactEmail],
      replyTo: email,
      subject: `New inquiry from ${name}`,
      html: `
        <h2>New Event Inquiry</h2>
        
        <p ><strong>Name:</strong>${name}</p>
        <p ><strong>Email:</strong>${email}</p>
        
        <h3>Message</h3>
        <p>${message}</p>`,
    });

    if (error) {
      console.error(error);

      return Response.json({ error: "Failed to send email" }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (error) {
    console.error(error);

    return Response.json({ error: "Something went wrong." }, { status: 500 });
  }
}
