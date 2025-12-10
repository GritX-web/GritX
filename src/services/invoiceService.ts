import { Booking } from '../types';

const API_KEY = 'sk_CoFDUGgx1ngXWZzLYcmMpX8CA0Xm9TBU';
const API_URL = 'https://invoice-generator.com';

export const invoiceService = {
    generateInvoicePDF: async (booking: Booking): Promise<Blob> => {
        // Construct the invoice data object
        const invoiceData = {
            from: 'GRIT X Sports Center\n123 Sports Way\nFitness City, FC 12345',
            to: `${booking.userName}\n${booking.userEmail || ''}\n${booking.userPhone || ''}`,
            currency: 'INR',
            number: booking.id.slice(0, 8).toUpperCase(), // Short ID for invoice number
            date: booking.date,
            items: [
                {
                    name: `Facility Booking: ${booking.facilityName}`,
                    quantity: 1,
                    unit_cost: booking.totalPrice,
                    description: `${booking.date} | ${booking.startTime} - ${booking.endTime}`
                }
            ],
            notes: 'Thank you for choosing GRIT X!',
            terms: 'Please make payment before the booking date.'
        };

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${API_KEY}`,
                    'Content-Type': 'application/json',
                    'Accept-Language': 'en-US' // Ensure English headers
                },
                body: JSON.stringify(invoiceData)
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Failed to generate invoice: ${response.status} ${response.statusText} - ${errorText}`);
            }

            // The response is the PDF binary
            return await response.blob();
        } catch (error) {
            console.error('Invoice generation failed:', error);
            throw error;
        }
    }
};
