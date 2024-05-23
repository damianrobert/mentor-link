import { connect } from '@/dbconfig/dbConfig';
import User from '@/models/userModel';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { firstName, lastName, username, email, password } = reqBody;
    //TODO: validate the request body

    //check if the user already exists
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      );
    }

    //hash the password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    //create a new user
    const newUser = new User({
      firstName,
      lastName,
      username,
      email,
      password: hashedPassword,
    });

    //save the user to the database
    const savedUser = await newUser.save();

    const response: NextResponse = NextResponse.json({
      message: 'User created successfully',
      success: true,
      savedUser,
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
