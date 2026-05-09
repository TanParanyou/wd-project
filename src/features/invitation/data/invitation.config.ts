import { InvitationConfig } from '../types/invitation.type';

export const invitationConfig: InvitationConfig = {
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
    { time: "09:00", title: "ขบวนแห่ขันหมาก" },
    { time: "10:00", title: "รับประทานอาหาร (โต๊ะจีน)" },
  ],

  dressCode: {
    title: "Dress Code",
    description: "Feel free to come as you are",
    tone: "Soft, easy tone",
  },

  map: {
    mainMapUrl: "https://maps.app.goo.gl/mm6vJ8hsceXEXpYJ6",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d473.7581256585301!2d100.82106528153126!3d13.805941159026531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e1!3m2!1sen!2sth!4v1778250869954!5m2!1sen!2sth",
    qrImage: "/images/location-qr.png",
  },

  routes: [
    {
      id: "suwinthawong-52",
      name: "ทางเข้าสุวินทวงศ์ 52",
      address: "สุวินทวงศ์ 52 Khwaeng Lam Phakchi, Khet Nong Chok, Krung Thep Maha Nakhon 10530",
      mapUrl: "https://maps.app.goo.gl/mm6vJ8hsceXEXpYJ6",
      streetViewUrl: "https://www.google.com/maps/embed?pb=!4v1778256557827!6m8!1m7!1s6i4sB-lC_RAs_ETK4DTcvg!2m2!1d13.80781543266652!2d100.8271728019249!3f187.80716!4f0!5f0.7820865974627469",
      description: "เหมาะสำหรับแขกที่เดินทางมาจากถนนสุวินทวงศ์",
      vehicleType: "car",
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
        {
          title: "Step 3: เลี้ยวตามจุดสังเกต",
          description: "ขับต่อไปอีกเล็กน้อย",
          image: "/images/routes/suwinthawong-52/step-3.jpg",
        },
        {
          title: "Step 4: ถึงหน้าบ้าน",
          description: "ยินดีต้อนรับ",
          image: "/images/routes/suwinthawong-52/step-4.jpg",
        },
      ],
    },
    {
      id: "wat-u-tapao",
      name: "ทางเข้าซอยวัดอู่ตะเภา",
      address: "ซอยวัดอู่ตะเภา Khwaeng Lam Phakchi, Khet Nong Chok, Krung Thep Maha Nakhon 10530",
      mapUrl: "https://maps.app.goo.gl/7yLufE9VzVE5c8HP8",
      streetViewUrl: "https://www.google.com/maps/embed?pb=!4v1778256657393!6m8!1m7!1saHdyPrnzhlKd4uk102XJfA!2m2!1d13.78691621231334!2d100.824727192873!3f276.15233402746!4f7.933776137354741!5f0.7820865974627469",
      description: "อีกหนึ่งทางเลือกสำหรับแขกที่สะดวกเข้าทางซอยวัดอู่ตะเภา",
      vehicleType: "car",
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
        {
          title: "Step 3: เลี้ยวตามจุดสังเกต",
          description: "ขับต่อไปอีกเล็กน้อย",
          image: "/images/routes/wat-u-tapao/step-3.jpg",
        },
        {
          title: "Step 4: ถึงหน้าบ้าน",
          description: "ยินดีต้อนรับ",
          image: "/images/routes/wat-u-tapao/step-4.jpg",
        },
      ],
    },
    {
      id: "suwinthawong-48-motorcycle",
      name: "ทางเข้าสุวินทวงศ์ 48 (มอเตอร์ไซค์เท่านั้น)",
      address: "Suwinthawong 48, Khwaeng Lam Phakchi, Khet Nong Chok, Krung Thep Maha Nakhon 10530",
      mapUrl: "https://maps.app.goo.gl/Wm7L8SK4mYPdWiya8",
      streetViewUrl: "https://www.google.com/maps/embed?pb=!4v1778295294208!6m8!1m7!1swrEpk31RyEWXzyWc1phveQ!2m2!1d13.80834611214116!2d100.8218975532223!3f228.61617621552034!4f1.8592926984361213!5f1.1924812503605782",
      description: "เฉพาะมอเตอร์ไซค์เท่านั้น - ทางลัดเข้าซอยสุวินทวงศ์ 48",
      vehicleType: "motorcycle",
      steps: [
        {
          title: "Step 1: เริ่มจากหน้าซอยสุวินทวงศ์ 48",
          description: "เปิดแผนที่มายังจุดหน้าซอยก่อน (เฉพาะมอเตอร์ไซค์)",
          image: "/images/routes/suwinthawong-48/step-1.jpg",
        },
        {
          title: "Step 2: เข้าซอยตรงมา",
          description: "ขับตรงเข้ามาตามทาง",
          image: "/images/routes/suwinthawong-48/step-2.jpg",
        },
        {
          title: "Step 3: ถึงหน้าบ้าน",
          description: "ยินดีต้อนรับ",
          image: "/images/routes/suwinthawong-48/step-3.jpg",
        },
      ],
    },
  ],

  contacts: [
    {
      name: "Tan",
      phone: "0998266076",
      lineUrl: "https://line.me/ti/p/RKAsilibae",
    },
    {
      name: "Nan",
      phone: "0823413712",
      lineUrl: "",
    },
  ],

  gallery: [
    {
      alt: "Invitation card",
      src: "/images/gallery/1.jpg",
    },
    {
      alt: "Our new house",
      src: "/images/gallery/2.jpg",
    },
    {
      alt: "Atmosphere",
      src: "/images/gallery/3.jpg",
    },
  ],

  rsvp: {
    enabled: false,
    label: "ยืนยันเข้าร่วมงาน",
    url: "",
  },

  donation: {
    enabled: true,
    title: "สำหรับแขกที่ไม่ได้มางาน",
    description: "หากไม่สะดวกมาร่วมงาน สามารถร่วมแสดงความยินดีได้ผ่านช่องทางนี้",
    accounts: [
      {
        bank: "พร้อมเพย์",
        accountNumber: "0998266076",
        accountName: "ภรัณยู เลิศทรัพย์ไพศาล",
        qrImage: "/images/donet/donation-qr.jpg",
      },
    ],
  },

  guestbook: {
    enabled: true,
    title: "Guestbook",
    description: "ฝากคำอวยพรให้เราหน่อยนะ",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdVbBSAWthZ91rMm8Z7idFGtih9RIZ4dt9v0dh84Xv5h3WE1Q/viewform",
    sheetId: "1IWiYbQtrLwbvRgsK4O12uOMDyhMFOTC2OhdvpcYtMQI",
  },

  parking: {
    enabled: false,
    title: "ที่จอดรถ",
    description: "จุดจอดรถบริเวณงาน",
    locations: [
      {
        id: "parking-1",
        name: "จุดจอดรถหลัก",
        description: "ที่จอดรถหลักบริเวณหน้าบ้าน",
        type: "both",
        capacity: "ประมาณ 10 คัน",
        distance: "0 เมตร (หน้าบ้าน)",
      },
    ],
  },
};
