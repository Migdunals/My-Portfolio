const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){ entry.target.classList.add('in'); io.unobserve(entry.target); }
  });
},{threshold:0.14});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

document.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape' && document.querySelector('.project-modal:target')) location.hash = 'work';
});
document.querySelectorAll('.project-modal').forEach(modal=>{
  modal.addEventListener('click',(e)=>{ if(e.target === modal) location.hash='work'; });
});
