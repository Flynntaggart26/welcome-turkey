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
    div.style.cssText='background:white;border:1px solid #f0dcc3;border-radius:14px;padding:12px;cursor:pointer;transition:.16s';
    div.innerHTML=`<div style="display:flex;justify-content:space-between;gap:8px"><b>${p.name}</b><span style="font-size:10px;padding:3px 7px;border-radius:999px;background:#fdf2e6;font-weight:700">${p.region}</span></div><div style="font-size:12px;color:#4b5563">${p.desc}</div><div style="font-size:11px;color:#6b7280;margin-top:4px">${p.best} • Mid €${p.budget.mid}/day • ${p.tip}</div>`;
    div.onclick=()=>{ map.setView([p.lat,p.lon], 8); p._marker.openPopup(); };
    div.onmouseenter=()=> div.style.transform='translateY(-1px)';
    div.onmouseleave=()=> div.style.transform='none';
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
    div.style.cssText='background:white;color:#1e1b4b;border:1px solid #f0dcc3;cursor:pointer';
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
    b.textContent=c; b.style.cssText=`padding:6px 10px;border-radius:999px;border:1px solid ${c===activeCat?'transparent':'rgba(255,255,255,.12)'};background:${c===activeCat?'linear-gradient(135deg,#f59e0b,#e11d48)':'rgba(255,255,255,.06)'};color:${c===activeCat?'white':'#9aa0c2'};font-weight:700;font-size:12px;cursor:pointer;backdrop-filter:blur(6px)`;
    b.onclick=()=>{catEl.dataset.active=c; renderPhrases();};
    catEl.appendChild(b);
  });
  catEl.dataset.active=activeCat;
  const list=document.getElementById('phrases');
  list.innerHTML='';
  phrases.filter(p=>p.cat===activeCat).forEach(ph=>{
    const txt=lang==='tr'? ph.tr : ph[lang];
    const row=document.createElement('div');
    row.style.cssText='display:flex;justify-content:space-between;gap:10px;align-items:center;padding:12px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.10);border-radius:14px;backdrop-filter:blur(8px);transition:.16s';
    row.onmouseenter=()=> row.style.borderColor='rgba(245,158,11,.22)';
    row.onmouseleave=()=> row.style.borderColor='rgba(255,255,255,.10)';
    row.innerHTML=`<div><b style="color:#f1f3ff">${ph.tr}</b> <span style="color:#9aa0c2">→</span> <b style="color:#fde68a">${txt}</b><div style="font-size:11px;color:#9aa0c2">${ph.cat}</div></div><button class="btn" style="background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.10);color:#f1f3ff" onclick="speak('${ph.tr.replace(/'/g,"\\'")}')">🔊</button>`;
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
  chips.innerHTML='';
  allergens.forEach(a=>{
    const b=document.createElement('button');
    const active=selectedAllergens.has(a);
    b.textContent=a;
    b.style.cssText=`padding:6px 10px;border-radius:999px;border:1px solid ${active?'#c03a2b':'#f0dcc3'};background:${active?'#c03a2b':'white'};color:${active?'white':'#7a819c'};font-weight:700;font-size:12px;cursor:pointer`;
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
    div.innerHTML=`<b>${f.name}</b> <span style="font-size:11px;color:#7a819c">• ${f.region}</span><div style="font-size:12px;color:#4b5563;margin-top:4px">${f.desc}</div><div style="font-size:11px;margin-top:4px">${f.allergens.length? '⚠️ '+f.allergens.join(', ') : '✅ No major allergens'}</div><div style="font-size:11px;color:#0e7490;font-weight:700">${f.price}</div>`;
    grid.appendChild(div);
  });
  if(!grid.children.length) grid.innerHTML='<div style="color:#7a819c">No dishes without selected allergens.</div>';
}
function updateAllergyCard(){
  const el=document.getElementById('allergyCard');
  if(selectedAllergens.size===0){ el.textContent='Select allergens above to generate card.'; return; }
  const list=[...selectedAllergens].join(', ');
  el.innerHTML=`<b>⚠️ Alerjim var:</b> ${list}<br><span style="font-size:12px">Lütfen yemeğimde <b>${list}</b> olmasın. Teşekkürler!</span><br><span style="font-size:11px;color:#7a819c">I have allergy to ${list} — please no ${list}.</span>`;
}
// Quiz
function renderQuiz(){
  const area=document.getElementById('quizArea');
  const res=document.getElementById('quizResult');
  res.style.display='none';
  quizIdx=0; quizScore=0;
  showQuizQ();
}
function showQuizQ(){
  const q=quizData[quizIdx];
  const area=document.getElementById('quizArea');
  area.innerHTML=`<div style="font-weight:700">${quizIdx+1}/5 — ${q.q}</div><div style="margin-top:10px;display:grid;gap:8px">${q.opts.map((o,i)=>`<button class="quiz-opt" onclick="checkQuiz(${i})">${o}</button>`).join('')}</div>`;
}
function checkQuiz(i){
  const q=quizData[quizIdx];
  const correct=i===q.a;
  if(correct) quizScore++;
  const area=document.getElementById('quizArea');
  area.innerHTML=`<div style="font-weight:700">${quizIdx+1}/5 — ${q.q}</div><div style="margin-top:8px;padding:10px;border-radius:10px;background:${correct?'#ecfdf5':'#fef2f2'};border:1px solid ${correct?'#a7f3d0':'#fecaca'}">${correct?'✅ Correct!':'❌ Wrong.'} ${q.exp}</div><button class="btn primary" style="margin-top:10px" onclick="nextQuiz()">${quizIdx<4?'Next →':'See result'}</button>`;
}
function nextQuiz(){
  quizIdx++;
  if(quizIdx<5) showQuizQ();
  else {
    const res=document.getElementById('quizResult');
    res.style.display='block';
    res.innerHTML=`<b>Score: ${quizScore}/5</b> — ${quizScore>=4?'Excellent! You know Turkish etiquette.':'Keep practicing — check Essentials.'}<div style="margin-top:8px"><button class="btn" onclick="renderQuiz()">Retry</button></div>`;
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
  if(!data||!data.name){ out.innerHTML='<div style="font-size:12px;color:#7a819c">Fill and save to generate QR card.</div>'; return; }
  out.innerHTML=`<div style="margin-top:10px;padding:14px;background:white;border:1px solid #f0dcc3;border-radius:12px;display:flex;gap:12px;flex-wrap:wrap">
    <div style="flex:1;min-width:200px"><b>${data.name}</b><div style="font-size:12px;color:#4b5563">Blood: ${data.blood||'—'} • Hotel: ${data.hotel||'—'}</div><div style="font-size:11px;color:#7a819c">Contact: ${data.contact||'—'} • Embassy: ${data.embassy||'—'} • Insurance: ${data.insurance||'—'}</div><div style="font-size:10px;color:#7a819c;margin-top:6px">Show this offline. Data stays in your browser (localStorage).</div></div>
    <div id="sosQr" style="width:96px;height:96px;background:white;border:1px solid #f0dcc3;border-radius:8px;display:grid;place-items:center"></div>
  </div>`;
  setTimeout(()=>{
    const el=document.getElementById('sosQr');
    if(!el) return;
    el.innerHTML='';
    const text=`SOS ${data.name} | Blood:${data.blood} | Hotel:${data.hotel} | Contact:${data.contact}`;
    try{ new QRCode(el, {text, width:88, height:88, colorDark:'#1e1b4b', colorLight:'#ffffff', correctLevel: QRCode.CorrectLevel.M}); }catch(e){}
  }, 80);
}
function generatePlan(){
  const days=parseInt(document.getElementById('pDays').value);
  const budget=document.getElementById('pBudget').value;
  const interests=[...document.querySelectorAll('#pInterests input:checked')].map(c=>c.value);
  const picks=days===3? ['ist','cap','ist'] : days===5? ['ist','cap','ant','izm','ist'] : ['ist','ank','cap','ant','fet','izm','ist'];
  const plan=picks.slice(0,days).map(id=> places.find(p=>p.id===id));
  lastPlan=plan;
  const total=plan.reduce((a,p)=>a+p.budget[budget],0);
  document.getElementById('planOut').innerHTML=`<div style="margin-top:10px;padding:12px;background:#f0f9ff;border:1px solid #cbd5e1;border-radius:12px"><b>${days}-day plan • ~€${total} (mid, per person, no flights)</b><ol style="margin:8px 0 0 18px;font-size:13px">${plan.map((p,i)=>`<li><b>Day ${i+1}: ${p.name}</b> — ${p.desc} <span style="color:#6b7280">(${p.highlights.join(', ')})</span></li>`).join('')}</ol></div>`;
}
function exportPlanPDF(){ if(!lastPlan){ alert('Generate a plan first'); return; } window.print(); }
function exportPlanICS(){
  if(!lastPlan){ alert('Generate a plan first'); return; }
  let ics='BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Welcome Turkey//EN\n';
  lastPlan.forEach((p,i)=>{
    const d=new Date(); d.setDate(d.getDate()+i);
    const y=d.toISOString().slice(0,10).replace(/-/g,'');
    ics+=`BEGIN:VEVENT\nDTSTART:${y}T080000Z\n DTEND:${y}T200000Z\nSUMMARY:${p.name}\nDESCRIPTION:${p.desc.replace(/,/g,' ')}\nEND:VEVENT\n`;
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
  document.getElementById('budgetOut').innerHTML=`<b>Estimate: €${total}</b> for ${trav} traveler(s) × ${days} days (${tier})<br><span style="font-size:11px;color:#6b7280">Avg €${avg.toFixed(0)}/day per person • Flights extra • Rate ~TRY 36/€</span>`;
}
function calcTip(){
  const bill=parseFloat(document.getElementById('tipBill').value)||0;
  const pct=parseInt(document.getElementById('tipPct').value)||10;
  const tip=bill*pct/100;
  const total=bill+tip;
  const eur=(total/36).toFixed(1);
  document.getElementById('tipOut').innerHTML=`Tip ${pct}%: <b>${tip.toFixed(2)} TRY</b> • Total: <b>${total.toFixed(2)} TRY</b> (~€${eur})`;
}
document.addEventListener('DOMContentLoaded',()=>{
  initMap(); renderPlaces(); renderPhrases(); renderHeroPhrases();
  const c=document.getElementById('pInterests');
  ['history','nature','beach','food','balloon'].forEach(i=>{
    const label=document.createElement('label');
    label.style.cssText='font-size:12px;display:flex;gap:4px;align-items:center;background:white;border:1px solid #f0dcc3;padding:6px 10px;border-radius:999px;cursor:pointer';
    label.innerHTML=`<input type="checkbox" value="${i}"> ${i}`;
    c.appendChild(label);
  });
  renderFood(); renderQuiz(); renderSOS(); calcBudget();
  // load SOS fields
  const s=JSON.parse(localStorage.getItem('welcome-sos')||'null');
  if(s){ document.getElementById('sosName').value=s.name||''; document.getElementById('sosBlood').value=s.blood||''; document.getElementById('sosHotel').value=s.hotel||''; document.getElementById('sosContact').value=s.contact||''; document.getElementById('sosEmbassy').value=s.embassy||''; document.getElementById('sosInsurance').value=s.insurance||''; }
});
