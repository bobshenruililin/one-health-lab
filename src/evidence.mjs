export const CATEGORIES = ['Human', 'Animal', 'Environment'];
export const CATEGORY_LABELS = {Human:'Human-associated', Animal:'Animal-associated', Environment:'Environmental', Unspecified:'Unspecified'};
export const MARKERS = [
  {id:'tetracycline__tet(A)', label:'tet(A)', family:'Tetracycline'},
  {id:'sulfonamide__sul2', label:'sul2', family:'Sulfonamide'},
  {id:'beta_lactam__CTX-M-55', label:'CTX-M-55', family:'Beta-lactam'},
  {id:'beta_lactam__TEM-1', label:'TEM-1', family:'Beta-lactam'},
  {id:'quinolone__QnrS1', label:'QnrS1', family:'Quinolone'},
  {id:'florfenicol__floR', label:'floR', family:'Florfenicol'},
];
export const SPECIMEN_IDS = ['2ndManhole-barcode01-contig_7','pig-inf-barcode52-contig_7','RMB-NoR-barcode52-contig_4'];
export function hasMarker(record, marker) { return record.markers.includes(marker); }
export function applyLens(records, lens) { return lens === 'unselected' ? records.filter(r => !r.selected) : records; }
export function summarize(records, marker, lens='all') {
  const pool=applyLens(records,lens);
  const matches=pool.filter(r=>hasMarker(r,marker));
  const groups=CATEGORIES.map(category=>{const group=pool.filter(r=>r.category===category);const count=group.filter(r=>hasMarker(r,marker)).length;return {category,total:group.length,count,percent:group.length?100*count/group.length:0};});
  return {total:pool.length,count:matches.length,groups,unclassified:pool.filter(r=>!CATEGORIES.includes(r.category)).length};
}
export function filterRecords(records,{marker='',lens='all',category='all',query=''}={}) {
  const q=query.trim().toLowerCase();
  return applyLens(records,lens).filter(r=>(!marker||hasMarker(r,marker))&&(category==='all'||r.category===category)&&(!q||[r.id,r.isolate,r.source,r.category,...r.markers].join(' ').toLowerCase().includes(q)));
}
export function csvFor(records) {
  const quote=v=>'"'+String(v).replaceAll('"','""')+'"';
  const head=['Plasmid ID','E. coli isolate ID','Source category','Source code','Length (bp)','Circular assembly','Predicted mobility code','Antibiotic selection during recovery','Resistance marker annotations'];
  return [head,...records.map(r=>[r.id,r.isolate,r.category,r.source,r.length,r.circular?'Y':'N',r.mobility,r.selected?'Y':'N',r.markers.join('; ')])].map(row=>row.map(quote).join(',')).join('\r\n');
}
