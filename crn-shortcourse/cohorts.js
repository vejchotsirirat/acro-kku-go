/* =====================================================================
   Clinical Research Nursing (CRN) short course: content file
   ---------------------------------------------------------------------
   This is the ONLY file you edit to update the course page.
   The page (index.html) reads everything from here, in English and Thai.

   WHEN A NEW INTAKE IS ANNOUNCED
   1. Scroll to  editions: [  near the bottom.
   2. Copy the whole TEMPLATE block (it is commented out at the very bottom).
   3. Paste it as the FIRST block inside  editions: [ ... ]  and fill it in.
   4. Change the old first block's  status  from "open" to "past", and add its
      results: stats, info, highlights, conclusion (see the previous round).
      Cohort dates inside a past block can stay or be replaced by one  period.

   WHEN ONLY A DATE OR A LINK CHANGES
   Edit that line in place. Dates are written as "YYYY-MM-DD" in the normal
   (Christian era) calendar. The Thai page converts them to Buddhist-era years
   by itself (2027 shows as 2570), so never type a Thai year here.

   REGISTRATION COUNTDOWN
   Set  registerCloses  on the current intake, for example "2027-01-15 23:59".
   It is read as Thailand time. The page then counts down to that moment with a
   green beeping dot. When the time passes, the beeping stops, the dot turns grey,
   the card says Registration closed and the Register buttons switch off, by
   themselves. A date alone ("2027-01-15") means the end of that day.
   While registerCloses is "", the countdown runs to the start of the next cohort
   instead.

   BROCHURES
   Each intake can list brochures (image files placed in this same folder).
   They appear in the Brochures section with View and Download buttons.

   status values for an edition
     "open"    applications open (the page highlights this one)
     "soon"    shown as opening soon
     "closed"  shown, applications closed
     "past"    finished; shown under Previous round
   The cohort badge (Upcoming / In progress / Completed) works itself out from
   the dates, so you never set it by hand.

   Typing rules
     - Straight quotes " only, never curly quotes.
     - Keep the commas. Each block ends with  },
     - Save the file as UTF-8 so Thai letters display correctly.
     - Texts that exist in two languages are written { en: "...", th: "..." }.
   ===================================================================== */

