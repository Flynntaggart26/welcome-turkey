let lang='en';
const places=[
  {id:'ist', name:'Istanbul', region:'Marmara', lat:41.0082, lon:28.9784, budget:{budget:45,mid:85,lux:170}, best:'Apr-Jun, Sep-Oct', desc:'Where continents meet — Hagia Sophia, Bosphorus ferry and Grand Bazaar.', highlights:['Bosphorus','Historic Peninsula'], tip:'Get Istanbulkart for all transit.'},
  {id:'cap', name:'Cappadocia', region:'Central', lat:38.6435, lon:34.8307, budget:{budget:40,mid:80,lux:160}, best:'Apr-Oct', desc:'Fairy chimneys and sunrise balloons over Göreme.', highlights:['Göreme','Balloon'], tip:'Balloons at 5am, wind-dependent.'},
  {id:'ant', name:'Antalya', region:'Mediterranean', lat:36.8969, lon:30.7133, budget:{budget:42,mid:78,lux:150}, best:'May-Oct', desc:'Turquoise coast, Roman ruins and Kaleiçi old town.', highlights:['Beach','Old Town'], tip:'Beach + Perge ruins in one day.'},
  {id:'izm', name:'Izmir & Ephesus', region:'Aegean', lat:38.4237, lon:27.1428, budget:{budget:38,mid:72,lux:140}, best:'Apr-Jun, Sep-Oct', desc:'Aegean breeze and Ephesus Library of Celsus.', highlights:['Ephesus','Alacati'], tip:'Day trip to Ephesus from Izmir.'},
  {id:'pam', name:'Pamukkale', region:'Aegean', lat:37.9249, lon:29.1209, budget:{budget:35,mid:65,lux:120}, best:'Apr-Oct', desc:'White travertines and Hierapolis ancient pool.', highlights:['Travertines','Hierapolis'], tip:'Sunrise before crowds.'},
  {id:'ank', name:'Ankara', region:'Central', lat:39.9334, lon:32.8597, budget:{budget:32,mid:60,lux:110}, best:'Year-round', desc:'Capital and Anıtkabir — modern history.', highlights:['Anıtkabir','Museum'], tip:'Quiet, easy transit.'},
  {id:'bod', name:'Bodrum', region:'Aegean', lat:37.0344, lon:27.4305, budget:{budget:48,mid:95,lux:190}, best:'May-Sep', desc:'White houses, marina and castle.', highlights:['Marina','Castle'], tip:'Book ferries early in summer.'},
  {id:'fet', name:'Fethiye & Oludeniz', region:'Mediterranean', lat:36.6217, lon:29.1228, budget:{budget:40,mid:75,lux:145}, best:'May-Oct', desc:'Lagoon, paragliding and Lycian tombs.', highlights:['Oludeniz','Paragliding'], tip:'Paragliding from Babadağ.'},
  {id:'mar', name:'Mardin', region:'Eastern', lat:37.3131, lon:40.7350, budget:{budget:30,mid:55,lux:100}, best:'Mar-May, Sep-Nov', desc:'Stone houses and Mesopotamia view.', highlights:['Old Town','Monastery'], tip:'Stay in stone hotel.'},
  {id:'tra', name:'Trabzon & Sumela', region:'Black Sea', lat:41.0015, lon:39.7178, budget:{budget:34,mid:62,lux:115}, best:'May-Sep', desc:'Green mountains and Sumela Monastery cliff.', highlights:['Sumela','Uzungol'], tip:'Tea plantations nearby.'},
  {id:'kon', name:'Konya', region:'Central', lat:37.8667, lon:32.4833, budget:{budget:28,mid:50,lux:95}, best:'Year-round', desc:'Mevlana heritage and whirling dervishes.', highlights:['Mevlana','Sema'], tip:'Thursday Sema ceremony.'},
  {id:'gaz', name:'Gaziantep', region:'Eastern', lat:37.0662, lon:37.3833, budget:{budget:30,mid:58,lux:105}, best:'Mar-May, Sep-Nov', desc:'World-class cuisine and Zeugma mosaics.', highlights:['Baklava','Zeugma'], tip:'Food tour essential.'},
];
const phrases=[
  {tr:'Merhaba', en:'Hello', de:'Hallo', ru:'Привет', ar:'مرحبا', cat:'Greetings'},
  {tr:'Teşekkürler', en:'Thank you', de:'Danke', ru:'Спасибо', ar:'شكرا', cat:'Greetings'},
  {tr:'Lütfen', en:'Please', de:'Bitte', ru:'Пожалуйста', ar:'من فضلك', cat:'Greetings'},
  {tr:'Ne kadar?', en:'How much?', de:'Wie viel?', ru:'Сколько?', ar:'بكم؟', cat:'Shopping'},
  {tr:'Bilet nerede?', en:'Where is ticket?', de:'Wo ist Ticket?', ru:'Где билет?', ar:'أين التذكرة؟', cat:'Transport'},
  {tr:'Tuvalet nerede?', en:'Where is toilet?', de:'Wo ist Toilette?', ru:'Где туалет?', ar:'أين الحمام؟', cat:'Transport'},
  {tr:'Su alabilir miyim?', en:'Can I get water?', de:'Wasser bitte', ru:'Можно воды?', ar:'ماء من فضلك', cat:'Food'},
  {tr:'Vejetaryenim', en:'I am vegetarian', de:'Ich bin Vegetarier', ru:'Я вегетарианец', ar:'أنا نباتي', cat:'Food'},
  {tr:'Yardım edin!', en:'Help!', de:'Hilfe!', ru:'Помогите!', ar:'ساعدوني!', cat:'Emergency'},
  {tr:'Hastane nerede?', en:'Where is hospital?', de:'Wo ist Krankenhaus?', ru:'Где больница?', ar:'أين المستشفى؟', cat:'Emergency'},
  {tr:'İndirim yapar mısınız?', en:'Discount?', de:'Rabatt?', ru:'Скидка?', ar:'خصم؟', cat:'Shopping'},
  {tr:'Çok güzel!', en:'Very beautiful!', de:'Sehr schön!', ru:'Очень красиво!', ar:'جميل جدا!', cat:'Greetings'},
];

