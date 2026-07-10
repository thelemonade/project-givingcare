const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.primary-nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.guide-card');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(b => b.classList.remove('active'));
  button.classList.add('active');
  const target = button.dataset.filter;
  cards.forEach(card => {
    const cats = card.dataset.category.split(' ');
    card.classList.toggle('hidden', target !== 'all' && !cats.includes(target));
  });
}));

const search = document.getElementById('site-search');
const results = document.getElementById('search-results');
const clear = document.getElementById('clear-search');
const searchable = [...document.querySelectorAll('.guide-card')];
function doSearch(){
  const q = search.value.trim().toLowerCase();
  results.innerHTML = '';
  if(q.length < 2) return;
  const found = searchable.filter(card => card.innerText.toLowerCase().includes(q)).slice(0,6);
  if(!found.length){
    results.innerHTML = '<div style="padding:12px 16px;color:#60706c">No matching guide found.</div>';
    return;
  }
  found.forEach(card => {
    const link = document.createElement('a');
    link.href = '#' + card.id;
    link.textContent = card.querySelector('h3').textContent;
    link.addEventListener('click', () => { results.innerHTML=''; search.value=''; });
    results.appendChild(link);
  });
}
search.addEventListener('input', doSearch);
clear.addEventListener('click', () => { search.value=''; results.innerHTML=''; search.focus(); });

const sheets = {
 emergency: {
  title:'Emergency Information Sheet',
  intro:'Keep a current copy in an accessible place and bring it to appointments.',
  prompts:['Care recipient’s name and date of birth','Main diagnosis and important medical history','Allergies','Current medicines and doses','Main hospital / doctor / clinic','Emergency contacts','Mobility, communication and behavioural needs','Advance care plan or LPA information, if applicable']
 },
 appointment: {
  title:'Questions for a Healthcare Appointment',
  intro:'Write down the three questions that matter most before the visit.',
  prompts:['What has changed since the last visit?','What do we need to do next?','What warning signs require urgent help?','Which medicines have changed?','Who should we contact between appointments?','What support, training or equipment should we consider?','My three priority questions']
 },
 home: {
  title:'Home Safety Checklist',
  intro:'Review the home with the care recipient and, where possible, a trained professional.',
  prompts:['Walking routes are clear and well lit','Loose rugs and cables are removed or secured','Bathroom has suitable non-slip measures','Grab bars are professionally fitted where needed','Bed and chair heights support safe transfers','Frequently used items are easy to reach','Emergency numbers are visible','Equipment has been assessed for fit and safe use']
 },
 respite: {
  title:'Respite Planning Sheet',
  intro:'A break is part of sustainable caregiving, not a failure of care.',
  prompts:['Tasks another person can safely take over','Care instructions the substitute caregiver needs','Medicines and emergency contacts','Preferred dates and duration','Formal respite services to ask about','People I can contact','How I will use the break','Date to review this plan']
 }
};

const modal = document.getElementById('print-modal');
const modalContent = document.getElementById('print-content');
document.querySelectorAll('[data-print]').forEach(btn => btn.addEventListener('click', () => {
  const s = sheets[btn.dataset.print];
  modalContent.innerHTML = `<div class="print-sheet"><p class="eyebrow">PROJECT GIVINGCARE CAREGUIDE</p><h2 id="modal-title">${s.title}</h2><p>${s.intro}</p><div class="print-lines">${s.prompts.map(p=>`<div><strong>${p}</strong><div class="print-line"></div></div>`).join('')}</div><p><small>General information only. Update this sheet whenever care needs change.</small></p></div>`;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
}));
document.querySelector('.modal-close').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if(e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeModal(); });
function closeModal(){
 modal.classList.remove('open');
 modal.setAttribute('aria-hidden','true');
}
