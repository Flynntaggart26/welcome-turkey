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
const foodData=[
  {name:'Baklava', region:'Gaziantep', desc:'Layers of phyllo with pistachio and syrup.', allergens:['nuts','gluten','dairy'], price:'80-120 TRY'},
  {name:'Kebap (Adana)', region:'Eastern', desc:'Spicy minced meat grilled.', allergens:['meat'], price:'200-300 TRY'},
  {name:'Lahmacun', region:'Central', desc:'Thin flatbread topped with minced meat.', allergens:['gluten','meat'], price:'60-90 TRY'},
  {name:'Mantı', region:'Central', desc:'Tiny dumplings with yogurt.', allergens:['gluten','dairy'], price:'120-180 TRY'},
  {name:'Simit', region:'Marmara', desc:'Sesame ring bread, street favorite.', allergens:['gluten','sesame'], price:'15-25 TRY'},
  {name:'Balık Ekmek', region:'Marmara', desc:'Grilled fish in bread at Eminönü.', allergens:['fish','gluten'], price:'100-150 TRY'},
  {name:'Mercimek Çorbası', region:'All', desc:'Red lentil soup, everyday staple.', allergens:[], price:'50-80 TRY'},
  {name:'Künefe', region:'Mediterranean', desc:'Cheese pastry with syrup.', allergens:['nuts','dairy','gluten'], price:'90-140 TRY'},
  {name:'Çiğ Köfte', region:'Eastern', desc:'Bulgur balls, vegan, spicy.', allergens:['gluten'], price:'60-90 TRY'},
  {name:'Meze', region:'Aegean', desc:'Small plates: hummus, ezme, etc.', allergens:['nuts','dairy'], price:'150-250 TRY'},
];
const allergens=['nuts','dairy','gluten','meat','fish','sesame'];
const quizData=[
  {q:'Shoes in a mosque?', opts:['Keep them on','Take them off','Only socks matter'], a:1, exp:'Take shoes off, scarves provided for covering.'},
  {q:'Bargain in bazaar?', opts:['Never','Yes, expected','Only with tourists'], a:1, exp:'Bargain in bazaars, not in malls.'},
  {q:'Tea offered in a shop?', opts:['Must pay','Hospitality — accept, no obligation','Rude to accept'], a:1, exp:'Tea is hospitality, not sales.'},
  {q:'Tipping in restaurants?', opts:['Never','5-10% if no service charge','20% always'], a:1, exp:'5-10% if service not included.'},
  {q:'Shoulders/knees in mosque?', opts:['No matter','Cover them'], a:1, exp:'Cover shoulders and knees.'},
];
// --- 6 DEEP FEATURES DATA ---
const climateData={
  ist:[6,7,10,15,20,24,26,26,22,17,12,8],
  cap:[0,2,7,12,16,20,23,23,19,13,7,2],
  ant:[10,11,14,18,22,26,29,29,26,21,16,11],
  izm:[9,10,13,17,22,27,30,30,26,20,14,10],
  pam:[6,7,11,16,21,26,29,29,25,19,12,7],
  ank:[0,2,7,12,17,21,24,24,19,13,7,2],
  bod:[11,11,14,18,22,26,29,29,26,21,17,12],
  fet:[10,11,14,18,22,26,29,29,26,21,15,11],
  mar:[4,6,10,15,20,26,30,30,26,19,11,5],
  tra:[7,7,9,12,16,19,22,23,20,16,12,9],
  kon:[1,3,8,13,18,22,26,26,21,15,8,3],
  gaz:[5,7,11,16,21,26,30,30,26,19,11,6],
};
const scamData=[
  {item:'Çay (tea)', typical:'25-40 TRY', scam:'>60 TRY in Sultanahmet is tourist price', tip:'Ask price first'},
  {item:'Taksi açılış', typical:'30-40 TRY', scam:'No meter, fixed 500 TRY', tip:'Insist on meter, use BiTaksi'},
  {item:'Halı (carpet)', typical:'—', scam:'Free tour → hard sell', tip:'Say no firmly'},
  {item:'Balık ekmek (Eminönü)', typical:'100-150 TRY', scam:'180+ with extras', tip:'Confirm price with bread'},
  {item:'Hamam', typical:'800-1500 TRY', scam:'3000+ for tourists', tip:'Book via hotel, not street'},
];