function switchTab(id){
  document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelector(`[data-tab="${id}"]`).classList.add('active');
  if(id==='discover') setTimeout(()=> map.invalidateSize(), 120);
}
function setLang(v){ lang=v; document.getElementById('targetLang').textContent={en:'English',de:'German',ru:'Russian',ar:'Arabic',tr:'Turkish'}[v]; renderPhrases(); renderHeroPhrases(); }

let map;
function initMap(){
  map=L.map('map').setView([39.5, 35.0], 6);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom:18, attribution:'© OSM'}).addTo(map);
  places.forEach(p=>{
    const m=L.marker([p.lat,p.lon]).addTo(map).bindPopup(`<b>${p.name}</b><br>${p.desc}<br><small>${p.best}</small>`);
    p._marker=m;
  });
}
function renderPlaces(){
  const q=document.getElementById('q').value.toLowerCase();
  const region=document.getElementById('fRegion').value;
  const el=document.getElementById('places');
  el.innerHTML='';
  places.filter(p=>{
    if(region!=='all' && p.region!==region) return false;
    if(q && !(p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q))) return false;
    return true;
  }).forEach(p=>{
    const div=document.createElement('div');
    div.style.cssText='background:white;border:1px solid #f0e0cc;border-radius:14px;padding:12px;cursor:pointer';
    div.innerHTML=`<div style="display:flex;justify-content:space-between;gap:8px"><b>${p.name}</b><span style="font-size:10px;padding:3px 7px;border-radius:999px;background:#f0e0cc;font-weight:700">${p.region}</span></div><div style="font-size:12px;color:#4b5563">${p.desc}</div><div style="font-size:11px;color:#6b7280;margin-top:4px">${p.best} • Mid €${p.budget.mid}/day • ${p.tip}</div>`;
    div.onclick=()=>{ map.setView([p.lat,p.lon], 8); p._marker.openPopup(); window.scrollTo({top:0,behavior:'smooth'}); };
    el.appendChild(div);
  });
}
function renderHeroPhrases(){
  const el=document.getElementById('heroPhrases');
  el.innerHTML='';
  ['Merhaba','Teşekkürler','Ne kadar?'].forEach(tr=>{
    const ph=phrases.find(p=>p.tr===tr);
    const txt=lang==='tr'? ph.tr : ph[lang];
    const div=document.createElement('button');
    div.className='chip';
    div.style.cssText='background:white;color:#1a1c2e;border:1px solid #f0e0cc;cursor:pointer';
    div.textContent=`${ph.tr} → ${txt}`;
    div.onclick=()=> speak(ph.tr);
    el.appendChild(div);
  });
}
function renderPhrases(){
  const catEl=document.getElementById('catChips');
  const cats=[...new Set(phrases.map(p=>p.cat))];
  catEl.innerHTML='';
  const activeCat=catEl.dataset.active||'Greetings';
  cats.forEach(c=>{
    const b=document.createElement('button');
    b.textContent=c; b.style.cssText=`padding:6px 10px;border-radius:999px;border:1px solid #f0e0cc;background:${c===activeCat?'#1a1c2e':'white'};color:${c===activeCat?'white':'#7a819c'};font-weight:700;font-size:12px;cursor:pointer`;
    b.onclick=()=>{catEl.dataset.active=c; renderPhrases();};
    catEl.appendChild(b);
  });
  catEl.dataset.active=activeCat;
  const list=document.getElementById('phrases');
  list.innerHTML='';
  phrases.filter(p=>p.cat===activeCat).forEach(ph=>{
    const txt=lang==='tr'? ph.tr : ph[lang];
    const row=document.createElement('div');
    row.style.cssText='display:flex;justify-content:space-between;gap:10px;align-items:center;padding:10px;background:white;border:1px solid #f0e0cc;border-radius:12px';
    row.innerHTML=`<div><b>${ph.tr}</b> <span style="color:#6b7280">→</span> <b style="color:#e11d48">${txt}</b><div style="font-size:11px;color:#6b7280">${ph.cat}</div></div><button class="btn" onclick="speak('${ph.tr.replace(/'/g,"\\'")}')">🔊</button>`;
    list.appendChild(row);
  });
}
function speak(text){
  if(!('speechSynthesis' in window)) return;
  const u=new SpeechSynthesisUtterance(text);
  u.lang='tr-TR'; u.rate=0.9;
  speechSynthesis.cancel(); speechSynthesis.speak(u);
}
function generatePlan(){
  const days=parseInt(document.getElementById('pDays').value);
  const budget=document.getElementById('pBudget').value;
  const interests=[...document.querySelectorAll('#pInterests input:checked')].map(c=>c.value);
  const pool=places.filter(p=> interests.length===0 || interests.some(i=> p.highlights.join(' ').toLowerCase().includes(i) || p.desc.toLowerCase().includes(i)));
  const picks=days===3? ['ist','cap','ist'] : days===5? ['ist','cap','ant','izm','ist'] : ['ist','ank','cap','ant','fet','izm','ist'];
  const plan=picks.slice(0,days).map(id=> places.find(p=>p.id===id) || pool[0]);
  const total=plan.reduce((a,p)=>a+p.budget[budget],0);
  document.getElementById('planOut').innerHTML=`<div style="margin-top:10px;padding:12px;background:#f0f9ff;border:1px solid #cbd5e1;border-radius:12px"><b>${days}-day plan • ~€${total} (mid, per person, no flights)</b><ol style="margin:8px 0 0 18px;font-size:13px">${plan.map((p,i)=>`<li><b>Day ${i+1}: ${p.name}</b> — ${p.desc} <span style="color:#6b7280">(${p.highlights.join(', ')})</span></li>`).join('')}</ol></div>`;
}
function calcBudget(){
  const trav=parseInt(document.getElementById('bTrav').value)||1;
  const days=parseInt(document.getElementById('bDays').value)||1;
  const tier=document.getElementById('bTier').value;
  const avg=places.reduce((a,p)=>a+p.budget[tier],0)/places.length;
  const total=Math.round(avg*days*trav);
  document.getElementById('budgetOut').innerHTML=`<b>Estimate: €${total}</b> for ${trav} traveler(s) × ${days} days (${tier})<br><span style="font-size:11px;color:#6b7280">Avg €${avg.toFixed(0)}/day per person • Flights extra • Rate ~TRY 36/€</span>`;
}
// interests checkboxes
const interests=['history','nature','beach','food','balloon'];
document.addEventListener('DOMContentLoaded',()=>{
  initMap(); renderPlaces(); renderPhrases(); renderHeroPhrases();
  const c=document.getElementById('pInterests');
  interests.forEach(i=>{
    const label=document.createElement('label');
    label.style.cssText='font-size:12px;display:flex;gap:4px;align-items:center;background:white;border:1px solid #f0e0cc;padding:6px 10px;border-radius:999px;cursor:pointer';
    label.innerHTML=`<input type="checkbox" value="${i}"> ${i}`;
    c.appendChild(label);
  });
  calcBudget();
});
