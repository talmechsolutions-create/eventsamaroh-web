export function generateInvoiceHTML(data: any) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      padding: 40px;
      color: #333;
      position: relative;
    }

    .watermark {
      position: fixed;
      top: 30%;
      left: 20%;
      opacity: 0.05;
      width: 400px;
      z-index: 0;
    }

    .container {
      position: relative;
      z-index: 2;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 40px;
    }

    .logo {
      width: 160px;
    }

    .invoice-title {
      font-size: 28px;
      font-weight: bold;
    }

    .company-details {
      font-size: 13px;
      line-height: 1.6;
      margin-bottom: 30px;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
    }

    th, td {
      padding: 12px;
      border: 1px solid #ddd;
      font-size: 14px;
    }

    th {
      background: #f4efe8;
    }

    .total-section {
      margin-top: 30px;
      text-align: right;
    }

    .total-section h2 {
      margin-top: 10px;
    }

    .footer {
      margin-top: 60px;
      font-size: 12px;
      text-align: center;
      color: #666;
    }
  </style>
</head>
<body>

  <img src="http://localhost:3000/logo-watermark.png" class="watermark"/>

  <div class="container">

    <div class="header">
      <div>
        <img src="http://localhost:3000/logo-watermark.png" class="logo"/>
      </div>
      <div class="invoice-title">
        TAX INVOICE
      </div>
    </div>

    <div class="company-details">
      <strong>EventSamaroh</strong><br/>
      Professional Event Planning Services<br/>
      Company Address Line 1<br/>
      City, State - PINCODE<br/>
      GSTIN: <strong>YOUR-GST-NUMBER</strong><br/>
      PAN: XXXXX1234X
    </div>

    <hr/>

    <h3>Invoice Details</h3>

    <p>
      <strong>Invoice No:</strong> ${data.invoiceNumber}<br/>
      <strong>Date:</strong> ${new Date().toDateString()}<br/>
      <strong>Customer ID:</strong> ${data.customerId}
    </p>

    <h3>Bill To</h3>

    <p>
      ${data.customerName}<br/>
      ${data.customerEmail}<br/>
      ${data.customerPhone}
    </p>

    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th>HSN/SAC</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${data.eventCategory} - ${data.service}</td>
          <td>998596</td>
          <td>₹ ${Number(data.contractAmount).toFixed(2)}</td>
        </tr>
      </tbody>
    </table>

    <div class="total-section">
      <p>Subtotal: ₹ ${Number(data.contractAmount).toFixed(2)}</p>
      <p>Discount: ₹ ${Number(data.discount || 0).toFixed(2)}</p>
      <p>GST (18%): ₹ ${Number(data.gstAmount).toFixed(2)}</p>

      <h2>Total: ₹ ${Number(data.totalAmount).toFixed(2)}</h2>
    </div>

    <div class="footer">
      This is a computer-generated invoice and does not require a signature.<br/>
      Thank you for choosing EventSamaroh.
    </div>

  </div>
</body>
</html>
`
}
