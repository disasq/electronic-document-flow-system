'use strict';
const $=s=>document.querySelector(s),model=EDFS,key='edfs-demo-v1';
let state,actor='author',selected=null,openedRevision,stale=false,saved=localStorage.getItem(key);
try{state=JSON.parse(saved);if(!state||state.schema!==1)state=model.seed()}catch{state=model.seed()}
const name=id=>model.users.find(u=>u.id===id)?.name||'Unassigned';
const node=(tag,text,cls)=>{const e=document.createElement(tag);if(text!==undefined)e.textContent=text;if(cls)e.className=cls;return e};
function markStale(){stale=true;$('#message').textContent='Data changed in another tab. Reload this tab before making changes.';$('#new').disabled=true;$('#reset').disabled=true;document.querySelectorAll('#actions button, #export, #download').forEach(b=>b.disabled=true)}
function checkFresh(){if(stale||localStorage.getItem(key)!==saved){markStale();return false}return true}
function persist(){saved=JSON.stringify(state);localStorage.setItem(key,saved)}
function guard(fn,detail=false,mutates=true){if(!checkFresh()){if(detail)$('#detail-message').textContent='Reload this tab before making changes.';return}try{fn();if(mutates){persist();render()}(detail?$('#detail-message'):$('#message')).textContent=''}catch(e){(detail?$('#detail-message'):$('#message')).textContent=e.message}}
model.users.forEach(u=>{const o=node('option',u.name+' · '+u.role);o.value=u.id;$('#persona').append(o)});
$('#persona').onchange=e=>{actor=e.target.value;$('#detail').close();selected=null;render()};
function render(){
 const docs=model.list(state,actor),counts=[['Visible documents',docs.length],['Awaiting approval',docs.filter(d=>d.status==='in_review').length],['Drafts and revisions',docs.filter(d=>['draft','changes_requested'].includes(d.status)).length],['Approved and archived',docs.filter(d=>['approved','archived'].includes(d.status)).length]];
 $('#stats').replaceChildren(...counts.map(([a,b])=>{const e=node('div',undefined,'stat');e.append(node('span',a),node('strong',b));return e}));
 $('#new').hidden=model.users.find(u=>u.id===actor).role!=='employee';
 $('#new').disabled=stale;$('#reset').disabled=stale;
 const list=model.list(state,actor,$('#search').value,$('#status').value);$('#documents').replaceChildren();$('#empty').hidden=!!list.length;
 for(const d of list){const row=node('tr'),first=node('td'),b=node('button',d.title,'open');b.onclick=()=>open(d.id);first.append(b,node('small',d.id+' · '+d.type+' · '+name(d.owner)));const status=node('td');status.append(node('span',model.labels[d.status],'pill '+d.status));row.append(first,status,node('td','v'+d.version),node('td',d.due||'No deadline'));const last=node('td');const go=node('button','Open','textbutton');go.setAttribute('aria-label','Open '+d.id);go.onclick=()=>open(d.id);last.append(go);row.append(last);$('#documents').append(row)}
 if(selected&&$('#detail').open)drawDetail();
}
function action(label,fn,cls='secondary'){const b=node('button',label,cls);b.disabled=stale;b.onclick=()=>guard(fn,true);$('#actions').append(b)}
function open(id){selected=id;$('#detail-message').textContent='';drawDetail();$('#detail').showModal()}
function drawDetail(){
 const d=model.get(state,selected,actor);openedRevision=d.revision;$('#docid').textContent=d.id;$('#doctitle').textContent=d.title;
 $('#docmeta').replaceChildren(node('span',model.labels[d.status],'pill '+d.status),node('span','Current v'+d.version),node('span','Author: '+name(d.owner)),node('span','Reviewer: '+name(d.reviewer)),node('span','Due: '+(d.due||'Not set')));
 $('#doccontent').replaceChildren();$('#actions').replaceChildren();
 const editable=d.owner===actor&&['draft','changes_requested'].includes(d.status);
 if(editable){const lt=node('label','Title'),title=node('input');title.id='edit-title';title.value=d.title;title.maxLength=120;lt.append(title);const lb=node('label','Document content'),body=node('textarea');body.id='edit-body';body.value=d.body;body.rows=7;body.maxLength=20000;lb.append(body);$('#doccontent').append(lt,lb);action('Save new version',()=>model.change(state,d.id,actor,'save',{title:title.value,body:body.value},openedRevision));const lr=node('label','Assign reviewer'),r=node('select');r.id='reviewer';model.users.filter(u=>u.role==='reviewer'&&u.id!==actor).forEach(u=>{const o=node('option',u.name);o.value=u.id;r.append(o)});lr.append(r);$('#actions').append(lr);action('Submit for review',()=>model.change(state,d.id,actor,'submit',{reviewer:r.value},openedRevision),'primary')}
 else $('#doccontent').append(node('div',d.body,'content'));
 if(d.reviewer===actor&&d.status==='in_review'){const label=node('label','Decision comment'),c=node('textarea');c.id='decision-comment';c.rows=3;label.append(c);$('#actions').append(label);action('Approve version '+d.reviewVersion,()=>model.change(state,d.id,actor,'approve',{comment:c.value},openedRevision),'primary');action('Request changes',()=>model.change(state,d.id,actor,'return',{comment:c.value},openedRevision))}
 if(actor==='admin'&&d.status==='approved')action('Archive approved document',()=>model.change(state,d.id,actor,'archive',{},openedRevision),'primary');
 $('#versions').replaceChildren(...d.versions.map(v=>{const b=node('button','v'+v.number,'secondary');b.onclick=()=>{$('#doccontent').replaceChildren(node('p','Read-only snapshot · version '+v.number,'muted'),node('h3',v.title),node('div',v.body,'content'))};return b}));
 $('#history').replaceChildren(...model.history(state,d.id,actor).map(e=>node('li',new Date(e.time).toLocaleString()+' · '+name(e.actor)+' · '+e.action+' · v'+e.version+(e.comment?'\n'+e.comment:''))));
 $('#export').disabled=stale;$('#download').disabled=stale;
}
function download(filename,content,type){const url=URL.createObjectURL(new Blob([content],{type})),a=node('a');a.href=url;a.download=filename;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)}
$('#export').onclick=()=>guard(()=>download(selected+'-activity.json',JSON.stringify(model.history(state,selected,actor),null,2),'application/json'),true,false);
$('#download').onclick=()=>guard(()=>{const d=model.get(state,selected,actor);download(d.id+'-v'+d.version+'.txt',d.title+'\n\n'+d.body,'text/plain')},true,false);
$('#new').onclick=()=>{if(!checkFresh())return;$('#create-form').reset();$('#editor').showModal()};
$('#create-form').onsubmit=e=>{e.preventDefault();guard(()=>{const d=model.create(state,actor,Object.fromEntries(new FormData(e.target)));$('#editor').close();selected=null;open(d.id)})};
document.querySelectorAll('.close').forEach(b=>b.onclick=()=>{b.closest('dialog').close();if(b.closest('dialog').id==='detail')selected=null});
$('#search').oninput=render;$('#status').onchange=()=>{document.querySelectorAll('.nav').forEach(b=>b.classList.toggle('active',b.dataset.view===$('#status').value));render()};
document.querySelectorAll('.nav').forEach(b=>b.onclick=()=>{$('#status').value=b.dataset.view;$('#list-title').textContent=b.textContent;document.querySelectorAll('.nav').forEach(n=>n.classList.toggle('active',n===b));render()});
$('#reset').onclick=()=>{if(!checkFresh())return;if(confirm('Replace this browser’s demo documents with the original synthetic examples?')&&checkFresh()){state=model.seed();selected=null;persist();render()}};
window.addEventListener('storage',e=>{if(e.key===key)markStale()});
render();if(checkFresh())persist();
