// function pigIt(string){
//     lst=string.split(' ')
//     let punctuations = ".,:;?!"
//     out=[]
//     for (let word of lst) {
//         w=word
//       if (word in punctuations)! {
//       w=word.slice(1)+word[0]+'ay'
//     }
//     out.push(w)
//     }
//     return out.join(' ')
//   }

// console.log(pigIt('Hello world !')) 
function longestSlideDown (pyramid) {
  let pointer=0
  let slides=[]
  for (let i=0; i<pyramid.length; i++) {
    let current_arr=pyramid[i]
    let curr=0
    let ref_pointer=pointer
    if (pointer!=0) {
      left=current_arr[pointer-1]
      curr=left
      pointer=ref_pointer-1
    } 
    mid=current_arr[pointer]
    if (curr<mid) {
      curr=mid
    }
    right=current_arr[pointer+1]
    if (curr<right) {
      curr=mid
      pointer=ref_pointer+1
    }
    slides.push(curr)
  }
  console.log(slides)
  out=slides.reduce( function(accumulator, current) {
    return accumulator + current;})
  console.log(out)
  return out
}
i=longestSlideDown([[3],
  [7, 4],
  [2, 4, 6],
  [8, 5, 9, 3]])

console.log(i)