# 🌏 Tourist Attraction - เที่ยวไหนดี

แอปพลิเคชันค้นหาสถานที่ท่องเที่ยวในประเทศไทย พร้อมระบบค้นหาด้วยคำสำคัญและแท็ก

A tourist attraction search application that helps users discover travel destinations in Thailand with keyword and tag-based search functionality.

![Tourist Attraction App](https://img.shields.io/badge/React-19.1.1-blue) ![Express](https://img.shields.io/badge/Express-4.17.3-green) ![Tailwind](https://img.shields.io/badge/Tailwind-4.1.14-blue)

## ✨ คุณสมบัติ / Features

- 🔍 **ค้นหาสถานที่ท่องเที่ยว** - ค้นหาจากชื่อ คำอธิบาย และแท็ก
- 🏷️ **กรองด้วยแท็ก** - คลิกที่แท็กเพื่อเพิ่มในการค้นหา
- 🖼️ **แสดงรูปภาพ** - รูปภาพหลักและรูปเสริม 3 รูป
- 🔗 **แชร์ลิงก์** - คัดลอกลิงก์สถานที่ท่องเที่ยวได้ง่าย
- ⚡ **Real-time Search** - ค้นหาแบบเรียลไทม์ไม่ต้องกดปุ่มค้นหา

## 🛠 เทคโนโลยี / Tech Stack

### Frontend
- **React 19.1.1** - JavaScript library สำหรับสร้าง UI
- **Vite 7.1.7** - Build tool และ development server
- **Tailwind CSS 4.1.14** - Utility-first CSS framework
- **Axios 1.12.2** - HTTP client สำหรับเรียก API

### Backend
- **Express.js 4.17.3** - Web framework สำหรับ Node.js
- **CORS** - เปิดใช้งาน Cross-Origin Resource Sharing
- **Body Parser** - Parse request body
- **Nodemon** - Auto-restart server เมื่อมีการแก้ไขโค้ด

## 📦 การติดตั้ง / Installation

### ความต้องการของระบบ / Prerequisites

- Node.js (version 14 หรือสูงกว่า)
- npm หรือ yarn

### ขั้นตอนการติดตั้ง / Setup Steps

1. **Clone โปรเจค / Clone the repository**
```bash
git clone <repository-url>
cd tourist-attraction
```

2. **ติดตั้ง dependencies สำหรับ Server**
```bash
cd server
npm install
```

3. **ติดตั้ง dependencies สำหรับ Client**
```bash
cd ../client
npm install
```

## 🚀 การใช้งาน / Usage

### เริ่มต้น Server (Backend)

```bash
cd server
npm start
```

Server จะทำงานที่: `http://localhost:4001`

### เริ่มต้น Client (Frontend)

```bash
cd client
npm run dev
```

Client จะทำงานที่: `http://localhost:5173` (หรือ port อื่นที่ Vite กำหนดให้)

### สคริปต์อื่นๆ / Other Scripts

**Client:**
```bash
npm run build      # สร้าง production build
npm run preview    # ดู production build ในเครื่อง
npm run lint       # ตรวจสอบโค้ดด้วย ESLint
```

**Server:**
```bash
npm start          # เริ่มต้น server ด้วย nodemon
```

## 📁 โครงสร้างโปรเจค / Project Structure

```
tourist-attraction/
├── client/                    # Frontend React application
│   ├── src/
│   │   ├── components/
│   │   │   └── TravelSearch.jsx    # หน้าค้นหาและแสดงสถานที่ท่องเที่ยว
│   │   ├── App.jsx                 # Main App component
│   │   ├── main.jsx                # Entry point
│   │   └── index.css               # Global styles
│   ├── public/                     # Static files
│   ├── package.json
│   └── vite.config.js
│
└── server/                    # Backend Express server
    ├── app.js                 # Express application และ API routes
    ├── db.js                  # ข้อมูลสถานที่ท่องเที่ยว (mock database)
    └── package.json
```

## 🔌 API Endpoints

### `GET /trips`

ค้นหาสถานที่ท่องเที่ยวด้วยคำสำคัญ

**Query Parameters:**
- `keywords` (required) - คำสำคัญในการค้นหา (คั่นด้วยช่องว่างสำหรับหลายคำ)

**ตัวอย่างการใช้งาน:**
```bash
GET http://localhost:4001/trips?keywords=เกาะ ทะเล
```

**Response:**
```json
{
  "data": [
    {
      "eid": "1",
      "title": "คู่มือเที่ยวเกาะช้าง...",
      "description": "วันว่างนี้ไปเที่ยวเกาะช้างกัน...",
      "url": "https://www.wongnai.com/trips/...",
      "photos": ["url1", "url2", "url3", "url4"],
      "tags": ["เกาะ", "ทะเล", "จุดชมวิว", "ธรรมชาติ", "ตราด"]
    }
  ]
}
```

## 🎯 การทำงานของระบบ / How It Works

1. **การค้นหา** - ผู้ใช้พิมพ์คำค้นหาในช่องค้นหา
2. **Real-time API Call** - ระบบจะเรียก API ทุกครั้งที่มีการเปลี่ยนแปลงคำค้นหา
3. **การกรองข้อมูล** - Backend จะค้นหาจาก title, description และ tags
4. **แสดงผล** - แสดงผลลัพธ์พร้อมรูปภาพและข้อมูล
5. **การคลิกแท็ก** - คลิกที่แท็กใดๆ จะเพิ่มแท็กนั้นในคำค้นหา

## 🎨 UI/UX Features

- ✅ Modern และสะอาดตา
- ✅ Loading states และ error handling
- ✅ Smooth transitions และ hover effects
- ✅ Copy to clipboard สำหรับแชร์ลิงก์

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
