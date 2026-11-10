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
     featured  true = tinted row with the orange button, always listed first
               (use for one portal at a time)
     url       where Open goes:
                 another site:        "https://acro-kku-crest.pages.dev"
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
    featured: false,
    url: "/crn-shortcourse/",
    tag:   { en: "Training", th: "การอบรม" },
    title: { en: "Clinical Research Nursing (CRN) short course", th: "หลักสูตรอบรมพยาบาลวิจัยทางคลินิก (CRN)" },
    text:  {
      en: "Study nurse training: 6 weeks online plus 10 weeks of onsite practice at leading clinical research centers. Free registration.",
      th: "อบรมพยาบาลวิจัย เรียนทฤษฎีออนไลน์ 6 สัปดาห์ และฝึกปฏิบัติ ณ ศูนย์วิจัยคลินิก 10 สัปดาห์ ฟรีค่าลงทะเบียน"
    }
  },

  /* ---- Example for later: copy this block, change the values, set status to "open" ----
  {
    id: "be-pool",
    status: "hidden",
    featured: false,
    url: "/be-pool/",
    tag:   { en: "Volunteers", th: "อาสาสมัคร" },
    title: { en: "Bioequivalence volunteer contact list", th: "รายชื่อติดต่ออาสาสมัครการศึกษาชีวสมมูล" },
    text:  {
      en: "Leave your contact if you would like to hear about future volunteer opportunities.",
      th: "ฝากข้อมูลติดต่อไว้ หากต้องการรับข่าวสารโอกาสเป็นอาสาสมัครในอนาคต"
    }
  },
  ----------------------------------------------------------------------------------- */
];
