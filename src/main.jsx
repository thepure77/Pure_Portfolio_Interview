import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowUpRight, Check, Copy, Mail, Menu, Phone, X } from 'lucide-react';
import './styles.css';

const copy = {
  en: {
    nav: ['Work', 'Approach', 'Experience', 'Contact'], available: 'OPEN TO OPPORTUNITIES',
    eyebrow: 'SOFTWARE DEVELOPMENT · TECHNICAL LEADERSHIP', titleA: 'I build systems', titleB: 'that move work forward.', intro: '14 years turning operational complexity into dependable software — from the first workflow sketch to production and the people who run it.', cta: 'Explore selected work', contact: 'Let’s talk',
    signal: 'A little about my work', signalText: 'Hands-on engineering meets clear technical direction. I help teams ship software that fits the way a business actually operates.',
    stats: [['14', 'years building software'], ['10', 'people on the delivery team'], ['5+', 'years in queue systems'], ['5+', 'years in WMS']],
    teamTitle: 'Team I have led',
    team: [['1', 'Development Manager / Lead'], ['3', 'Senior Developers'], ['4', 'Junior Developers'], ['2', 'Application Support']],
    workTag: 'SELECTED WORK', workTitle: 'Systems built around real operations.', workDesc: 'Warehouse, fulfillment, queue and port systems delivered with Kasco Enterprise, taken from the working portfolio.',
    filters: [['all', 'All'], ['wms', 'Warehouse'], ['queue', 'Queue'], ['port', 'Port']],
    caseStudy: 'CASE STUDY', flowLabel: 'OPERATION FLOW', pointsLabel: 'WHAT THE SYSTEM COVERS',
    projects: [
      { id:'01', group:'wms', tone:'lime', title:'Warehouse Management System', client:'DoHome', type:'WMS · INVENTORY', period:'2019 — 2026', file:'dohome-inventory.flow', summary:'Planned, analysed and designed the warehouse system for receiving, issuing, transfer, stock control, distribution and transport.', points:['Receive, issue, pay out, transfer and control stock','Distribute goods and connect the transport flow','Integrate with SAP, AS/RS and OMS'], diagram:['Receive','Issue','Transfer','Stock','Distribute'] },
      { id:'02', group:'wms', tone:'blue', title:'THP Fulfillment', client:'Thailand Post', type:'WMS · FULFILLMENT', period:'2019 — 2026', file:'thp-fulfillment.flow', summary:'Designed an end-to-end warehouse for domestic and international EMS, including packing, tracking and set assembly.', points:['Domestic and international EMS with parcel tracking','Gift wrap, ribbon, flyers and inserts','Assemble sets and print receipts'], diagram:['Inbound','Pack','Track','Ship'] },
      { id:'03', group:'wms', tone:'orange', title:'JSSR Fulfillment', client:'JSSR Auction', type:'WMS · PICK & PACK', period:'2019 — 2026', file:'jssr-pickpack.flow', summary:'Designed the flow that sends orders to the warehouse to pick, pack, label and ship.', points:['Plan and design the fulfillment workflow','Pick, pack, label and dispatch each order','Assemble sets and print receipts'], diagram:['Order','Pick','Pack','Ship'] },
      { id:'04', group:'wms', tone:'lime', title:'WMS for an OEM cosmetics plant', client:'Aesthetic Plus', type:'WMS · INVENTORY', period:'2019 — 2026', file:'aesthetic-stock.flow', summary:'Replaced the previous warehouse system and connected Formula in real time for raw materials and packaging.', points:['Receive, store, transfer and issue goods','Real-time Formula link for RM and PM','Raise stock accuracy and cut errors'], diagram:['Receive','Store','Transfer','Issue'] },
      { id:'05', group:'wms', tone:'blue', title:'Automated warehouse', client:'Café Amazon · PTTOR', type:'WMS · AUTOMATION', period:'2019 — 2026', file:'cafe-amazon-asrs.flow', summary:'Designed the automated warehouse for receiving, stock control, distribution and the link to SAP and the machines.', points:['Receive, issue, transfer and control stock','Distribute goods and connect transport','Integrate SAP ECC6 with the machinery'], diagram:['Receive','AS/RS','SAP','Distribute'] },
      { id:'06', group:'queue', tone:'orange', title:'Factory gate booking', client:'Ampas Industries', type:'BOOKING QUEUE', period:'2019 — 2026', file:'ampas-gate.flow', summary:'Designed the queue system that books and calls trucks at the factory gate, and keeps the visit history.', points:['Book and call trucks at the factory gate','Keep a history for inbound and outbound vehicles','Shorten the time spent at the gate'], diagram:['Book','Gate','Call','History'] },
      { id:'07', group:'port', tone:'lime', title:'Smart Port data exchange', client:'Port Authority · Laem Chabang', type:'DATA EXCHANGE · INSPECTION', period:'2020', file:'smart-port.exchange', summary:'Built the transport data exchange for Laem Chabang, linking container inspection with vessel arrival and departure.', points:['Exchange transport data at Laem Chabang','Link and inspect containers','Track inbound and outbound vessels'], diagram:['Carrier','Exchange','Inspect','Vessel'] },
      { id:'08', group:'port', tone:'blue', title:'TruckQ port queue', client:'Laem Chabang Port', type:'BOOKING · GATE', period:'2019', file:'truckq-gate.flow', summary:'Built container and truck-queue booking, and connected TLC with the port gate.', points:['Book containers and the truck queue into port','Connect TLC with the gate system','Install the application and Oracle database'], diagram:['Book','Queue','TLC','Gate'] }
    ],
    approachTag:'HOW I WORK', approachTitle:'Good software starts with listening.', approachDesc:'I stay close to the people using a system, then make the technical path clear enough for a team to deliver it well.',
    steps:[['01','Capture the requirement','Confirm requirements directly with users, and with BA and SA.'],['02','Shape the system','Design the workflow, UX, database and API spec — REST and SOAP — from the same conversations.'],['03','Build and connect','Develop frontend, backend and APIs, and connect SAP, ERP and the systems around them.'],['04','Lead the build','Plan the work, assign it, develop alongside the team, and track it in Monday and Azure.'],['05','Sit in SIT and UAT','Join SIT and UAT and fix issues on the spot with users, BA and SA.'],['06','Go live and support','Run security and performance checks, install the system, then trace and fix production issues.']],
    expTag:'CAREER', expTitle:'Growing with the work.', exp:[['2019 — Oct 2026','Kasco Enterprise','Development Manager · Lead Development','Led delivery for port, transport, warehouse and queue systems. Analysed the work, designed the database, built frontend, backend and APIs, and worked directly with users, BA and SA.'],['2016 — 2019','Tega Soft Co., Ltd.','Senior Programmer','Built business software and Web QFP with ASP.NET and C#, covering BOM, raw materials, production supplies, reports and handover.'],['2012 — 2015','SCG Super Central Gas','Programmer','Built internal tools with VB.NET and a mobile service for field maintenance, including cost calculation and receipts.']],
    toolkitTag:'TOOLS & ENGINEERING', toolkitTitle:'A practical toolkit, shaped by the problem.', toolkit:[['Backend',['VB','C#','ASP.NET Core','.NET Web API','Entity Framework Core LINQ','Node.js']],['Frontend',['JavaScript','TypeScript','React','Vue','HTML','CSS']],['UI libraries',['Ant Design','DevExpress']],['Data',['SQL Server','Oracle']],['Integration',['REST','SOAP / XML','JSON','SAP MM / IM','ERP']],['Delivery & AI',['GitHub Actions CI/CD','Azure','Grafana k6','TeamCity','JMeter','SonarQube','Cursor','Claude', 'ChatGPT', 'Copilot']]],
    educationTag:'EDUCATION & TRAINING', educationTitle:'The foundation behind the work.', education:[['2007 — 2011','Kasem Bundit University','Bachelor’s Degree · Computer Information Science'],['FEB 2020','Software Park Thailand','ISO 29110 · Software Security']],
    contactTag:'HAVE A CHALLENGE IN MIND?', contactTitle:'Let’s make the next system work better.', contactDesc:'Open to senior backend, full stack, technical lead and development manager opportunities. Happy to talk through the problem you’re solving.', email:'Email me', call:'Call', location:'Lat Krabang, Bangkok · Thai / English', footer:'Built with care. Designed for what comes next.', copied:'Email copied'
  },
  th: {
    nav: ['ผลงาน', 'แนวทางทำงาน', 'ประสบการณ์', 'ติดต่อ'], available: 'เปิดรับโอกาสใหม่',
    eyebrow: 'SOFTWARE DEVELOPMENT · TECHNICAL LEADERSHIP', titleA: 'สร้างระบบที่', titleB: 'พางานเดินหน้า', intro: 'ประสบการณ์ 14 ปีในการเปลี่ยนกระบวนการทำงานที่ซับซ้อนให้เป็นซอฟต์แวร์ที่เชื่อถือได้ ตั้งแต่วิเคราะห์โจทย์ ออกแบบระบบ จนถึงใช้งานจริงและดูแลต่อเนื่อง', cta: 'ดูผลงานที่เลือกมา', contact: 'พูดคุยกัน',
    signal: 'ภาพรวมการทำงาน', signalText: 'ผสานการลงมือพัฒนาจริงกับการกำหนดทิศทางเทคนิคที่ชัดเจน เพื่อสร้างซอฟต์แวร์ที่ตอบโจทย์การทำงานของธุรกิจ',
    stats: [['14', 'ปีในสายพัฒนาซอฟต์แวร์'], ['10', 'คนในทีมส่งมอบงาน'], ['5+', 'ปีด้านระบบคิว'], ['5+', 'ปีด้าน WMS']],
    teamTitle: 'โครงสร้างทีมที่ดูแล',
    team: [['1', 'Development Manager / Lead'], ['3', 'Senior Developer'], ['4', 'Junior Developer'], ['2', 'Application Support']],
    workTag: 'ผลงานที่คัดสรร', workTitle: 'ระบบที่ออกแบบจากหน้างานจริง', workDesc: 'งานคลังสินค้า Fulfillment คิวรถ และท่าเรือ ในช่วง Kasco Enterprise',
    filters: [['all', 'ทั้งหมด'], ['wms', 'คลังสินค้า'], ['queue', 'คิว'], ['port', 'ท่าเรือ']],
    caseStudy: 'กรณีศึกษา', flowLabel: 'ขั้นตอนการทำงาน', pointsLabel: 'สิ่งที่ระบบครอบคลุม',
    projects: [
      { id:'01', group:'wms', tone:'lime', title:'ระบบบริหารจัดการคลังสินค้า', client:'DoHome', type:'WMS · INVENTORY', period:'2019 — 2026', file:'dohome-inventory.flow', summary:'บริหาร วางแผน วิเคราะห์ และออกแบบ WMS สำหรับรับเข้า เบิก จ่าย โอน คุมสต็อก กระจายสินค้า และขนส่ง', points:['รับเข้า เบิก จ่าย โอน และคุมสต็อก','กระจายสินค้าและเชื่อมขั้นตอนขนส่ง','เชื่อมต่อ SAP, AS/RS และ OMS'], diagram:['รับเข้า','เบิกจ่าย','โอน','คุมสต็อก','กระจาย'] },
      { id:'02', group:'wms', tone:'blue', title:'THP Fulfillment', client:'ไปรษณีย์ไทย', type:'WMS · FULFILLMENT', period:'2019 — 2026', file:'thp-fulfillment.flow', summary:'บริหารและออกแบบคลังสินค้าครบวงจร รองรับ EMS ในประเทศและต่างประเทศ พร้อมติดตามพัสดุ', points:['EMS ในประเทศและต่างประเทศ พร้อมติดตามพัสดุ','ห่อของขวัญ ผูกริบบิ้น แทรกใบปลิวและของแถม','จัดชุดสินค้า และพิมพ์ใบเสร็จ'], diagram:['รับเข้า','แพ็ก','ติดตาม','จัดส่ง'] },
      { id:'03', group:'wms', tone:'orange', title:'JSSR Fulfillment', client:'เจเอสเอสอาร์ อ๊อกชั่น', type:'WMS · PICK & PACK', period:'2019 — 2026', file:'jssr-pickpack.flow', summary:'บริหาร วางแผน วิเคราะห์ และออกแบบระบบ ส่งคำสั่งซื้อให้คลังหยิบ แพ็ก ติดฉลาก และจัดส่ง', points:['วางแผนและออกแบบกระบวนการ Fulfillment','หยิบ แพ็ก ติดฉลาก และจัดส่งตามคำสั่งซื้อ','จัดชุดสินค้า และพิมพ์ใบเสร็จ'], diagram:['คำสั่งซื้อ','หยิบ','แพ็ก','จัดส่ง'] },
      { id:'04', group:'wms', tone:'lime', title:'WMS โรงงานเครื่องสำอาง OEM', client:'Aesthetic Plus', type:'WMS · INVENTORY', period:'2019 — 2026', file:'aesthetic-stock.flow', summary:'พัฒนา WMS ทดแทนระบบเดิม เชื่อม Formula แบบเรียลไทม์ รองรับวัตถุดิบและบรรจุภัณฑ์', points:['รับเข้า จัดเก็บ โอนย้าย และจ่ายสินค้า','เชื่อม Formula แบบเรียลไทม์ รองรับ RM / PM','เพิ่มความถูกต้องของสต็อกและลดข้อผิดพลาด'], diagram:['รับเข้า','จัดเก็บ','โอนย้าย','จ่าย'] },
      { id:'05', group:'wms', tone:'blue', title:'คลังสินค้าอัตโนมัติ', client:'Café Amazon · ปตท. น้ำมันและการค้าปลีก', type:'WMS · AUTOMATION', period:'2019 — 2026', file:'cafe-amazon-asrs.flow', summary:'บริหาร วางแผน วิเคราะห์ และออกแบบคลังอัตโนมัติ ครอบคลุมสต็อก การกระจายสินค้า และการเชื่อม SAP กับเครื่องจักร', points:['รับเข้า เบิก จ่าย โอน และคุมสต็อก','กระจายสินค้าและเชื่อมการขนส่ง','เชื่อม SAP (ECC6) และเครื่องจักร'], diagram:['รับเข้า','คลังอัตโนมัติ','SAP','กระจาย'] },
      { id:'06', group:'queue', tone:'orange', title:'ระบบจองคิวหน้าโรงงาน', client:'แอมพาส อินดัสตรี', type:'BOOKING QUEUE', period:'2019 — 2026', file:'ampas-gate.flow', summary:'บริหาร วางแผน วิเคราะห์ และออกแบบระบบจองคิว จองและเรียกคิวรถที่ประตูโรงงาน พร้อมเก็บประวัติ', points:['จองและเรียกคิวรถที่ประตูโรงงาน','เก็บประวัติ รองรับรถรับและส่งสินค้า','ช่วยลดระยะเวลาการให้บริการ'], diagram:['จองคิว','ประตูโรงงาน','เรียกคิว','ประวัติ'] },
      { id:'07', group:'port', tone:'lime', title:'Smart Port แลกเปลี่ยนข้อมูล', client:'การท่าเรือแห่งประเทศไทย · แหลมฉบัง', type:'DATA EXCHANGE · INSPECTION', period:'2020', file:'smart-port.exchange', summary:'พัฒนาระบบแลกเปลี่ยนข้อมูลขนส่งท่าเรือแหลมฉบัง เชื่อมการตรวจสอบตู้คอนเทนเนอร์และติดตามเรือขาเข้าขาออก', points:['แลกเปลี่ยนข้อมูลขนส่งที่ท่าเรือแหลมฉบัง','เชื่อมข้อมูลและตรวจสอบตู้คอนเทนเนอร์','ติดตามข้อมูลเรือขาเข้าและขาออก'], diagram:['ผู้ขนส่ง','แลกข้อมูล','ตรวจตู้','เรือเข้าออก'] },
      { id:'08', group:'port', tone:'blue', title:'TruckQ คิวรถเข้าท่าเรือ', client:'ท่าเรือแหลมฉบัง', type:'BOOKING · GATE', period:'2019', file:'truckq-gate.flow', summary:'พัฒนาระบบจองตู้สินค้าและคิวรถเข้าท่าเรือ เชื่อมระบบ TLC กับประตูท่า', points:['จองตู้สินค้าและคิวรถเข้าท่าเรือ','เชื่อมระบบ TLC กับระบบ Gate','ติดตั้งแอปพลิเคชันและฐานข้อมูล Oracle'], diagram:['จองตู้','คิวรถ','TLC','Gate'] }
    ],
    approachTag:'แนวทางทำงาน', approachTitle:'ซอฟต์แวร์ที่ดีเริ่มจากการฟัง', approachDesc:'เข้าใจคนใช้ระบบก่อน แล้วค่อยทำให้แนวทางเทคนิคชัดพอที่ทีมจะร่วมกันส่งมอบงานได้',
    steps:[['01','เก็บ Requirement','เก็บและยืนยัน Requirement กับผู้ใช้โดยตรง รวมทั้งจาก BA และ SA'],['02','ออกแบบระบบ','ออกแบบ Workflow, UX/UI, ฐานข้อมูล และ Spec API ทั้ง REST และ SOAP'],['03','พัฒนาและเชื่อมต่อ','พัฒนา Frontend, Backend และ API แล้วเชื่อมต่อ SAP, ERP และระบบที่เกี่ยวข้อง'],['04','นำทีมพัฒนา','วางแผน มอบหมายงาน ลงมือพัฒนาไปกับทีม และติดตามงานบน Monday กับ Microsoft Azure'],['05','ร่วม SIT / UAT','เข้าร่วม SIT และ UAT แล้วแก้ปัญหาทันทีกับผู้ใช้และทีม BA, SA'],['06','Go-live และ Support','ตรวจ Security กับ Performance ติดตั้งและส่งมอบ แล้วตามปัญหาการใช้งานจนแก้ได้']],
    expTag:'เส้นทางอาชีพ', expTitle:'เติบโตไปพร้อมกับโจทย์ที่หลากหลาย', exp:[['2019 — ต.ค. 2026','Kasco Enterprise','Development Manager · Lead Development','ดูแลการส่งมอบระบบท่าเรือ ขนส่ง คลังสินค้า และคิว ร่วมวิเคราะห์ ออกแบบฐานข้อมูล พัฒนา Frontend, Backend, API และประสานผู้ใช้กับทีม BA, SA โดยตรง'],['2016 — 2019','Tega Soft Co., Ltd.','Senior Programmer','พัฒนาซอฟต์แวร์ธุรกิจและ Web QFP ด้วย ASP.NET และ C# ครอบคลุม BOM วัตถุดิบ วัสดุสิ้นเปลืองในการผลิต รายงาน และการส่งมอบระบบ'],['2012 — 2015','SCG Super Central Gas','Programmer','พัฒนาระบบภายในด้วย VB.NET และ Mobile Service สำหรับทีมซ่อมบำรุงนอกสถานที่ รวมการคำนวณค่าใช้จ่ายและการออกใบเสร็จ']],
    toolkitTag:'เครื่องมือและเทคโนโลยี', toolkitTitle:'ทักษะและความเชี่ยวชาญ', toolkit:[['Backend',['VB','C#','ASP.NET Core','.NET Web API', 'Entity Framework Core LINQ','Node.js']],['Frontend',['JavaScript','TypeScript','React','Vue','HTML','CSS']],['UI libraries',['Ant Design','DevExpress']],['ฐานข้อมูล',['SQL Server','Oracle']],['การเชื่อมต่อ',['REST','SOAP / XML','JSON','SAP MM / IM','ERP']],['ส่งมอบและ AI',['GitHub Actions CI/CD','Azure','Grafana k6','TeamCity','JMeter','SonarQube','Cursor','Claude', 'ChatGPT', 'Copilot']]],
    educationTag:'การศึกษาและอบรม', educationTitle:'พื้นฐานที่ต่อยอดสู่การทำงาน', education:[['2007 — 2011','มหาวิทยาลัยเกษมบัณฑิต','ปริญญาตรี · วิทยาการคอมพิวเตอร์สารสนเทศ'],['ก.พ. 2020','Software Park Thailand','ISO 29110 · Software Security']],
    contactTag:'มีโจทย์ที่อยากชวนคุยไหม?', contactTitle:'มาช่วยกันทำให้ระบบถัดไปดียิ่งขึ้น', contactDesc:'เปิดรับตำแหน่ง Senior Backend, Full Stack, Technical Lead และ Development Manager ยินดีพูดคุยถึงโจทย์ที่ทีมของคุณกำลังแก้', email:'ส่งอีเมล', call:'โทร', location:'ลาดกระบัง กรุงเทพฯ · ภาษาไทย / อังกฤษ', footer:'ทำด้วยความใส่ใจ เพื่อสิ่งที่จะเกิดขึ้นต่อไป', copied:'คัดลอกอีเมลแล้ว'
  }
};

