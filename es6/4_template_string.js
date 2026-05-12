const content = "Hello, World!";
const htmlContent = `<html>`+
    `<head>`+
        `<title>My App</title>`+
    `</head>`+
    `<body>`+ content +`</body>`+
`</html>`;

const htmlContentnew = `
<!DOCTYPE html>
<html lang="en">
<head>
    <title>ES6 Learning Fundamentals</title>
</head>
<body>
    ${content}
</body>
</html>
`;

console.log(htmlContentnew);