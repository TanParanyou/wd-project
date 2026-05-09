# Prompt: Invitation Landing Page — Nan & Tan

## เป้าหมาย

ช่วยออกแบบและพัฒนาเว็บไซต์ Invitation / Event Landing Page สำหรับงานทำบุญขึ้นบ้านใหม่และพิธีผูกข้อมือของ **Nan Wanlapa Puangtabtim** และ **Tan Paranyou Lertsuppaisan**

เว็บไซต์ต้องอิงเนื้อหาและ mood & tone จากภาพการ์ดเชิญที่แนบมา โดยให้ความรู้สึก:

- เรียบง่าย
- อบอุ่น
- เป็นกันเอง
- Handmade / doodle
- Paper texture
- Soft, easy tone
- ไม่รก
- อ่านง่าย
- เหมาะกับผู้ใหญ่ เพื่อน และแขกทั่วไป

---

## Tech Stack

ใช้เทคโนโลยีดังนี้:

- Next.js App Router
- TypeScript
- Tailwind CSS
- ข้อมูลทั้งหมดต้องแยกเป็น JSON หรือ TypeScript config
- รองรับ Responsive ทุกขนาดจอ
  - Mobile
  - Tablet
  - Desktop
- ห้าม hardcode ข้อมูลสำคัญไว้ใน component โดยตรง
- ต้องแยก component, data, type และ utility ให้ชัดเจน

---

## Design Direction

ให้อิงจากการ์ดเชิญที่แนบมา

### Mood & Tone

- พื้นหลังสีขาว / ครีมอ่อน
- มี texture คล้ายกระดาษ
- ใช้เส้นบาง สีดำ หรือเทาเข้ม
- ใช้ doodle line art เช่น
  - บ้าน
  - หัวใจ
  - ดาว
  - ดอกไม้
  - แมว
  - แหวน
  - เส้นขีดเขียนแบบ handmade
- ใช้ฟอนต์ผสมกันระหว่าง
  - Serif font
  - Handwritten style font
  - Thai font ที่อ่านง่าย
- Layout ต้องโปร่ง มี whitespace เยอะ
- ปุ่มต้องใหญ่และกดง่ายบนมือถือ
- หลีกเลี่ยง UI ที่ดูเป็นทางการเกินไป

---

## Interaction Style: Slide Down Website

ต้องการให้ประสบการณ์ใช้งานเว็บเป็นแบบ **เลื่อนลงทีละ section เหมือนสไลด์แนวตั้ง**

### Requirement

- เมื่อผู้ใช้ scroll ลงมา แต่ละ section ต้องค่อย ๆ ปรากฏขึ้น
- แต่ละ section มี animation แบบนุ่มนวล
- ให้ความรู้สึกเหมือนเปิดการ์ดเชิญทีละหน้า
- บน desktop สามารถออกแบบให้ section มีความสูงใกล้เคียง 1 หน้าจอได้
- บน mobile ให้เลื่อนลงแบบธรรมชาติ อ่านง่าย ไม่บังคับ snap จนใช้งานยาก
- ควรใช้ `scroll-snap` อย่างระมัดระวัง
  - Desktop: ใช้ `scroll-snap-y` ได้
  - Mobile: ใช้ smooth scroll ธรรมดาจะเหมาะกว่า

### Animation ที่ต้องการ

ใช้ animation แบบเบา ๆ เช่น:

- Fade in
- Slide up
- Slide down
- Scale เล็กน้อย
- Doodle ขยับเบา ๆ
- Card ลอยขึ้นเล็กน้อยเมื่อเข้าหน้าจอ
- Timeline item แสดงทีละรายการ
- Route step image แสดงแบบ stagger animation
- Button hover / tap มี transition นุ่ม ๆ

### Animation Guideline

- ห้ามใช้ animation หนักเกินไป
- ห้ามทำให้เว็บช้า
- ควรรองรับ `prefers-reduced-motion`
- ถ้าผู้ใช้ตั้งค่าลด motion ให้ปิด animation หรือทำให้น้อยที่สุด
- ใช้ duration ประมาณ 300–700ms
- ใช้ easing แบบนุ่ม เช่น `ease-out`, `cubic-bezier`
- อย่า animate ทุกอย่างพร้อมกันจนรก

