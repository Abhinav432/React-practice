import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Abhinav. All rights reserved.</p>
        <p>Follow me on social media!</p>
        <div className="flex justify-around space-x-4 mt-2">
          <a href="#" className="text-blue-400 hover:text-blue-600">Twitter</a>
          <a href="#" className="text-blue-400 hover:text-blue-600">LinkedIn</a>
          <a href="#" className="text-blue-400 hover:text-blue-600">GitHub</a>
        </div>
      </div>
    </footer>
  );
}   

export default Footer;