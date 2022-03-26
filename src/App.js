
import './App.css';
import Shop from './Component/Card/Product/Shop/Shop';

function App() {
  return (
    <div className="App">
     <Shop/>

     <div className="card-info">
       <h2>How React Works</h2>
       <p> hreact js একটি Open-Source JavaScript Library. এর সাহায্যে Component তৈরি করা যায়। React Js এর মেইন ফিচার হলো Component. একটি Component একাধিক বার ব্যাবহার করা যায়। এতে করে দ্রুত পেজ লডিং হবে।</p>
       </div>
     <div className="card-info">
       <h2>How useState Works</h2>
       <p>useState হলো একটি হুক। যাতে কোনো উপাদান এর ভেরিয়েবল রাখতে পাড়ি। useState  হুক হলো একটি বিশেষ ফাংশন যা একটি আর্গুমেন্ট হিসাবে একটি ভেরিয়েবল এবং দুটি এন্টির মাধ্যমে এ্যারে প্রদান করে।</p>
       </div>
    </div>
    
  );
}

export default App;