### Library ที่แนะนำ

สามารถใช้ได้ 2 แนวทาง:

#### Option A: ใช้ Framer Motion

เหมาะถ้าต้องการ animation สวยและควบคุมง่าย

ใช้กับ:
- Section reveal
- Stagger children
- Route step cards
- Doodle floating
- Button tap animation

#### Option B: ใช้ CSS + Intersection Observer

เหมาะถ้าต้องการ dependency น้อย

ใช้กับ:
- Reveal section เมื่อ scroll ถึง
- Add class เช่น `is-visible`
- ใช้ Tailwind animation หรือ custom CSS

---

## Page Structure

เว็บไซต์ควรแบ่ง section ดังนี้:

```txt
1. Hero Section
2. Event Info Section
3. Schedule Section
4. Dress Code Section
5. Gallery / Image Section
6. Map Section
7. Choose Entrance Section
8. Route Step-by-Step Section
9. Contact / RSVP Section
10. Footer Section
```

---

## Section Requirement

### 1. Hero Section

แสดงข้อมูลหลักของงาน:

- Nan Wanlapa Puangtabtim
- Tan Paranyou Lertsuppaisan
- NAN & TAN
- May 23, 2026
- At Our New House
- ข้อความเชิญสั้น ๆ

แนวทาง UI:
- ให้เหมือนหน้าแรกของการ์ดเชิญ
- มี doodle บ้าน / หัวใจ / ดาว / แหวน
- มี animation ตอนเข้าเว็บ เช่น
  - ชื่อค่อย ๆ fade in
  - doodle ค่อย ๆ วาดหรือขยับเบา ๆ
  - ข้อความเลื่อนขึ้นเล็กน้อย

---

### 2. Event Info Section

แสดงรายละเอียดสถานที่:

```txt
6/12 หมู่ 3 ถนนสุวินทวงศ์ ซอยพึ่งพระธรรม
แขวงลำผักชี เขตหนองจอก
กรุงเทพมหานคร 10530
```

ควรมี:
- ปุ่มเปิด Google Maps
- QR Location
- ข้อความบอกว่ามีทางเข้าได้ 2 ทาง

ตัวอย่างข้อความ:

```txt
แนะนำให้เลือกเส้นทางก่อนออกเดินทาง เนื่องจากบ้านสามารถเข้าได้ 2 ทาง
เมื่อถึงหน้าซอยแล้ว สามารถดูภาพนำทางแบบทีละสเตปได้เลย
```

---

### 3. Schedule Section

แสดงลำดับงานแบบ Timeline:

```txt
07:00 พิธีสงฆ์ขึ้นบ้านใหม่
08:00 ถวายภัตตาหารเช้า
09:00 ขบวนแห่ขันหมาก + เข้าเฟรี
10:00 พิธีผูกข้อมือ
11:30 รับประทานอาหาร
```

Animation:
- Timeline item ค่อย ๆ แสดงทีละรายการ
- เวลาและชื่องานเลื่อนเข้ามาแบบเบา ๆ

---

### 4. Dress Code Section

แสดงข้อความ:

```txt
Dress Code: Feel free to come as you are
Soft, easy tone
```

แนวทาง UI:
- เป็น card เล็ก ๆ
- ใช้ doodle ดอกไม้ / ดาว
- อาจมี badge สีครีมอ่อน

---

### 5. Gallery / Image Section

ใช้สำหรับ:
- ภาพการ์ดเชิญ
- ภาพบ้าน
- ภาพบรรยากาศ
- ภาพประกอบ
- ภาพนำทาง

Requirement:
- รูปภาพทั้งหมดต้องมาจาก config
- รองรับเพิ่มรูปในอนาคต
- บน mobile แสดงเป็นแนวตั้งหรือ carousel
- บน desktop แสดงเป็น grid นุ่ม ๆ

---

### 6. Map Section

