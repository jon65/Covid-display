let outputAreaRef = document.getElementById("outputArea");
let tableHTML = "<style>th, td { padding: 5px; }</style>";
const STATES = [false, true];

// Question 1
/**
 * (A'(C+B'))'A +C'B'A
 * (A'C+A'B')'A +C'B'A
 * (Using De Morgan's Law 2nd term )
 * (AC'AB)A+C'B'A
 * (using idempotence for 1st term)
 * C'B+C'B'A
 * (Using absorpbtion)
 * C'(B+B'A)
 * C'(B+A)
 */

// Truth Table for Question 1
tableHTML += "<table border=\"1\"><tr>";
/* Set up your table header for each column here */
tableHTML += "<th>A</th>";
tableHTML += "<th>B</th>";
tableHTML += "<th>C</th>";
tableHTML += "<th>(A'(C+B'))'A +C'B'A</th>";
tableHTML += "<th>C'(B+A)</th>";
tableHTML += "<th>result</th>";
/* End setup */
tableHTML += "</tr>";

// Code for truth table here

for (let aIndex = 0; aIndex < booleanValues.length; aIndex++)
{
    for (let bIndex = 0; bIndex < booleanValues.length; bIndex++)
    {
		for (let cIndex = 0; cIndex < booleanValues.length; cIndex++)
		{
			let A = booleanValues[aIndex];
			let B = booleanValues[bIndex];
			let C = booleanValues[cIndex];
			//(A'(C+B'))'A +C'B'A
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


tableHTML += "</table>";


// Question 2
/**
 * AB+B'C+(A+B')'
 * Using De Morgan's Law for 2nd term
 * AB+B'C+A'B
 * B(A+A')+B'C
 *(using idempotence for 1st term)
 *B+B'C
 *B+C
 */

// Truth Table for Question 2
tableHTML += "<table border=\"1\"><tr>";
/* Set up your table header for each column here */
tableHTML += "<th>A</th>";
tableHTML += "<th>B</th>";
tableHTML += "<th>C</th>";
tableHTML += "<th>AB + B'C + (A + B' )'</th>";
tableHTML += "<th>B+C</th>";
tableHTML += "<th>result</th>";
/* End setup */
tableHTML += "</tr>";

// Code for truth table here

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



tableHTML += "</table>";


// Question 3
/**
 * C'(C'+ABB')+(A+B)'AB
 * Using complementary 
 * C'(C'+0)+(A+B)'AB
 * C'C'+(A+B)'AB
 * Using De Morgan's Law
 * C'C'+A'B'AB
 * using complementary
 * C'C'+0
 * using idemptence
 * C'
 */

// Truth Table for Question 3
tableHTML += "<table border=\"1\"><tr>";
/* Set up your table header for each column here */
tableHTML += "<th>A</th>";
tableHTML += "<th>B</th>";
tableHTML += "<th>C</th>";
tableHTML += "<th>C'(C'+ABB')+(A+B)'AB</th>";
tableHTML += "<th>C'</th>";
tableHTML += "<th>result</th>";
/* End setup */
tableHTML += "</tr>";

// Code for truth table here

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




tableHTML += "</table>";


// Question 4
/**
 * (X+Y+Z)X'Y'Z'+(X+Y')'+(X+X'YX)'
 * Using  De Morgan's Law
 * (X+Y+Z)X'Y'Z'+X'Y+(X+X'YX)'
 * using complementary
 * (X+Y+Z)X'Y'Z'+X'Y+(X+0)'
 * using idemptence
 * XX'Y'Z+X'YY'Z+X'Y'ZZ+X'Y+X'
 * 0+0+X'Y'ZZ+X'Y+X'
 * X'Y'Z+X'Y+x'
 * Using absorption
 * X'Y'Z+X'
 * 
 */

// Truth Table for Question 4
tableHTML += "<table border=\"1\"><tr>";
/* Set up your table header for each column here */
tableHTML += "<th>A</th>";
tableHTML += "<th>B</th>";
tableHTML += "<th>C</th>";
tableHTML += "<th>(X+Y+Z)X'Y'Z'+(X+Y')'+(X+X'YX)'</th>";
tableHTML += "<th>X'Y'Z+X'</th>";
tableHTML += "<th>result</th>";
/* End setup */
tableHTML += "</tr>";

// Code for truth table here

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