const records=JSON.parse(document.getElementById('dataset').textContent);
const $=id=>document.getElementById(id);
const fmt=n=>Number(n).toLocaleString('en-US');
const esc=v=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const mobilityLabel={Conj:'Predicted conjugative',mob_unconj:'Predicted mobilizable',unmob:'Predicted non-mobilizable'};
const sourceLabels={Manhole:'Sewer manhole','Pig-I':'Pig-farm wastewater influent',River:'River water','WWTP-I':'Treatment-plant influent','WWTP-E':'Treatment-plant effluent','WWTP-S':'Activated sludge','Pig-E':'Pig-farm wastewater effluent','Pig-S':'Pig-farm sludge','Fishing water':'Fishery water',Marine:'Marine water',BB:'Bathing beach',Unspecified:'Unspecified'};
const specimens=SPECIMEN_IDS.map(id=>records.find(r=>r.id===id));
const specimenCopy=[
 {title:'Beneath the city.',story:'A sewer manhole connects this specimen to human-associated wastewater. Its plasmid carries tet(A), alongside annotations for several other resistance markers.'},
 {title:'At the farm boundary.',story:'This specimen comes from pig-farm wastewater influent. The same tet(A) marker appears on a different-sized plasmid, with a different predicted mobility class.'},
 {title:'In open water.',story:'This river-water specimen carries tet(A) too. The recurring marker is a clue to investigate. These three records alone do not tell us how it arrived.'}
];
const investigations=[
 {id:'context',tag:'GENETIC CONTEXT',title:'Compare the full plasmid sequences.',teaser:'Does the same marker sit in closely related genetic surroundings?',question:'Are these plasmids closely related, or do they carry the same marker in different genetic contexts?',first:'Retrieve the three assemblies by isolate and contig ID. With a genomics mentor, compare sequence similarity, coverage and the regions around tet(A).',reveals:'Whether the marker occurs on closely related plasmid sequences, and which neighbouring sequence features they share.',open:'Even a close match would leave the direction, timing and actual route of movement unresolved.'},
 {id:'time',tag:'TIME & PERSISTENCE',title:'Revisit the places over time.',teaser:'Is this a recurring pattern or a one-off observation?',question:'Does the marker persist, and do changes in different compartments occur in a consistent order?',first:'Find out whether compatible repeat samples already exist. Design matched collection times, recovery methods and environmental measurements before proposing fieldwork.',reveals:'Repeated observations could reveal persistence and temporal order, creating better hypotheses about shared sources or movement.',open:'Timing alone would not prove transmission. Rainfall, wastewater flows, recovery methods and shared inputs could explain the pattern.'},
 {id:'sampling',tag:'THE SAMPLING DESIGN',title:'Make the methods comparable.',teaser:'How much of the pattern comes from the way samples were collected?',question:'Which differences remain when sampling, laboratory recovery and analysis methods are made comparable?',first:'Audit the sample metadata with the study team. Define a comparable subset and account for multiple plasmids from the same isolate before estimating differences.',reveals:'A matched design would reduce differences created by collection and laboratory methods. The filter above is an exploratory first look, not that full adjustment.',open:'A matched subset would still not automatically represent all Hong Kong. Site coverage and the population being sampled would remain important.'},
 {id:'phenotype',tag:'GENE & FUNCTION',title:'Check measured resistance.',teaser:'What happened when the organism was tested in the laboratory?',question:'How does this genetic annotation relate to the measured resistance of the E. coli isolate?',first:'Look for susceptibility results linked to these exact isolate IDs in the study data. Ask a microbiology mentor to verify the assay and interpretation.',reveals:'Matching susceptibility results could connect a genetic clue to an observed laboratory phenotype in the isolate.',open:'The result would not establish a person’s exposure, an infection, or a clinical treatment need.'}
];
let saved={};try{saved=JSON.parse(localStorage.getItem('ftr-meeting-v1')||'{}')}catch{}
const state={sample:0,visited:new Set([0]),marker:MARKERS[0].id,lens:'all',category:'all',query:'',page:1,choice:investigations.some(c=>c.id===saved.choice)?saved.choice:null,note:typeof saved.note==='string'?saved.note.slice(0,3000):'',archiveOrigin:'list'};
let lastFocus=null;let toastTimer;
function toast(message){$('toast').textContent=message;$('toast').hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').hidden=true,3200)}
function showDialog(id){lastFocus=document.activeElement;$(id).showModal();document.body.style.overflow='hidden'}
document.querySelectorAll('dialog').forEach(dialog=>{
 dialog.querySelector('.close-dialog').addEventListener('click',()=>dialog.close());
 dialog.addEventListener('click',event=>{if(event.target===dialog){const b=dialog.getBoundingClientRect();if(event.clientX<b.left||event.clientX>b.right||event.clientY<b.top||event.clientY>b.bottom)dialog.close()}});
 dialog.addEventListener('close',()=>{document.body.style.overflow='';lastFocus?.focus()});
});
document.querySelectorAll('[data-open]').forEach(button=>button.addEventListener('click',()=>showDialog(button.dataset.open)));
function renderSpecimen(){
 const r=specimens[state.sample],c=specimenCopy[state.sample];
 document.querySelectorAll('[data-sample]').forEach(button=>{const on=Number(button.dataset.sample)===state.sample;button.setAttribute('aria-selected',String(on));button.tabIndex=on?0:-1});
 $('sample-panel').setAttribute('aria-labelledby','sample-tab-'+state.sample);
 $('sample-category').textContent=CATEGORY_LABELS[r.category];$('sample-title').textContent=c.title;$('sample-story').textContent=c.story;
 $('sample-length').textContent=fmt(r.length)+' bp';$('sample-markers').textContent=new Set(r.markers).size;
 $('sample-mobility').textContent=mobilityLabel[r.mobility]||r.mobility;
 $('specimen-progress').textContent=state.visited.size+' of 3';
 const markers=[...new Set(r.markers)],n=markers.length,theta=360/n,circ=2*Math.PI*116;
 const arcs=markers.map((marker,i)=>{const shared=marker===MARKERS[0].id;return '<circle cx="160" cy="160" r="116" fill="none" stroke="'+(shared?'#bc8b35':'#8fa982')+'" stroke-width="'+(shared?'15':'9')+'" stroke-dasharray="'+(circ/n-7)+' '+(circ-circ/n+7)+'" transform="rotate('+(i*theta-90)+' 160 160)" stroke-linecap="butt"/>'}).join('');
 const ticks=Array.from({length:48},(_,i)=>'<line x1="160" y1="17" x2="160" y2="'+(i%4===0?'25':'21')+'" stroke="#91a47f" stroke-width="'+(i%4===0?'1.3':'.6')+'" transform="rotate('+(i*7.5)+' 160 160)"/>').join('');
 $('gene-drawing').innerHTML='<svg viewBox="0 0 320 320"><circle cx="160" cy="160" r="140" fill="none" stroke="#c3ceb2" stroke-width=".7"/><circle cx="160" cy="160" r="116" fill="none" stroke="#d4dcc5" stroke-width="9"/>'+ticks+arcs+'<circle cx="160" cy="160" r="95" fill="none" stroke="#b2c19f" stroke-dasharray="1 5"/><circle cx="160" cy="160" r="71" fill="none" stroke="#ced7bb" stroke-width=".6"/></svg>';
 $('gene-subtitle').textContent=markers.length+' distinct marker subtypes';
 $('sample-panel').classList.remove('changing');requestAnimationFrame(()=>$('sample-panel').classList.add('changing'));
}
function selectSpecimen(index){state.sample=index;state.visited.add(index);renderSpecimen()}
document.querySelectorAll('[data-sample]').forEach(button=>{
 button.addEventListener('click',()=>selectSpecimen(Number(button.dataset.sample)));
 button.addEventListener('keydown',event=>{let index=Number(button.dataset.sample);if(event.key==='ArrowRight')index=(index+1)%3;else if(event.key==='ArrowLeft')index=(index+2)%3;else if(event.key==='Home')index=0;else if(event.key==='End')index=2;else return;event.preventDefault();selectSpecimen(index);$('sample-tab-'+index).focus()});
});
$('compare-body').innerHTML=specimens.map(r=>'<tr><td>'+esc(sourceLabels[r.source])+'</td><td>'+fmt(r.length)+' bp</td><td>'+esc(mobilityLabel[r.mobility])+'</td><td><i>tet(A)</i></td></tr>').join('');
$('marker').innerHTML=MARKERS.map(m=>'<option value="'+esc(m.id)+'">'+esc(m.label)+'</option>').join('');
function currentMarker(){return MARKERS.find(m=>m.id===state.marker)}
function renderChart(){
 const summary=summarize(records,state.marker,state.lens),m=currentMarker();
 $('marker-family').textContent=m.family+' marker';
 if(!$('chart-bars').children.length)$('chart-bars').innerHTML=CATEGORIES.map(category=>'<div class="chart-row" data-category="'+category+'"><div class="chart-row-head"><strong>'+CATEGORY_LABELS[category]+'</strong><span><span class="ratio"></span><b class="percent"></b></span></div><div class="bar-track"><div class="bar-fill" style="width:0%"></div></div></div>').join('');
 summary.groups.forEach(g=>{const row=document.querySelector('.chart-row[data-category="'+g.category+'"]');row.querySelector('.ratio').textContent=fmt(g.count)+' / '+fmt(g.total);row.querySelector('.percent').textContent=g.percent.toFixed(1)+'%';row.querySelector('.bar-fill').style.width=g.percent+'%'});
 $('unclassified-note').textContent=summary.unclassified?summary.unclassified+' record has no source category. It is included in the overall total and excluded from these bars.':'All records in this view have a source category.';
 $('lens-count').textContent=fmt(summary.count);$('lens-denominator').textContent='of '+fmt(summary.total)+' plasmid records contain '+m.label+'.';
 $('lens-explanation').textContent=state.lens==='all'?'This view combines records recovered with and without antibiotic selection. Switch the method to see how that choice changes the observed proportions.':'These isolates were recovered without antibiotic selection in the laboratory. The changed proportions show why the recovery method matters. They do not isolate a causal effect.';
 state.page=1;
}
$('marker').addEventListener('change',e=>{state.marker=e.target.value;renderChart()});
document.querySelectorAll('input[name=lens]').forEach(input=>input.addEventListener('change',e=>{state.lens=e.target.value;renderChart()}));
function archiveRecords(){return filterRecords(records,{marker:state.marker,lens:state.lens,category:state.category,query:state.query})}
function renderArchive(){
 const filtered=archiveRecords(),pages=Math.max(1,Math.ceil(filtered.length/20));state.page=Math.min(Math.max(1,state.page),pages);
 const start=(state.page-1)*20,shown=filtered.slice(start,start+20);
 $('archive-context').textContent=currentMarker().label+' · '+(state.lens==='all'?'all recovered records':'without antibiotic selection')+'. Each row is a plasmid record. Open one to inspect its annotations.';
 $('archive-body').innerHTML=shown.length?shown.map(r=>'<tr><td><button class="record-link" data-record="'+esc(r.id)+'">'+esc(r.id)+'</button></td><td>'+esc(sourceLabels[r.source]||r.source)+'<small>'+esc(CATEGORY_LABELS[r.category]||r.category)+'</small></td><td>'+fmt(r.length)+'</td><td>'+ (r.selected?'With selection':'Without selection')+'</td></tr>').join(''):'<tr><td colspan="4">No records match these filters. Try a different search or source category.</td></tr>';
 $('record-count').textContent=filtered.length?'Showing '+fmt(start+1)+'–'+fmt(Math.min(start+20,filtered.length))+' of '+fmt(filtered.length)+' records':'0 matching records';
 $('page-label').textContent=state.page+' / '+pages;$('previous-page').disabled=state.page<=1;$('next-page').disabled=state.page>=pages;$('download-records').disabled=!filtered.length;
 $('archive-body').querySelectorAll('[data-record]').forEach(b=>b.addEventListener('click',()=>showRecord(b.dataset.record,true)));
}
function openArchive(){state.query='';state.category='all';state.page=1;state.archiveOrigin='list';$('record-search').value='';$('category-filter').value='all';$('archive-list').hidden=false;$('record-detail').hidden=true;$('archive-kicker').textContent='THE RECORD ROOM';renderArchive();showDialog('archive-dialog')}
$('open-archive').addEventListener('click',openArchive);
$('record-search').addEventListener('input',e=>{state.query=e.target.value;state.page=1;renderArchive()});
$('category-filter').addEventListener('change',e=>{state.category=e.target.value;state.page=1;renderArchive()});
$('previous-page').addEventListener('click',()=>{state.page--;renderArchive()});$('next-page').addEventListener('click',()=>{state.page++;renderArchive()});
function showRecord(id,fromArchive=false){
 const r=records.find(r=>r.id===id);if(!r)return;
 $('archive-list').hidden=true;$('record-detail').hidden=false;$('archive-kicker').textContent='AN ORIGINAL PLASMID RECORD';
 const uniques=[...new Set(r.markers)];
 $('record-detail').className='record-detail';
 $('record-detail').innerHTML=(fromArchive?'<button class="text-link return-link" id="return-archive">← Back to the filtered records</button>':'')+'<h3>'+esc(r.id)+'</h3><dl class="record-meta">'+[
 ['E. coli isolate ID',r.isolate],['Sampling compartment',sourceLabels[r.source]||r.source],['Source category',CATEGORY_LABELS[r.category]||r.category],['Plasmid length',fmt(r.length)+' bp'],['Circular assembly',r.circular?'Yes':'No'],['Predicted mobility',mobilityLabel[r.mobility]||r.mobility],['Laboratory recovery',r.selected?'With antibiotic selection':'Without antibiotic selection'],['Replicon labels',r.replicons.join(', ')||'Not reported'],['Resistance-gene annotations',r.annotationCount],['Distinct marker subtypes',uniques.length]
 ].map(([k,v])=>'<div><dt>'+esc(k)+'</dt><dd>'+esc(v)+'</dd></div>').join('')+'</dl><h4>Marker inventory</h4><div class="marker-tags">'+uniques.map(m=>'<span class="marker-tag '+(m===state.marker?'highlight':'')+'" title="'+esc(m)+'">'+esc(m.split('__')[1]||m)+(r.markers.filter(x=>x===m).length>1?' ×'+r.markers.filter(x=>x===m).length:'')+'</span>').join('')+'</div><p class="detail-caveat">Predicted mobility is a sequence-based annotation, not an observed transfer event. “Selection” describes laboratory recovery. The isolate ID does not identify a person or animal.</p><p style="margin-top:20px"><a class="record-link" href="https://github.com/xxqxxq1994/EC_Ecological-connectivity/blob/__SOURCE_COMMIT__/revused-plasmid-ARG.txt" target="_blank" rel="noopener">Find this ID in the published source table ↗</a></p>';
 if(fromArchive)$('return-archive').addEventListener('click',()=>{$('archive-list').hidden=false;$('record-detail').hidden=true;$('archive-kicker').textContent='THE RECORD ROOM';$('record-search').focus()});
 if(!$('archive-dialog').open)showDialog('archive-dialog');else{$('archive-dialog').scrollTop=0;$('record-detail').querySelector('button')?.focus()}
}
$('open-specimen').addEventListener('click',()=>showRecord(specimens[state.sample].id));
function downloadFile(name,text,mime){const blob=new Blob([text],{type:mime});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1500)}
$('download-records').addEventListener('click',()=>{const rs=archiveRecords();const slug=currentMarker().label.replace(/[^a-z0-9]+/gi,'-');downloadFile('Follow_the_Resistance_'+slug+'_'+state.lens+'_'+rs.length+'_records.csv','\ufeff'+csvFor(rs),'text/csv;charset=utf-8');toast('Saved '+fmt(rs.length)+' filtered records.')});
$('investigation-choices').innerHTML=investigations.map((c,i)=>'<button class="choice-button" data-choice="'+c.id+'" aria-pressed="false" aria-controls="investigation-brief"><span class="choice-index">0'+(i+1)+'</span><span><span class="choice-tag">'+c.tag+'</span><h3>'+c.title+'</h3><p>'+c.teaser+'</p></span><span class="choice-arrow" aria-hidden="true">↗</span></button>').join('');
function persistChoice(){try{localStorage.setItem('ftr-meeting-v1',JSON.stringify({choice:state.choice,note:state.note}));$('save-status').textContent='Saved on this device. Export a copy for the team.'}catch{$('save-status').textContent='Use Save the meeting brief to keep a copy.'}}
function renderBrief(){
 const c=investigations.find(x=>x.id===state.choice);$('investigation-brief').hidden=!c;
 document.querySelectorAll('[data-choice]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.choice===state.choice)));
 if(!c)return;$('brief-title').textContent=c.title;$('brief-question').textContent=c.question;$('brief-first').textContent=c.first;$('brief-reveals').textContent=c.reveals;$('brief-open').textContent=c.open;$('team-note').value=state.note;
}
document.querySelectorAll('[data-choice]').forEach(b=>b.addEventListener('click',()=>{state.choice=b.dataset.choice;renderBrief();persistChoice();$('investigation-brief').scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'nearest'})}));
$('team-note').addEventListener('input',e=>{state.note=e.target.value;persistChoice()});
$('download-brief').addEventListener('click',()=>{
 const c=investigations.find(x=>x.id===state.choice);if(!c)return;const s=summarize(records,state.marker,state.lens);
 const brief=['FOLLOW THE RESISTANCE','A first investigation for the HKU One Health Team Challenge','Meeting brief · exported '+new Date().toLocaleDateString('en-GB',{timeZone:'Asia/Hong_Kong'}),'','THE OPENING CLUE','Three illustrative E. coli plasmid records from Hong Kong contain tet(A). All three were recovered without antibiotic selection. They are not a proven transmission chain.','',...specimens.map(r=>(sourceLabels[r.source]||r.source)+': '+r.id+' | '+fmt(r.length)+' bp | '+mobilityLabel[r.mobility]),'','THE DATA VIEW I EXPLORED',currentMarker().label+' | '+(state.lens==='all'?'all recovered records':'without antibiotic selection'),fmt(s.count)+' of '+fmt(s.total)+' plasmid records contain this marker.',...s.groups.map(g=>CATEGORY_LABELS[g.category]+': '+g.count+'/'+g.total+' ('+g.percent.toFixed(1)+'%)'),'These are dataset record proportions, not population prevalence. Isolates may contribute multiple records.','', 'MY NEXT INVESTIGATION',c.title,'','Question: '+c.question,'First practical step: '+c.first,'Could tell us: '+c.reveals,'Still unresolved: '+c.open,'','WHAT I WANT THE TEAM TO CHALLENGE',state.note.trim()||'(Add a question during the meeting.)','','A 15-MINUTE TEAM DISCUSSION','1. Play the case together (4 min).','2. Each person names one claim they trust and one assumption they would challenge (4 min).','3. Choose a beneficiary and one follow-up question (4 min).','4. Assign a first evidence check and a faculty reviewer (3 min).','','FIRST RELEASE BOUNDARY','Working: source records, marker and recovery filters, record search, CSV export, and this decision brief.','Proposed: follow-up investigations and learning evaluation. No new experimental results, prediction model, or live surveillance are claimed.','','SOURCES','Paper: https://www.nature.com/articles/s41467-025-62455-w','Table: https://github.com/xxqxxq1994/EC_Ecological-connectivity/blob/__SOURCE_COMMIT__/revused-plasmid-ARG.txt','Retrieved: 9 November 2026. Record unit: plasmid.','', 'The landscape and circular marker inventories are illustrations.'].join('\n');
 downloadFile('Follow_the_Resistance_Meeting_Brief.txt',brief,'text/plain;charset=utf-8');toast('Meeting brief saved.');
});
if(location.protocol==='file:'){
 const offline=document.querySelector('a[download][href="follow-the-resistance.html"]');if(offline){offline.textContent='You are viewing the offline copy';offline.removeAttribute('href');offline.removeAttribute('download')}
 const sourceLink=document.querySelector('a[download][href="data/source.tsv"]');if(sourceLink){sourceLink.href='https://raw.githubusercontent.com/xxqxxq1994/EC_Ecological-connectivity/__SOURCE_COMMIT__/revused-plasmid-ARG.txt';sourceLink.textContent='Original table online ↗';sourceLink.removeAttribute('download');sourceLink.target='_blank';sourceLink.rel='noopener'}
}
renderSpecimen();renderChart();renderBrief();
