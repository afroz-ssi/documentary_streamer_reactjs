import { Request, Response } from "express";

// Mock bookings database (in production, use a real database)
const bookings: any[] = [];

export const createBooking = async (req: Request, res: Response) => {
  try {
    const { name, email, phone, service, date, location, message, type } = req.body;

    const booking = {
      id: bookings.length + 1,
      name,
      email,
      phone,
      service,
      date,
      location,
      message,
      type, // "booking" or "quote"
      status: "pending",
      createdAt: new Date()
    };

    bookings.push(booking);

    // In a real app, you might send an email notification here
    console.log(`New ${type} request:`, booking);

    res.status(201).json({
      message: `${type === "booking" ? "Booking" : "Quote"} request submitted successfully`,
      booking: { id: booking.id, status: booking.status }
    });
  } catch (error) {
    console.error("Booking creation error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getBookings = async (req: Request, res: Response) => {
  try {
    // In a real app, filter by user ID
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const updateBookingStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const booking = bookings.find(b => b.id === parseInt(id));
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    booking.status = status;
    booking.updatedAt = new Date();

    res.json({ message: "Booking status updated", booking });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};