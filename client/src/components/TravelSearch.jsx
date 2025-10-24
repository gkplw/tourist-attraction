import { useState, useEffect } from "react";
import axios from "axios";

function TravelSearch() {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  async function getData() {
    try {
      const response = await axios.get(
        `https://tourist-attraction-7tro.vercel.app/trips?keywords=${text}`
      );
      setData(response.data.data);
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage("ไม่สามารถโหลดข้อมูลได้ กรุณาลองใหม่อีกครั้ง");
    }
  }

  useEffect(() => {
    getData();
  }, [text]);

  function handleClick(tag) {
    const currentTags = text.split(" ").filter(Boolean);
    if (!currentTags.includes(tag)) {
      setText([...currentTags, tag].join(" "));
    }
  }

    return (
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Header */}
        <h1 className="text-4xl font-bold text-sky-500 text-center mb-6">เที่ยวไหนดี</h1>
  
        {/* Search */}
        <div className="text-center mb-8">
          <p className="text-gray-600 mb-2">ค้นหาที่เที่ยว</p>
          <input
            type="text"
            placeholder="หาที่เที่ยวแล้วไปกัน ..."
            value={text}
            onChange={(event) => setText(event.target.value)}
            className="border-b border-gray-300 focus:outline-none focus:border-sky-500 w-200 text-center py-2 text-gray-700"
          />
        </div>
  
        {/* Error message */}
        {errorMessage ? (
          <div className="text-center text-red-500 space-y-4">
            <p>{errorMessage}</p>
            <button
              onClick={getData}
              className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg shadow"
            >
              ลองใหม่
            </button>
          </div>
        ) : (
          <div className="space-y-10">
            {data.map((item) => (
              <div
                key={item.eid}
                className="relative flex flex-col md:flex-row overflow-hidden"
              >
                {/* main image */}
                <img
                  src={item.photos[0]}
                  alt={item.title}
                  className="w-full md:w-1/3 h-64 object-cover rounded-xl"
                />
  
                {/* content */}
                <div className="flex-1 px-6 py-4 flex flex-col justify-between">
                  <div>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-sky-600"
                    >
                      <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
                    </a>
                    <p className="text-gray-600 text-sm mb-2 truncate">
                      {item.description.length > 90
                        ? item.description.slice(0, 90) + " ..."
                        : item.description}
                    </p>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-500 underline hover:text-sky-600 text-sm"
                    >
                      อ่านต่อ
                    </a>
                  </div>
  
                  {/* tags */}
                  <div className=" text-sm text-gray-600">
                    <span className="font-medium">หมวด </span>
                    {item.tags.map((tag, i) => (
                      <span key={i}>
                        <button
                          onClick={() => handleClick(tag)}
                          className="text-gray-600 underline hover:text-sky-600 text-sm"
                        >
                          {tag}
                        </button>
                        {i < item.tags.length - 2 && ' '}
                        {i === item.tags.length - 2 && ' และ '}
                      </span>
                    ))}
                  </div>
  
                  {/* sub images */}
                  <div className="flex space-x-4 mt-2">
                    {item.photos.slice(1, 4).map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt="sub"
                        className="w-25 h-22 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                </div>
  
                {/* link icon */}
                <div className="absolute bottom-3 right-10">
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(item.url);
                      alert('คัดลอกลิงก์เรียบร้อย');
                    }}
                    className="border-2 border-sky-500 hover:border-sky-600 rounded-full text-2xl p-1"
                  >
                    🔗
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
  
export default TravelSearch;