ต้องมี:
- Google Map iframe หรือ static map preview
- ปุ่มเปิด Google Maps
- QR Location
- ข้อความสั้น ๆ ว่า “กดเพื่อเปิดแผนที่”

---

### 7. Choose Entrance Section

เป็น feature สำคัญของเว็บ

ให้ผู้ใช้เลือกทางเข้าได้ 2 ทาง:

#### Route A

```txt
ชื่อ: ทางเข้าสุวินทวงศ์ 52
ที่อยู่: สุวินทวงศ์ 52 Khwaeng Lam Phakchi, Khet Nong Chok, Krung Thep Maha Nakhon 10530
ลิงก์เดินทางจากหน้าซอย:
https://maps.app.goo.gl/mm6vJ8hsceXEXpYJ6
```

#### Route B

```txt
ชื่อ: ทางเข้าซอยวัดอู่ตะเภา
ที่อยู่: ซอยวัดอู่ตะเภา Khwaeng Lam Phakchi, Khet Nong Chok, Krung Thep Maha Nakhon 10530
ลิงก์เดินทางจากหน้าซอย:
https://maps.app.goo.gl/7yLufE9VzVE5c8HP8
```

UI Requirement:
- แสดงเป็น card หรือปุ่มใหญ่ 2 ปุ่ม
- ปุ่มที่เลือกต้องมี active state ชัดเจน
- เมื่อเลือก route แล้ว ให้ slide down หรือ reveal รายละเอียดเส้นทางนั้น
- ไม่ควรเปลี่ยนหน้า
- ไม่ควร reload หน้า
- ใช้ state ภายใน component

Animation:
- เมื่อเลือก route ให้ content เปลี่ยนแบบ fade / slide
- Route card active มี transition
- Step card แสดงแบบ stagger

---

### 8. Route Step-by-Step Section

เมื่อเลือกทางเข้า ให้แสดงภาพนำทางเป็น step

แต่ละ step ต้องมี:
- รูปภาพ
- ลำดับ step
- หัวข้อ
- คำอธิบายสั้น ๆ

ตัวอย่าง:

```txt
Step 1: เริ่มจากหน้าซอย
Step 2: ขับตรงตามทาง
Step 3: เลี้ยวตามจุดสังเกต
Step 4: ถึงหน้าบ้าน
```

Responsive:
- Mobile: แสดงเป็น card แนวตั้ง
- Tablet: 2 columns
- Desktop: timeline หรือ 3 columns

---

### 9. Contact / RSVP Section

ควรมี:
- ปุ่มโทรหาเจ้าของงาน
- ปุ่ม LINE
- ปุ่มแชร์ลิงก์เว็บ
- ปุ่มยืนยันเข้าร่วมงาน ถ้ามี Google Form
- ข้อความสำหรับแขกที่หลงทาง

ตัวอย่างข้อความ:

```txt
หากหลงทาง สามารถติดต่อเราได้เลยนะคะ/ครับ
```

---

### 10. Footer Section

แสดง:
- ข้อความขอบคุณ
- Nan & Tan
- May 23, 2026
- doodle ปิดท้าย

ตัวอย่าง:

```txt
Thank you for being part of our special day
Nan & Tan
```

---

## Mobile UX Requirement

สำคัญมาก เพราะแขกส่วนใหญ่จะเปิดจากมือถือ

ต้องมี Sticky Quick Action ด้านล่าง:

```txt
[แผนที่] [ทางเข้า] [โทร]
```

Requirement:
- แสดงเฉพาะ mobile / tablet
- ปุ่มใหญ่ กดง่าย
- อยู่ด้านล่างแบบ fixed
- ไม่บังเนื้อหาสำคัญ
- กดแล้ว scroll ไปยัง section ที่เกี่ยวข้อง
- ปุ่มแผนที่เปิด map ได้
- ปุ่มโทรใช้ `tel:`

---

## Data Requirement

ข้อมูลทั้งหมดต้องแยกออกจาก UI component

แนะนำไฟล์:

```txt
src/features/invitation/data/invitation.config.ts
src/features/invitation/types/invitation.type.ts
```

ข้อมูลที่ต้องแก้ไขได้จาก config:

