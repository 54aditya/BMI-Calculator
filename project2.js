const form=document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault();
    const height=parseInt(document.querySelector('#Height').value);
    const Weight=parseInt(document.querySelector('#Weight').value);
    const Results=document.querySelector('#Results');
    const comment=document.querySelector('#comment');
    if(height==='' || height<0 || isNaN(height)){
        Results.innerHTML= `Please give valid height ${height}`;
    }
    else if(Weight==='' || Weight<0 || isNaN(Weight)){
        Results.innerHTML= `Please give valid Weight ${Weight}`;
    }
    else{
        const bmi=(Weight/((height*height)/10000)).toFixed(2);
        Results.innerHTML= `<span>${bmi}</span>`;
    }
    const rt=document.querySelector('#Results').textContent;
    // console.log(rt);
    if(rt<18.6){
        // console.log("OH! YOU ARE UNDER WEIGHT");
        const rs=(18.6-rt).toFixed(2);
        comment.innerHTML=`OH! YOU ARE UNDER WEIGHT BY ${rs}`;
    }
    else if(rt>=18.6 && rt<=24.9){
        // console.log("CONGRATS! YOU ARE IN A NORMAL RANGE");
        const rs=(24.9-rt).toFixed(2);
        comment.innerHTML=`CONGRATS! YOU ARE IN A NORMAL RANGE BY ${rs}`;
    }
    else if(rt>24.9){
        // console.log("ALAS! YOU ARE OVER WEIGHT");
        const rs=(rt-24.9).toFixed(2);
        comment.innerHTML=`ALAS! YOU ARE OVER WEIGHT BY ${rs}`;
    }
});