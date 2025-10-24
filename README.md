# 🌏 Tourist Attraction - "Where to Travel in Thailand"

A web app for discovering travel destinations across Thailand with keyword and tag-based search.

![Screenshot 2025-10-22 125220](https://github.com/user-attachments/assets/157cdba0-69a1-49f0-9ddb-2b4aff89387e)

---

## Deployed Website

You can check the project at: https://tourist-attraction-amber.vercel.app/

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
