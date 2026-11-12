/* =====================================================================
   ACRO KKU Go: portal list
   ---------------------------------------------------------------------
   This is the file you edit to add, hide or reorder portals.
   Each portal is one block { ... } in the list below.

   Fields:
     id        a short private name, lowercase letters, numbers, hyphens
     status    "open"   shown and clickable
               "soon"   shown greyed out with a Coming soon button
               "hidden" not shown (keep the block here for later)
     posted    the date the portal was posted, as "YYYY-MM-DD", for example "2026-11-11".
               The list is sorted by this date, newest first, and the date is shown on the card.
               The newest one gets a "Latest" badge.
     featured  true = dark branded card, and the big white button in the green header
               opens this portal (use for one portal at a time)
     url       where Open goes:
                 another site:        "https://acro-kku-collaborate.pages.dev"
                 page inside the site: "/be-pool/"
     tag       small label above the title, { en: "...", th: "..." }  (optional)
     title     { en: "...", th: "..." }
     text      one or two short sentences, { en: "...", th: "..." }

   Typing rules:
     - Use straight quotes " only, never curly quotes.
     - Keep the commas. Each block ends with  },
     - Do not delete the first line or the last line  ];
     - Save the file as UTF-8 so Thai letters display correctly.
   ===================================================================== */

window.ACRO_PORTALS = [
  {
    id: "collaboration",
    status: "open",
    posted: "2026-11-08",
    featured: true,
    url: "https://acro-kku-collaborate.pages.dev",
    tag:   { en: "CREST 2026", th: "CREST 2026" },
    title: { en: "Collaborate with ACRO KKU", th: "ร่วมงานกับ ACRO KKU" },
    text:  {
      en: "Sponsors, CROs and investigators: leave your contact and areas of interest, and our team will get back to you.",
      th: "สำหรับผู้สนับสนุนการวิจัย CRO และนักวิจัย ฝากข้อมูลติดต่อและความสนใจไว้ แล้วทีมงานจะติดต่อกลับ"
    }
  },

  {
    id: "crn-shortcourse",
    status: "open",
    posted: "2026-11-10",
    featured: false,
    url: "/crn-shortcourse/",
    tag:   { en: "Training", th: "การอบรม" },
    title: { en: "Clinical Research Nursing (CRN) short course", th: "หลักสูตรอบรมพยาบาลวิจัยทางคลินิก (CRN)" },
    text:  {
      en: "Study nurse training: 6 weeks online plus 10 weeks of onsite practice at leading clinical research centers. Free registration.",
      th: "อบรมพยาบาลวิจัย เรียนทฤษฎีออนไลน์ 6 สัปดาห์ และฝึกปฏิบัติ ณ ศูนย์วิจัยคลินิก 10 สัปดาห์ ฟรีค่าลงทะเบียน"
    }
  },

  {
    id: "be-pool",
    status: "open",
    posted: "2026-11-11",
    featured: false,
    url: "/be-pool/",
    tag:   { en: "Volunteers", th: "อาสาสมัคร" },
    title: { en: "Bioequivalence volunteer registry", th: "คลังอาสาสมัครการศึกษาชีวสมมูล" },
    text:  {
      en: "Healthy volunteers: register your interest to hear about future bioequivalence studies. Interest only, no obligation.",
      th: "สำหรับอาสาสมัครสุขภาพดี ลงทะเบียนแสดงความสนใจเพื่อรับข่าวสารการศึกษาชีวสมมูลในอนาคต ไม่มีข้อผูกมัด"
    }
  },

  /* ---- Example for later: copy this block, change the values, set status to "open" ----
  {
    id: "next-portal",
    status: "hidden",
    posted: "2026-12-01",
    featured: false,
    url: "/next-portal/",
    tag:   { en: "Label", th: "ป้ายกำกับ" },
    title: { en: "Portal title", th: "ชื่อพอร์ทัล" },
    text:  {
      en: "One or two short sentences.",
      th: "ข้อความสั้น ๆ หนึ่งถึงสองประโยค"
    }
  },
  ----------------------------------------------------------------------------------- */
];
