function Footer(){
    return(
        <>
        <footer class="bg-gray-800 text-white py-8">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            
            <div class="space-y-4 mt-5">
              <h5 class="text-lg font-semibold">our pages</h5>
              <ul class="space-y-2 px-0 ulLinks">
                <li><a href="#" class="text-gray-400 hover:text-white">Furniture website</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white">Service</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white">Most Popular</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white">Modern Furniture</a></li>
              </ul>
            </div>
      
            
            <div class="space-y-4 mt-5">
              <h5 class="text-lg font-semibold">Categories</h5>
              <ul class="space-y-2 px-0 ulLinks">
                <li><a href="#" class="text-gray-400 hover:text-white">callous</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white">Bedrooms</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white">curtains</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white">Antica</a></li>
              </ul>
            </div>
      
            
            <div class="space-y-4 mt-5">
              <h5 class="text-lg font-semibold">My Profile</h5>
              <ul class="space-y-2 px-0 ulLinks">
                <li><a href="#" class="text-gray-400 hover:text-white">profile</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white">settings</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white">orders</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white">my cart</a></li>
              </ul>
            </div>
      
            
            <div class="space-y-4 px-0 ulLinks mt-5">
              <h5 class="text-lg font-semibold">contact us</h5>
              <div class="contactus space-y-2">
                <i class="bi bi-headset text-xl"></i>
                <p>For further inquiries, you can chat with us on social media platforms</p>
                <ul class="flex gap-4">
                  <li><a href="#" class="text-gray-400 hover:text-white"><i class="bi bi-facebook"></i></a></li>
                  <li><a href="#" class="text-gray-400 hover:text-white"><i class="bi bi-twitter"></i></a></li>
                  <li><a href="#" class="text-gray-400 hover:text-white"><i class="bi bi-youtube"></i></a></li>
                  <li><a href="#" class="text-gray-400 hover:text-white"><i class="bi bi-whatsapp"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
      
          
          <div class=" text-center  pt-6 mt-6 border-t border-gray-700">
            <p class="text-sm text-center text-gray-400 pb-0">All rights reserved to the site Furniture @ {<script>document.write(new Date().getFullYear());</script>}2025</p>
          </div>
    </div>
    </footer>
        </>
    )
}

export default Footer;