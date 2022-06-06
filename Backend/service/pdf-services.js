function buiildPDF() {
	const PDFDocument = require("pdfkit");
	const doc = new PDFDocument();
	doc.on("data", dataCallback);

	doc.fontSize(25).text("Some text ");
	doc.end();
}

module.exports = { buiildPDF };