- ชื่อเจ้าของงาน
- ชื่องาน
- วันที่
- เวลา
- ที่อยู่
- schedule
- dress code
- map link
- QR image
- route
- route steps
- step images
- contact
- gallery
- RSVP link

---

## Example Config Structure

```ts
export const invitationConfig = {
  couple: {
    bride: {
      nickname: "Nan",
      fullName: "Wanlapa Puangtabtim",
    },
    groom: {
      nickname: "Tan",
      fullName: "Paranyou Lertsuppaisan",
    },
  },

  event: {
    title: "Nan & Tan",
    subtitle: "Housewarming Ceremony & Wrist-Tying Ceremony",
    date: "May 23, 2026",
    locationName: "At Our New House",
    address: {
      th: "6/12 หมู่ 3 ถนนสุวินทวงศ์ ซอยพึ่งพระธรรม แขวงลำผักชี เขตหนองจอก กรุงเทพมหานคร 10530",
      en: "6/12 Moo 3 Suwinthawong Road, Lam Phakchi, Nong Chok, Bangkok 10530",
    },
    intro: "ขอเรียนเชิญร่วมงานทำบุญขึ้นบ้านใหม่ และพิธีผูกข้อมือแบบอบอุ่นเป็นกันเอง",
  },

  schedule: [
    { time: "07:00", title: "พิธีสงฆ์ขึ้นบ้านใหม่" },
    { time: "08:00", title: "ถวายภัตตาหารเช้า" },
    { time: "09:00", title: "ขบวนแห่ขันหมาก + เข้าเฟรี" },
    { time: "10:00", title: "พิธีผูกข้อมือ" },
    { time: "11:30", title: "รับประทานอาหาร" },
  ],

  dressCode: {
    title: "Dress Code",
    description: "Feel free to come as you are",
    tone: "Soft, easy tone",
  },

  map: {
    mainMapUrl: "",
    embedUrl: "",
    qrImage: "/images/location-qr.png",
  },

  routes: [
    {
      id: "suwinthawong-52",
      name: "ทางเข้าสุวินทวงศ์ 52",
      address: "สุวินทวงศ์ 52 Khwaeng Lam Phakchi, Khet Nong Chok, Krung Thep Maha Nakhon 10530",
      mapUrl: "https://maps.app.goo.gl/mm6vJ8hsceXEXpYJ6",
      description: "เหมาะสำหรับแขกที่เดินทางมาจากถนนสุวินทวงศ์",
      steps: [
        {
          title: "Step 1: เริ่มจากหน้าซอยสุวินทวงศ์ 52",
          description: "เปิดแผนที่มายังจุดหน้าซอยก่อน",
          image: "/images/routes/suwinthawong-52/step-1.jpg",
        },
        {
          title: "Step 2: ขับตรงเข้ามาตามทาง",
          description: "สังเกตจุดเลี้ยวตามภาพ",
          image: "/images/routes/suwinthawong-52/step-2.jpg",
        },
      ],
    },
    {
      id: "wat-u-tapao",
      name: "ทางเข้าซอยวัดอู่ตะเภา",
      address: "ซอยวัดอู่ตะเภา Khwaeng Lam Phakchi, Khet Nong Chok, Krung Thep Maha Nakhon 10530",
      mapUrl: "https://maps.app.goo.gl/7yLufE9VzVE5c8HP8",
      description: "อีกหนึ่งทางเลือกสำหรับแขกที่สะดวกเข้าทางซอยวัดอู่ตะเภา",
      steps: [
        {
          title: "Step 1: เริ่มจากหน้าซอยวัดอู่ตะเภา",
          description: "เปิดแผนที่มายังจุดหน้าซอยก่อน",
          image: "/images/routes/wat-u-tapao/step-1.jpg",
        },
        {
          title: "Step 2: ขับตรงเข้ามาตามทาง",
          description: "สังเกตจุดเลี้ยวตามภาพ",
          image: "/images/routes/wat-u-tapao/step-2.jpg",
        },
      ],
    },
  ],

  contacts: [
    {
      name: "Tan",
      phone: "",
      lineUrl: "",
    },
    {
      name: "Nan",
      phone: "",
      lineUrl: "",
    },
  ],

  gallery: [
    {
      alt: "Invitation card",
      src: "/images/invitation-card.jpg",
    },
  ],

  rsvp: {
    enabled: false,
    label: "ยืนยันเข้าร่วมงาน",
    url: "",
  },
};
```

