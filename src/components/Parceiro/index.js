import circle from "../../assets/gif/circle.gif";
import example from "../../assets/svg/bicycle.svg";

const Index = () => {
    return (
        <>
            <div className="w-full h-[230px] mt-[80px] bg-black bg-efi fixed z-40"></div>
            <div className="w-full flex justify-center">
                <div className="mt-[350px]">
                    <div className="text-[40px] font-light text-[#134780] border-b border-[#13488041]">Who is EFI</div>
                </div>
            </div>
            <div className="w-full flex justify-center">
                <div className="mt-[60px]">
                    <div className="text-[18px] font-light text-center leading-loose">All at EFI are relentlessly focused on just one thing: the growth and success of your print business. <br />That’s why tens of millions of print professionals worldwide turn to EFI to fuel their success.</div>
                </div>
            </div>
            <div className="w-full flex justify-center mt-[60px]">
                <div class="max-w-sm rounded overflow-hidden shadow-[0_35px_50px_-15px_rgba(0,0,0,0.2)] mr-10">
                    <img className="w-full svg svg-elem-1 active" src={circle} alt="Sunset in the mountains" />
                    <div className="w-[100px] h-[100px] relative bottom-[250px] left-[140px]">
                        <img className="w-full svg svg-elem-1 active" src={example} alt="Sunset in the mountains" />
                    </div>
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                        <p class="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div>
                </div>

                <div class="max-w-sm rounded overflow-hidden shadow-[0_35px_50px_-15px_rgba(0,0,0,0.2)] mr-10">
                    <img className="w-full svg svg-elem-1 active" src={circle} alt="Sunset in the mountains" />
                    <div className="w-[100px] h-[100px] bg-black relative bottom-[240px] left-[100px]"></div>
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                        <p class="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div>
                </div>

                <div class="max-w-sm rounded overflow-hidden shadow-[0_35px_50px_-15px_rgba(0,0,0,0.2)]">
                    <img className="w-full svg svg-elem-1 active" src={circle} alt="Sunset in the mountains" />
                    <div className="w-[100px] h-[100px] bg-black relative bottom-[240px] left-[100px]"></div>
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                        <p class="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div>
                </div>
            </div>
            <div className="w-full h-[500px]"></div>
        </>
    )
}
export default Index;