function OpsBoard({ steps, file, caption }) {
  const [active, setActive] = useState(0);
  useEffect(() => {
    setActive(0);
    const id = setInterval(() => setActive((n) => (n + 1) % steps.length), 1500);
    return () => clearInterval(id);
  }, [steps]);
  return (
    <div className="ops-board">
      <div className="ops-chrome">
        <span className="ops-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="ops-file">{file}</span>
        <span className="ops-live"><i />LIVE</span>
      </div>
      <p className="ops-caption">{caption}</p>
      <div className="ops-steps">
        {steps.map((step, i) => (
          <div className={i === active ? 'ops-step on' : 'ops-step'} key={`${step}-${i}`}>
            <b>{String(i + 1).padStart(2, '0')}</b>
            <span>{step}</span>
          </div>
        ))}
      </div>
      <div className="ops-rail" aria-hidden="true"><span style={{ width: `${((active + 1) / steps.length) * 100}%` }} /></div>
    </div>
  );
}

function App() {
  const [lang, setLang] = useState('th');
  const [menu, setMenu] = useState(false);
  const [copied, setCopied] = useState(false);
  const [filter, setFilter] = useState('all');
  const t = copy[lang];
  const email = 'thepure77.pure77@gmail.com';
  const phone = '094-804-5456';
  const jump = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenu(false); };
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(email); setCopied(true); setTimeout(() => setCopied(false), 2200); }
    catch { window.location.href = `mailto:${email}`; }
  };
  const projects = t.projects.filter((p) => filter === 'all' || p.group === filter);

  return <div className="site" lang={lang}>
    <header className="topbar">
      <a className="wordmark" href="#top" aria-label="Khunsak home">K<span>.</span></a>
      <nav className={menu ? 'nav open' : 'nav'}>{t.nav.map((item, i) => <button key={item} onClick={() => jump(['work', 'approach', 'experience', 'contact'][i])}>{item}</button>)}</nav>
      <div className="top-actions">
        <span className="availability"><i /> {t.available}</span>
        <button className="language" onClick={() => setLang(lang === 'en' ? 'th' : 'en')} aria-label="Switch language">{lang === 'en' ? 'TH' : 'EN'} <span>↗</span></button>
        <button className="menu-toggle" onClick={() => setMenu(!menu)} aria-label="Toggle navigation">{menu ? <X /> : <Menu />}</button>
      </div>
    </header>
    <main id="top">
      <section className="hero wrap">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" />{t.eyebrow}</div>
          <h1>{t.titleA}<br /><em>{t.titleB}</em></h1>
          <p className="hero-intro">{t.intro}</p>
          <div className="hero-links">
            <button className="button button-dark" onClick={() => jump('work')}>{t.cta}<ArrowDown size={16} /></button>
            <button className="text-link" onClick={() => jump('contact')}>{t.contact}<ArrowUpRight size={16} /></button>
          </div>
        </div>
        <div className="hero-art hero-photo" aria-label="Khunsak Sirihirankarn">
          <img src={`${import.meta.env.BASE_URL}kunasak-siri.jpg`} alt="คุณศักดิ์ ศิริหิรัญกานต์" />
          <div className="photo-shade" />
          <div className="float-card fc-1"><b>WMS</b><span>{lang === 'th' ? 'รับเข้า · สต็อก · กระจาย' : 'Receive · stock · distribute'}</span></div>
          <div className="float-card fc-2"><b>QUEUE</b><span>{lang === 'th' ? 'จองคิว · ประตู · เรียกคิว' : 'Book · gate · call'}</span></div>
          <div className="float-card fc-3"><i />{lang === 'th' ? 'เปิดรับโอกาสใหม่' : 'Open to opportunities'}</div>
        </div>
      </section>
      <section className="signal wrap">
        <div className="signal-heading"><span className="section-index">01 / PROFILE</span><h2>{t.signal}</h2></div>
        <div className="signal-body">
          <p>{t.signalText}</p>
          <div className="stat-grid">{t.stats.map(([num, label]) => <div className="stat" key={label}><b>{num}</b><span>{label}</span></div>)}</div>
          <div className="team-strip">
            <span className="team-label">{t.teamTitle}</span>
            {t.team.map(([num, role]) => <div className="team-chip" key={role}><b>{num}</b><span>{role}</span></div>)}
          </div>
        </div>
      </section>
      <section className="work-section" id="work">
        <div className="wrap">
          <div className="section-heading">
            <div><span className="section-index">02 / {t.workTag}</span><h2>{t.workTitle}</h2></div>
            <p>{t.workDesc}</p>
          </div>
          <div className="filters" role="tablist">
            {t.filters.map(([id, label]) => <button key={id} className={filter === id ? 'on' : ''} onClick={() => setFilter(id)}>{label}</button>)}
          </div>
          <div className="project-list">
            {projects.map((p) => <article className={`project ${p.tone}`} key={p.id}>
              <div className="project-visual">
                <img className="project-shot" src={`${import.meta.env.BASE_URL}work/${p.id}.jpg`} alt={p.title} />
                <OpsBoard steps={p.diagram} file={p.file} caption={t.flowLabel} />
                <div className="visual-meta"><span>{p.client}</span><span>{p.id} / {String(t.projects.length).padStart(2, '0')}</span></div>
              </div>
              <div className="project-info">
                <div className="project-overline"><span>{t.caseStudy} {p.id}</span><span className="project-period">{p.period}</span></div>
                <p className="project-type">{p.type}</p>
                <h3>{p.title}</h3>
                <p className="project-client">{p.client}</p>
                <p className="project-summary">{p.summary}</p>
                <p className="detail-label">{t.pointsLabel}</p>
                <ul className="project-points">{p.points.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            </article>)}
          </div>
        </div>
      </section>
      <section className="approach wrap" id="approach">
        <div className="approach-intro">
          <span className="section-index">03 / {t.approachTag}</span>
          <h2>{t.approachTitle}</h2>
          <p>{t.approachDesc}</p>
          <div className="approach-stamp"><span>DISCOVER</span><b>✳</b><span>DELIVER</span></div>
        </div>
        <div className="steps">{t.steps.map(([n, title, desc]) => <article className="step" key={n}><span className="step-number">{n}</span><div><h3>{title}</h3><p>{desc}</p></div><ArrowUpRight size={17} /></article>)}</div>
      </section>
      <section className="experience" id="experience">
        <div className="wrap">
          <div className="section-heading exp-heading"><div><span className="section-index">04 / {t.expTag}</span><h2>{t.expTitle}</h2></div><span className="exp-years">2012 — 2026</span></div>
          <div className="timeline">{t.exp.map(([year, company, role, desc], i) => <article className="timeline-row" key={company}><div className="timeline-year">{year}</div><div className="timeline-marker"><i /></div><div className="timeline-content"><div className="timeline-title"><h3>{company}</h3><span>{role}</span></div><p>{desc}</p></div><span className="timeline-count">0{i + 1}</span></article>)}</div>
        </div>
      </section>
      <section className="toolkit wrap" id="toolkit">
        <div className="toolkit-head"><span className="section-index">05 / {t.toolkitTag}</span><h2>{t.toolkitTitle}</h2></div>
        <div className="tool-bento">{t.toolkit.map(([title, items], i) => <article className="tool-card" key={title}><div className="tool-card-top"><span>0{i + 1}</span><h3>{title}</h3></div><div className="tool-pills">{items.map((item) => <span key={item}>{item}</span>)}</div></article>)}</div>
      </section>
      <section className="education wrap">
        <div className="education-heading"><span className="section-index">06 / {t.educationTag}</span><h2>{t.educationTitle}</h2></div>
        <div className="education-list">{t.education.map(([year, place, detail], i) => <article className="education-item" key={place}><span>{year}</span><div><h3>{place}</h3><p>{detail}</p></div><b>0{i + 1}</b></article>)}</div>
      </section>
      <section className="contact-section" id="contact">
        <div className="wrap contact-inner">
          <div className="contact-copy">
            <span className="section-index">07 / {t.contactTag}</span>
            <h2>{t.contactTitle}</h2>
            <p>{t.contactDesc}</p>
            <div className="contact-actions">
              <a className="button button-light" href={`mailto:${email}`}>{t.email}<Mail size={16} /></a>
              <a className="button button-ghost" href="tel:0948045456">{t.call}<Phone size={16} /></a>
              <button className="copy-button" onClick={copyEmail}>{copied ? <Check size={16} /> : <Copy size={16} />} {copied ? t.copied : email}</button>
            </div>
            <span className="contact-location">{t.location} · {phone}</span>
          </div>
          <div className="contact-decoration"><div className="contact-ring r1" /><div className="contact-ring r2" /><div className="contact-ring r3" /><span>OPEN<br />CHANNEL</span><ArrowUpRight size={24} /></div>
        </div>
      </section>
    </main>
    <footer className="footer wrap"><a className="wordmark" href="#top">K<span>.</span></a><span>{t.footer}</span><span>© {new Date().getFullYear()} KUNASAK SIRIHIRANKARN</span></footer>
  </div>;
}

createRoot(document.getElementById('root')).render(<App />);
