# 🌏 Tourist Attraction - "Where to Travel in Thailand"

A web app for discovering travel destinations across Thailand with keyword and tag-based search.

---

## ✨ Features

- 🔍 **Smart Search** – Find attractions by name, description, or tags  
- 🏷️ **Tag Filters** – Click any tag to refine search results  
- 🖼️ **Gallery Display** – One main image + 3 sub-images  
- 🔗 **Easy Sharing** – Copy attraction links directly  
- ⚡ **Real-time Results** – Instant updates while typing  

---

## 🛠 Tech Stack

### Frontend
- **React 19.1.1** – UI library  
- **Vite 7.1.7** – Build tool & dev server  
- **Tailwind CSS 4.1.14** – Utility-first styling  
- **Axios 1.12.2** – HTTP client  

### Backend
- **Express.js 4.17.3** – Node.js web framework  
- **CORS** – Cross-Origin support  
- **Body Parser** – Handle JSON requests  
- **Nodemon** – Auto-restart on code change  

---

## 📦 Installation

### Prerequisites
- Node.js 14+  
- npm or yarn  

### Setup

```bash
# Clone the project
git clone <repository-url>
cd tourist-attraction

# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install


## 🚀 Usage

### Start Backend

```bash
cd server
npm start
```

Server runs at: http://localhost:4001

### Start Frontend

```bash
cd client
npm run dev
```

Frontend runs at: http://localhost:5173


## 📁 Project Structure

```
tourist-attraction/
├── client/                    
│   ├── src/
│   │   ├── components/
│   │   │   └── TravelSearch.jsx    
│   │   ├── App.jsx                
│   │   ├── main.jsx          
│   │   └── index.css       
│   ├── public/               
│   ├── package.json
│   └── vite.config.js
│
└── server/                 
    ├── app.js                
    ├── db.js                  
    └── package.json
```

## 🔌 API Endpoints

### `GET /trips`

Search for attractions by keyword.

**Query Parameters:**
- keywords – space-separated search terms

**Example:**
```bash
GET http://localhost:4001/trips?keywords=เกาะ
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

## 🎯 How It Works

1. User types in a keyword
2. API fetches results in real-time
3. Backend filters data by title, description, and tags
4. UI displays results with images and tags
5. Clicking a tag adds it to the search query

## 🎨 UI/UX Features

- ✅ Clean & modern interface
- ✅ Loading and error states
- ✅ Smooth transitions & hover effects
- ✅ Copy-to-clipboard sharing

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
