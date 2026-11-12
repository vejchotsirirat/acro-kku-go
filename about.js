/* ACRO KKU Go: the quick "About us" section under the portal cards.
   Each service shows its one-line "short" text; the longer "text" opens under "Details".
   The text comes from the CREST 2026 roll-up banners. Edit it here; the page builds itself from this file.

   Every text has an English (en) and a Thai (th) version.
   Photos live in the "img" folder of the repository. To change a photo, upload a new file with the same name.
   If a photo file is missing, the page shows a coloured placeholder with the caption instead. */

window.ACRO_ABOUT = {

  intro: {
    kicker: { en: "About ACRO KKU", th: "เกี่ยวกับ ACRO KKU" },
    title: { en: "Clinical trials in Northeastern Thailand", th: "การวิจัยทางคลินิกในภาคตะวันออกเฉียงเหนือ" },
    sub: { en: "The clinical research centre of the Faculty of Medicine, Khon Kaen University",
           th: "ศูนย์วิจัยทางคลินิกของคณะแพทยศาสตร์ มหาวิทยาลัยขอนแก่น" },
    text: { en: "We provide research infrastructure, site management and regulatory oversight for industry-sponsored and investigator-initiated trials, in line with ICH Good Clinical Practice.",
            th: "เราให้บริการโครงสร้างพื้นฐานการวิจัย การบริหารจัดการสถานที่วิจัย และการกำกับดูแลด้านมาตรฐาน ทั้งงานวิจัยที่ได้รับการสนับสนุนจากภาคอุตสาหกรรมและงานวิจัยที่ริเริ่มโดยผู้วิจัย ตามหลัก ICH GCP" },
    photo: { src: "img/faculty.jpg", en: "Faculty of Medicine, Khon Kaen University (architectural rendering)", th: "คณะแพทยศาสตร์ มหาวิทยาลัยขอนแก่น (ภาพจำลองอาคาร)" }
  },

  contact: {
    address: { en: "16th floor, Sor Vor 1 Building, 123 Mittraphap Highway, Muang, Khon Kaen 40002, Thailand",
               th: "ชั้น 16 อาคาร สว.1 เลขที่ 123 ถนนมิตรภาพ อำเภอเมืองขอนแก่น จังหวัดขอนแก่น 40002" },
    phones: ["+66-43-366568", "+66-43-366269"],
    email: "acro@kku.ac.th",
    website: "https://acrokku.com"
  },

  run: {
    title: { en: "What we run", th: "งานวิจัยที่เราดำเนินการ" },
    areasTitle: { en: "Therapeutic areas", th: "กลุ่มโรค" },
    areas: [
      { en: "Oncology", th: "มะเร็งวิทยา",
        note: { en: "Lung, breast, GI and liver, biliary, gynaecological, genitourinary, head and neck",
                th: "มะเร็งปอด เต้านม ทางเดินอาหารและตับ ท่อน้ำดี มะเร็งนรีเวช ระบบทางเดินปัสสาวะและสืบพันธุ์ และศีรษะและลำคอ" } },
      { en: "Infectious diseases and vaccines", th: "โรคติดเชื้อและวัคซีน" },
      { en: "Respiratory", th: "ระบบทางเดินหายใจ" },
      { en: "Cardiovascular", th: "หัวใจและหลอดเลือด" },
      { en: "Nephrology", th: "โรคไต" },
      { en: "Metabolic and endocrine", th: "เมแทบอลิซึมและต่อมไร้ท่อ" },
      { en: "Neurology", th: "ประสาทวิทยา" },
      { en: "Haematology", th: "โลหิตวิทยา" },
      { en: "Ophthalmology", th: "จักษุวิทยา" },
      { en: "Dermatology", th: "ตจวิทยา" }
    ],
    typesTitle: { en: "Study types", th: "รูปแบบการศึกษา" },
    types: [
      { en: "Phase I–IV studies", th: "การศึกษาระยะที่ 1–4" },
      { en: "Biosimilars", th: "ยาชีววัตถุคล้ายคลึง (Biosimilars)" },
      { en: "Bioequivalence (BE)", th: "การศึกษาชีวสมมูล (BE)" },
      { en: "Advanced therapy medicinal products (ATMPs)", th: "ผลิตภัณฑ์การแพทย์ขั้นสูง (ATMPs)" },
      { en: "Medical devices", th: "เครื่องมือแพทย์" },
      { en: "Herbal and dietary supplements", th: "สมุนไพรและผลิตภัณฑ์เสริมอาหาร" },
      { en: "Observational studies", th: "การศึกษาเชิงสังเกต" }
    ],
    photos: [
      { src: "img/srinagarind.jpg", en: "Srinagarind Hospital building at dusk", th: "อาคารโรงพยาบาลศรีนครินทร์ยามพลบค่ำ" },
      { src: "img/vision.jpg", en: "ACRO KKU vision statement on the office wall", th: "วิสัยทัศน์ของ ACRO KKU บนผนังสำนักงาน" }
    ]
  },

  services: {
    title: { en: "Our services", th: "บริการของเรา" },
    items: [
      { title: { en: "Clinical Trial Unit", th: "หน่วยทดลองทางคลินิก" },
        short: { en: "Beds and exam rooms for studies from Phase I onward.", th: "เตียงและห้องตรวจ สำหรับการศึกษาตั้งแต่ระยะที่ 1 เป็นต้นไป" },
        text: { en: "Beds and examination rooms for studies from Phase I onward: investigational product administration, ECG and blood sampling, with emergency resuscitation equipment on hand.",
                th: "เตียงและห้องตรวจสำหรับการศึกษาตั้งแต่ระยะที่ 1 เป็นต้นไป ทั้งการให้ผลิตภัณฑ์วิจัย การตรวจคลื่นไฟฟ้าหัวใจ และการเก็บตัวอย่างเลือด พร้อมอุปกรณ์กู้ชีพฉุกเฉิน" },
        photo: { src: "img/ctu.jpg", en: "Clinical trial unit at ACRO KKU", th: "หน่วยทดลองทางคลินิกของ ACRO KKU" } },
      { title: { en: "Research Pharmacy", th: "เภสัชกรรมการวิจัย" },
        short: { en: "Monitored storage from room temperature to −80 °C, plus clean-room preparation.", th: "คลังผลิตภัณฑ์วิจัยควบคุมอุณหภูมิ ตั้งแต่อุณหภูมิห้องถึง −80 °C และการเตรียมยาในห้องเตรียมยาปราศจากเชื้อ" },
        text: { en: "Restricted-access investigational product storage at room temperature, 2–8 °C, −20 °C and −80 °C, with continuous monitoring, alarms and emergency power. Aseptic and cytotoxic investigational product preparation in a dedicated clean room.",
                th: "คลังผลิตภัณฑ์วิจัยที่จำกัดการเข้าถึง ทั้งที่อุณหภูมิห้อง 2–8 °C −20 °C และ −80 °C พร้อมระบบติดตามอุณหภูมิต่อเนื่อง สัญญาณเตือน และไฟฟ้าสำรอง รวมถึงการเตรียมยาปราศจากเชื้อเชื้อและยาเคมีบำบัดในห้องเตรียมยาของ ACRO KKU โดยเฉพาะ" },
        photo: { src: "img/isolator.jpg", en: "Pharmacist preparing doses in the isolator", th: "เภสัชกรเตรียมยาในตู้ไอโซเลเตอร์" } },
      { title: { en: "Laboratory", th: "ห้องปฏิบัติการ" },
        short: { en: "Sample processing, storage and IATA shipping to central labs.", th: "เตรียม จัดเก็บ และขนส่งตัวอย่างไปยังห้องปฏิบัติการกลางตามมาตรฐาน IATA" },
        text: { en: "Blood sampling for local and overseas laboratories, lab kit preparation, sample processing and centrifugation, temperature-monitored storage, and shipment to central laboratories to IATA standards.",
                th: "เก็บตัวอย่างเลือดสำหรับห้องปฏิบัติการทั้งในและต่างประเทศ เตรียมชุดเก็บตัวอย่าง เตรียมและปั่นแยกตัวอย่าง จัดเก็บโดยควบคุมอุณหภูมิ และขนส่งไปยังห้องปฏิบัติการกลางตามมาตรฐาน IATA" },
        photo: { src: "img/centrifuge.jpg", en: "Laboratory centrifuge", th: "เครื่องปั่นแยกในห้องปฏิบัติการ" } },
      { title: { en: "Study Start-up and Finance", th: "การเริ่มต้นโครงการและการเงิน" },
        short: { en: "CDAs, feasibility, budgets, contracts and finance.", th: "ข้อตกลงรักษาความลับ ความเป็นไปได้ งบประมาณ สัญญา และการเงิน" },
        text: { en: "Confidentiality agreements, site identification and feasibility, study budgeting, clinical trial agreement review, accounting and financial management.",
                th: "ข้อตกลงรักษาความลับ การคัดเลือกสถานที่วิจัยและประเมินความเป็นไปได้ การจัดทำงบประมาณโครงการ การทบทวนสัญญาการวิจัยทางคลินิก การบัญชี และการบริหารการเงิน" },
        photo: { src: "img/documents.jpg", en: "Document storage with mobile shelving", th: "ห้องจัดเก็บเอกสารพร้อมชั้นเลื่อน" } },
      { title: { en: "Site Management", th: "การบริหารจัดการสถานที่วิจัย" },
        short: { en: "Coordinators handle consent, visits, CRFs, safety reports and monitoring.", th: "ผู้ประสานงานวิจัยดูแลการขอความยินยอม การนัดหมาย CRF การรายงานความปลอดภัย และการตรวจติดตาม" },
        text: { en: "Coordination between participants, investigators, ethics committees and sponsors: protocol review, site initiation, informed consent, source documents and CRFs, adverse event reporting, protocol deviations and monitoring visits, with a monitor room for sponsors.",
                th: "ประสานงานระหว่างอาสาสมัคร ผู้วิจัย คณะกรรมการจริยธรรม และผู้สนับสนุนการวิจัย ตั้งแต่การทบทวนโครงร่างวิจัย การเปิดสถานที่วิจัย การขอความยินยอม เอกสารต้นฉบับและแบบบันทึกข้อมูล (CRF) การรายงานเหตุการณ์ไม่พึงประสงค์ การเบี่ยงเบนจากโครงร่างวิจัย และการตรวจติดตาม พร้อมห้องสำหรับผู้ตรวจติดตามของผู้สนับสนุน" },
        photo: { src: "img/chairs.jpg", en: "Participant chairs", th: "เก้าอี้สำหรับอาสาสมัคร" } },
      { title: { en: "Investigator Matching", th: "การจับคู่ผู้วิจัย" },
        short: { en: "Experienced investigators matched to your protocol.", th: "ผู้วิจัยที่มีประสบการณ์ จับคู่ให้ตรงกับโครงร่างวิจัยของคุณ" },
        text: { en: "Experienced investigators from various departments who regularly run trials with us, matched to your protocol across a broad range of specialties, including investigator-initiated trials.",
                th: "ผู้วิจัยที่มีประสบการณ์จากหลายภาควิชาซึ่งทำวิจัยร่วมกับเราอย่างสม่ำเสมอ จับคู่ให้ตรงกับโครงร่างวิจัยของคุณในหลากหลายสาขา รวมถึงงานวิจัยที่ริเริ่มโดยผู้วิจัย" },
        photo: { src: "img/investigator.jpg", en: "Investigator examining a participant", th: "ผู้วิจัยตรวจร่างกายอาสาสมัคร" } }
    ]
  },

  facilities: {
    title: { en: "Our facilities", th: "สถานที่ของเรา" },
    items: [
      { en: "Clinical trial unit", th: "Clinical trial unit" },
      { en: "Investigational product inventory", th: "Investigational product inventory" },
      { en: "Clean room", th: "Clean room" },
      { en: "Laboratory", th: "Laboratory" },
      { en: "Document storage", th: "Document storage" },
      { en: "Monitor and meeting rooms", th: "Monitor and meeting rooms" }
    ],
    photos: [
      { src: "img/ctu-beds.jpg", en: "Clinical trial unit beds", th: "เตียงในหน่วยทดลองทางคลินิก" },
      { src: "img/clean-room.jpg", en: "Clean room", th: "ห้องเตรียมยาปราศจากเชื้อ" },
      { src: "img/records.jpg", en: "Records storage", th: "ห้องจัดเก็บเอกสารสำคัญ" }
    ]
  },

  values: {
    title: { en: "Our values · IC-SMART", th: "ค่านิยมของเรา · IC-SMART" },
    items: [
      { k: "I", en: "Integrity", th: "ความซื่อตรง" },
      { k: "C", en: "Cordial coordination", th: "การประสานงานด้วยไมตรี" },
      { k: "S", en: "Social responsibility", th: "ความรับผิดชอบต่อสังคม" },
      { k: "M", en: "Mastery", th: "ความเชี่ยวชาญ" },
      { k: "A", en: "Accountability", th: "ความรับผิดชอบต่อผลงาน" },
      { k: "R", en: "Relationship", th: "สัมพันธภาพที่ดี" },
      { k: "T", en: "Teamwork", th: "การทำงานเป็นทีม" }
    ]
  },

  work: {
    title: { en: "Work with ACRO KKU", th: "ร่วมงานกับ ACRO KKU" },
    sub: { en: "Partner with us on your next clinical trial in Thailand", th: "ร่วมเป็นพันธมิตรกับเราในการวิจัยทางคลินิกครั้งต่อไปของคุณในประเทศไทย" },
    start: { en: "Start a collaboration", th: "เริ่มต้นความร่วมมือ" },
    startUrl: "https://acro-kku-collaborate.pages.dev",
    site: { en: "Official website", th: "เว็บไซต์ทางการ" },
    mail: { en: "Email us", th: "ส่งอีเมล" }
  },

  labels: {
    address: { en: "Address", th: "ที่อยู่" },
    phone: { en: "Phone", th: "โทรศัพท์" },
    email: { en: "Email", th: "อีเมล" },
    details: { en: "Details", th: "รายละเอียด" }
  }
};