let selectedAllergens=new Set();
let quizIdx=0, quizScore=0;
let lastPlan=null;

function switchTab(id){
  document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelector(`[data-tab="${id}"]`).classList.add('active');
  if(id==='discover') setTimeout(()=> map.invalidateSize(), 120);
  if(id==='food') renderFood();
  if(id==='quiz') renderQuiz();
  if(id==='journal') renderJournal();
  if(id==='safety') renderScam();
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
    div.style.cssText='background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.10);border-radius:14px;padding:12px;cursor:pointer;backdrop-filter:blur(6px)';
    div.innerHTML=`<div style="display:flex;justify-content:space-between;gap:8px"><b>${p.name}</b><span style="font-size:10px;padding:3px 7px;border-radius:999px;background:rgba(255,255,255,.08);font-weight:700">${p.region}</span></div><div style="font-size:12px;color:#cbd5e1">${p.desc}</div><div style="font-size:11px;color:#9aa0c2;margin-top:4px">${p.best} • Mid €${p.budget.mid}/day • ${p.tip}</div>`;
    div.onclick=()=>{ map.setView([p.lat,p.lon], 8); p._marker.openPopup(); };
    el.appendChild(div);
  });
}
function findNearest(){
  if(!navigator.geolocation){ alert('Geolocation not supported'); return; }
  navigator.geolocation.getCurrentPosition(pos=>{
    const {latitude, longitude}=pos.coords;
    const hav=(lat1,lon1,lat2,lon2)=>{
      const R=6371, dLat=(lat2-lat1)*Math.PI/180, dLon=(lon2-lon1)*Math.PI/180;
      const a=Math.sin(dLat/2)**2 + Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLon/2)**2;
      return R*2*Math.asin(Math.sqrt(a));
    };
    let best=null, bestD=Infinity;
    places.forEach(p=>{ const d=hav(latitude,longitude,p.lat,p.lon); if(d<bestD){bestD=d; best=p;} });
    if(best){
      alert(`Nearest: ${best.name} — ${bestD.toFixed(0)} km away`);
      map.setView([best.lat,best.lon], 8); best._marker.openPopup();
    }
  }, ()=> alert('Enable location permission to use nearest.'));
}
function renderHeroPhrases(){
  const el=document.getElementById('heroPhrases');
  el.innerHTML='';
  ['Merhaba','Teşekkürler','Ne kadar?'].forEach(tr=>{
    const ph=phrases.find(p=>p.tr===tr);
    const txt=lang==='tr'? ph.tr : ph[lang];
    const div=document.createElement('button');
    div.className='chip';
    div.style.cssText='background:white;color:#1e1b4b;border:1px solid rgba(255,255,255,.8);cursor:pointer';
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
    b.textContent=c; b.style.cssText=`padding:6px 10px;border-radius:999px;border:1px solid ${c===activeCat?'transparent':'rgba(255,255,255,.12)'};background:${c===activeCat?'linear-gradient(135deg,#f59e0b,#e11d48)':'rgba(255,255,255,.06)'};color:${c===activeCat?'white':'#9aa0c2'};font-weight:700;font-size:12px;cursor:pointer`;
    b.onclick=()=>{catEl.dataset.active=c; renderPhrases();};
    catEl.appendChild(b);
  });
  catEl.dataset.active=activeCat;
  const list=document.getElementById('phrases');
  list.innerHTML='';
  phrases.filter(p=>p.cat===activeCat).forEach(ph=>{
    const txt=lang==='tr'? ph.tr : ph[lang];
    const row=document.createElement('div');
    row.style.cssText='display:flex;justify-content:space-between;gap:10px;align-items:center;padding:12px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.10);border-radius:14px;backdrop-filter:blur(8px)';
    row.innerHTML=`<div><b style="color:#f1f3ff">${ph.tr}</b> <span style="color:#9aa0c2">→</span> <b style="color:#fde68a">${txt}</b><div style="font-size:11px;color:#9aa0c2">${ph.cat}</div></div><button class="btn" style="background:rgba(255,255,255,.06)" onclick="speak('${ph.tr.replace(/'/g,"\\'")}')">🔊</button>`;
    list.appendChild(row);
  });
}
function speak(text){
  if(!('speechSynthesis' in window)) return;
  const u=new SpeechSynthesisUtterance(text);
  u.lang='tr-TR'; u.rate=0.9;
  speechSynthesis.cancel(); speechSynthesis.speak(u);
}
// Food
function renderFood(){
  const grid=document.getElementById('foodGrid');
  const chips=document.getElementById('allergenChips');
  if(!grid||!chips) return;
  chips.innerHTML='';
  allergens.forEach(a=>{
    const b=document.createElement('button');
    const active=selectedAllergens.has(a);
    b.textContent=a;
    b.style.cssText=`padding:6px 10px;border-radius:999px;border:1px solid ${active?'transparent':'rgba(255,255,255,.12)'};background:${active?'linear-gradient(135deg,#f59e0b,#e11d48)':'rgba(255,255,255,.06)'};color:${active?'white':'#9aa0c2'};font-weight:700;font-size:12px;cursor:pointer`;
    b.onclick=()=>{ if(active) selectedAllergens.delete(a); else selectedAllergens.add(a); renderFood(); updateAllergyCard(); };
    chips.appendChild(b);
  });
  grid.innerHTML='';
  foodData.filter(f=>{
    if(selectedAllergens.size===0) return true;
    return ![...selectedAllergens].some(al=> f.allergens.includes(al));
  }).forEach(f=>{
    const div=document.createElement('div');
    div.className='food-card';
    div.innerHTML=`<b>${f.name}</b> <span style="font-size:11px;color:#9aa0c2">• ${f.region}</span><div style="font-size:12px;color:#cbd5e1;margin-top:4px">${f.desc}</div><div style="font-size:11px;margin-top:4px">${f.allergens.length? '⚠️ '+f.allergens.join(', ') : '✅ No major allergens'}</div><div style="font-size:11px;color:#06b6d4;font-weight:700">${f.price}</div>`;
    grid.appendChild(div);
  });
  if(!grid.children.length) grid.innerHTML='<div style="color:#9aa0c2">No dishes without selected allergens.</div>';
}
function updateAllergyCard(){
  const el=document.getElementById('allergyCard');
  if(!el) return;
  if(selectedAllergens.size===0){ el.innerHTML='Select allergens above to generate card.'; el.style.color='#f1f3ff'; return; }
  const list=[...selectedAllergens].join(', ');
  el.innerHTML=`<b style="color:#fde68a">⚠️ Alerjim var:</b> ${list}<br><span style="font-size:12px">Lütfen yemeğimde <b>${list}</b> olmasın. Teşekkürler!</span><br><span style="font-size:11px;color:#9aa0c2">I have allergy to ${list} — please no ${list}.</span>`;
}
// Quiz
function renderQuiz(){
  const area=document.getElementById('quizArea');
  const res=document.getElementById('quizResult');
  if(!area) return;
  res.style.display='none';
  quizIdx=0; quizScore=0;
  showQuizQ();
}
function showQuizQ(){
  const q=quizData[quizIdx];
  const area=document.getElementById('quizArea');
  area.innerHTML=`<div style="font-weight:700;color:#f1f3ff">${quizIdx+1}/5 — ${q.q}</div><div style="margin-top:10px;display:grid;gap:8px">${q.opts.map((o,i)=>`<button class="quiz-opt" onclick="checkQuiz(${i})">${o}</button>`).join('')}</div>`;
}
function checkQuiz(i){
  const q=quizData[quizIdx];
  const correct=i===q.a;
  if(correct) quizScore++;
  const area=document.getElementById('quizArea');
  area.innerHTML=`<div style="font-weight:700;color:#f1f3ff">${quizIdx+1}/5 — ${q.q}</div><div style="margin-top:8px;padding:10px;border-radius:10px;background:${correct?'rgba(5,150,105,.14)':'rgba(220,38,38,.14)'};border:1px solid ${correct?'#059669':'#dc2626'}">${correct?'✅ Correct!':'❌ Wrong.'} ${q.exp}</div><button class="btn primary" style="margin-top:10px" onclick="nextQuiz()">${quizIdx<4?'Next →':'See result'}</button>`;
}
function nextQuiz(){
  quizIdx++;
  if(quizIdx<5) showQuizQ();
  else {
    const res=document.getElementById('quizResult');
    res.style.display='block';
    res.innerHTML=`<b style="color:#f1f3ff">Score: ${quizScore}/5</b> — ${quizScore>=4?'Excellent! You know Turkish etiquette.':'Keep practicing — check Essentials.'}<div style="margin-top:8px"><button class="btn" onclick="renderQuiz()">Retry</button></div>`;
    document.getElementById('quizArea').innerHTML='';
  }
}
// SOS
function saveSOS(){
  const data={name:document.getElementById('sosName').value, blood:document.getElementById('sosBlood').value, hotel:document.getElementById('sosHotel').value, contact:document.getElementById('sosContact').value, embassy:document.getElementById('sosEmbassy').value, insurance:document.getElementById('sosInsurance').value};
  localStorage.setItem('welcome-sos', JSON.stringify(data));
  renderSOS();
}
function renderSOS(){
  const data=JSON.parse(localStorage.getItem('welcome-sos')||'null');
  const out=document.getElementById('sosOut');
  if(!out) return;
  if(!data||!data.name){ out.innerHTML='<div style="font-size:12px;color:#9aa0c2">Fill and save to generate QR card.</div>'; return; }
  out.innerHTML=`<div style="margin-top:10px;padding:14px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.10);border-radius:12px;display:flex;gap:12px;flex-wrap:wrap">
    <div style="flex:1;min-width:200px"><b style="color:#f1f3ff">${data.name}</b><div style="font-size:12px;color:#cbd5e1">Blood: ${data.blood||'—'} • Hotel: ${data.hotel||'—'}</div><div style="font-size:11px;color:#9aa0c2">Contact: ${data.contact||'—'} • Embassy: ${data.embassy||'—'} • Insurance: ${data.insurance||'—'}</div><div style="font-size:10px;color:#9aa0c2;margin-top:6px">Show offline. Data local only.</div></div>
    <div id="sosQr" style="width:96px;height:96px;background:white;border-radius:8px;display:grid;place-items:center"></div>
  </div>`;
  setTimeout(()=>{
    const el=document.getElementById('sosQr');
    if(!el) return;
    el.innerHTML='';
    const text=`SOS ${data.name} | Blood:${data.blood} | Hotel:${data.hotel} | Contact:${data.contact}`;
    try{ new QRCode(el, {text, width:88, height:88, colorDark:'#1e1b4b', colorLight:'#ffffff', correctLevel: QRCode.CorrectLevel.M}); }catch(e){}
  }, 80);
}
// Planner + Budget
function generatePlan(){
  const days=parseInt(document.getElementById('pDays').value);
  const budget=document.getElementById('pBudget').value;
  const picks=days===3? ['ist','cap','ist'] : days===5? ['ist','cap','ant','izm','ist'] : ['ist','ank','cap','ant','fet','izm','ist'];
  const plan=picks.slice(0,days).map(id=> places.find(p=>p.id===id));
  lastPlan=plan;
  const total=plan.reduce((a,p)=>a+p.budget[budget],0);
  document.getElementById('planOut').innerHTML=`<div style="margin-top:10px;padding:12px;background:rgba(6,182,214,.08);border:1px solid rgba(6,182,214,.18);border-radius:12px"><b style="color:#f1f3ff">${days}-day plan • ~€${total} (mid, per person, no flights)</b><ol style="margin:8px 0 0 18px;font-size:13px;color:#cbd5e1">${plan.map((p,i)=>`<li><b style="color:#fde68a">Day ${i+1}: ${p.name}</b> — ${p.desc} <span style="color:#9aa0c2">(${p.highlights.join(', ')})</span></li>`).join('')}</ol></div>`;
}
function exportPlanPDF(){ if(!lastPlan){ alert('Generate a plan first'); return; } window.print(); }
function exportPlanICS(){
  if(!lastPlan){ alert('Generate a plan first'); return; }
  let ics='BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Welcome Turkey//EN\n';
  lastPlan.forEach((p,i)=>{
    const d=new Date(); d.setDate(d.getDate()+i);
    const y=d.toISOString().slice(0,10).replace(/-/g,'');
    ics+=`BEGIN:VEVENT\nDTSTART:${y}T080000Z\nDTEND:${y}T200000Z\nSUMMARY:${p.name}\nDESCRIPTION:${p.desc.replace(/,/g,' ')}\nEND:VEVENT\n`;
  });
  ics+='END:VCALENDAR';
  const blob=new Blob([ics],{type:'text/calendar'}); const url=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download='turkey_itinerary.ics'; a.click(); URL.revokeObjectURL(url);
}
function calcBudget(){
  const trav=parseInt(document.getElementById('bTrav').value)||1;
  const days=parseInt(document.getElementById('bDays').value)||1;
  const tier=document.getElementById('bTier').value;
  const avg=places.reduce((a,p)=>a+p.budget[tier],0)/places.length;
  const total=Math.round(avg*days*trav);
  document.getElementById('budgetOut').innerHTML=`<b style="color:#f1f3ff">Estimate: €${total}</b> for ${trav} traveler(s) × ${days} days (${tier})<br><span style="font-size:11px;color:#9aa0c2">Avg €${avg.toFixed(0)}/day per person • Flights extra • Rate ~TRY 36/€</span>`;
}
function calcTip(){
  const bill=parseFloat(document.getElementById('tipBill').value)||0;
  const pct=parseInt(document.getElementById('tipPct').value)||10;
  const tip=bill*pct/100;
  const total=bill+tip;
  const eur=(total/36).toFixed(1);
  document.getElementById('tipOut').innerHTML=`Tip ${pct}%: <b style="color:#fde68a">${tip.toFixed(2)} TRY</b> • Total: <b style="color:#f1f3ff">${total.toFixed(2)} TRY</b> (~€${eur})`;
}
// --- 6 DEEP FEATURES ---
// Journal
function addJournal(){
  const date=document.getElementById('jDate').value;
  const place=document.getElementById('jPlace').value;
  const note=document.getElementById('jNote').value.trim();
  const mood=document.getElementById('jMood').value;
  const cost=document.getElementById('jCost').value;
  const file=document.getElementById('jPhoto').files[0];
  if(!date||!place||!note){ alert('Date, place and note required'); return; }
  const id=Date.now().toString(36);
  const save=(photoData)=>{
    const entry={id,date,place,note,mood,cost,photo:photoData||'', created:Date.now()};
    const arr=JSON.parse(localStorage.getItem('welcome-journal')||'[]');
    arr.unshift(entry); localStorage.setItem('welcome-journal', JSON.stringify(arr));
    document.getElementById('jNote').value=''; document.getElementById('jPhoto').value=''; renderJournal();
  };
  if(file){
    if(file.size>900*1024){ alert('Photo >900KB, choose smaller'); return; }
    const r=new FileReader(); r.onload=()=> save(r.result); r.readAsDataURL(file);
  } else save('');
}
function renderJournal(){
  const grid=document.getElementById('journalGrid');
  const sel=document.getElementById('jPlace');
  if(sel && !sel.children.length){
    places.forEach(p=>{ const o=document.createElement('option'); o.value=p.name; o.textContent=p.name; sel.appendChild(o); });
    document.getElementById('jDate').value=new Date().toISOString().slice(0,10);
  }
  if(!grid) return;
  const arr=JSON.parse(localStorage.getItem('welcome-journal')||'[]');
  grid.innerHTML='';
  if(!arr.length){ grid.innerHTML='<div style="color:#9aa0c2">No entries yet. Add your first day!</div>'; return; }
  arr.forEach(e=>{
    const div=document.createElement('div');
    div.className='journal-card';
    div.innerHTML=`${e.photo? `<img src="${e.photo}" class="journal-photo">`:''}<div class="journal-body"><div style="font-size:11px;color:#9aa0c2">${e.date} • ${e.place} • ${e.mood} ${e.cost? '• '+e.cost+' TRY':''}</div><div style="font-size:13px;color:#f1f3ff;margin-top:4px">${e.note}</div><button class="btn" style="margin-top:8px;padding:6px 10px;font-size:11px" onclick="delJournal('${e.id}')">Delete</button></div>`;
    grid.appendChild(div);
  });
}
function delJournal(id){
  const arr=JSON.parse(localStorage.getItem('welcome-journal')||'[]').filter(x=>x.id!==id);
  localStorage.setItem('welcome-journal', JSON.stringify(arr)); renderJournal();
}
function exportJournalJSON(){
  const arr=JSON.parse(localStorage.getItem('welcome-journal')||'[]');
  const blob=new Blob([JSON.stringify(arr,null,2)],{type:'application/json'}); const url=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download='journal.json'; a.click(); URL.revokeObjectURL(url);
}
function exportJournalPDF(){ window.print(); }

