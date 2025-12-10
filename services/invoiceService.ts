import { Booking } from '../types';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export const invoiceService = {
    generateInvoicePDF: async (booking: Booking): Promise<Blob> => {
        try {
            const doc = new jsPDF();

            // -- COMPANY HEADER --
            doc.setFontSize(20);
            doc.setFont("helvetica", "bold");
            doc.text("GRIT X Sports Center", 150, 20, { align: "right" });

            doc.setFontSize(10);
            doc.setFont("helvetica", "normal");
            doc.text("123 Sports Way", 150, 26, { align: "right" });
            doc.text("Fitness City, FC 12345", 150, 31, { align: "right" });
            doc.text("contact@gritx.com", 150, 36, { align: "right" });

            // -- INVOICE TITLE --
            doc.setFontSize(24);
            doc.setTextColor(44, 62, 80);
            doc.text("INVOICE", 15, 25);

            // -- DETAILS SECTION --
            doc.setFontSize(10);
            doc.setTextColor(0, 0, 0);

            const startY = 50;
            const leftCol = 15;
            const rightCol = 110;

            // Bill To
            doc.setFont("helvetica", "bold");
            doc.text("Bill To:", leftCol, startY);
            doc.setFont("helvetica", "normal");
            doc.text(booking.userName || "Guest User", leftCol, startY + 6);
            if (booking.userEmail) doc.text(booking.userEmail, leftCol, startY + 11);
            if (booking.userPhone) doc.text(booking.userPhone, leftCol, startY + 16);

            // Invoice Info
            doc.setFont("helvetica", "bold");
            doc.text("Invoice Number:", rightCol, startY);
            doc.setFont("helvetica", "normal");
            doc.text(`#${booking.id.slice(0, 8).toUpperCase()}`, rightCol + 35, startY);

            doc.setFont("helvetica", "bold");
            doc.text("Date:", rightCol, startY + 6);
            doc.setFont("helvetica", "normal");
            doc.text(booking.date, rightCol + 35, startY + 6);

            doc.setFont("helvetica", "bold");
            doc.text("Status:", rightCol, startY + 12);
            doc.setFont("helvetica", "normal");
            doc.setTextColor(booking.status === 'confirmed' ? 0 : 200, booking.status === 'confirmed' ? 150 : 0, 0); // Greenish if confirmed
            doc.text(booking.status.toUpperCase(), rightCol + 35, startY + 12);
            doc.setTextColor(0, 0, 0); // Reset

            // -- TABLE --
            const tableStartY = startY + 30;

            // Define header and data
            const head = [['Description', 'Date', 'Time', 'Amount']];
            const data = [[
                `Facility Booking: ${booking.facilityName}`,
                booking.date,
                `${booking.startTime} - ${booking.endTime}`,
                `INR ${booking.totalPrice}`
            ]];

            autoTable(doc, {
                startY: tableStartY,
                head: head,
                body: data,
                theme: 'grid',
                headStyles: { fillColor: [20, 20, 20], textColor: [255, 255, 255] },
                styles: { fontSize: 10, cellPadding: 4 },
                columnStyles: {
                    0: { cellWidth: 80 }, // Description
                    3: { halign: 'right' } // Amount
                }
            });

            // -- TOTAL --
            // @ts-ignore
            const finalY = doc.lastAutoTable.finalY || tableStartY + 30;

            doc.setFontSize(12);
            doc.setFont("helvetica", "bold");
            doc.text(`Total: INR ${booking.totalPrice}`, 195, finalY + 15, { align: "right" });

            // -- FOOTER --
            doc.setFontSize(8);
            doc.setFont("helvetica", "italic");
            doc.setTextColor(100, 100, 100);
            doc.text("Thank you for choosing GRIT X!", 105, 280, { align: "center" });

            // Return Blob
            return doc.output('blob');

        } catch (error) {
            console.error('Invoice generation failed:', error);
            throw error;
        }
    }
};