---

## Recommended Folder Structure

```txt
src/
  app/
    page.tsx
    layout.tsx
    globals.css

  features/
    invitation/
      components/
        HeroSection.tsx
        EventInfoSection.tsx
        ScheduleSection.tsx
        DressCodeSection.tsx
        GallerySection.tsx
        MapSection.tsx
        RouteSelectorSection.tsx
        RouteStepTimeline.tsx
        ContactSection.tsx
        FooterSection.tsx
        MobileQuickActions.tsx
        AnimatedSection.tsx

      data/
        invitation.config.ts

      types/
        invitation.type.ts

      utils/
        openMap.ts
        scrollToSection.ts
        shareInvitation.ts

      index.ts
```

---

## Animation Component Requirement

ควรสร้าง component กลางสำหรับ animation เช่น:

```txt
AnimatedSection.tsx
```

หน้าที่:
- รับ children
- ทำ reveal เมื่อ scroll ถึง
- รองรับ delay
- รองรับ animation type เช่น fade-up, fade-down, scale, slide-left
- รองรับ prefers-reduced-motion

ตัวอย่างการใช้งาน:

```tsx
<AnimatedSection id="schedule" animation="fade-up" delay={0.1}>
  <ScheduleSection />
</AnimatedSection>
```

---

## Expected Deliverables

ให้ AI สร้างงานตามลำดับนี้:

1. เสนอ folder structure
2. สร้าง type/interface สำหรับ invitation config
3. สร้าง `invitation.config.ts`
4. สร้าง `AnimatedSection`
5. สร้าง component หลักทุก section
6. สร้าง route selector พร้อม state
7. สร้าง route step-by-step พร้อม animation
8. สร้าง sticky mobile quick actions
9. สร้างหน้า `/` หรือ `/invitation`
10. ทำ responsive ให้ครบ
11. อธิบายวิธีเพิ่มรูปนำทางแต่ละ route ใน config

---

## Prompt สั้นสำหรับสั่ง AI เริ่มทำจริง

```md
อ่าน requirement ทั้งหมด แล้วช่วยสร้างเว็บ Invitation Landing Page ด้วย Next.js App Router + TypeScript + Tailwind CSS

เงื่อนไขสำคัญ:
- ข้อมูลทั้งหมดต้องมาจาก config
- ห้าม hardcode ข้อมูลใน component
- UI ต้องอิง mood & tone จากการ์ด: minimal, handmade, doodle, paper texture, soft tone
- การใช้งานเว็บให้เป็นแบบ slide ลงมาเหมือนเปิดการ์ดทีละหน้า
- ทุก section ต้องมี animation แบบนุ่มนวลเมื่อ scroll ถึง
- Route selector ต้องเลือกทางเข้าได้ 2 ทาง และแสดงภาพนำทางแบบ step-by-step
- รองรับ responsive ทุกขนาดจอ
- มี sticky quick action บนมือถือ
- รองรับ prefers-reduced-motion
- แยก component, type, config และ utility ให้ชัดเจน

เริ่มจากสร้าง folder structure, type, config และ component หลักทั้งหมด
```

---

## สิ่งที่ต้องเตรียมเพิ่มก่อนพัฒนา Final

```txt
1. รูปภาพนำทางของทางเข้าสุวินทวงศ์ 52
2. รูปภาพนำทางของทางเข้าซอยวัดอู่ตะเภา
3. QR Location แบบชัด
4. Google Map embed URL ของบ้าน
5. เบอร์โทร / LINE สำหรับติดต่อ
6. ลิงก์ RSVP ถ้าต้องการให้แขกยืนยันเข้าร่วมงาน
7. รูปภาพบ้านหรือรูปประกอบเพิ่มเติม
```
