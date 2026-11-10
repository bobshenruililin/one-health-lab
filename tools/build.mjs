import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
const root=path.resolve(import.meta.dirname,'..');
const read=p=>fs.readFile(path.join(root,p),'utf8');
const [template,styles,engine,app,art,recordsText,source]=await Promise.all(['src/index.template.html','src/styles.css','src/evidence.mjs','src/app.js','public/city-water.svg','public/data/records.json','data/source.tsv'].map(read));
const provenance=JSON.parse(await read('data/provenance.json'));
const commit=provenance.commit;
const records=JSON.parse(recordsText);
const digest=crypto.createHash('sha256').update(source).digest('hex');
if(digest!==provenance.canonical_sha256)throw new Error('Source checksum mismatch. Run npm run data and review the pinned source.');
if(records.length!==provenance.rows)throw new Error('Unexpected record count. Run npm run data to rebuild the derived cache.');
const html=template.replace('/*__STYLES__*/',styles).replace('__CITY_ART__',art.replace(/<\?xml[^>]*>/,''))
 .replace('__RECORDS__',JSON.stringify(records).replaceAll('<','\\u003c'))
 .replace('/*__ENGINE__*/',engine.replace(/^export /gm,''))
 .replace('/*__APP__*/',app).replaceAll('__SOURCE_COMMIT__',commit);
if(/__CITY_ART__|__RECORDS__|__SOURCE_COMMIT__|\/\*__/.test(html))throw new Error('Unresolved build placeholder');
await fs.mkdir(path.join(root,'dist/data'),{recursive:true});
await fs.writeFile(path.join(root,'dist/index.html'),html);
await fs.writeFile(path.join(root,'dist/follow-the-resistance.html'),html);
await fs.writeFile(path.join(root,'dist/data/source.tsv'),source);
await fs.writeFile(path.join(root,'dist/data/provenance.json'),JSON.stringify(provenance,null,2)+'\n');
console.log(JSON.stringify({built:true,records:records.length,html_bytes:Buffer.byteLength(html),standalone:true,source_sha256:digest}));
