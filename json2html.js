export default function json2html(data) {
  // Identify the unique keys for table headers
  const headers = Array.from(new Set(data.flatMap(item => Object.keys(item))));

  // Build the HTML table string
  let html = '<table data-user="aikyaana004@gmail.com">';
  
  // Add table headers
  html += "<thead><tr>" + headers.map(header => `<th>${header}</th>`).join('') + "</tr></thead>";
  
  // Add table rows
  html += "<tbody>";
  data.forEach(row => {
    html += "<tr>" + headers.map(header => `<td>${row[header] || ''}</td>`).join('') + "</tr>";
  });
  html += "</tbody></table>";

  return html;
}
