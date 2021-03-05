// const form = document.querySelector('.quiz-form')
// const input = document.querySelectorAll('input')
// form.addEventListener('submit', (event)=>{
//     event.preventDefault();
//     console.log('Togri jovob A');
//     console.log(form.q1.value);
//     console.log(form.q2.value);
//     console.log(form.q3.value);
//     console.log(form.q4.value);
// });





const form=document.querySelector('.quiz-form'); /// Class chaqirish uchun///
let inp = document.getElementById('inp'); /// id chaqirish ///
let p = document.getElementById('p');
let corrent = ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A'];

let a = 0;
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let answear= [form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value,form.q6.value,form.q7.value,form.q8.value];
    inp.classList.remove('d-none');
    answear.forEach((ans, i)=>{
    if(ans == corrent[i]){
        a+=12.5
    }

    });
    let i = 0;
    scrollTo(0,0)/// tepaga kotaradi ///
    const times = setInterval( ()=>{
        i++
        if (i == a) {
            clearInterval(times)
        }
        p.innerHTML = `${i} %`;
    }, 100);
    
})









// for(let i = 0; i < answear.length; i++){
//    console.log(correct[i]); 
// }