window.ACRO_CRN = {

  /* ---------- page heading ---------- */
  page: {
    kicker:   { en: "Study Nurse Short Course", th: "หลักสูตรอบรมระยะสั้น พยาบาลวิจัย (Study Nurse)" },
    title:    { en: "Clinical Research Nursing", th: "พยาบาลวิจัย|ทางคลินิก" },   /* a | only marks where a long Thai title may wrap */
    tag:      "CRN",
    subtitle: { en: "Short Course Training Program in Clinical Research Nursing",
                th: "หลักสูตรอบรมระยะสั้นด้านพยาบาลวิจัยทางคลินิก" },
    certificate: { en: "Certificate of CRN: Clinical Research Nursing",
                   th: "Certificate of CRN: Clinical Research Nursing" },
    tagline:  { en: "Join the force driving research for better health",
                th: "ร่วมเป็นพลังขับเคลื่อนงานวิจัยเพื่อสุขภาพที่ดี" },
    organizer:{ en: "Academic Clinical Research Office, Khon Kaen University (ACRO KKU) together with Nursing Division, Srinagarind Hospital, Faculty of Medicine, Khon Kaen University",
                th: "สถานบริหารจัดการงานวิจัยคลินิก มหาวิทยาลัยขอนแก่น (ACRO KKU) ร่วมกับ ฝ่ายการพยาบาล โรงพยาบาลศรีนครินทร์ คณะแพทยศาสตร์ มหาวิทยาลัยขอนแก่น" }
  },

  /* ---------- course format (same for every cohort) ---------- */
  format: {
    online: { weeks: 6,  label: { en: "Theoretical training (online)", th: "เรียนภาคทฤษฎีออนไลน์" } },
    onsite: { weeks: 10, label: { en: "Practical training at leading clinical research centers", th: "ฝึกปฏิบัติ ณ ศูนย์วิจัยคลินิก" } }
  },

  /* ---------- practical training sites ---------- */
  sites: [
    { en: "Academic Clinical Research Office, Khon Kaen University (ACRO KKU)",
      th: "สถานบริหารจัดการงานวิจัยคลินิก มหาวิทยาลัยขอนแก่น (ACRO KKU)" },
    { en: "Siriraj Clinical Research Center, Faculty of Medicine Siriraj Hospital, Mahidol University",
      th: "ศูนย์วิจัยคลินิก คณะแพทยศาสตร์ศิริราชพยาบาล มหาวิทยาลัยมหิดล" },
    { en: "Ramathibodi Clinical Research Center, Faculty of Medicine Ramathibodi Hospital, Mahidol University",
      th: "ศูนย์วิจัยคลินิกรามาธิบดี คณะแพทยศาสตร์โรงพยาบาลรามาธิบดี มหาวิทยาลัยมหิดล" },
    { en: "Maha Chakri Sirindhorn Clinical Research Center (Chula CRC), Faculty of Medicine, Chulalongkorn University",
      th: "ศูนย์วิจัยมหาจักรีสิรินธร (Chula CRC) คณะแพทยศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย" }
  ],

  /* ---------- program objectives ---------- */
  objectives: {
    note: { en: "As set out in the summary of the previous round.", th: "ตามสรุปโครงการของรุ่นที่ผ่านมา" },
    items: [
      { en: "Explain the human research process and the role of CRNs, and apply ICH-GCP in participant care.",
        th: "อธิบายกระบวนการวิจัยในมนุษย์และบทบาทของพยาบาลวิจัยทางคลินิก และประยุกต์ใช้ ICH-GCP ในการดูแลผู้เข้าร่วมวิจัย" },
      { en: "Perform research in compliance with laws, ethics, data safety, and the Personal Data Protection Act (PDPA, B.E. 2562).",
        th: "ปฏิบัติงานวิจัยตามกฎหมาย จริยธรรม ความปลอดภัยของข้อมูล และพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA)" },
      { en: "Operate according to the study protocol and SOP, including management of investigational products, specimens, data, and adverse events.",
        th: "ปฏิบัติงานตามโครงร่างการวิจัยและ SOP รวมถึงการจัดการผลิตภัณฑ์วิจัย สิ่งส่งตรวจ ข้อมูล และเหตุการณ์ไม่พึงประสงค์" },
      { en: "Utilize digital technology and manage research projects as a Study Coordinator/Project Manager, and demonstrate leadership and interprofessional collaboration.",
        th: "ใช้เทคโนโลยีดิจิทัลและบริหารโครงการวิจัยในบทบาทผู้ประสานงานการวิจัย/ผู้จัดการโครงการ พร้อมแสดงภาวะผู้นำและการทำงานร่วมกันระหว่างสหวิชาชีพ" }
    ]
  },

  /* ---------- partner logos ----------
     logo: file name of the image placed in this same folder (for example "hsri.png").
     Leave logo as "" and the page shows the name in a plain box until the file is added. */
  partners: [
    { name: { en: "Health Systems Research Institute (HSRI)", th: "สถาบันวิจัยระบบสาธารณสุข (สวรส.)" },
      logo: "logo-hsri.svg" },
    { name: { en: "Academic Clinical Research Office, Khon Kaen University (ACRO KKU)", th: "สถานบริหารจัดการงานวิจัยคลินิก มหาวิทยาลัยขอนแก่น (ACRO KKU)" },
      logo: "../acro-logo.png", url: "https://acrokku.com" },
    { name: { en: "Maha Chakri Sirindhorn Clinical Research Center (Chula CRC)", th: "ศูนย์วิจัยมหาจักรีสิรินธร (Chula CRC)" },
      logo: "logo-chula-crc.png" },
    { name: { en: "Ramathibodi Clinical Research Center (RAMACC)", th: "ศูนย์วิจัยคลินิกรามาธิบดี (RAMACC)" },
      logo: "logo-ramacc.png" },
    { name: { en: "Siriraj Institute of Clinical Research (SiCRES)", th: "SiCRES (Siriraj Institute of Clinical Research)" },
      logo: "logo-sicres.png" },
    { name: { en: "Nursing Division, Srinagarind Hospital", th: "ฝ่ายการพยาบาล โรงพยาบาลศรีนครินทร์" },
      logo: "logo-srinagarind-nursing.png" }
  ],

  /* ---------- who to contact ---------- */
  contact: {
    role:  { en: "Coordinator", th: "ผู้ประสานงาน" },
    name:  { en: "พว.จุรีรัตน์ รัตนเพ็ชร", th: "พว.จุรีรัตน์ รัตนเพ็ชร" },
    phone: "0896186577",
    email: "jurepr@kku.ac.th",
    /* shown below the coordinator */
    office: {
      role:   { en: "ACRO KKU office", th: "สำนักงาน ACRO KKU" },
      phones: ["+66-43-366568", "366269"],      /* a number without + is shown as an extension of the first (same area code) */
      email:  "acro@kku.ac.th"
    }
  },

  /* ---------- intakes: newest FIRST ---------- */
  editions: [

    /* ===== current intake ===== */
    {
      id: "2569-2570",
      status: "open",
      label: { en: "Intake 2569–2570 (2026–2027)", th: "ปี 2569–2570" },
      free: true,
      seatsPerCohort: 30,
      register:   "https://kku.world/2onbxl",
      detailsUrl: "https://kku.world/5v6k3s",
      registerCloses: "",               // e.g. "2027-01-15 23:59" (Thailand time); "" = not announced yet
      brochures: [
        { src: "brochure-announcement.jpg", w: 1043, h: 1569,
          title: { en: "Announcement: open for applications", th: "ประกาศเปิดรับสมัคร" },
          alt:   { en: "Announcement poster for Clinical Research Nursing (CRN), intake 2569-2570: 6 weeks online, 10 weeks onsite, 2 cohorts of 30, free registration",
                   th: "โปสเตอร์ประกาศเปิดรับสมัครพยาบาลวิจัยทางคลินิก (CRN) ปี 2569-2570 ออนไลน์ 6 สัปดาห์ ภาคปฏิบัติ 10 สัปดาห์ รับ 2 รุ่น รุ่นละ 30 คน ฟรีค่าลงทะเบียน" } }
      ],
      cohorts: [
        { start: "2027-02-01", end: "2027-05-31" },
        { start: "2027-04-01", end: "2027-07-29" }
      ]
    },

    /* ===== previous round ===== */
    {
      id: "previous-round",
      status: "past",
      label: { en: "Previous round", th: "รุ่นที่ผ่านมา" },
      period: { start: "2026-01-26", end: "2026-08-14" },
      cohortCount: 2,
      brochures: [
        { src: "brochure-summary.jpg", w: 1077, h: 1519,
          title: { en: "Project summary of the previous round", th: "สรุปโครงการรุ่นที่ผ่านมา" },
          alt:   { en: "Project summary infographic: Capacity Development Program for Clinical Research Nurses, 55 participants, 91.67% target achievement, 50 CNEU credits",
                   th: "อินโฟกราฟิกสรุปโครงการพัฒนาศักยภาพพยาบาลวิจัยทางคลินิก ผู้เข้าร่วม 55 คน บรรลุเป้าหมาย 91.67% หน่วยกิต CNEU 50" } }
      ],
      info: [
        { label: { en: "Grant Agreement No.", th: "เลขที่สัญญารับทุน" }, value: "HSRI 68-193" },
        { label: { en: "Project period", th: "ระยะเวลาโครงการ" }, range: { start: "2025-09-01", end: "2026-08-31" } },
        { label: { en: "Grantee organization", th: "หน่วยงานผู้รับทุน" },
          value: { en: "ACRO KKU", th: "สถานบริหารจัดการงานวิจัยคลินิก มหาวิทยาลัยขอนแก่น" } },
        { label: { en: "Principal investigator", th: "หัวหน้าโครงการ" }, value: "Prof. Pope Kosalaraksa" },
        { label: { en: "Project manager", th: "ผู้จัดการโครงการ" }, value: "Noppakhun Thammatatcharee, Pharm.D., Ph.D." }
      ],
      stats: [
        { value: "55",     tone: "blue",   label: { en: "Participants", th: "ผู้เข้าร่วม" },
          sub: { en: "2 cohorts, from hospitals and health organizations nationwide", th: "2 รุ่น จากโรงพยาบาลและหน่วยงานด้านสุขภาพทั่วประเทศ" } },
        { value: "91.67%", tone: "orange", label: { en: "Target achievement", th: "บรรลุเป้าหมาย" } },
        { value: "100%",   tone: "green",  label: { en: "Successfully completed", th: "ผ่านการอบรมสำเร็จ" } },
        { value: "50",     tone: "blue",   label: { en: "CNEU credits", th: "หน่วยกิต CNEU" },
          sub: { en: "Continuing Nursing Education Units, approved by the Thailand Nursing and Midwifery Council",
                 th: "หน่วยกิตการศึกษาต่อเนื่องทางการพยาบาล รับรองโดยสภาการพยาบาล" } }
      ],
      highlights: [
        { en: "Enhanced knowledge and skills in human research and ICH-GCP",
          th: "ความรู้และทักษะด้านการวิจัยในมนุษย์และ ICH-GCP ที่เพิ่มขึ้น" },
        { en: "Strengthened compliance with law, ethics, and PDPA",
          th: "การปฏิบัติตามกฎหมาย จริยธรรม และ PDPA ที่เข้มแข็งขึ้น" },
        { en: "Improved study conduct per protocol and SOP, including IMP, specimen, data, and AE management",
          th: "การดำเนินการศึกษาตามโครงร่างการวิจัยและ SOP ที่ดีขึ้น รวมถึงการจัดการ IMP สิ่งส่งตรวจ ข้อมูล และ AE" },
        { en: "Developed digital and project management skills",
          th: "พัฒนาทักษะด้านดิจิทัลและการบริหารโครงการ" },
        { en: "Enhanced teamwork and leadership in interprofessional research teams",
          th: "ทีมเวิร์กและภาวะผู้นำในทีมวิจัยสหวิชาชีพที่เพิ่มขึ้น" }
      ],
      conclusion: {
        en: "The CRN program successfully enhanced the competencies of nurses in clinical research, and will sustainably strengthen the clinical research workforce in Thailand to meet international standards.",
        th: "โครงการ CRN ช่วยยกระดับสมรรถนะของพยาบาลด้านการวิจัยทางคลินิกได้สำเร็จ และจะเสริมสร้างบุคลากรด้านการวิจัยทางคลินิกของประเทศไทยอย่างยั่งยืน ให้เป็นไปตามมาตรฐานสากล"
      },
      /* photos: [ { src: "round1-1.jpg", alt: { en: "...", th: "..." } } ]   (files go in this same folder) */
      photos: []
    }

    /* ===================== TEMPLATE for the next intake =====================
       Copy from here down to the closing brace, paste as the FIRST block in
       editions, remove the comment marks, and fill in the dates.

    {
      id: "2570-2571",
      status: "open",                 // open | soon | closed | past
      label: { en: "Intake 2570–2571 (2027–2028)", th: "ปี 2570–2571" },
      free: true,                     // false hides the Free registration badge
      seatsPerCohort: 30,
      register:   "",                 // registration link ("" shows Link coming soon)
      detailsUrl: "",                 // project details link (optional)
      registerCloses: "",             // "2027-12-15 23:59" = Thailand time; starts the countdown
      brochures: [ ],                 // { src: "file.jpg", w: 1000, h: 1500, title: {...}, alt: {...} }
      cohorts: [
        { start: "2027-10-01", end: "2028-01-31" },
        { start: "2027-12-01", end: "2028-03-31", seats: 25 }   // seats here overrides seatsPerCohort
      ]
    },

       ===================================================================== */
  ]
};
