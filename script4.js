const backBtn = document.getElementById('back');

const projBtn = document.getElementsByClassName('projects');



console.log(projBtn[0])

projBtn[0].addEventListener('click', ()=>{

    window.location.href = '/projname.html';
  
  })

  projBtn[1].addEventListener('click', ()=>{

    window.location.href = '/projname.html';
  
  })

  projBtn[2].addEventListener('click', ()=>{

    window.location.href = '/projname.html';
  
  })


backBtn.addEventListener('click', ()=>{

    window.location.href = '/dashboard.html';
  
  })