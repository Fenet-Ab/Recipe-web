import { facebook, linkedin, telegramIcon} from "@/assets/asset"



const Footer = () => {
  return (
    <div><footer className="bg-gray-900 text-gray-800 mt-40 text-white">
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row justify-between">
        {/* About Section */}
        <div className='flex '>
      
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-semibold mb-2 ">About Us</h2>
          <p className="text-l  w-1/2">
            We share delicious and easy-to-follow recipes to bring joy to your kitchen. Whether you're a beginner or a pro, there's something here for you!
          </p>
        </div>
        </div>
  
      
  
        {/* Contact & Social */}
        <div className='w-1/2'>
          <h2 className="text-xl font-semibold mb-2">Stay Connected</h2>
          <p className="text-sm mb-2">Email: abilufenet@gmail.com</p>
          <div className="flex space-x-3">
            <a href="#"><img src={facebook} alt="Facebook" className="w-8 h-8 border-2 border-white rounded-full hover:scale-110 transition-all duration-300" /></a>
            <a href="#"><img src={telegramIcon} alt="Instagram" className="w-8 h-8 border-2 border-white rounded-full hover:scale-110 transition-all duration-300" /></a>
            <a href="#"><img src={linkedin} alt="Twitter" className="w-8 h-8 border-2 border-white rounded-full hover:scale-110 transition-all duration-300" /></a>
          </div>
        </div>
      </div>
  
      {/* Bottom */}
      <div className="border-t border-gray-300 mt-6 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} RecipeHub. All rights reserved.
      </div>
    </div>
  </footer>
  </div>
  )
}

export default Footer