// Route Optimizer — TSP nearest-neighbor + 2-opt
let routeSelected=new Set();
function renderRoutePicks(){
  const el=document.getElementById('routePicks');
  if(!el) return;
  el.innerHTML='';
  places.forEach(p=>{
    const active=routeSelected.has(p.id);
    const b=document.createElement('button');
    b.textContent=p.name;
    b.style.cssText=`padding:6px 10px;border-radius:999px;border:1px solid ${active?'transparent':'rgba(255,255,255,.12)'};background:${active?'linear-gradient(135deg,#f59e0b,#e11d48)':'rgba(255,255,255,.06)'};color:${active?'white':'#9aa0c2'};font-weight:700;font-size:12px;cursor:pointer`;
    b.onclick=()=>{ if(active) routeSelected.delete(p.id); else routeSelected.add(p.id); renderRoutePicks(); };
    el.appendChild(b);
  });
}
function haversine(lat1,lon1,lat2,lon2){
  const R=6371, dLat=(lat2-lat1)*Math.PI/180, dLon=(lon2-lon1)*Math.PI/180;
  const a=Math.sin(dLat/2)**2 + Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLon/2)**2;
  return R*2*Math.asin(Math.sqrt(a));
}
function optimizeRoute(){
  if(routeSelected.size<2){ alert('Select at least 2 places'); return; }
  const pts=[...routeSelected].map(id=> places.find(p=>p.id===id));
  // nearest neighbor
  let route=[pts[0]], rest=pts.slice(1);
  while(rest.length){
    const last=route[route.length-1];
    let best=0, bestD=Infinity;
    rest.forEach((p,i)=>{ const d=haversine(last.lat,last.lon,p.lat,p.lon); if(d<bestD){bestD=d; best=i;} });
    route.push(rest.splice(best,1)[0]);
  }
  // 2-opt improvement (one pass)
  for(let i=0;i<route.length-1;i++) for(let j=i+1;j<route.length;j++){
    const a=route.slice(0,i), b=route.slice(i,j+1).reverse(), c=route.slice(j+1);
    const cand=[...a,...b,...c];
    const d0=routeDist(route), d1=routeDist(cand);
    if(d1<d0) route=cand;
  }
  const total=routeDist(route);
  const out=document.getElementById('routeOut');
  out.innerHTML=`<div style="margin-top:10px;padding:12px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.10);border-radius:12px">
    <b style="color:#fde68a">Optimized route • ${total.toFixed(0)} km total (haversine)</b>
    <ol style="margin:8px 0 0 18px;font-size:13px;color:#cbd5e1">${route.map((p,i)=> `<li><b style="color:#f1f3ff">${p.name}</b> ${i<route.length-1? '→ '+haversine(p.lat,p.lon,route[i+1].lat,route[i+1].lon).toFixed(0)+' km':''}</li>`).join('')}</ol>
    <div style="margin-top:8px;display:flex;gap:6px;flex-wrap:wrap">${route.map(p=> `<span style="padding:4px 8px;border-radius:999px;background:rgba(245,158,11,.12);border:1px solid rgba(245,158,11,.18);font-size:11px">${p.name}</span>`).join('')}</div>
  </div>`;
  // draw polyline on map
  if(window.routeLine) map.removeLayer(window.routeLine);
  window.routeLine=L.polyline(route.map(p=>[p.lat,p.lon]), {color:'#f59e0b', weight:3, opacity:.9}).addTo(map);
  map.fitBounds(window.routeLine.getBounds(), {padding:[20,20]});
  document.getElementById('routeStats').textContent=`${route.length} stops • ${total.toFixed(0)} km`;
}
function routeDist(route){
  let s=0; for(let i=0;i<route.length-1;i++) s+=haversine(route[i].lat,route[i].lon,route[i+1].lat,route[i+1].lon); return s;
}
function clearRoute(){ routeSelected.clear(); renderRoutePicks(); document.getElementById('routeOut').innerHTML=''; document.getElementById('routeStats').textContent=''; if(window.routeLine) map.removeLayer(window.routeLine); }

