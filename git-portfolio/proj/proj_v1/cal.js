
//const inputeqn = document.querySelector("#submit")
const input_box = document.querySelector('#input-box')
const out = document.querySelector(".out")
const form = document.querySelector('#input-box')
const error = document.querySelector('#error_msg')
const input = document.querySelector('#xpd')

// inputeqn.onclick = function () {
//     input.textContent=''
//     parsePlusSeparatedExpression(form.value);
//     //out.innerText = `${form.value} =${res}`
// }

// //functions
// // const cal = (value) => {
// //     const numstr = value.split('+')
// //     const res = parseInt(numstr[0]) + parseInt(numstr[1])
// //     return res
// // }

input_box.addEventListener('input', function (e)
{
    input.innerText=input_box.value
    parsePlusSeparatedExpression(form.value);
})

const parsePlusSeparatedExpression = (exp) => {
    //find expressions in equation
    const vars = evalexp(exp)
    //create input boxes for expressions in equation from var 
    def_eqn(vars)

}

//loop through equation to find expressions to be evaluated
const evalexp = (exp) => {
    eqn_var = []
    for (let i = 0; i < exp.length; i++) {
        charat = exp[i]
        if (charat.toUpperCase() != charat.toLowerCase()) {
            if (!eqn_var.includes(charat)) {
                eqn_var.push(charat)
            }
        }
    }
    return eqn_var
}

//create containers for input boxes for expressions
const def_eqn = (eqn_var) => {
    eqn_var.forEach(element => {
        let div_out = document.createElement('div')
        div_out.setAttribute('class', 'out')
        let div_box = document.createElement('div')
        div_box.setAttribute('class', 'box')
        let input_var = document.createElement('input')
        input_var.setAttribute('type', 'text')
        input_var.setAttribute('class', 'define_var')
        let span = document.createElement('span')
        span.innerText=`define ${element}: `
        div_box.append(span)
        div_box.append(input_var)
        div_out.append(div_box)
        input.append(div_out)
        
    });
    const button=document.createElement('button')
    button.setAttribute('id', 'continue')
    button.innerText="Submit"
    input.append(button)
}












// <div class="out">
// <div class="box">
//     define X
//     <input class="define_var" type="text" placeholder="Enter value">
// </div>
// </div>

// // split expression by operator considering parentheses
// const split = (expression, operator) => {
//     const result = [];
//     let braces = 0;
//     let currentChunk = "";
//     for (let i = 0; i < expression.length; ++i) {
//         const curCh = expression[i];
//         if (curCh == '(') {
//             braces++;
//         } else if (curCh == ')') {
//             braces--;
//         }
//         if (braces == 0 && operator == curCh) {
//             result.push(currentChunk);
//             currentChunk = "";
//         } else currentChunk += curCh;
//     }
//     if (currentChunk != "" && braces == 0) {
//         result.push(currentChunk);
//     }
//     // else {
//     //     console.log("problem")
//     //     error.value="Invalid Syntax";
//     //     break
//     // }
//     return result;
// };

// // this will only take strings containing * operator [ no + ]
// const parseMultiplicationSeparatedExpression = (expression) => {
//     const numbersString = split(expression, '*');
//     const numbers = numbersString.map(noStr => {
//         if (noStr[0] == '(') {
//             const expr = noStr.substr(1, noStr.length - 2);
//             // recursive call to the main function
//             return parsePlusSeparatedExpression(expr);
//         }
//         return +noStr;
//     });
//     const initialValue = 1.0;
//     const result = numbers.reduce((acc, no) => acc * no, initialValue);
//     return result;
// };
// // both * -
// const parseMinusSeparatedExpression = (expression) => {
//     const numbersString = split(expression, '-');
//     const numbers = numbersString.map(noStr => parseMultiplicationSeparatedExpression(noStr));
//     const initialValue = numbers[0];
//     const result = numbers.slice(1).reduce((acc, no) => acc - no, initialValue);
//     return result;
// };
// // * - + 
// const parsePlusSeparatedExpression = (expression) => {
//     const numbersString = split(expression, '+');
//     const numbers = numbersString.map(noStr => parseMinusSeparatedExpression(noStr));
//     const initialValue = 0.0;
//     const result = numbers.reduce((acc, no) => acc + no, initialValue);
//     return result;
// };

// const parse = () => {
//     const expressionNode = document.getElementById('expression');
//     const resultNode = document.getElementById('result');
//     const expression = expressionNode.value;
//     const result = parsePlusSeparatedExpression(expression, '+');
//     resultNode.value = String(result);
// };