


let outputAreaRef = document.getElementById("outputArea");
let tableHTML = "<table border=\"1\"><tr><th>A</th><th>B</th><th>C</th><th>AB + A(B + C) + B(B + C)</th><th>B + AC</th><th>result</th></tr>";

let booleanValues = [false, true];

// Original: AB + A(B + C) + B(B + C)
// Solved: B + AC

for (let aIndex = 0; aIndex < booleanValues.length; aIndex++)
{
    for (let bIndex = 0; bIndex < booleanValues.length; bIndex++)
    {
		for (let cIndex = 0; cIndex < booleanValues.length; cIndex++)
		{
			let A = booleanValues[aIndex];
			let B = booleanValues[bIndex];
			let C = booleanValues[cIndex];
			
			let original = (A&&B) || A&&(B||C) || B&&(B||C);
			let solved = B||(A&&C);
			let result = original == solved;

			tableHTML += "<tr>";
			tableHTML += "<td>" + A + "</td>";
			tableHTML += "<td>" + B + "</td>";
			tableHTML += "<td>" + C + "</td>";
			tableHTML += "<td>" + original + "</td>";
			tableHTML += "<td>" + solved + "</td>";
			tableHTML += "<td>" + result + "</td>";
			tableHTML += "</tr>";

		}
	}
}

tableHTML += "</table>";
outputAreaRef.innerHTML = tableHTML;