// Scam Radar
const scamPrices={
  'Çay (tea)':{typical:32, scam:60, tip:'Ask price first, 25-40 TRY is normal'},
  'Taksi açılış':{typical:35, scam:200, tip:'Insist on meter, use BiTaksi'},
  'Halı (carpet)':{typical:0, scam:0, tip:'Free tour → hard sell, say no firmly'},
  'Balık ekmek':{typical:125, scam:180, tip:'Confirm 100-150 TRY with bread'},
  'Hamam':{typical:1150, scam:3000, tip:'Book via hotel, not street'},
};
function renderScam(){
  const list=document.getElementById('scamList');
  const sel=document.getElementById('scamItem');
  if(!list) return;
  if(sel && !sel.children.length){
    Object.keys(scamPrices).forEach(k=>{ const o=document.createElement('option'); o.value=k; o.textContent=k; sel.appendChild(o); });
  }
  list.innerHTML='';
  Object.entries(scamPrices).forEach(([k,v])=>{
    const div=document.createElement('div');
    div.className='scam-card';
    const pct=v.typical? Math.min(100, (v.typical/ (v.scam||200))*100) : 30;
    div.innerHTML=`<b style="color:#f1f3ff">${k}</b><div style="font-size:11px;color:#9aa0c2">Typical ${v.typical? v.typical+' TRY': '—'} • Scam >${v.scam} TRY</div><div class="price-bar" style="margin-top:6px"><div class="price-fill" style="width:${pct}%;background:linear-gradient(90deg, #f59e0b, #06b6d4)"></div></div><div style="font-size:11px;color:#cbd5e1;margin-top:4px">${v.tip}</div>`;
    list.appendChild(div);
  });
}
function checkPrice(){
  const item=document.getElementById('scamItem').value;
  const price=parseFloat(document.getElementById('scamPrice').value)||0;
  const v=scamPrices[item];
  const out=document.getElementById('scamOut');
  if(!price){ out.textContent='Enter a price'; return; }
  if(!v.typical){ out.innerHTML=`<b>${item}</b> — ${v.tip}`; return; }
  if(price > v.scam) out.innerHTML=`<span style="color:#ff8fa3">⚠️ Scam — ${price} TRY is above typical ${v.typical} TRY. ${v.tip}</span>`;
  else if(price > v.typical*1.2) out.innerHTML=`<span style="color:#fde68a">⚡ High — ${price} TRY > typical ${v.typical} TRY. Negotiate.</span>`;
  else out.innerHTML=`<span style="color:#6ee7b7">✅ Fair — ${price} TRY within typical ${v.typical} TRY</span>`;
}

