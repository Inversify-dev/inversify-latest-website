import { NextResponse } from 'next/server';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxzdC0o7AHRqluoUM8DAmoCKH-wRh-8WHkQhdf2P1TbER9jSCG_lQ21HWaWxjhXiTdi/exec';

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, phone, service, subject, message } = data;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const payload = {
      name: name.trim(),
      email: email.trim(),
      phone: phone ? phone.trim() : 'Not provided',
      subject: subject || (service ? `Project inquiry - ${service}` : 'Project inquiry'),
      service: service || 'General inquiry',
      message: message.trim(),
    };

    // Forward to the Google Apps Script Web App
    // This logs the lead in Inversify's Google Sheet and delivers an email notification to invert@inversify.lk (Zoho)
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      redirect: 'follow',
      cache: 'no-store',
    });

    return NextResponse.json({
      success: true,
      message: 'Inquiry received and synchronized to Google Sheet and Zoho Mail.',
    });
  } catch (error) {
    console.error('API /api/contact error:', error);
    return NextResponse.json(
      { error: 'Failed to process inquiry via server.' },
      { status: 500 }
    );
  }
}

