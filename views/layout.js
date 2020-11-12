module.exports = ({ content }) => {
	return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css">
      <title>Expense Tracker</title>
    </head>
    <body>
      <div>
        <div class="heading">
          <h1>Expense Tracker</h1>
        </div>
        ${content}
      </div>
      
      
    </body>
    </html>
  `;
};