// Accessibility
function toggleA11y(kind){
  const b=document.body;
  const btn=document.getElementById({contrast:'a11yContrast', large:'a11yLarge', dys:'a11yDys', motion:'a11yMotion'}[kind]);
  if(kind==='contrast'){ b.classList.toggle('high-contrast'); btn.classList.toggle('active'); }
  if(kind==='large'){ b.classList.toggle('large-text'); btn.classList.toggle('active'); }
  if(kind==='dys'){ b.classList.toggle('dyslexic'); btn.classList.toggle('active'); }
  if(kind==='motion'){ b.style.setProperty('--motion', b.classList.contains('no-motion')? '':'none'); b.classList.toggle('no-motion'); btn.classList.toggle('active'); }
  localStorage.setItem('welcome-a11y', JSON.stringify({contrast:b.classList.contains('high-contrast'), large:b.classList.contains('large-text'), dys:b.classList.contains('dyslexic')}));
}
function loadA11y(){
  const s=JSON.parse(localStorage.getItem('welcome-a11y')||'{}');
  if(s.contrast) document.body.classList.add('high-contrast');
  if(s.large) document.body.classList.add('large-text');
  if(s.dys) document.body.classList.add('dyslexic');
}

// Climate
const climateTemps={
  ist:[6,7,10,15,20,24,26,26,22,17,12,8],
  cap:[0,2,7,12,16,20,23,23,19,13,7,2],
  ant:[10,11,14,18,22,26,29,29,26,21,16,11],
  izm:[9,10,13,17,22,27,30,30,26,20,14,10],
  pam:[6,7,11,16,21,26,29,29,25,19,12,7],
  ank:[0,2,7,12,17,21,24,24,19,13,7,2],
  bod:[11,11,14,18,22,26,29,29,26,21,17,12],
  fet:[10,11,14,18,22,26,29,29,26,21,15,11],
  mar:[4,6,10,15,20,26,30,30,26,19,11,5],
  tra:[7,7,9,12,16,19,22,23,20,16,12,9],
  kon:[1,3,8,13,18,22,26,26,21,15,8,3],
  gaz:[5,7,11,16,21,26,30,30,26,19,11,6],
};
function renderClimate(){
  const sel=document.getElementById('climatePlace');
  const grid=document.getElementById('climateGrid');
  if(!sel||!grid) return;
  if(!sel.children.length){
    places.forEach(p=>{ const o=document.createElement('option'); o.value=p.id; o.textContent=p.name; sel.appendChild(o); });
  }
  const id=sel.value||'ist';
  const temps=climateTemps[id]||climateTemps['ist'];
  grid.innerHTML='';
  const months=['J','F','M','A','M','J','J','A','S','O','N','D'];
  temps.forEach((t,i)=>{
    const h=6 + (t/30)*28;
    const div=document.createElement('div');
    div.className='climate-bar';
    div.innerHTML=`<div class="climate-fill" style="height:${h}px" title="${months[i]}: ${t}°C"></div><div style="position:absolute;bottom:2px;left:50%;transform:translateX(-50%);font-size:8px;color:#9aa0c2">${months[i]}</div><div style="position:absolute;top:2px;left:50%;transform:translateX(-50%);font-size:9px;color:#f1f3ff;font-weight:700">${t}°</div>`;
    div.style.position='relative';
    grid.appendChild(div);
  });
}
let lastPlan=null;
document.addEventListener('DOMContentLoaded',()=>{
  initMap(); renderPlaces(); renderPhrases(); renderHeroPhrases();
  const c=document.getElementById('pInterests');
  if(c){
    ['history','nature','beach','food','balloon'].forEach(i=>{
      const label=document.createElement('label');
      label.style.cssText='font-size:12px;display:flex;gap:4px;align-items:center;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.10);padding:6px 10px;border-radius:999px;cursor:pointer;color:#f1f3ff';
      label.innerHTML=`<input type="checkbox" value="${i}"> ${i}`;
      c.appendChild(label);
    });
  }
  renderFood(); renderQuiz(); renderSOS(); calcBudget(); renderClimate(); renderScam(); renderJournal(); renderRoutePicks(); loadA11y();
  const s=JSON.parse(localStorage.getItem('welcome-sos')||'null');
  if(s){ document.getElementById('sosName').value=s.name||''; document.getElementById('sosBlood').value=s.blood||''; document.getElementById('sosHotel').value=s.hotel||''; document.getElementById('sosContact').value=s.contact||''; document.getElementById('sosEmbassy').value=s.embassy||''; document.getElementById('sosInsurance').value=s.insurance||''; }
});
