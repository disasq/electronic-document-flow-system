(function(root){
  'use strict';
  const users=[{id:'author',name:'Alex Morgan',role:'employee'},{id:'reviewer',name:'Jordan Lee',role:'reviewer'},{id:'other',name:'Taylor Reed',role:'employee'},{id:'admin',name:'Casey Park',role:'admin'}];
  const labels={draft:'Draft',in_review:'In review',changes_requested:'Changes requested',approved:'Approved',archived:'Archived'};
  const fail=m=>{throw new Error(m)};
  const user=id=>users.find(x=>x.id===id)||fail('Unknown user');
  const visible=(d,actor)=>{const u=user(actor);return u.role==='admin'||d.owner===actor||(d.reviewer===actor&&d.status!=='draft')};
  const event=(s,d,actor,action,comment='')=>s.events.push({id:s.events.length+1,documentId:d.id,actor,action,version:d.version,comment,time:new Date().toISOString()});
  function empty(){return {schema:1,nextId:1,documents:[],events:[]}}
  function create(s,actor,{title,body,type='Memo',due=''}){
    if(user(actor).role!=='employee')fail('Only employees can create documents');
    title=String(title||'').trim();body=String(body||'').trim();
    if(!title||title.length>120)fail('Title must contain 1 to 120 characters');
    if(!body||body.length>20000)fail('Content must contain 1 to 20000 characters');
    if(!['Memo','Request','Policy'].includes(type))fail('Invalid document type');
    if(due&&!/^\d{4}-\d{2}-\d{2}$/.test(due))fail('Invalid deadline');
    const d={id:'DOC-'+String(s.nextId++).padStart(3,'0'),title,type,due,body,owner:actor,reviewer:null,status:'draft',version:1,revision:1,reviewVersion:null,versions:[{number:1,title,body,time:new Date().toISOString()}]};
    s.documents.unshift(d);event(s,d,actor,'created');return d;
  }
  function get(s,id,actor){const d=s.documents.find(x=>x.id===id);if(!d||!visible(d,actor))fail('Document not available');return d}
  function change(s,id,actor,action,data={},expected){
    const d=get(s,id,actor),u=user(actor);
    if(expected!==undefined&&expected!==d.revision)fail('Conflict: reload the latest document');
    if(action==='save'){
      if(d.owner!==actor||!['draft','changes_requested'].includes(d.status))fail('Only the author can edit a draft or returned document');
      const title=String(data.title||'').trim(),body=String(data.body||'').trim();
      if(!title||title.length>120||!body||body.length>20000)fail('Check title and content lengths');
      d.title=title;d.body=body;d.version++;d.versions.push({number:d.version,title,body,time:new Date().toISOString()});
    }else if(action==='submit'){
      if(d.owner!==actor||!['draft','changes_requested'].includes(d.status))fail('Only the author can submit an editable document');
      if(!data.reviewer||data.reviewer===actor||user(data.reviewer).role!=='reviewer')fail('Choose a different user with the reviewer role');
      if(d.status==='changes_requested'&&d.version===d.reviewVersion)fail('Save a revised version before resubmitting');
      d.reviewer=data.reviewer;d.status='in_review';d.reviewVersion=d.version;
    }else if(action==='approve'||action==='return'){
      if(d.reviewer!==actor||u.role!=='reviewer'||d.owner===actor||d.status!=='in_review')fail('Only the assigned reviewer can decide a pending review');
      if(d.reviewVersion!==d.version)fail('Review version mismatch');
      if(action==='return'&&!String(data.comment||'').trim())fail('Explain the requested changes');
      d.status=action==='approve'?'approved':'changes_requested';
    }else if(action==='archive'){
      if(u.role!=='admin'||d.status!=='approved')fail('Only the administrator can archive an approved document');
      d.status='archived';
    }else fail('Unknown action');
    d.revision++;event(s,d,actor,action,String(data.comment||'').trim());return d;
  }
  function list(s,actor,query='',status='all'){
    return s.documents.filter(d=>visible(d,actor)&&(status==='all'||d.status===status)&&[d.id,d.title,d.type].join(' ').toLowerCase().includes(query.toLowerCase()));
  }
  function history(s,id,actor){get(s,id,actor);return s.events.filter(e=>e.documentId===id)}
  function seed(){const s=empty();create(s,'author',{title:'Equipment purchase request',type:'Request',body:'Request for a replacement office monitor.\nEstimated budget: 180 units.\nBusiness reason: replace a damaged display.',due:'2026-10-23'});const d=create(s,'author',{title:'Remote work policy update',type:'Policy',body:'Proposed policy for remote work requests.\nEmployees should request approval before changing their work location.',due:'2026-10-22'});change(s,d.id,'author','submit',{reviewer:'reviewer'});const a=create(s,'other',{title:'Monthly operations memo',body:'Monthly coordination meeting on Friday.\nPlease prepare the departmental action list.'});change(s,a.id,'other','submit',{reviewer:'reviewer'});change(s,a.id,'reviewer','approve');return s}
  const api={users,labels,empty,create,get,change,list,history,seed};if(typeof module!=='undefined'&&module.exports)module.exports=api;root.EDFS=api;
})(typeof globalThis!=='undefined'?globalThis:this);
