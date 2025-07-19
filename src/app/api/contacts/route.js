import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import Contact from '../../../../models/Contact';

// Connect to MongoDB
async function connectDB() {
  if (mongoose.connections[0].readyState) {
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
}

// GET - Fetch all contacts with search, filter, and sort
export async function GET(request) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search') || '';
    const group = searchParams.get('group') || '';
    const sort = searchParams.get('sort') || 'name';
    const order = searchParams.get('order') || 'asc';
    
    let query = {};
    
    // Search functionality
    if (search) {
      query = {
        $or: [
          { name: { $regex: search, $options: 'i' } },
          { email: { $regex: search, $options: 'i' } }
        ]
      };
    }
    
    // Filter by group
    if (group && group !== '') {
      query.group = group;
    }
    
    // Sort functionality
    const sortOrder = order === 'desc' ? -1 : 1;
    const sortObj = {};
    sortObj[sort] = sortOrder;
    
    const contacts = await Contact.find(query).sort(sortObj);
    
    return NextResponse.json({ success: true, data: contacts });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// POST - Create a new contact
export async function POST(request) {
  try {
    await connectDB();
    
    const body = await request.json();
    const { name, email, phone, group } = body;
    
    // Validation
    if (!name || !email) {
      return NextResponse.json(
        { success: false, error: 'Name and email are required' },
        { status: 400 }
      );
    }
    
    // Check if email already exists
    const existingContact = await Contact.findOne({ email: email.toLowerCase() });
    if (existingContact) {
      return NextResponse.json(
        { success: false, error: 'A contact with this email already exists' },
        { status: 400 }
      );
    }
    
    const contact = await Contact.create({
      name,
      email,
      phone: phone || '',
      group: group || ''
    });
    
    return NextResponse.json({ success: true, data: contact }, { status: 201 });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
