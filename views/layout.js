module.exports = ({ content }) => {
	return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
